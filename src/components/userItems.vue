<template>
    <v-app>
        <h1 style="text-align:center" >This is my items page</h1>
        <show-dialog ref="dialogz" @update="updateItems()"></show-dialog>
        <div style="display:flex; justify-content:center">
            <v-btn @click="$refs.dialogz.mode=1;$refs.dialogz.dialog=true">Add item</v-btn>
        </div>

        <v-layout row wrap>
            <v-flex pa-1 xs12 sm6  md3 align-self-center
                v-for="(item,index) of items" :key="index">
                <show-item :item="item" :showButton="false" :showEditButton="true"
                @editItem="$refs.dialogz.mode=2;$refs.dialogz.item=item;c.log(item);$refs.dialogz.dialog=true" ></show-item>
            </v-flex>
        </v-layout>
        <v-layout row justify-center>

        </v-layout>
    </v-app>
</template>


<script>
import item from './item'
import dialog from './itemDialog'
import axios from 'axios'
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
            rules:{required:(val)=>!!val || 'Заполните поле'},
            categories:[{title:''}]
        }
    },
    methods:{
        updateItems(){
            let t = this
            let config = {
                headers:{
                    'Authorization':  this.$localStorage.get('token')
                }
            }
            let url = this.$store.state.url + '/my-items'
            t.items = []
            axios.get(url,config)
                .then((resp)=>{
                    t.items = resp.data.data
                })
        },

    },
    created(){
        this.updateItems()
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
