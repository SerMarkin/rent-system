<template>

    <v-toolbar @click="test" >
        <v-toolbar-title class="sub_header">
        <img src="https://img.icons8.com/nolan/64/000000/down2.png" class="trans_left" >
        <h1>INNORENT</h1>
            <img src="https://img.icons8.com/nolan/64/000000/down2.png" class="trans_right">
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn flat  @click="$router.push('/my')"><v-icon x-large>account_circle</v-icon></v-btn>
            <v-btn flat @click="logout()"><v-icon>exit_to_app</v-icon></v-btn>
            <v-btn flat  @click="$router.push('/login')">Войти</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>
<script>
    export default {
        name:'headerz',
        methods:{
            logout(){
                //this.$localStorage.token = ''
                this.$router.push('/')
            },
            test(){
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
