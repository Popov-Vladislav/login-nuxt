import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    state: {
        user: {},
    },
    mutations: {
        joinUser(state, user) {
            state.user.name = user.name
            state.user.id = user.id
            localStorage.setItem('user', JSON.stringify(state.user))
        },
        disconnectUser(state) {
            state.user = {}
            localStorage.removeItem('user')
        },
    },
    actions: {
        joinUser({ commit }, user) {
            commit('joinUser', user)
        },
        disconnectUser({ commit }) {
            commit('disconnectUser')
        },

    },
    getters: {
        user: s => s.user,
        userId: s => s.user.id
    },
    modules: {},
})

export default store