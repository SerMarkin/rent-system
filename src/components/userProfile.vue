<template>
    <div style="text-align:left">
        <h1>This is my profile page</h1>
        <v-text-field v-model="name" label="Имя"></v-text-field>
        <v-text-field v-model="surname" label="Фамилия"></v-text-field>
        <v-text-field v-model="lastname" label="Отчество"></v-text-field>
        <v-text-field v-model="email" label="Электронная почта" readonly></v-text-field>
        <h2>Безопасность</h2>
        <v-text-field v-model="oldPass" label="Старый пароль" type="password"></v-text-field>
        <v-text-field v-model="newPass" label="Новый пароль" type="password"></v-text-field>
        <v-btn @click="changePass">Изменить пароль</v-btn>
    </div>
</template>


<script>
export default {
    name:"userProfile",
    data(){
        return{
            name: "",
            surname: "",
            lastname: "",
            email: "",
            oldPass: "",
            newPass: "",
        }        
    },
    methods:{
        changePass(){
            
        }
    }
}
</script>
