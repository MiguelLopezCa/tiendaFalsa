<template>
    <div class="product-add">
      <h1>Agregar Producto</h1>
      <form @submit.prevent="agregarProducto">
        <label for="titulo">Título:</label>
        <input type="text" id="titulo" v-model="nuevoProducto.title" required />
  
        <label for="precio">Precio:</label>
        <input type="number" id="precio" v-model="nuevoProducto.price" required />
  
        <label for="descripcion">Descripción:</label>
        <textarea id="descripcion" v-model="nuevoProducto.description" required></textarea>
  
        <label for="imagen">URL de la Imagen:</label>
        <input type="text" id="imagen" v-model="nuevoProducto.image" required />
  
        <label for="categoria">Categoría:</label>
        <input type="text" id="categoria" v-model="nuevoProducto.category" required />
  
        <button type="submit">Agregar</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        nuevoProducto: {
          title: '',
          price: 0,
          description: '',
          image: '',
          category: '',
        },
      };
    },
    methods: {
      agregarProducto() {
        axios
          .post('https://fakestoreapi.com/products', this.nuevoProducto)
          .then((response) => {
            console.log('Producto agregado:', response.data);
            // Limpiar el formulario después de agregar el producto
            this.nuevoProducto = {
              title: '',
              price: 0,
              description: '',
              image: '',
              category: '',
            };
          })
          .catch((error) => {
            console.error('Error al agregar el producto:', error);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  .product-add {
    text-align: center;
  }
  
  form {
    display: grid;
    gap: 20px;
  }
  
  label {
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="number"],
  textarea {
    width: 100%;
    padding: 10px;
  }
  
  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
  }
  </style>
  