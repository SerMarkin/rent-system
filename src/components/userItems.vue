<template>
    <v-app>
        <h1 style="text-align:center">This is my items page</h1>
        <div style="display:flex; justify-content:center">
            <v-btn @click="dialog=!dialog">Добавить вещь</v-btn>
        </div>
        <v-dialog v-model="dialog" max-width="600px" z-index="10000">
        <v-card>
          <v-card-title>
            <span class="headline">Режим добавления</span>
          </v-card-title>
          <v-card-text>
                <v-form ref="addItem">
                  <v-text-field v-model="name" label="Название*" :rules="[rules.required]"></v-text-field>
                    <h4>Загрузить фото</h4>
                    <input type="file" accept="image/jpeg,image/png" class="input_file"><br>
                    <v-menu top left>

                            <v-text-field slot="activator" v-model="categories[category].title" label="Категория*" :rules="[rules.required]" readonly></v-text-field>
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
                  <v-textarea v-model="description" label="Описание*" :rules="[rules.required]"></v-textarea>
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
            description:'',
        items:[
            {title:'Name0',description:'lorem',price:'100',duration:0,user_id:0},
      ],
            rules:{required:(val)=>!!val || 'Заполните поле'},
            categories:['Спорт','Бытовые приборы','Родственники','Спорт1','Бытовые приборы1','Родственники1','Спорт2','Бытовые приборы2','Родственники2','Спорт3','Бытовые приборы3','Родственники3','Спорт4','Бытовые приборы4','4Родственники',]
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
                    categories : this.categories[this.category].id,
                    description: this.description
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
            let url = this.$store.state.url + 'categories'
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
