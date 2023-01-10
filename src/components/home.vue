<template>
    <div>
        <template v-if="true">
            <div v-for="item in 12">
                <div>{{ item }}</div>
            </div>
        </template>
        <div class="w-64 h-60 bg-[red]">HOME</div>
        <router-link to="/demo">demo1</router-link>
        <router-link style="margin-left:20px" to="/demo2">demo2</router-link>
        <router-link style="margin-left:20px" to="/demo3">demo3</router-link>
        <router-view></router-view>
    </div>
</template>
<script setup lang='ts'>

</script>
<style scoped>

</style>
