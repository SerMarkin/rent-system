<template>
    <v-app>
        <h1 style="text-align:center" >This is my items page</h1>
        <show-dialog ref="dialogz" @update="updateItems()"></show-dialog>
        <div style="display:flex; justify-content:center">
            <v-btn @click="$refs.dialogz.mode=1;$refs.dialogz.dialog=true" v-if="$store.state.user.role_id !== 0">Add item</v-btn>
        </div>

        <v-layout row wrap>
            <v-flex pa-1 xs12 sm6  md3 align-self-center
                v-for="(item,index) of items" :key="index">
                <show-item :item="item" :showRentButton="false" :showEditButton="true" :showDeleteButton="true"
                @editItem="$refs.dialogz.mode=2;Object.assign($refs.dialogz.item,item);c.log(item);$refs.dialogz.dialog=true"
                @deleteItem="deleteItem"></show-item>
            </v-flex>
        </v-layout>
        <v-layout row justify-center>

        </v-layout>
        <div class="text-xs-center">
            <v-pagination
                    v-model="paginator.current_page"
                    :length="paginator.total_pages"
                    @input="updateItems"
            ></v-pagination>
        </div>
    </v-app>
</template>


<script>
import item from '../../items/item'
import dialog from '../../items/itemDialog'
import axios from 'axios/index'
export default {
    name:'userItems',
    components:{
        'show-item':item,
        'show-dialog':dialog
    },
    data(){
        return{
            c:console,
            dialog:false,
            dialog2:false,
            name:'',
            category:0,
            price:'',
            description:'',
            text_message:'Success',
        items:[
            {name:'Name0',description:'lorem',price:'100',duration:0,user_id:0,category:0},
      ],
            rules:{required:(val)=>!!val || 'Fill required field'},
            categories:[{title:''}],
            paginator:{
                total: 7992,
                per_page: 15,
                current_page: 2,
                total_pages: 533
            },
        }
    },
    methods:{
        updateItems(page){
            let t = this
            let config = {
                headers:{
                    'Authorization':  this.$localStorage.get('token')
                }
            }
            const url = this.$store.state.url + '/my-items?page='+page
            t.items = []
            axios.get(url,config)
                .then((resp)=>{
                    t.items = resp.data.data.list
                    t.paginator = resp.data.data.paginator
                })
        },
            deleteItem(itemId){
                console.log(itemId);
                const url = this.$store.state.url + '/items/' + itemId;
                const config = {
                    headers:{
                        'Authorization':  this.$localStorage.get('token')
                    }
                }
                axios.delete(url,config).then(()=>{
                    this.updateItems()
                });
            },

    },
    created(){
        console.log(item)
        this.updateItems(1)
    },
}
</script>
<style scoped>
    .theme--light.v-label {
        color: rgb(255, 0, 0);
    }
    .card_status{
        text-align: center;
        justify-content: center;
        font-size: 20px;
        width: 100%;
        height: 200px;
        padding: 20%;
    }
</style>
