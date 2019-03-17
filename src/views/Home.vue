<template>
    <v-layout row wrap>

      <v-flex pa-1 xs12 sm6  md3  v-for="(item,index) of items" :key="index" align-self-center>
      <show-item :item="item" ></show-item>
    </v-flex>
    </v-layout>
</template>

<script>
// @ is an alias to /src
import item from '../components/item'
export default {
  name: 'home',
  components:{
    'show-item':item
  },
  data(){
    return {
      items:[
        {name:'Name0',descr:'lorem',price:'100'},
        {name:'Name1',descr:'lorem',price:'100'},
        {name:'Name2',descr:'lorem',price:'100'},
        {name:'Name3',descr:'lorem',price:'100'},
        {name:'Name4',descr:'lorem',price:'100'},
        {name:'Name5',descr:'lorem',price:'100'},
        {name:'Name6',descr:'lorem',price:'100'},
        {name:'Name7',descr:'lorem',price:'100'},
        {name:'Name8',descr:'lorem',price:'100'},
        {name:'Name9',descr:'lorem',price:'100'},
      ]
    }
  }
}
</script>
