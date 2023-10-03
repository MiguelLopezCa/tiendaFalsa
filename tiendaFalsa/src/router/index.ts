import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // Ruta raíz
      component: () => import('@/views/Principal.vue'),
      meta: {
        title: 'Principal',
        requiresAuth: true, 
      },
    },
    {
      path: '/login', 
      component: () => import('../components/Login.vue'),
      meta: {
        title: 'Inicio de Sesión',
        requiresAuth: false, 
      },
    },
    {
      path: '/productos',
      component: () => import('../components/Productos.vue'),
      meta: {
        title: 'Productos',
        requiresAuth: true, 
      },
    },
    {
      path: '/agregar', 
      component: () => import('../components/AgregarPro.vue'),
      meta: {
        title: 'Agregar Productos',
        requiresAuth: true,
      },
    },,
    {
      path: '/modificar', 
      component: () => import('../components/ModificarPro.vue'),
      meta: {
        title: 'Modificar Productos',
        requiresAuth: true,
      }
    },
    {
      path: '/producto', 
      component: () => import('../components/Producto.vue'),
      meta: {
        title: 'Producto',
        requiresAuth: true, 
      }
    }
  ],

});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('token');
    if (token) {
  
      next();
    } else {
    
      next('/login');
    }
  } else {
   
    next();
  }
});

export default router;
