import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)


const routes = [
  {
    path: "/",
    component: () => import('@/components/index')
  },
  {
    path: "/basic-charts/line",
    component: () => import('@/components/basic-charts/line')
  },
  {
    path: "/basic-charts/bar",
    component: () => import('@/components/basic-charts/bar')
  },
  {
    path: "/basic-charts/pie",
    component: () => import('@/components/basic-charts/pie')
  },
  {
    path: "/basic-charts/radar",
    component: () => import('@/components/basic-charts/radar')
  },
  {
    path: "/basic-charts/gauge",
    component: () => import('@/components/basic-charts/gauge')
  },
  {
    path: "/decorations/loading",
    component: () => import('@/components/decorations/loading')
  },
  {
    path: "/decorations/border",
    component: () => import('@/components/decorations/border')
  },
  {
    path: "/decorations/percent-pond",
    component: () => import('@/components/decorations/percent-pond')
  },
  {
    path: "/decorations/digital-flop",
    component: () => import('@/components/decorations/digital-flop')
  },
  {
    path: "/decorations/others",
    component: () => import('@/components/decorations/others')
  },
  {
    path: "/decorations/dividing-line",
    component: () => import('@/components/decorations/dividing-line')
  },
  {
    path: "/advanced-charts/active-ring",
    component: () => import('@/components/advanced-charts/active-ring')
  },
  {
    path: "/advanced-charts/cone",
    component: () => import('@/components/advanced-charts/cone')
  },
  {
    path: "/advanced-charts/capsule",
    component: () => import('@/components/advanced-charts/capsule')
  },
  {
    path: "/advanced-charts/flyline",
    component: () => import('@/components/advanced-charts/flyline')
  },
  {
    path: "/advanced-charts/water-level",
    component: () => import('@/components/advanced-charts/water-level')
  },
  {
    path: "/advanced-charts/scroll",
    component: () => import('@/components/advanced-charts/scroll')
  },
  {
    path: "/H2020",
    component: () => import('@/components/H2020')
  }
];


const router = new VueRouter({
  routes
});

export default router
