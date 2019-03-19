<template>
 <v-app>
     <v-card class="card_main" :elevation="10">
         <h2 class="text-uppercase">Авторизация</h2>
         <v-form ref="logForm">
         <v-text-field v-model.lazy="name" label="Email" :rules="[rules.email,rules.required]"></v-text-field>
         <v-text-field v-model="pass" label="Пароль" type="password" :rules="[rules.required]"></v-text-field>
             <v-btn @click="checkUser()">Войти</v-btn>
         </v-form>
         <a @click.stop="$router.push('/registration')">Не зарегистрирован?</a>
     </v-card>
 </v-app>
</template>

<script>
    export default {
        name: "login",
        data(){
            return {
                nameIn:'',
                name:'',
                pass:'',
                rules: {
                    email: (val) => {
                        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        return !val || re.test(String(val).toLowerCase()) || 'Некорректный ввод';
                    },
                    required:(val)=> !!val || 'Это поле обязательное для заполнения'
                },
                k:0
            }
        },
        methods:{
            checkUser(){
                if(this.$refs.logForm.validate()){
                    console.log('Отправляем логин и пароль на сервак и получаем ответ')
                    let data = {
                        "email":this.name,
                        "password":this.pass
                    }
                    let url = this.$store.state.url + 'authenticate'
                    axios.post(url,data)
                        .then((resp)=>{
                            console.log(resp)
                        })
                    this.$router.push('/my')
                }else{
                    console.log('invalid form')
                }

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
