<template>
    <v-dialog v-model="dialog" max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">{{mode}}</span>
          </v-card-title>
          <v-card-text>
                <v-form ref="addItem">
                  <v-text-field v-model="name" label="Title*" :rules="[rules.required]"></v-text-field>
                    <div v-if="false">
                    <h4>Upload photo</h4>
                    <input type="file" accept="image/jpeg,image/png" class="input_file"><br></div>
                    <v-menu top left>

                            <v-text-field slot="activator" v-model="categories[category].title" label="Category*" :rules="[rules.required]" readonly></v-text-field>
                        <v-list style="height: 200px;">
                            <v-list-tile
                                    v-for="(item, index) in categories"
                                    :key="index"
                                    @click="category = index"
                                    style="background: white"
                            >
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            </v-list-tile>
                        </v-list>
                    </v-menu>
                  <v-textarea v-model="description" label="Description*" :rules="[rules.required]"></v-textarea>
                  <v-text-field v-model.number="price" label="Price*" :mask="'########'" :rules="[rules.required]"></v-text-field>
                </v-form>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click="addItem()">Add</v-btn>
          </v-card-actions>
        </v-card>
        </v-dialog>
</template>

<script>
export default {
    
}
</script>
