<template>
 <v-app>
     <v-card class="card_main" :elevation="10">
         <h2 class="text-uppercase">Авторизация</h2>
         <v-text-field v-model="name" label="Логин"></v-text-field>
         <v-text-field v-model="pass" label="Пароль"></v-text-field>
         <v-btn @click="checkUser()">Войти</v-btn>
     </v-card>
 </v-app>
</template>

<script>
    export default {
        name: "login",
        data(){
            return {
                name:'',
                pass:'',
                k:0
            }
        },
        methods:{
            checkUser(){
                this.$router.push('/my')
            }
        }
    }
</script>

<style scoped>
    .card_main{
        width: 50%;
        margin: 5% 25%;
        padding: 5% 10%;
    }
    .back{
        background: green;
    }
</style>
