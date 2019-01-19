import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import {RESOURCE_USER} from '../api';

Vue.use(Vuex);

const usersStore = new Vuex.Store({
    state: {
        users: [],
        user: {},
    },
    mutations: {
        FETCH(state, users) {
            state.users = users;
        },
        FETCH_ONE(state, user) {
            state.user = user;
        },
    },
    actions: {
        fetch({ commit }) {
            return axios.get(RESOURCE_USER)
                .then(response => commit('FETCH', response.data))
                .catch();
        },
        fetchOne({ commit }, id) {
            axios.get(`${RESOURCE_USER}/${id}/edit`)
                .then(response => commit('FETCH_ONE', response.data))
                .catch();
        },
        deleteUser({}, id) {
            axios.delete(`${RESOURCE_USER}/${id}`)
                .then(() => this.dispatch('fetch'))
                .catch();
        },
        editUser({}, user) {
            axios.put(`${RESOURCE_USER}/${user.id}`, {
                name: user.name,
                email: user.email,
                password: user.password,
            })
                .then(() => this.dispatch('fetch'));
        },
        addUser({}, user) {
            axios.post(`${RESOURCE_USER}`, {
                name: user.name,
                email: user.email,
                password: user.password,
            });
        }
    }
});

export default usersStore;
