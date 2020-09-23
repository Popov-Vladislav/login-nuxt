<template>
    <v-app id="inspire">
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Зайти на сайт</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="valid" @submit.prevent="onSubmit">
                  <v-text-field
                    label="Логин"
                    name="login"
                    prepend-icon="mdi-account"
                    v-model="name"
                    :rules="nameRules"
                    :counter="15"
                    type="text"
                    required
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Пароль"
                    name="password"
                    :rules="passwordRules"
                    v-model="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    required
                  ></v-text-field>
                  <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn 
                color="primary"
                :disabled="!valid"
                type="submit"
                >Войти</v-btn>
              </v-card-actions>
                </v-form>
              </v-card-text>
              
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Имя обязательно',
        v => v.length > 5 || 'Имя должно быть больше 5 символов',
        v => v.length <= 10 || 'Имя не болжно превышать 15 символов',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Пароль обязателен',
        v => v.length > 6 || 'Пароль должен быть меньше 6 символов',
        v => v.length <= 20 || 'Пароль должен быть больше 20 символов'
      ],
    }),
    methods: {
      onSubmit(){
        const user = {
          name: this.name,
          id: Date.now()
        }
        this.$store.dispatch('joinUser', user)
        this.$router.push('/users/' + user.id)
      }
    },
  }
</script>