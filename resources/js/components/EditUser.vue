<template>
    <div>
        <h1>Edit The User</h1>
        <form @submit.prevent="edit">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Name"
                       v-model="user.name" required />
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Email"
                       v-model="user.email" required />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password"
                       v-model="user.password" required />
            </div>
            <button type="submit" class="btn btn-primary">Save User</button>
        </form>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        methods: {
            edit: function () {
                this.$store.dispatch('editUser', this.user);
                this.$router.push({name: 'users.index'});
            }
        },
        beforeCreate: function () {
            this.$store.dispatch('fetchOne', this.$route.params.id);
        },
        computed: {
            ...mapState(['user']),
        }
    }
</script>
