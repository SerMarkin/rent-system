<template>
    <div>
        <h1>This is my page</h1>
        <button @click="myButton()">myCoolButton</button>
        <button @click="myButton2()">myCoolButton2</button>
        <button @click="myButton3()">myCoolButton3</button>
    </div>
</template>

<script>
export default {
    name: 'myz',
    methods:{
        myButton:()=>{
            console.log(this);
        },
        myButton2: function(){
            console.log(this);
        },
        myButton3(){
            console.log(this);
        }
    }
}
</script>
