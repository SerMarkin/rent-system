<template>
    <div class="header sub_header background_header">
        <div class="sub_header on_hover" @click="$router.push('/')">
        <img src="https://img.icons8.com/nolan/64/000000/down2.png" class="trans_left" >
        <h1>INNORENT</h1>
        <img src="https://img.icons8.com/nolan/64/000000/down2.png" class="trans_right">
        </div>
    </div>
</template>

<style>
.header{
    width: 100%;
    height: 15vh;
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
