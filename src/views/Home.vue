<template>
    <v-app>
    <h1 style="text-align:center">Welcome to our site!</h1>
    <v-select
            :items="categories"
            v-model="current_cat"
            item-text="title"
            item-value="_id"
            label="Categories"
            @input="updatePag"
    ></v-select>
      <v-layout row wrap>
        <v-flex pa-1 xs12 sm6  md3  v-for="(item,index) of items" :key="index" align-self-center>
          <show-item :item="item" :showRentButton="$store.state.auth && $store.state.user.role_id !== 0" @rentItem="rent"></show-item>

        </v-flex>
      </v-layout>
        <div class="text-xs-center">
            <v-pagination
                    v-model="paginator.current_page"
                    :length="paginator.total_pages"
                    @input="updateItemsByCat(paginator.current_page,current_cat)"
            ></v-pagination>
        </div>
        <dialog-rent-item
                ref="dialogRentItem"
                v-model="dialogRent"
                @closeRentDialog="dialogRent=false"
        ></dialog-rent-item>
    </v-app>
</template>

<script>
// @ is an alias to /src
import item from '../components/items/item'
import itemRentDialog from '../components/items/rentItemDialog'
import axios from 'axios'
export default {
  name: 'home',
  components:{
    'show-item':item,
      'dialog-rent-item':itemRentDialog
  },
  data(){
    return {
      items:[
        {title:'Name0',description:'lorem',price:'100',duration:0,user_id:0},
      ],
      categories:[],
        dialogRent:false,
        paginator:{
            total: 7992,
            per_page: 15,
            current_page: 1,
            total_pages: 533
        },
      current_cat:0
    }
  },
  methods:{
    updateItems(){
      let t = this
      axios.get(this.$store.state.url + 'items')
              .then((resp)=>{
                console.log(resp)
                t.items = Object.assign({},resp.data.data.list.filter((item)=>item.user_id !== t.$store.state.user['_id']))
                  t.paginator = resp.data.data.paginator
              })
    },
    updateItemsByCat(page,id){
        console.log('page:',page,';id:',id,'category_id:',this.current_cat)
      let config = {
        headers:{
          'Authorization':  this.$localStorage.get('token')
        }
      }
      axios.get(this.$store.state.url + 'subcategories/'+this.current_cat+'/items?page='+page)
              .then((resp)=>{
                console.log(resp)
                this.items = Object.assign({},resp.data.data.list.filter((item)=>item.user_id !== this.$store.state.user))
                  this.paginator = resp.data.data.paginator
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
      updatePag(e){
          this.updateItemsByCat(1,e)
      },
      rent(item){
        this.$refs.dialogRentItem.item = item
          this.dialogRent = !this.dialogRent
          console.log(item)
      }
  },
  created() {
    console.log(this.$store.state.user)
    this.updateCategories()
      this.updateItemsByCat(this.paginator.current_page,0)
  }

}
</script>
