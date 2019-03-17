<template>
    <div>
        <v-tabs centered color="cyan" dark icons-and-text v-model="activeTab">
      <v-tabs-slider color="yellow"></v-tabs-slider>  
      <v-tab >
        My profile
      </v-tab>
  
      <v-tab >
        My items
      </v-tab>
  
      <v-tab >
        My orders
      </v-tab>
  
      <v-tab-item>
        
          <userProfilez></userProfilez>
       
      </v-tab-item>
      <v-tab-item>
        <userItemsz></userItemsz>
      </v-tab-item>
      <v-tab-item>
       <userOrdersz></userOrdersz>
      </v-tab-item>
    </v-tabs>
        
        
    </div>
</template>

<script>
import userProfile from "../components/userProfile";
import userItems from "../components/userItems";
import userOrders from "../components/userOrders";
export default {
    name: 'myz',
    data(){
        return{
            
            activeTab: 0
        }
    },
    methods:{
        
    },
    components:{
        'userProfilez':userProfile,
        'userItemsz':userItems,
        'userOrdersz':userOrders
    }
}
</script>
