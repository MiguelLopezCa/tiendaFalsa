import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // Ruta raíz
      component: () => import('@/views/Principal.vue'), // Componente correspondiente a la ruta
      meta: {
        title: 'Principal' // Opcional: puedes agregar metainformación personalizada
      }
    },
    {
      path: '/login', // Ejemplo de otra ruta
      component: () => import('../components/Login.vue'),
      meta: {
        title: 'Incio de Sesion' // Metainformación para esta ruta
      }
    },
    
    {
      path: '/productos', // Ejemplo de otra ruta
      component: () => import('../components/Productos.vue'),
      meta: {
        title: 'Productos' // Metainformación para esta ruta
      }
    },
    
    {
      path: '/agregar', // Ejemplo de otra ruta
      component: () => import('../components/AgregarPro.vue'),
      meta: {
        title: 'Agregar Productos' // Metainformación para esta ruta
      }
    },
    {
      path: '/modificar', // Ejemplo de otra ruta
      component: () => import('../components/ModificarPro.vue'),
      meta: {
        title: 'Agregar Productos' // Metainformación para esta ruta
      }
    },
    {
      path: '/producto', // Ejemplo de otra ruta
      component: () => import('../components/Producto.vue'),
      meta: {
        title: 'Agregar Productos' // Metainformación para esta ruta
      }
    }
  
  ]
});

export default router;
