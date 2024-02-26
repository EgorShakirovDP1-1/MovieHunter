<template>
<div class="shell">
      
  <div class="loginform">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username:</label>
      
  <input v-model="username" type="text" id="username" required />
        <br />
        <label for="password">Password:</label>
        <input v-model="password" type="password" id="password" required />
      </div>
        <br />
        
        <button class="glow-on-hover" type="button">LOGIN</button>
      </form>
      <RouterLink class="btn" to="/signup"><button class="glow-on-hover" type="button"> DON'T HAVE AN ACCOUNT? SIGN UP FOR FREE!</button></RouterLink>
  </div>
</div>
   
 
</template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Add your authentication logic here
        console.log('Logging in with:', this.username, this.password);

       

      }
    }
  };
  </script>
  
  <style scoped>
  .shell{
    margin-top: 50px;
  }
    .form-group {
    
    margin-top: 50px;
  }
  .loginform{
    max-width: 400px;
    margin: auto;
    padding: 20px;
    
    
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background:
linear-gradient(63deg, rgb(63, 62, 62) 23%, transparent 50%) 7px 0,
linear-gradient(63deg, transparent 74%, rgb(63, 62, 62) 78%),
linear-gradient(63deg, transparent 34%, rgb(63, 62, 62) 84%, rgb(63, 62, 62) 58%, transparent 62%),
#444;
background-size: 16px 48px;
    text-align: center;
  }
  
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #000;
}

.glow-on-hover {
    width: 220px;
    height: 50px;
    border: none;
    outline: none;
    color: rgb(4, 3, 3);
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    margin-top: 25px;
    margin-bottom: 45px;
}

.glow-on-hover:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.glow-on-hover:active {
    color: #000
}

.glow-on-hover:active:after {
    background: transparent;
}

.glow-on-hover:hover:before {
    opacity: 1;
}

.glow-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background:

rgb(171, 171, 171);
background-size: 16px 48px;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
</style>