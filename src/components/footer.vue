<template>
    <div>
        <hr>
        <h1>我是父路由</h1>
        <div>
            <router-link to="/user">login</router-link>
            <router-link style="margin-left: 20px;" to="/user/reg">reg</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script setup lang='ts'>

</script>
<style scoped>

</style>
