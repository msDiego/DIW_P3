import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BerlinaView from "@/views/BerlinaView.vue";
import CompactoView from "@/views/CompactoView.vue";
import MonovolumenView from "@/views/MonovolumenView.vue";
import DeportivoView from "@/views/DeportivoView.vue";
import TipoCochesView from "@/views/TiposCochesView.vue";

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
    }
  ]
})

export default router
