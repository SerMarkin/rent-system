<template>
<v-card class="item_card">
    <v-card-title class="head">{{item.name}}</v-card-title>
    <img src="../assets/logo.png" class="image_item">
    <v-card-text class="descr_item">
    <p>{{item.descr}}</p>
    </v-card-text>

    <v-card-actions class="price_item">
        <h3>{{item.price}}Р/день </h3>
        <v-spacer></v-spacer>
        <v-btn v-if="showButton">Арендовать</v-btn>
    </v-card-actions>
</v-card>
</template>

<script>
    export default {
        name: "item",
        props:{
          item:Object,
          showButton:Boolean
        },
        data(){
            return{
            }
        }
    }
</script>

<style scoped>
.item_card{
    width: 250px;
    height: 400px;
    text-align: left;
    margin-top: 2%;
    left:10%;
}
    .image_item{
        width: 100%;
        height: 200px;
    }
    .price_item{
        height: 50px;
    }
    .descr_item{
        height: 100px;
    }
    .head{
        height: 50px;
    }
</style>
