<template>
  <div class="container">
    <header class="header">
      <h1>Lista de Productos</h1>
    </header>
    <nav class="nav">
      <button @click="agregarProductos()" class="agregar">Agregar Productos</button>
      <button @click="cerrarSesion" class="cerrar-sesion">Cerrar Sesión</button>
    </nav>
    <section class="section">
      <div v-if="mostrarProductoNuevo" class="proNue">
        <div v-if="modVar">
          <producto></producto>
        </div>
        <div v-else>
          <productoMo></productoMo>
        </div>
    </div>
    <div v-if="mostrarProductoNuevo">
      <button @click="modificarProducto" class="custom-button">Modificar</button>
      <button @click="eliminarProducto" class="custom-button delete-button">Eliminar</button>
      </div>

      <div class="product-list">
        <div class="product-card" v-for="producto in productos" :key="producto.id">
          <div class="product-details">
            <div class="product-image">
              <img :src="producto.image" alt="Imagen del Producto" />
            </div>
            <div class="product-info">
              <h2>{{ producto.title }}</h2>
              <p>Precio: ${{ producto.price }}</p>
              <p>Descripción: {{ producto.description }}</p>
              <p>Categoría: {{ producto.category }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import producto from '../components/Producto.vue';
import productoMo from '../components/ProductoMod.vue';

const router = useRouter();
const productos = ref([]);

const mostrarProductoNuevo = ref(localStorage.getItem('mostrarProductoNuevo') === 'true');
const modVar = ref(localStorage.getItem('modVar') === 'true');

const agregarProductos = () => {
  router.push('/agregar');
  localStorage.setItem('mostrarProductoNuevo', 'true');
};

const cargarProductos = () => {
  axios
    .get('https://fakestoreapi.com/products')
    .then((response) => {
      productos.value = response.data;
    })
    .catch((error) => {
      console.error('Error al obtener los productos:', error);
    });
};

const alternarModVar = () => {
  modVar.value = !modVar.value;
  localStorage.setItem('modVar', modVar.value.toString());
};

const modificarProducto = () => {
  alternarModVar();
  router.push('/modificar');
};

const eliminarProducto = (id) => {
  if (confirm('¿Desea eliminar el producto?')) {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        alert('Producto eliminado');
        mostrarProductoNuevo.value = false;
      })
      .catch((error) => {
        console.error('Error al eliminar el producto:', error);
      });
    localStorage.removeItem('mostrarProductoNuevo');
  } else {
  }
};

const cerrarSesion = () => {
  localStorage.removeItem('mostrarProductoNuevo'); 
  localStorage.removeItem('token'); 
  router.push('/login'); 
};


onMounted(cargarProductos);
</script>

<style scoped>
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "nav section";
  grid-template-columns: 1fr;
  height: 100vh;
}

.header {
  grid-area: header;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #007bff;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 10px;
  font-size: 24px;
}

.nav {
  grid-area: nav;
  background-color: #f0f0f0;
  width: 20vw;
  position: sticky;
  top: 0;
  z-index: 50;
  padding: 10px;
}

.section {
  grid-area: section;
  display: flex;
  flex-wrap: wrap; 
  justify-content: flex-start; 
  align-items: flex-start; 
  padding: 10px;
}

.proNue {
   height: 250px; 
   margin-bottom: 10px;}

.product-list {
  display: grid;
  gap: 20px; 
  text-align: start;
}

.product-card {
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  flex-basis: calc(33.33% - 20px); 
}

.product-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  text-align: left;
  padding-left: 20px; 
}

.product-image img {
  max-width: 100%;
  height: auto;
  max-height: 100px; 
}

.product-info h2 {
  font-size: 20px;
  margin: 10px 0;
}

.product-info p {
  margin: 10px 0;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
}

.button-container button {
  margin-bottom: 10px;
}

.cerrar-sesion,
.agregar {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;

}
.cerrar-sesion {
  background-color: #ff0000;
}
.cerrar-sesion:hover {
  background-color: hsl(0, 100%, 50%);
}
.custom-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px; 
}

.delete-button {
  background-color: #ff3333;
}
</style>