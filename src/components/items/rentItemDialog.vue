<template>
    <v-dialog v-model="dialogValue" class="dialogz">
        <v-layout>
        <v-card style="width: 50%" class="text-xs-center">
            <v-card-title><h1>New order</h1></v-card-title>
            <v-card-text >
                <h2>ITEM:</h2>
                <h2>Name of item: {{item.title}}</h2>
                <h2>Description: {{item.description}}</h2>
                <h2>Price: {{item.price}} rub/day</h2>
                <h2>Choose duration:</h2>
                <v-text-field
                        label="Duration"
                        v-model="item.duration"
                        :error-messages="errMes"
                        :mask="'####'"
                ></v-text-field>
                <h2>Total price: {{item.price * item.duration}}</h2>
            </v-card-text>
            <v-btn @click="rentItem(item)">Rent</v-btn>
        </v-card>
        <v-card style="width: 50%">
            <h2>Recommendation</h2>
            <item-small v-for="(it,index) of nearItems" :key="index" :item="it.item.item" @showNewItem="updateShow"></item-small>
        </v-card>
        </v-layout>
    </v-dialog>
</template>

<script>
    import axios from 'axios'
    import itemSmall from './item-small'
    export default {
        name: "rentItemDialog",
        components:{
          'item-small':itemSmall
        },
        props:{
          value:Boolean
        },
        data(){
            return{
                item:{},
                duration:'0',
                errMes:'',
                dialogValue:false,
                nearItems:[]
            }
        },
        watch:{
            value(val){
                this.dialogValue = val
            },
            dialogValue(val){
                if (!val)
                    this.$emit('closeRentDialog')
                else{
                    this.updateGeospecialSearch()
                }
            }
        },
        methods:{
            rentItem(item){
                let t = this;
                if (!!this.duration){
                    this.errMes = ''
                }else{
                    this.errMes = 'Uncorrect data';
                    return
                }
                let config = {
                    headers:{
                        'Authorization':  this.$localStorage.get('token')
                    }
                };
                let url = this.$store.state.url + 'orders'
                let data = {
                    item_id: item.id,
                    user_id: this.$store.state.user.id,
                    duration: item.duration,
                    description: item.title,
                    status:1
                };
                axios.post(url,data,config)
                    .then((resp)=>{
                        t.$router.push('/my')
                    })
            },
            updateShow(item){
                this.item = item
                this.updateGeospecialSearch()
            },
            updateGeospecialSearch(){
                const t = this;
                const config = {
                    headers:{
                        'Authorization':  this.$localStorage.get('token')
                    }
                };
                const url = this.$store.state.url + 'items/' + this.item.id + '/' + 'similar'
                axios.get(url,config)
                    .then((response)=>{
                        this.nearItems = response.data.data
                    })
                    .catch((err)=>{
                        this.nearItems = [
                            {
                                "item": {
                                    "id": "506863db8177d2271bb702edda933185",
                                    "name": "Huawei Mate 20",
                                    "price": "177",
                                    "score": 0,
                                    "item": {
                                        "title": "Huawei Mate 20",
                                        "description": "Atque aut laudantium eius.",
                                        "price": "177",
                                        "duration": 4,
                                        "image": null,
                                        "subcategory_id": "b8b92f4037443ea1691e4e368bd538b8",
                                        "user_id": "b8b92f4037443ea1691e4e368bedc85b",
                                        "order_ids": [],
                                        "updated_at": null,
                                        "created_at": null,
                                        "_id": "506863db8177d2271bb702edda933185",
                                        "_rev": "1-5336ba9c47cb2e881b60d7a41053da07",
                                        "type": "Item"
                                    }
                                }
                            },
                            {
                                "item": {
                                    "id": "b8b92f4037443ea1691e4e368bbb2e91",
                                    "name": "iPhone 5S",
                                    "price": "177",
                                    "score": 0,
                                    "item": {
                                        "title": "iPhone 5S",
                                        "description": "Qui sunt nulla omnis.",
                                        "price": "177",
                                        "duration": 4,
                                        "image": null,
                                        "subcategory_id": "b8b92f4037443ea1691e4e368bd538b8",
                                        "user_id": "b8b92f4037443ea1691e4e368bf0aef9",
                                        "order_ids": [],
                                        "updated_at": null,
                                        "created_at": null,
                                        "_id": "b8b92f4037443ea1691e4e368bbb2e91",
                                        "_rev": "1-f45275100d0eb7929f8ab3cbbc293c06",
                                        "type": "Item"
                                    }
                                }
                            },
                            {
                                "item": {
                                    "id": "506863db8177d2271bb702edda4a9a1d",
                                    "name": "OnePlus 6",
                                    "price": "178",
                                    "score": 1,
                                    "item": {
                                        "title": "OnePlus 6",
                                        "description": "Ut aut adipisci maiores.",
                                        "price": "178",
                                        "duration": 6,
                                        "image": null,
                                        "subcategory_id": "b8b92f4037443ea1691e4e368bd538b8",
                                        "user_id": "b8b92f4037443ea1691e4e368bf06de2",
                                        "order_ids": [],
                                        "updated_at": null,
                                        "created_at": null,
                                        "_id": "506863db8177d2271bb702edda4a9a1d",
                                        "_rev": "1-7afe7f07152f0c91dd40c9456837374c",
                                        "type": "Item"
                                    }
                                }
                            }
                        ]
                        console.log(this.nearItems)
                    })

            }
        }
    }
</script>

<style scoped>
    .dialogz{
        width: 50% !important;
    }
</style>
