<template>
<v-card style="justify-items: center">
    <img v-if="!!item.image" :src="item.image" class="image_item">
    <img v-else src="../../assets/nophoto.png" class="image_item">
    <div style="display:inline-block;">
        <h2 style="display:inline-block;">{{item.title}}</h2>
        <p>{{item.description}}</p>
        <h2>{{item.price}} rub/day</h2>
        <v-btn @click="$emit('showNewItem',item)">Show</v-btn>
    </div>
</v-card>
</template>

<script>
    export default {
        name: "item-small",
        props:{
            item:Object
        }
    }
</script>

<style scoped>
    .image_item{display:inline-block;margin-right:2px;
        width: 20%;
    }
</style>
