
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const productos = ref([]);

const agregarProductos = () => {
      router.push('/agregar'); // Navega a la ruta '/agregar'
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
  router.push('/modificar');
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

<template>
  <div class="container">
    <header class="header">
      <h1>Lista de Productos</h1>
    </header>
    <nav class="nav">
      <button @click="agregarProductos()">Agregar Productos</button>    </nav>
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
              <p>Descripcion: {{ producto.description }}</p>
              <p>Categoria: {{ producto.category }}</p>
            <button @click="modificarProducto(producto.id)">Modificar</button>
            <button @click="eliminarProducto(producto.id)">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

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
  margin-left: 20px; /* Espacio entre la imagen y el texto */
}

.product-info h2 {
  margin-left: 20px; /* Espacio entre la imagen y el texto */
}

.product-info p {
  margin: 20px;
}
</style>
