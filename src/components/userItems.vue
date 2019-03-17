<template>
    <div style="margin:100px ">
        <h1>This is my items page</h1>

        <v-btn @click="dialog=!dialog">Добавить вещь</v-btn>
        <v-dialog v-model="dialog" max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Режим добавления</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Название*" required></v-text-field>
                 </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Изображение*" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 d-flex>
                    <v-text-field label="Категория*" required></v-text-field>
                </v-flex>
                    
                  
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Описание*" required></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click="dialog = false; addItem()">Add</v-btn>
          </v-card-actions>
        </v-card>
        </v-dialog>
    </div>
</template>


<script>
export default {
    name:'userItems',
    data(){
        return{
        dialog:false}
    },
    methods:{
        addItem(){

        }
    }
}
</script>
