import '@/assets/style/index.css';
import ElementUi from 'element-plus';
import 'element-plus/dist/index.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
const app = createApp(App)
app.use(router)
app.use(ElementUi)




app.mount('#app')
