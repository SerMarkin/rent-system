<template>
    <v-app>
        <v-card class="card_main" :elevation="10">
            <h2 class="text-uppercase">Регистрация</h2>
            <v-form ref="regForm">
                <v-text-field v-model="surname" label="Фамилия" :rules="[rules.required]"></v-text-field>
                <v-text-field v-model="name" label="Имя" :rules="[rules.required]"></v-text-field>
                <v-text-field v-model="phone" label="Телефон" :mask="'+7##########'"></v-text-field>
                <v-text-field v-model="email" label="Email" :rules="[rules.email,rules.required]"></v-text-field>
                <v-text-field v-model="pass1" label="Пароль" type="password" :rules="[rules.required]"></v-text-field>
                <v-text-field v-model="pass2" label="Подтвердите пароль" type="password" :rules="[rules.required]"></v-text-field>
                <v-btn @click="regUser()">Зарегистрироватся</v-btn>
                <a @click="$router.push('/login')">Уже есть аккаунт?</a>
            </v-form>
        </v-card>
    </v-app>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "registration",
        data(){
            return{
                surname:'',
                phone:'',
                name:'',
                pass1:'',
                pass2:'',
                email:'',
                rules: {
                    email: (val) => {
                        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        return !val || re.test(String(val).toLowerCase()) || 'Некорректный ввод';
                    },
                    required:(val)=> !!val || 'Это поле обязательное для заполнения'
                },
            }
        },
        methods:{
            regUser(){
                if (this.$refs.regForm.validate()){
                    let data = {
                        surname: this.surname,
                        name : this.name,
                        password: this.pass1,
                        password_confirmation: this.pass2,
                        email: this.email,
                        phone: this.phone,
                        username: this.email,
                        role_id: 1
                    }
                    let url = this.$store.state.url +'users'
                    axios.post(url,data)
                        .then((resp)=>{
                            console.log(resp)
                            this.$router.push('/login')
                        })
                        .catch((er)=>{
                            console.log(er)
                        })
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
</style>
