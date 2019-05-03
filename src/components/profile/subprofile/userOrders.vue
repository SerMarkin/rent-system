<template>
    <v-app>
        <v-tabs>
            <v-tab>
                My rented items
            </v-tab>
            <v-tab>
                My orders
            </v-tab>

            <v-tab-item>
            <v-data-table
                    :headers="headerTable1"
                    :items="myOrders"
            >
                <template slot="items" slot-scope="props">
                    <tr>
                        <td>{{ props.item.name }}</td>
                        <td class="text-xs-left">{{'Email:'+ props.item.lessor_email+' Phone:'+ props.item.lessor_phone}}</td>
                        <td class="text-xs-left">{{ props.item.date_in }}</td>
                        <td class="text-xs-left">{{ props.item.date_out }}</td>
                        <td class="text-xs-left">{{ props.item.total_price }}</td>
                        <td class="text-xs-left">
                            <v-btn icon v-for="(item,index) of buttonsShowMyRequests[props.item.status]" :key="index"
                                   :disabled="item.disabled"
                                   @click="updateStatus(props.item,item.method)"
                            >
                                <!--{{item.title}}-->
                                <v-icon>{{item.icon}}</v-icon>
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

            </v-tab-item>
            <v-tab-item>
                <v-data-table
                        :headers="headerTable2"
                        :items="ordersUsers"
                >
                    <template slot="items" slot-scope="props">
                        <tr>
                            <td>{{ props.item.name }}</td>
                            <td class="text-xs-left">{{'Email:'+ props.item.lessee_email+' Phone:'+ props.item.lessee_phone}}</td>
                            <td class="text-xs-left">{{ props.item.date_in }}</td>
                            <td class="text-xs-left">{{ props.item.date_out }}</td>
                            <td class="text-xs-left">{{ props.item.total_price }}</td>
                            <td class="text-xs-left">
                                <v-btn icon v-for="(item,index) of buttonsShowRequestToMe[props.item.status]" :key="index"
                                       :disabled="item.disabled"
                                       @click="updateStatus(props.item,item.method)"
                                >
                                    <!--{{item.title}}-->
                                    <v-icon>{{item.icon}}</v-icon>
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
            </v-tab-item>
        </v-tabs>
    </v-app>
</template>


<script>
    import axios from 'axios/index'
