<template>
    <div class="product-container">
      <div class="form-container">
        <h2 class="h">Modificar Producto</h2>
        <form @submit.prevent="modificarProducto()">
          <div class="form-group">
            <label for="title">Título:</label>
            <input type="text" id="title" v-model="producto.title" required />
          </div>
          <div class="form-group">
            <label for="price">Precio:</label>
            <input id="price" v-model="producto.price" required />
          </div>
          <div class="form-group">
            <label for="description">Descripción:</label>
            <textarea id="description" v-model="producto.description" required></textarea>
          </div>
          <div class="form-group">
            <label for="category">Categoría:</label>
            <input type="text" id="category" v-model="producto.category" required />
          </div>
          <div class="form-group">
            <label for="image">Imagen:</label>
            <input type="url" id="image" v-model="producto.image" />
          </div>
          <div class="button-container">
            <button type="submit" class="button">Modificar</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios'; 
  
  const router = useRouter();
  const producto = ref({
    id: 7,
    title: 'test product',
    price: '13.5',
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
  });
  const modificarProducto=()=>{
    alert ('Producto modificado')
    producto.value = {
        title: '',
        price: '',
        description: '',
        image: '',
        category: '',
  }
  router.push('/productos');
}
  
  const volver = () => {
    router.push('/productos');
  };

  </script>

  <style scoped>
  .product-container {
    text-align: center;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 20px auto;
    width: 450px;
    height: auto;
    background-color: #f7f7f7;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }
  
  .form-container {
    margin-top: 20px;
    text-align: left;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
  }
  
  .form-group input,
  .form-group textarea {
    width: 95%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .button-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px;
    width: 100px;
  }
  
  .button:hover {
    background-color: #0056b3;
  }
  
  .h{
    position: absolute;
    top: 0px;
    right: 150px;
  }
  </style>
