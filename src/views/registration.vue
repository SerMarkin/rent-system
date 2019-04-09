<template>
    <v-app>
        <v-card class="card_main" :elevation="10">
            <h2 class="text-uppercase">Registration</h2>
            <v-form ref="regForm">
                <v-text-field v-model="surname" label="Surname" :rules="[rules.required]"></v-text-field>
                <v-text-field v-model="name" label="Name" :rules="[rules.required]"></v-text-field>
                <v-text-field v-model="phone" label="Phone" :mask="'+7##########'"></v-text-field>
                <v-text-field v-model="email" label="Email" :rules="[rules.email,rules.required]"></v-text-field>
                <v-text-field v-model="pass1" label="Password" type="password" :rules="[rules.required]"></v-text-field>
                <v-text-field v-model="pass2" label="Confirm password" type="password" :rules="[rules.required]"></v-text-field>
                <v-btn @click="regUser()">Sign up</v-btn>
                <a @click="$router.push('/login')">Have account?</a>
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
                        return !val || re.test(String(val).toLowerCase()) || 'Incorrected value';
                    },
                    required:(val)=> !!val || 'Fill required field'
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
