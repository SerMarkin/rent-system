<template>
  <div id="app">
    <headerz></headerz>
    <router-view class="router_page"/>
    <footerz></footerz>
  </div>
</template>


<script>
import header from './views/header'
import footer from './views/footer'
export default {
  components:{
    'headerz':header,
    'footerz':footer
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #9cc8f5;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.background_header {

  background: linear-gradient(45deg, rgb(151, 218, 120), rgb(119, 204, 243));
}
.background_footer {
    background: rgb(46, 43, 43);
}
  .router_page{
    padding-top: 10%;
  }

</style>
