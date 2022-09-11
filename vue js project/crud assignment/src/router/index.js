import {createRouter, createWebHistory} from 'vue-router'
import About from '../views/About'
import Home from '../views/Home'
import EditStudent from '../components/EditStudent'
import ShowStudent from '../components/ShowStudent'


const routes =[

    {
        path:'/',
        name:'Home',
        component:Home
    },

    {
        path:'/about',
        name:'About',
        component:About
    },

    {
        path:'/edit/:id',
        name:'EditStudent',
        component:EditStudent 
    },

    {
        path:'/students/:id',
        name:'ShowStudent',
        component:ShowStudent 
    },

    // ShowStudent
]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),routes,
})
export default router