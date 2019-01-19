<template>
    <div>
        <h1>Users</h1>
        <div class="clearfix">
            <router-link class="btn btn-success pull-righ" :to="{name: 'users.create'}">Add User</router-link>
        </div><br />
        <table class='table table-hover'>
            <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Actions</td>
            </tr>
            </thead>
            <tbody>
            <user-row v-for="user in users" :user="user" :key="user.id"></user-row>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import UserRow from "./UserRow";
    export default {
        components: {UserRow},
        computed: {
            ...mapState(['users']),
        },
        created: function () {
            this.$store.dispatch('fetch');
        }
    }
</script>
