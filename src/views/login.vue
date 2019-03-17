<template>
 <v-app>
     <v-card class="card_main">
         <h2 class="text-uppercase">Авторизация</h2>
         <v-text-field v-model="name" label="Логин"></v-text-field>
         <v-text-field v-model="pass" label="Пароль"></v-text-field>
         <v-btn @click="alert('HELLO MY FRIEND!!!!')">Войти</v-btn>
     </v-card>
 </v-app>
</template>

<script>
    export default {
        name: "login",
        data(){
            return {
                name:'',
                pass:''
            }
        },
        methods:{
            alert(s){
                alert(s);
            }
        }
    }
</script>

<style scoped>
    .card_main{
        width: 50%;
        margin: 25% 25% 25% 25%;
        padding: 5% 10%;
    }
    .back{
        background: green;
    }
</style>
