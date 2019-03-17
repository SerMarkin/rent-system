<template>
    <div>
        <h1 style="text-align:center">This is my items page</h1>
        <div style="display:flex; justify-content:center">
            <v-btn @click="dialog=!dialog">Добавить вещь</v-btn>
        </div>
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

        <v-layout row wrap>
            <v-flex pa-1 xs12 sm6  md3  v-for="(item,index) of items" :key="index" align-self-center>
                <show-item :item="item" :showButton="false" ></show-item>
            </v-flex>
        </v-layout>

    </div>
</template>


<script>
import item from '../components/item'

export default {
    name:'userItems',
    data(){
        return{
        dialog:false,
        items:[
        {name:'Name0',descr:'lorem',price:'100'},
        {name:'Name1',descr:'lorem',price:'100'},
        {name:'Name2',descr:'lorem',price:'100'},
        {name:'Name3',descr:'lorem',price:'100'},
        {name:'Name4',descr:'lorem',price:'100'},
        {name:'Name5',descr:'lorem',price:'100'},
        {name:'Name6',descr:'lorem',price:'100'},
        {name:'Name7',descr:'lorem',price:'100'},
        {name:'Name8',descr:'lorem',price:'100'},
        {name:'Name9',descr:'lorem',price:'100'},
      ]
        }
    },
    methods:{
        addItem(){

        }
    },
    components:{
        'show-item':item
    }
}
</script>
