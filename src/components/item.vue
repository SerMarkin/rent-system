<template>
<v-card class="item_card">
    
        
    
    <v-card-title class="head">{{item.title}}</v-card-title>
    <v-btn icon v-if="showDeleteButton" @click="$emit('deleteItem',item.id)">
            <v-icon >close</v-icon>
    </v-btn>
    <img src="../assets/logo.png" class="image_item">
    <v-card-text class="descr_item">
    <p>{{item.description}}</p>
    </v-card-text>

    <v-card-actions class="price_item">
        <h3>{{item.price}} ₽/day </h3>
        <v-spacer></v-spacer>
        <v-btn v-if="showButton" @click="rentItem">Rent</v-btn>
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
          showButton:Boolean,
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
        },
        methods:{/*POST /orders
integer  "item_id"
integer  "user_id"
integer  "duration"
integer  "status"
text     "description"*/
            rentItem(){
                let t = this
                let config = {
                    headers:{
                        'Authorization':  this.$localStorage.get('token')
                    }
                }
                let url = this.$store.state.url + 'orders'
                let data = {
                    item_id: this.item.id,
                    user_id: this.$store.state.user.id,
                    duration: this.item.duration,
                    description: this.item.title,
                    status:1
                }
                axios.post(url,data,config)
                    .then((resp)=>{
                        t.$router.push('/my')
                        console.log(this + " Отладочный console.log для проверки контекста")
                        console.log(success)
                    })
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
