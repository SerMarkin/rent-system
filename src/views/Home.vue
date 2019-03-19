<template>
  <div>
    <h1 style="text-align:center">Добро пожаловать на наш сайт!</h1>
      <v-layout row wrap>
        <v-flex pa-1 xs12 sm6  md3  v-for="(item,index) of items" :key="index" align-self-center>
          <show-item :item="item" :showButton="true"></show-item>
        </v-flex>
      </v-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import item from '../components/item'
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
      ]
    }
  },
  methods:{
    updateItems(){
      let t = this
      axios.get(this.$store.state.url + 'items')
              .then((resp)=>{
                t.items = resp.data
              })
    }
  },
  created() {
    this.updateItems()
  }

}
</script>
