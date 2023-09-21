<template>
    <header class="tot">
      <div class="login-form">
        <h2>Iniciar sesión</h2>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="username">Nombre de usuario:</label>
            <input type="text" id="username" v-model="username" required>
          </div>
          <div class="form-group">
            <label for="password">Contraseña:</label>
            <input type="password" id="password" v-model="password" required>
          </div>
          <button class="boton" type="submit">Iniciar sesión</button>
        </form>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        if (this.username === 'usuario' && this.password === 'contraseña') {
          alert('Inicio de sesión exitoso');
        } else {
          alert('Nombre de usuario o contraseña incorrectos');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .tot {
    display: grid;
    place-items: center;
    min-height: 90vh;
  }
  
  .login-form {
    width: 500px;
    height: 400px;
    max-width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form-group {
    margin-bottom: 10px;
    padding: 10px;
  }
  .boton{
   
    margin: 80px;
  }
  h2 {
    display: grid;
    place-items: center;
    }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  button {
  display: grid;
  place-items: center;
  width: 50%;
  padding: 10px;
  background-color: #007bff;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  margin: auto; 
}
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  