export default {
    name:'userOrders',
    data(){
        return{
            buttonsText:['Accept','Reject','Item returned'],
            buttonsShowRequestToMe:[[],
                [{title:'Accept',icon:'check',method:2,disabled:false}, {title:'Reject',icon:'close',method:7,disabled:false}],
                [{title:'Item taken by lessee',icon:'call_made',method:3,disabled:true}],
                [{title:'Item returned by lessee',icon:'call_received',method:6,disabled:false}],
                [{title:'Item returned by lessee',icon:'cell_wifi',method:6,disabled:false}],
                [{title:'Item returned by lessee',icon:'chat_bubble',method:6,disabled:false}],
                [{title:'Item returned by lessee',icon:'chat_bubble_outline',method:6,disabled:true}],
                [{title:'',icon:'clear_all',method:this.test1,disabled:true}],
                [{title:'',icon:'dialer_sip',method:this.test1,disabled:true}],
            ],
            buttonsShowMyRequests:[[],
                [{title:'Reject',icon:'close',method:7,disabled:false}],
                [{title:'Item taken by lessee',icon:'call_made',method:3,disabled:false}],
                [{title:'Item returned by lessee',icon:'call_received',method:4,disabled:false}],
                [{title:'',icon:'cell_wifi',method:this.test1,disabled:true}],
                [{title:'',icon:'chat_bubble',method:this.test1,disabled:true}],
                [{title:'',icon:'chat_bubble_outline',method:this.test1,disabled:true}],
                [{title:'',icon:'clear_all',method:this.test1,disabled:true}],
                [{title:'',icon:'dialer_sip',method:this.test1,disabled:true}],
            ],
            headerTable1:[
                {
                    text: 'Item name',
                    align: 'left',
                    value: 'name'
                },
                { text: 'lessor', value: 'lessor' },
                { text: 'Date in', value: 'date_in' },
                { text: 'Date out', value: 'date_out' },
                { text: 'Total price', value: 'total_price' },
                { text: 'Status', value: 'status' }
            ],
            headerTable2:[
                {
                    text: 'Item name',
                    align: 'left',
                    value: 'name'
                },
                { text: 'Lessee', value: 'lessee' },
                { text: 'Date in', value: 'date_in' },
                { text: 'Date out', value: 'date_out' },
                { text: 'Total price', value: 'total_price' },
                { text: 'Status', value: 'status' }
            ],

            myOrders:[//Do we need this?)
                {name:'Название объектa2',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000',status:'1'},
                {name:'Название объекта3',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000',status:'2'},
                {name:'Название объекта1',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000',status:'3'},
                {name:'Название объекта4',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000',status:'4'},
                {name:'Название объекта5',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000',status:'5'},
                {name:'Название объекта4',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000',status:'6'},
                {name:'Название объекта5',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000',status:'7'},
                {name:'Название объекта6',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000',status:'8'}
            ],
            ordersUsers:[
                {name:'Название объекта1',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000',status:'1'},
                {name:'Название объектa2',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000',status:'2'},
                {name:'Название объекта3',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000',status:'3'},
                {name:'Название объекта4',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000',status:'4'},
                {name:'Название объекта5',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000',status:'5'},
                {name:'Название объекта4',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000',status:'6'},
                {name:'Название объекта5',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000',status:'7'},
                {name:'Название объекта6',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000',status:'8'}
            ]
        }
    },
    methods:{
        test1(a){
            console.log(a)
        },
        updateMyOrders(){
            /*GET /my-orders/rented - те, что я арендовал
GET /my-orders/rent*/
            let t = this
            let config = {
                headers:{
                    'Authorization':  this.$localStorage.get('token')
                }
            }
            axios.get( this.$store.state.url + 'my-orders/rented',config)
                .then((resp)=>{
                    t.myOrders = []
                    resp.data.data.forEach((item)=>{
                        let date1 = new Date(item.created_at)
                        let date2 = new Date(+date1 + item.duration*24*60*60*1000)
                        t.myOrders.push(
                            {id:item['_id'],
                                duration:item.duration,
                                name:item.description,
                                date_in:date1.toLocaleDateString('ru-ru'),
                                date_out:date2.toLocaleDateString('ru-ru'),
                                total_price:item.final_price,
                                status:item.status,
                                lessee_email: item.lessee_email,
                                lessee_phone:item.lessee_phone,
                                lessor_email: item.lessor_email,
                                lessor_phone: item.lessor_phone,
                            })
                    })
                })
        },
        updateMyOrdersRent(){
            let t = this
            let config = {
                headers:{
                    'Authorization':  this.$localStorage.get('token')
                }
            }
            axios.get( this.$store.state.url + 'my-orders/rent',config)
                .then((resp)=>{
                    t.ordersUsers = []
                    resp.data.data.forEach((item)=>{
                        let date1 = new Date(item.created_at)
                        let date2 = new Date(+date1 + item.duration*24*60*60*1000)
                        t.ordersUsers.push(
                            {id:item['_id'],
                                duration:item.duration,
                                name:item.description,
                                date_in:date1.toLocaleDateString('ru-ru'),
                                date_out:date2.toLocaleDateString('ru-ru'),
                                total_price:item.final_price,
                                status:item.status,
                                lessee_email: item.lessee_email,
                                lessee_phone:item.lessee_phone,
                                lessor_email: item.lessor_email,
                                lessor_phone: item.lessor_phone,
                            })
                    })
                   // t.ordersUsers = resp.data.data
                })
        },
        updateStatus(item,state){
            let t = this
            let config = {
                headers:{
                    'Authorization':  this.$localStorage.get('token')
                }
            }
            let url = this.$store.state.url + 'orders/' + item['id']
            let data = {
                duration: item.duration,
                description: item.name,
                status:state
            }
            axios.patch(url,data,config).then(()=>{t.updateMyOrders();t.updateMyOrdersRent()})
        }
    },
    beforeMount(){
        this.updateMyOrders()
        this.updateMyOrdersRent()
    }
}
</script>
