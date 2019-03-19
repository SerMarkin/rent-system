<template>

    <v-toolbar fixed>
        <v-toolbar-title class="sub_header on_hover" @click="$router.push('/')">
        <img src="https://img.icons8.com/nolan/64/000000/down2.png" class="trans_left" >
        <h1>INNORENT</h1>
            <img src="https://img.icons8.com/nolan/64/000000/down2.png" class="trans_right">
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items  v-if="$store.state.auth">
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
                this.$store.state.auth = false
                this.$store.state.user = {}
                this.$router.push('/')
            },
            test(){
                console.log(this.$store.state.auth)
            },

        },

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
