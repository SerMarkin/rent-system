<template>

    <v-toolbar @click="test" >
        <v-toolbar-title class="sub_header on_hover" @click="$router.push('/')">
        <img src="https://img.icons8.com/nolan/64/000000/down2.png" class="trans_left" >
        <h1>INNORENT</h1>
            <img src="https://img.icons8.com/nolan/64/000000/down2.png" class="trans_right">
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items  v-if="auth">
            <v-btn flat  @click="$router.push('/my')"><v-icon x-large>account_circle</v-icon></v-btn>
            <v-btn flat @click="logout()"><v-icon>exit_to_app</v-icon></v-btn>
        </v-toolbar-items>
        <v-toolbar-items v-else>
            <v-btn  flat  @click="$router.push('/login')">Войти</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>
<script>
    export default {
        name:'headerz',
        data(){
            return{
                auth1:false,
                token:'',
                intUpd:0,
            }
        },
        methods:{
            logout(){
                this.$localStorage.remove('token')
                console.log(this.auth)
                this.$router.push('/')
            },
            test(){
                console.log(this.token)
            },
            updateToken(){
                this.token = this.$localStorage.get('token',null)
            }
        },
        mounted() {
            this.intUpd = setInterval(this.updateToken,100)
        },
        beforeDestroy() {
            clearInterval(this.intUpd)
        },
        computed:{
            auth(){
                return !!this.token && this.token != ''
            }
        }
    }
</script>
<style>
.header{
    width: 100%;
    height: 15vh;
    position: fixed;
    z-index: 10000;
}
.sub_header{
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
.on_hover{
    cursor: pointer;
}
.trans_left{
    transform: rotate(-90deg);
}
.trans_right{
    transform: rotate(90deg);
}

</style>
