import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TipoCochesView from "@/views/TiposCochesView.vue";
import CocheView from "@/views/CocheView.vue";
import CompraView from "@/views/CompraView.vue";
import LoginView from "@/views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
    },
    {
      path: '/:id',
      name: 'TiposCoches',
      component: TipoCochesView,
      props: true
    },
    {
      path: '/:coche/:id',
      name: 'CocheParticular',
      component: CocheView,
      props: true
    },
    {
      path: '/:coche/:id/compra',
      name: 'Compra',
      component: CompraView,
      props: true
    }


  ]
})

export default router