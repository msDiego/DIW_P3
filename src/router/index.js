import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TipoCochesView from "@/views/TiposCochesView.vue";
import CocheView from "@/views/CocheView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
    }

  ]
})

export default router
