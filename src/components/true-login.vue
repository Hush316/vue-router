<template>
    <div class="login">
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>Card name</span>
                    <el-button class="button" text>Login Page</el-button>
                </div>
            </template>
            <el-form ref="loginFormRef" :inline="true" :rules="rules" :model="formInline" class="demo-form-inline">
                <el-form-item label="账号" prop="user">
                    <el-input v-model="formInline.user" placeholder="请输入账号" />
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="formInline.password" placeholder="请输入密码" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">Login</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>
<script setup lang='ts'>
import { useGo } from '@/hooks/router';
import axios from 'axios';
import type { FormInstance, FormRules } from 'element-plus';
import { ElMessage } from 'element-plus';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const go = useGo()
const formInline = reactive({
    user: '',
    password: '',
})
const loginFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
    user: [
        { required: true, message: '请输入账号', trigger: 'blur' },
        { min: 3, max: 5, message: '长度应该在3-5位', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 3, max: 5, message: '长度应该在3-5位', trigger: 'blur' },
    ]
})

const onSubmit = () => {
    loginFormRef.value?.validate((valid) => {
        if (valid) {
            initRouter()
            // go({ path: 'home' })
            localStorage.setItem('token', 'i am kabuto')
        } else {
            ElMessage({ message: '密码验证失败', type: 'warning' })
        }
    })
}

const initRouter = async () => {
    const res = await axios.get('http://localhost:9999/login', { params: formInline })
    console.log(res);
    res.data.route.forEach((v: any) => {
        router.addRoute({
            path: v.path,
            name: v.name,
            component: () => import(`../components/${v.component}`)
        })
    });
    router.push('/home')
    console.log(router.getRoutes());

}
</script>
<style scoped>
.login {
    height: 1200px;
}
</style>
