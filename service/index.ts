import express, { Express, Request, Response } from 'express'

const   app: Express = express()

app.get('/login', (req: Request, res: Response) => {
    res.header('Access-Control-Allow-Origin', "*");
    if (req.query.user == '333' && req.query.password == '333') {
        res.json({
            route: [
                {
                    path: '/demo',
                    name: 'Demo1',
                    component: 'demo1.vue'
                },   
                {
                    path: '/demo2',
                    name: 'Demo2',
                    component: 'demo2.vue'
                },
                {
                    path: '/demo3',
                    name: 'Demo3',
                    component: 'demo3.vue'
                },
            ]
        })
    } else if (req.query.user == '222' && req.query.password == '333') {
        res.json({
            route: [
                {
                    path: '/demo',
                    name: 'Demo1',
                    component: 'demo1.vue'
                },
                {
                    path: '/demo2',
                    name: 'Demo2',
                    component: 'demo2.vue'
                }
            ]
        })
    } else {
        res.json({
            code: 400,
            message: '账号密码错误'
        })
    }
})


app.listen(9999, () => {
    console.log('http://localhost:9999');
})
