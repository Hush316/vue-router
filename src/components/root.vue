<template>
    <div>
        <h2>root</h2>
        <router-link to="/user1">user1</router-link>
        <router-link style="margin-left:20px ;" to="/user2">user2</router-link>
        <router-view></router-view>
        <router-view name="bbb"></router-view>
        <router-view name="ccc"></router-view>
    </div>
</template>
<script setup lang='ts'>
</script>
<style scoped>

</style>
