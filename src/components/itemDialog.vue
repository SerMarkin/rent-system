<template>
    <div>
    <v-dialog v-model="dialog" max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">{{title[mode]}}</span>
          </v-card-title>
          <v-card-text>
                <v-form ref="addItem">
                  <v-text-field v-model="item.title" label="Title*" :rules="[rules.required]"></v-text-field>
                    <div>
                    <h4>Upload photo</h4>
                    <input type="file" accept="image/jpeg,image/png" class="input_file" @change="loadImage"><br></div>
                    <v-menu top left>

                            <v-text-field slot="activator" v-model="categories[show_cat].title" label="Category*" :rules="[rules.required]" readonly></v-text-field>
                        <v-list>
                            <v-list-tile
                                    v-for="(itemCat, index) in categories"
                                    :key="index"
                                    @click="item.subcategory_id = itemCat.id;show_cat = index"
                                    style="background: white"
                            >
                                <v-list-tile-title>{{ itemCat.title }}</v-list-tile-title>
                            </v-list-tile>
                        </v-list>
                    </v-menu>
                  <v-textarea v-model="item.description" label="Description*" :rules="[rules.required]"></v-textarea>
                  <v-text-field v-model="item.price" label="Price*"  :rules="[rules.required]"></v-text-field>
                    <v-text-field v-model="item.duration" label="Duration (days)*"  :rules="[rules.required]"></v-text-field>
                </v-form>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
              <v-btn v-if="mode == 1" color="blue darken-1" flat @click="addItem()">Add</v-btn>
              <v-btn v-else-if="mode == 2" color="blue darken-1" flat @click="editItem()">Edit</v-btn>
          </v-card-actions>
        </v-card>
        </v-dialog>
    <v-dialog v-model="dialog2" max-width="300px">
        <v-card  class="card_status" style="width: 100%;height: 100%;justify-content: center;text-align: center;font-size: 30px">
            <p>{{text_message}}</p>
        </v-card>
    </v-dialog>
    </div>
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
            c:console,
            title:["","Add","Edit"],
            dialog:false,
            dialog2:false,
            text_message:'Success',
            mode:1,
            show_cat:0,
            item:{
             name:'',
                subcategory_id:0,
                image:'',
              price:'',
                duration:'',
              description:''
            },
            rules:{required:(val)=>!!val || 'Fill required field'},
            categories:[{title:''}]
        }
    },
    watch :{
      dialog (){
          this.$refs.addItem.reset()
          this.updateCategories()
      },
        mode(val){
        }
    },
    methods:{
        indexOfCat(){},
        loadImage(event){
            let t = this
            let fileImg = event.target.files[0];
            var reader = new FileReader();
            reader.onload = function(fileLoadedEvent) {
                var srcData = fileLoadedEvent.target.result; // <--- data: base64
                t.item.image = srcData
                console.log('Loaded')
            }
            reader.readAsDataURL(fileImg);
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
                    if (t.item.subcategory_id != 0){
                        let k = 0;
                        t.categories.forEach((cat)=> {

                            if (cat.id == t.item.subcategory_id)
                                t.show_cat = k
                            else
                                k += 1
                        })
                    }else{
                        t.item.subcategory_id = t.categories[t.show_cat].id
                    }
                })
        },
        addItem(){
            if(this.$refs.addItem.validate()){
                const t = this
                const config = {
                    headers:{
                        'Authorization':  this.$localStorage.get('token')
                    }
                }
                const data = {
                    title: this.item.title,
                    subcategory_id : this.item.subcategory_id,
                    description: this.item.description,
                    user_id: this.$store.state.user.id,
                    duration: this.item.duration.toString(),
                    price: this.item.price.toString(),
                    image: this.item.image
                }
                const url = this.$store.state.url + 'items'
                axios.post(url,data,config)
                    .then((resp)=>{
                        t.$emit('update')
                        t.dialog = false
                        t.dialog2 = true
                        setTimeout(()=>{t.dialog2=false},3000)
                    })
            }else{console.log("item addition fails")}
        },
        editItem(){
            if(this.$refs.addItem.validate()){
                let t = this
                let config = {
                    headers:{
                        'Authorization':  this.$localStorage.get('token')
                    }
                }
                let data = {
                    title: this.item.title,
                    subcategory_id : this.item.subcategory_id,
                    description: this.item.description,
                    user_id: this.$store.state.user.id,
                    duration: this.item.duration.toString(),
                    price: this.item.price.toString()
                }
                let url = this.$store.state.url + 'items/'+t.item.id
                axios.put(url,data,config)
                    .then((resp)=>{
                        t.$emit('update')
                        t.dialog = false
                        t.dialog2 = true
                        setTimeout(()=>{t.dialog2=false},3000)
                    })
            }else{console.log("item addition fails")}
        }
    },
    beforeMount(){

        this.updateCategories()

    }
}
</script>
