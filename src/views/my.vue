<template>
    <div>
        <h1>This is my page</h1>
        <v-btn @click="myButton()">myCoolButton</v-btn>
        <v-btn @click="myButton2()">myCoolButton2</v-btn>
        <v-btn @click="myButton3()" :disabled="flag">myCoolButton3</v-btn>
    </div>
</template>

<script>
export default {
    name: 'myz',
    data(){
        return{
            flag: true
        }
    },
    methods:{
        myButton:()=>{
            console.log(this);
        },
        myButton2: function(){
            console.log(this);
            this.flag=!this.flag;
        },
        myButton3(){
            console.log(this);
        }
    }
}
</script>
