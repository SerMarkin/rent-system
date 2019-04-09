<template>
 <v-app>
     <v-card class="card_main" :elevation="10">
         <h2 class="text-uppercase">Auth</h2>
         <v-form ref="logForm">
         <v-text-field v-model.lazy="name" label="Email" :rules="[rules.email,rules.required]"></v-text-field>
         <v-text-field v-model="pass" label="Password" type="password" :rules="[rules.required]"></v-text-field>
             <v-btn @click="checkUser()" class="">Sign in</v-btn>
             <v-alert
                     v-model="err"
                     type="error"
                     transition="scale-transition"
             >
                 Incorect login or password
             </v-alert>
         </v-form>
         <a @click.stop="$router.push('/registration')">Sign up</a>
     </v-card>
 </v-app>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "login",
        data(){
            return {
                nameIn:'',
                name:'',
                pass:'',
                err:false,
                rules: {
                    email: (val) => {
                        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        return !val || re.test(String(val).toLowerCase()) || 'Incorrect input';
                    },
                    required:(val)=> !!val || 'Это поле обязательное для заполнения'
                },
                k:0
            }
        },
        methods:{
            checkUser(){
                let t= this
                if(this.$refs.logForm.validate()){
                    console.log('Отправляем логин и пароль на сервак и получаем ответ')
                    let data = {
                        "email":this.name,
                        "password":this.pass
                    }
                    let url = this.$store.state.url + 'authenticate'
                    axios.post(url,data)
                        .then((resp)=>{
                            this.$localStorage.set('token',resp.data.auth_token)
                            this.$router.push('/my')
                        })
                        .catch((resp)=>{
                            t.err = true
                            t.setTime(t.closeErrAlert,3000)
                        })
                }else{
                    console.log('invalid form')
                }

            },
            closeErrAlert(){
                this.err = false
                console.log(this.err)
            },
            setTime(func,time){
                setTimeout(func,time)
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
