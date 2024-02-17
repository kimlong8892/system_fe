import { createRouter, createWebHistory } from 'vue-router'
import AdminNotFound from "@/views/Admin/404/NotFound.vue";
import WebHome from "@/views/Web/Home/Home";
import PostDetail from "@/views/Web/Post/PostDetail";

const AdminRouter = [
    {
        path: '/',
        name: 'web.home',
        component: WebHome
    },
    {
        path: '/post/:id',
        name: 'web.post_detail',
        component: PostDetail
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes:  [
        ...AdminRouter,
        {path: '/:catchAll(.*)', component: AdminNotFound}
    ]
});

export default router;