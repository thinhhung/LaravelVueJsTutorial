<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Laravel 5.5 - ReactJS Example</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li :class="['nav-item', {active: $route.name === 'users.index'}]">
                        <router-link class="nav-link" :to="{name: 'users.index'}">Users</router-link>
                    </li>
                    <li :class="['nav-item', {active: $route.name === 'users.create'}]">
                        <router-link class="nav-link" :to="{name: 'users.create'}">Add User</router-link>
                    </li>
                </ul>

            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
    }
</script>
