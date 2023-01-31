import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BerlinaView from "@/views/BerlinaView.vue";
import CompactoView from "@/views/CompactoView.vue";
import MonovolumenView from "@/views/MonovolumenView.vue";
import DeportivoView from "@/views/DeportivoView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/berlina',
      name: 'berlina',
      component: BerlinaView
    },
    {
      path: '/compacto',
      name: 'compacto',
      component: CompactoView
    },
    {
      path: '/monovolumen',
      name: 'monovolumen',
      component: MonovolumenView
    },
    {
      path: '/deportivos',
      name: 'deportivos',
      component: DeportivoView
    }
  ]
})

export default router
