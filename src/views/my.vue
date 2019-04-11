<template>
    <v-app>
        <v-tabs ref="tabs" centered color="cyan" dark icons-and-text v-model="activeTab">
      <v-tabs-slider color="yellow"></v-tabs-slider>
      <v-tab :key="0" @click="$router.push('/my?tab=0')">
        My profile
      </v-tab>

      <v-tab :key="1" @click="$router.push('/my?tab=1')">
        My items
      </v-tab>

      <v-tab :key="2" @click="$router.push('/my?tab=2')">
        My orders
      </v-tab>

      <v-tab-item :key="0">
          <userProfilez></userProfilez>
      </v-tab-item >

      <v-tab-item :key="1">
        <userItemsz></userItemsz>
      </v-tab-item>

      <v-tab-item :key="2">
       <userOrdersz></userOrdersz>
      </v-tab-item>

    </v-tabs>


    </v-app>
</template>

<script>
import userProfile from "../components/userProfile";
import userItems from "../components/userItems";
import userOrders from "../components/userOrders";
export default {
    name: 'myz',
    data(){
        return{

            activeTab: 1,
            toActive:['profile','items','orders']
        }
    },
    methods:{
    },
    components:{
        'userProfilez':userProfile,
        'userItemsz':userItems,
        'userOrdersz':userOrders
    },
    mounted() {
        this.activeTab = 3
        console.log(this.$route)
        if (!!this.$route.query.tab){
            this.activeTab = parseInt(this.$route.query.tab,10)
        }
    }
}
</script>
