<template>
<v-card class="item_card">
    <v-card-title class="head">{{item.title}}</v-card-title>
    <v-btn icon v-if="showDeleteButton" @click="$emit('deleteItem',item['_id'])">
            <v-icon >close</v-icon>
    </v-btn>
    <img v-if="!!item.image" :src="item.image" class="image_item">
    <img v-else src="../../assets/nophoto.png" class="image_item">
    <v-card-text class="descr_item">
        <p>{{item.subcategory}}</p>
    <p>{{item.description}}</p>
    </v-card-text>

    <v-card-actions class="price_item">
        <h3>{{item.price}} ₽/day </h3>
        <v-spacer></v-spacer>
        <template v-if="showRentButton">
            <v-btn  @click="$emit('rentItem',item)">Rent</v-btn>
        </template>
        <v-btn v-if="showEditButton" @click="$emit('editItem')">Edit</v-btn>
    </v-card-actions>
</v-card>
</template>
<script>
    import axios from 'axios'
    export default {
        name: "item",
        props:{
          item:Object,
            showRentButton:Boolean,
          showEditButton: {
              type: Boolean,
              default: false
          },
          showDeleteButton: {
              type: Boolean,
              default: false
          }
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
        /* height: 50px; временное решение. Нужно либо изменить моё временное решение,
         либо как то переписать логику отображения*/
        display: inline;
    }
</style>
