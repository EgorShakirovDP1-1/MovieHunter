<template>
  <div class="signup-form">
    <h2>Signup</h2>
    <form @submit.prevent="signup">
      <div class="form-group">
        <label for="username">Username:</label>
        <input v-model="username" type="text" id="username" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input v-model="email" type="email" id="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input v-model="password" type="password" id="password" required />
      </div>
      <button type="submit">Signup</button>
    </form>
  </div>
  
  <RouterLink class="btn" to="/login"><button class="glow-on-hover" type="button"> Go back to login</button></RouterLink>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    signup() {
      // Add your user registration logic here
      console.log("Signing up with:", this.username, this.email, this.password);
      // You may want to use Axios or another library to send a request to your server for user registration
      // Example using Axios:
      // axios.post('/api/signup', { username: this.username, email: this.email, password: this.password })
      //   .then(response => {
      //     console.log(response.data);
      //     // Handle successful signup
      //   })
      //   .catch(error => {
      //     console.error(error);
      //     // Handle signup error
      //   });
    },
  },
};
</script>

    
  

  <style scoped>
  /* Add your styles here */
  
  .signup-form {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 8px;
    color: #333;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
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
    margin-top: 45px;
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
linear-gradient(63deg, rgb(163, 163, 163) 23%, transparent 23%) 7px 0,
linear-gradient(63deg, transparent 74%, rgb(163, 163, 163) 78%),
linear-gradient(63deg, transparent 34%, rgb(163, 163, 163)38%, rgb(163, 163, 163) 58%, transparent 62%),
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