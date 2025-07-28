import App from '@/App.vue'
import AboutUs from '@/views/aboutUs.vue'
import home from '@/views/home.vue'
import ScraperView from '@/views/scraperView.vue'
import TrackerView from '@/views/trackerView.vue'


import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/scraper',
      name: 'scraper',
      component: ScraperView,
    },
    {
      path: '/tracker',
      name: 'tracker',
      component: TrackerView
    },
    {
      path: '/about',
      name: 'About Us',
      component: AboutUs
    }
  ],
})

export default router
