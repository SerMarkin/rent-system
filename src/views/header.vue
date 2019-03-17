<template>

    <v-toolbar>
        <img src="https://img.icons8.com/nolan/64/000000/down2.png" class="trans_left" >
        <h1>INNORENT</h1>
        <img src="https://img.icons8.com/nolan/64/000000/down2.png" class="trans_right">
        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn flat><v-icon>account_circle</v-icon></v-btn>
            <v-btn flat><v-icon></v-icon></v-btn>
            <v-btn flat><v-icon></v-icon></v-btn>
        </v-toolbar-items>
    </v-toolbar>



   <!-- <div class="header sub_header background_header" @click="test">
        <div class="sub_header on_hover" @click="$router.push('/')">
        <img src="https://img.icons8.com/nolan/64/000000/down2.png" class="trans_left" >
        <h1>INNORENT</h1>
        <img src="https://img.icons8.com/nolan/64/000000/down2.png" class="trans_right">
        </div>
        <div v-show="!!$localStorage.token && $localStorage.token != ''">
        <div class="sub_header on_hover" @click="$router.push('/my')">
        <img src="https://img.icons8.com/ios/50/000000/contacts.png"   style="position: absolute;right: 50px">
        </div>

        <div class="sub_header on_hover" @click="logout()">
            <img src="https://img.icons8.com/ios/50/000000/exit.png"   style="position: absolute;right: 0">
        </div>
        </div>
        <div v-show="!$localStorage.token || $localStorage.token == ''" class="sub_header on_hover" @click="$router.push('/login')">
            <img src="https://img.icons8.com/ios/50/000000/enter-2.png"   style="position: absolute;right: 0">
        </div>
    </div>-->
</template>
<script>
    export default {
        name:'headerz',
        methods:{
            logout(){
                this.$localStorage.token = ''
                this.$router.push('/')
            },
            test(){
                console.log(this.$localStorage.token,!!this.$localStorage.token , this.$localStorage.token != '')
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
