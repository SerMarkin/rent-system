<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <show-item :item="items[0]"></show-item>
  </div>
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
