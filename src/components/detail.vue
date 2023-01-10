<template>
    <div>
        <button @click="prev">返回</button>
        <h2>detail</h2>
        <div>
            品牌:{{ item?.name }}
        </div>
        <div>
            价格:{{ item?.price }}
        </div>
        <div>
            ID:{{ item?.id }}
        </div>
    </div>
</template>
<script setup lang='ts'>
import { useRoute } from 'vue-router';
import { usePrev } from '../hooks/router';
import { data } from './list.json';
const route = useRoute()
const prev = usePrev()
const params = route.params
const item = data.find(v => v.id === Number(params.id))
</script>
<style scoped>

</style>
