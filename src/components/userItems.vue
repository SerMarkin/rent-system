<template>
    <v-app>
        <h1 style="text-align:center">This is my items page</h1>
        <div style="display:flex; justify-content:center">
            <v-btn @click="dialog=!dialog">Добавить вещь</v-btn>
        </div>
        <v-dialog v-model="dialog" max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Режим добавления</span>
          </v-card-title>
          <v-card-text>
                <v-form ref="addItem">
                  <v-text-field v-model="name" label="Title*" :rules="[rules.required]"></v-text-field>
                    <div v-if="false">
                    <h4>Upload photo</h4>
                    <input type="file" accept="image/jpeg,image/png" class="input_file"><br></div>
                    <v-menu top left>

                            <v-text-field slot="activator" v-model="categories[category].title" label="Category*" :rules="[rules.required]" readonly></v-text-field>
                        <v-list style="height: 200px;">
                            <v-list-tile
                                    v-for="(item, index) in categories"
                                    :key="index"
                                    @click="category = index"
                                    style="background: white"
                            >
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            </v-list-tile>
                        </v-list>
                    </v-menu>
                  <v-textarea v-model="description" label="Description*" :rules="[rules.required]"></v-textarea>
                  <v-text-field v-model.number="price" label="Price*" :mask="'########'" :rules="[rules.required]"></v-text-field>
                </v-form>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click="addItem()">Add</v-btn>
          </v-card-actions>
        </v-card>
        </v-dialog>

        <v-layout row wrap>
            <v-flex pa-1 xs12 sm6  md3  v-for="(item,index) of items" :key="index" align-self-center>
                <show-item :item="item" :showButton="false" ></show-item>
            </v-flex>
        </v-layout>

    </v-app>
</template>


<script>
import item from '../components/item'

import axios from 'axios'
export default {
    name:'userItems',
    data(){
        return{
            dialog:false,
            e1:'',
            name:'',
            category:0,
            price:'',
            description:'',
        items:[
            {title:'Name0',description:'lorem',price:'100',duration:0,user_id:0},
      ],
            rules:{required:(val)=>!!val || 'Заполните поле'},
            categories:[]
        }
    },
    methods:{
        addItem(){
            if(this.$refs.addItem.validate()){
                let t = this
                let config = {
                    headers:{
                        'Authorization':  this.$localStorage.get('token')
                    }
                }
                let data = {
                    title: this.name,
                    subcategory_id : this.categories[this.category].id,
                    description: this.description,
                    user_id: this.$store.state.user.id,
                    price: this.price
                }
                let url = this.$store.state.url + 'items'
                axios.post(url,data,config)
                    .then((resp)=>{
                        t.items = resp.data.data
                    })
            }
        },
        updateItems(){
            let t = this
            let config = {
                headers:{
                    'Authorization':  this.$localStorage.get('token')
                }
            }
            let url = this.$store.state.url + 'users/items'
            axios.get(url,config)
                .then((resp)=>{
                    t.items = resp.data.data
                })
        },
        updateCategories(){
            let t = this
            let config = {
                headers:{
                    'Authorization':  t.$localStorage.get('token')
                }
            }
            let url = this.$store.state.url + 'subcategories'
            axios.get(url,config)
                .then((resp)=>{
                    t.categories = resp.data.data
                })
        }
    },
    created(){
        this.updateItems()
        this.updateCategories()
    },
    components:{
        'show-item':item
    }
}
</script>
<style scoped>
    .theme--light.v-label {
        color: rgb(255, 0, 0);
    }
</style>
