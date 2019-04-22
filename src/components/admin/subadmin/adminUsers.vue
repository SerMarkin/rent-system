<template>
    <v-app>
        <v-data-table
                :headers="headerTable2"
                :items="users"
        >
            <template slot="items" slot-scope="props">
                <tr>
                    <td>{{ props.item.id }}</td>
                    <td>{{ props.item.name }}</td>
                    <td>{{ props.item.email }}</td>
                    <td>{{ props.item.phone }}</td>
                    <td class="text-xs-left">
                        <v-btn v-if="props.item.role_id === 1" icon @click="Block(props.item.id,0)">
                            <v-icon>cancel</v-icon>
                        </v-btn>
                        <v-btn v-else icon @click="Block(props.item.id,1)">
                            <v-icon>check</v-icon>
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
    </v-app>
</template>

<script>
    import axios from 'axios/index'
    export default {
        name: "adminUsers",
        data(){
            return{
                headerTable2:[

                    {text: 'ID',   align: 'left',   value: 'id'},
                    {
                        text: 'Name',
                        align: 'left',
                        value: 'name'
                    },
                    { text: 'Email', value: 'email' },
                    { text: 'phone', value: 'phone' },
                    { text: 'Status', value: 'role_id' },
                ],
                users:[]
                /*
                created_at: (...)
                email: (...)
                id: (...)
                name: (...)
                password_digest: (...)
                phone: (...)
                role_id: (...)
                surname: (...)
                updated_at: (...)
                username: (...)
                */
            }
        },
        methods:{
            updateUsers(){
                const url = this.$store.state.url + 'users'
                const config = {
                    headers:{
                        'Authorization':  this.$localStorage.get('token')
                    }
                }
                axios.get(url,config)
                    .then((resp)=>{
                        this.users = resp.data.data
                        console.log(resp)
                    })
            },
            Block(id,role){
                const url = this.$store.state.url + 'users/' + id
                const config = {
                    headers:{
                        'Authorization':  this.$localStorage.get('token')
                    }
                }
                axios.patch(url,{role_id:role},config)
                    .then((resp)=>{
                        this.updateUsers()
                    })
            }
        },
        beforeMount() {
            this.updateUsers()
        }
    }
</script>

<style scoped>

</style>