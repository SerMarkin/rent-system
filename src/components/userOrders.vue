<template>
    <v-app>
        <v-tabs>
            <v-tab>
                Я арендовал
            </v-tab>
            <v-tab>
                У меня хотят арендовать
            </v-tab>
            <v-tab>
                У меня арендовали
            </v-tab>
            <v-tab-item>
            <v-data-table
                    :headers="headerTable1"
                    :items="myOrders"
            >
                <template slot="items" slot-scope="props">
                    <tr>
                        <td>{{ props.item.name }}</td>
                        <td class="text-xs-left">{{ props.item.date_in }}</td>
                        <td class="text-xs-left">{{ props.item.date_out }}</td>
                        <td class="text-xs-left">{{ props.item.total_price }}</td>
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
                        :items="requestsUsers"
                >
                    <template slot="items" slot-scope="props">
                        <tr>
                            <td>{{ props.item.name }}</td>
                            <td class="text-xs-left">{{ props.item.date_in }}</td>
                            <td class="text-xs-left">{{ props.item.date_out }}</td>
                            <td class="text-xs-left">{{ props.item.total_price }}</td>
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
                        :headers="headerTable3"
                        :items="ordersUsers"
                >
                    <template slot="items" slot-scope="props">
                        <tr>
                            <td>{{ props.item.name }}</td>
                            <td class="text-xs-left">{{ props.item.date_in }}</td>
                            <td class="text-xs-left">{{ props.item.date_out }}</td>
                            <td class="text-xs-left">{{ props.item.total_price }}</td>
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
export default {
    name:'userOrders',
    data(){
        return{
            headerTable1:[
                {
                    text: 'Название объекта',
                    align: 'left',
                    value: 'name'
                },
                { text: 'Начало аренды', value: 'date_in' },
                { text: 'Конец аренды', value: 'date_out' },
                { text: 'Итоговая цена', value: 'total_price' }
            ],
            headerTable2:[
                {
                    text: 'Название объекта',
                    align: 'left',
                    value: 'name'
                },
                { text: 'Начало аренды', value: 'date_in' },
                { text: 'Конец аренды', value: 'date_out' },
                { text: 'Итоговая цена', value: 'total_price' }
            ],
            headerTable3:[
                {
                    text: 'Название объекта',
                    align: 'left',
                    value: 'name'
                },
                { text: 'Начало аренды', value: 'date_in' },
                { text: 'Конец аренды', value: 'date_out' },
                { text: 'Итоговая цена', value: 'total_price' }
            ],
            myOrders:[
                {name:'Название объекта1',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000'},
                {name:'Название объектa2',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000'},
                {name:'Название объекта3',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000'},
                {name:'Название объекта4',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000'},
                {name:'Название объекта5',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000'},
                {name:'Название объекта6',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000'},
                {name:'Название объекта7',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000'}
            ],
            ordersUsers:[
                {name:'Название объекта1',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000'},
                {name:'Название объектa2',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000'},
                {name:'Название объекта3',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000'},
                {name:'Название объекта4',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000'},
                {name:'Название объекта5',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000'},
                {name:'Название объекта6',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000'},
                {name:'Название объекта7',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000'}
            ],
            requestsUsers:[
                {name:'Название объекта1',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000'},
                {name:'Название объектa2',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000'},
                {name:'Название объекта3',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000'},
                {name:'Название объекта4',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000'},
                {name:'Название объекта5',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000'},
                {name:'Название объекта6',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000'},
                {name:'Название объекта7',date_in:'01.12.2013',date_out:'02.12.2013',total_price:'3000'}
            ]
        }
    }
}
</script>
