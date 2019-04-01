<template>
    <v-dialog v-model="dialog" max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">{{title[mode]}}]</span>
          </v-card-title>
          <v-card-text>
                <v-form ref="addItem">
                  <v-text-field v-model="item.name" label="Title*" :rules="[rules.required]"></v-text-field>
                    <div v-if="false">
                    <h4>Upload photo</h4>
                    <input type="file" accept="image/jpeg,image/png" class="input_file"><br></div>
                    <v-menu top left>

                            <v-text-field slot="activator" v-model="categories[item.category].title" label="Category*" :rules="[rules.required]" readonly></v-text-field>
                        <v-list>
                            <v-list-tile
                                    v-for="(itemCat, index) in categories"
                                    :key="index"
                                    @click="itemCat.category = index"
                                    style="background: white"
                            >
                                <v-list-tile-title>{{ itemCat.title }}</v-list-tile-title>
                            </v-list-tile>
                        </v-list>
                    </v-menu>
                  <v-textarea v-model="item.description" label="Description*" :rules="[rules.required]"></v-textarea>
                  <v-text-field v-model.number="item.price" label="Price*" :mask="'########'" :rules="[rules.required]"></v-text-field>
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
</template>

<script>
import item from '../components/item'
import axios from 'axios'
export default {
    name:'dialogz',
    props:{
    },
    data(){
        return{
            title:["","Add","Edit"],
            dialog:false,
            mode:1,
            item:{
             name:'',
             category:0,
              price:'',
              description:''
            },
            rules:{required:(val)=>!!val || 'Заполните поле'},
            categories:[{title:''}]
        }
    },
    methods:{
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
    beforeMount(){
        this.updateCategories()
    }
}
</script>
