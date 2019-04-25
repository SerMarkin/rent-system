<template>
    <v-app>
    <div style="display:flex; justify-content:center">
        <v-btn @click="dialogz=true">Add cat</v-btn>
    </div>
        <v-data-table
                :headers="headerTable2"
                :items="cat"
        >
            <template slot="items" slot-scope="props">
                <tr>
                    <td>{{ props.item.title }}</td>
                    <td class="text-xs-left">
                        <v-btn icon @click="deleteCat(props.item['_id'])">
                            <v-icon>cancel</v-icon>
                        </v-btn>
                    </td>
                </tr>
            </template>
            <template slot="no-data">
                <v-alert :value="true" color="error" icon="warning">
                    Sorry, nothing to display here :(
                </v-alert>
            </template>
        </v-data-table>
        <v-dialog v-model="dialogz">
            <v-card>
                <v-card-title>Add category</v-card-title>
                <v-card-text>

                    <v-text-field v-model="title_cat" label="Title" :error="error_add1"
                    ></v-text-field>

                    <v-text-field v-model="desc_cat" label="Description" :error="error_add2"
                    ></v-text-field>

                    <v-layout>
                        <v-btn @click="addCat">Add</v-btn>
                    </v-layout>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-app>
</template>

<script>
    import axios from 'axios/index'
    export default {
        name: "adminCategories",
        data(){
            return{
                dialogz:false,
                error_add1:false,
                error_add2:false,
                headerTable2:[
                    {
                        text: 'Item name',
                        align: 'left',
                        value: 'title'
                    },
                    { text: 'Status', value: 'status' }
                ],
                title_cat:'',
                desc_cat:'',
                cat:[]
            }
        },
        methods:{
            deleteCat(id){
                const url = this.$store.state.url + 'subcategories/' + id;
                const config = {
                    headers:{
                        'Authorization':  this.$localStorage.get('token')
                    }
                };
                axios.delete(url,config).then((resp)=>{this.updateCats()})
            },
            addCat(){
                const url = this.$store.state.url + 'subcategories'
                const config = {
                    headers:{
                        'Authorization':  this.$localStorage.get('token')
                    }
                }
                const data = {
                    title : this.title_cat,
                    description: this.desc_cat
                }
                if (!this.title_cat){
                    this.error_add1 = true
                    console.log('no add')
                    return
                }else{
                    this.error_add1 = false
                }

                if (!this.desc_cat){
                    this.error_add2 = true
                    console.log('no add')
                    return
                }else{
                    this.error_add2 = false
                }
                axios.post(url,data,config)
                    .then((resp)=>{
                        this.updateCats()
                        this.dialogz = false
                    })

            },
            updateCats(){
                const url = this.$store.state.url + 'subcategories'
                const config = {
                    headers:{
                        'Authorization':  this.$localStorage.get('token')
                    }
                }
                axios.get(url,config)
                    .then((resp)=>{
                        this.cat = resp.data.data
                        console.log(resp)
                    })
            }
        },
        beforeMount() {
            this.updateCats()
        }
    }
</script>

<style scoped>

</style>