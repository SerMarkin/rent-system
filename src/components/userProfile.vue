<template>
    <v-app>
    <v-card style="text-align:left;margin-top: 2%">
        <h1>This is my profile page</h1>
        <v-form ref="userData">
        <v-text-field v-model="user.name" label="Name" :rules="[rules.required]"></v-text-field>
        <v-text-field v-model="user.surname" label="Surname" :rules="[rules.required]"></v-text-field>
        <v-text-field v-model="user.phone" label="Phone" :mask="'+7##########'" :rules="[rules.required]"></v-text-field>
        <v-text-field v-model="user.email" label="Email" readonly :rules="[rules.email,rules.required]"></v-text-field>
        <v-btn @click="saveChages">Save</v-btn>
        </v-form>
    </v-card>
    <v-card style="text-align:left;margin-top: 2%">
        <h2>Safe</h2>
        <v-text-field v-model="oldPass" label="Old password" type="password"></v-text-field>
        <v-text-field v-model="newPass" label="New password" type="password"></v-text-field>
        <v-text-field v-model="newPass_confirm" label="Confirm new password" type="password"></v-text-field>
        <v-btn @click="changePass">Change password</v-btn>
    </v-card>
    </v-app>
</template>


<script>
    import axios from 'axios'
export default {
    name:"userProfile",
    data(){
        return{
            user:{
                name: "",
                surname: "",
                lastname: "",
                email: ""
            },
            oldPass: "",
            newPass: "",
            newPass_confirm: "",
            rules: {
                email: (val) => {
                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return !val || re.test(String(val).toLowerCase()) || 'Uncorrected value';
                },
                required:(val)=> !!val || 'Required'
            },
        }
    },
    methods:{
        changePass(){

        },
        saveChages(){
            if (this.$refs.userData.validate()) {
                let data = this.user
                let config = {
                    headers:{
                        'Authorization':  this.$localStorage.get('token')
                    }
                }
                let url = this.$store.state.url + 'users/' + this.user.id
                axios.put(url,data,config)
                    .then((resp)=>{

                    })
            }
        }
    },
    created() {
        this.user = this.$store.state.user
    }
}
</script>
