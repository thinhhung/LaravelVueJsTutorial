<template>
    <div>
        <h1>Create An User</h1>
        <form @submit.prevent="add">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Name"
                       v-model="name" required />
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Email"
                       v-model="email" required />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password"
                       v-model="password" required />
            </div>
            <button type="submit" class="btn btn-primary">Add User</button>
        </form>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                name: null,
                email: null,
                password: null,
            }
        },
        methods: {
            add: function () {
                this.$store.dispatch('addUser', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                });
                this.$router.push({name: 'users.index'});
            }
        }
    }
</script>
