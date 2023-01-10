<template>
    <div class="login">
        <h2>login</h2>
        <table cellpadding="0" class="table" border="1">
            <thead>
                <tr>
                    <th>品牌</th>
                    <th>价格</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in data" :key="item.id">
                    <th>{{ item.name }}</th>
                    <th>{{ item.price }}</th>
                    <th>
                        <button @click="go({ name: 'Detail', params: { id: item.id } })">详情</button>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup lang='ts'>
import { useGo } from '../hooks/router';
import { data } from './list.json';

const go = useGo()
type ItemType = {
    name: string,
    price: number,
    id: number
}

</script>
<style scoped>
.login {
    background-color: red;
    width: 400px;
    height: 400px;
    font-size: 20px;
    color: white;
}

.table {
    width: 400px;
}
</style>
