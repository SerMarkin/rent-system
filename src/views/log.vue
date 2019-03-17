<template>
 <v-app>
     <v-card style="width: 50%;margin: 25% 25% 25% 25%">
         <v-card-media>
             <img src="../assets/logo.png">
         </v-card-media>
         <v-btn @click="alert('HELLO MY FRIEND!!!!')"> Hello</v-btn>
     </v-card>
 </v-app>
</template>

<script>
    export default {
        name: "log",
        methods:{
            alert(s){
                alert(s);
            }
        }
    }
</script>

<style scoped>

</style>
