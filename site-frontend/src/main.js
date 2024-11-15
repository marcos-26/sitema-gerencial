import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

import Dashboard from '@/components/Dashboard'
import store from './store'
import '@/assets/css/tailwind.css'

// Auth pages
import Register from '@/pages/auth/Register.vue'
import Login from '@/pages/auth/Login.vue'
import Profile from '@/pages/auth/Profile.vue'

// Dashboard pages
import DashboardHome from '@/pages/Home'
import DashboardHomeInventory from '@/pages/Inventory'
import DashboardHomeAnalytics from '@/pages/Analytics'
import DashboardHomeCalendar from '@/pages/Calendar'
import DashboardHomeEnquiries from '@/pages/Enquiries'
// Products pages
import DashboardHomeAddProducts from '@/pages/products/AddProducts'
import DashboardHomeViewProducts from '@/pages/products/ViewProducts'
import DashboardHomeSettings from '@/pages/Settings.vue'
import DashboardHomeControls from '@/pages/Controls.vue'
import DashboardHomeNotices from '@/pages/Notices.vue'

Vue.config.productionTip = false
Vue.use(Router)

const routes = [
  // Auth routes
  { path: '/register', name: 'Register', component: Register },
  { path: '/login', name: 'Login', component: Login },
  { path: '/profile', name: 'Profile', component: Profile },

  // Dashboard routes
  {
    path: '/dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      // Check if token exists in localStorage
      const token = localStorage.getItem('token');
      if (token) {
        next(); // Allow access to dashboard pages
      } else {
        next('/login'); // Redirect to login if not authenticated
      }
    },
    children: [
      { path: 'home', name: 'DashboardHome', component: DashboardHome },
      { path: 'inventory', name: 'DashboardHomeInventory', component: DashboardHomeInventory },
      { path: 'analytics', name: 'DashboardHomeAnalytics', component: DashboardHomeAnalytics },
      { path: 'calendar', name: 'DashboardHomeCalendar', component: DashboardHomeCalendar },
      { path: 'enquiries', name: 'DashboardHomeEnquiries', component: DashboardHomeEnquiries },
      { path: 'products/add', name: 'DashboardHomeAddProducts', component: DashboardHomeAddProducts },
      { path: 'products/view', name: 'DashboardHomeViewProducts', component: DashboardHomeViewProducts },
      { path: 'settings', name: 'DashboardHomeSettings', component: DashboardHomeSettings },
      { path: 'controls', name: 'DashboardHomeControls', component: DashboardHomeControls },
      { path: 'notices', name: 'DashboardHomeNotices', component: DashboardHomeNotices }
    ]
  },

  // Redirect routes
  { path: '/', redirect: '/dashboard/home' },
  { path: '/inventory', redirect: '/dashboard/inventory' },
  { path: '/analytics', redirect: '/dashboard/analytics' },
  { path: '/calendar', redirect: '/dashboard/calendar' },
  { path: '/enquiries', redirect: '/dashboard/enquiries' },
  { path: '/products/add', redirect: '/dashboard/products/add' },
  { path: '/products/view', redirect: '/dashboard/products/view' },
  { path: '/settings', redirect: '/dashboard/settings' },
  { path: '/controls', redirect: '/dashboard/controls' },
  { path: '/notices', redirect: '/dashboard/notices' }
]

const router = new Router({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
