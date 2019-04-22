<template>
    <v-app>
        <v-tabs ref="tabs" centered color="cyan" dark icons-and-text v-model="activeTab">
            <v-tabs-slider color="yellow"></v-tabs-slider>
            <v-tab :key="0" @click="$router.push('/admin?tab=0')">
                My profile
            </v-tab>

            <v-tab :key="1" @click="$router.push('/admin?tab=1')">
                All users
            </v-tab>

            <v-tab :key="2" @click="$router.push('/admin?tab=2')">
                Categories
            </v-tab>

            <v-tab-item :key="0">
                <userProfilez></userProfilez>
            </v-tab-item >

            <v-tab-item :key="1">
                <adminUsers :admin="true"></adminUsers>
            </v-tab-item>

            <v-tab-item :key="2">
                <adminCategories :admin="true"></adminCategories>
            </v-tab-item>

        </v-tabs>


    </v-app>
</template>

<script>
    import adminCat from "./subadmin/adminCategories";
    import userProfile from "../profile/subprofile/userProfile"
    import adminUsers from "./subadmin/adminUsers";
    export default {
        name: "admin",
        components:{
            'userProfilez':userProfile,
            'adminCategories':adminCat,
            'adminUsers':adminUsers
        },
        data(){
            return{

                activeTab: 1,
                toActive:['profile','items','orders']
            }
        },
    }
</script>

<style scoped>

</style>