<template>
    <div class="container">
      <div class="product-card">
        <div class="product-details">
          <div class="product-image">
            <img :src="producto.image" alt="Imagen del Producto" />
          </div>
          <div class="product-info">
            <h2>{{ producto.title }}</h2>
            <p>Precio: ${{ producto.price }}</p>
            <p>Descripción: {{ producto.description }}</p>
            <p>Categoría: {{ producto.category }}</p>
            <button @click="modificarProducto">Modificar</button>
            <button @click="eliminarProducto">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const producto = ref({});
  
  const cargarProducto = () => {
    axios
      .get('https://fakestoreapi.com/products/7')
      .then((response) => {
        producto.value = response.data;
      })
      .catch((error) => {
        console.error('Error al obtener el producto:', error);
      });
  };
  
  onMounted(cargarProducto);
  </script>
  
  <style scoped>
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
  