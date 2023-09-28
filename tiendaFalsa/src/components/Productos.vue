<template>
  <div class="container">
    <header class="header">
      <h1>Lista de Productos</h1>
    </header>
    <nav class="nav">
      <button @click="agregarProductos()">Agregar Productos</button>
    </nav>
    <section class="section">
      <div class="product-list">
        <div class="product-card" v-for="producto in productos" :key="producto.id">
          <div class="product-details">
            <div class="product-image">
              <img :src="producto.image" alt="Imagen del Producto" />
            </div>
            <div class="product-info">
              <h2>{{ producto.title }}</h2>
              <p>Precio: ${{ producto.price }}</p>
            </div>
            <div class="product-actions">
              <button @click="modificarProducto(producto.id)">Modificar</button>
              <button @click="eliminarProducto(producto.id)">Eliminar</button>
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

const router = useRouter();
const productos = ref([]);

const agregarProductos = () => {
  router.push('/agregar');
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

const modificarProducto = (id) => {
  router.push('/agregar');
};

const eliminarProducto = (id) => {
  fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "DELETE"
  })
    .then(res => res.json())
    .then(json => {
      console.log(json);
      cargarProductos();
      alert("Producto eliminado")
    })
    .catch(error => {
      console.error('Error al eliminar el producto:', error);
    });
};

onMounted(cargarProductos);
</script>

<style scoped>
.container {
  display: grid;
  grid-template-areas:
    "header header "
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
}

.nav {
  grid-area: nav;
  background-color: #f0f0f0;
  width: 20vw;
}

.section {
  grid-area: section;
  display: block;
  width: 77vw;
}

.product-list {
  display: grid;
  text-align: start;
}

.product-card {
  border: 1px solid #ccc;
  display: flex;
  padding: 0px;
}

.product-details {
  display: flex;
  align-items: start;
}

.product-image img {
  max-width: 140px;
}

.product-info {
  margin-left: 20px;
}

.product-info h2 {
  margin-left: 20px;
}

.product-info p {
  margin: 20px;
}

.product-actions {
  display: flex;
  flex-direction: column;
}

.product-actions button {
  margin-top: 10px;
}
</style>
