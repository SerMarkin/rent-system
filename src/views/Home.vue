<template>
    <v-app>
    <h1 style="text-align:center">Welcome to our site!</h1>
    <v-select
            :items="categories"
            v-model="current_cat"
            item-text="title"
            item-value="id"
            label="Categories"
            @input="updateItemsByCat"
    ></v-select>
      <v-layout row wrap>
        <v-flex pa-1 xs12 sm6  md3  v-for="(item,index) of items" :key="index" align-self-center>
          <show-item :item="item" :showButton="$store.state.auth"></show-item>
        </v-flex>
      </v-layout>
    </v-app>
</template>

<script>
// @ is an alias to /src
import item from '../components/items/item'
import axios from 'axios'
export default {
  name: 'home',
  components:{
    'show-item':item
  },
  data(){
    return {
      items:[
        {title:'Name0',description:'lorem',price:'100',duration:0,user_id:0},
      ],
      categories:{},
      current_cat:undefined
    }
  },
  methods:{
    updateItems(){
      let t = this
      axios.get(this.$store.state.url + 'items')
              .then((resp)=>{
                console.log(resp)
                t.items = Object.assign({},resp.data.data.filter((item)=>item.user_id !== t.$store.state.user.id))
              })
    },
    updateItemsByCat(){
      let config = {
        headers:{
          'Authorization':  this.$localStorage.get('token')
        }
      }
      axios.get(this.$store.state.url + 'subcategories/'+this.current_cat+'/items')
              .then((resp)=>{
                console.log(resp)
                this.items = Object.assign({},resp.data.data.filter((item)=>item.user_id !== this.$store.state.user.id))
              })

    },
    updateCategories(){
      let t = this
      let config = {
        headers:{
          'Authorization':  t.$localStorage.get('token')
        }
      }
      let url = this.$store.state.url + 'subcategories'
      axios.get(url,config)
              .then((resp)=>{
                t.categories = resp.data.data
                console.log(t.categories)
              })
    },
  },
  created() {
    console.log(this.$store.state.user)
    this.updateItems()
    this.updateCategories()
  }

}
</script>
