<template>
    <v-layout column justify-center align-center>
    <v-flex xs12 sm8>
    <v-card
    class="mx-auto"
    max-width="344"
    tile
  > 
    <div class="text-center pt-4">
            <v-avatar color="blue" size='62'>
                <v-icon dark>mdi-account-circle</v-icon>
            </v-avatar>
    </div>
    <v-row>
        <v-col class="py-0">
          <v-list-item >
            <v-list-item-content>
              <v-list-item-title class="title text-center">{{user.name}}</v-list-item-title>
              <v-list-item-subtitle class="text-center">gaemvlad@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
    </v-row>
    <div class="text-center pb-4">
        <v-btn color="primary" dark @click="disconnectUser">Выйти</v-btn>
    </div>
  </v-card>
  </v-flex>
  </v-layout>
</template>

<script>
export default {
    validate({params}) {
        debugger
        return /^\d+$/.test(params.id) && params.id
    },
    computed: {
        user(){
            return this.$store.getters.user
        }
    },
    methods:{
        disconnectUser(){
            this.$store.dispatch('disconnectUser')
            this.$router.push('/?message=disconnectUser')
        }
    },
    
}
</script>