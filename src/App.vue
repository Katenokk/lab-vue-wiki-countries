<!-- src/App.js -->
<template>
 
  <Navbar></Navbar>
  <!-- <router-link to="/list">Countries list</router-link> | -->
  
  <!-- <router-view></router-view> -->
 <div class="container">
    <div class="row">
      <div class="col-5" style="max-height: 90vh; overflow: scroll">
        <CountriesList/>
      </div>
      <div class="col-7">
        <CountryDetails/>
      </div>
    </div>
  </div>
  
</template>

<script>
 
import CountriesList from './components/CountriesList.vue'
import CountryDetails from './components/CountryDetails.vue'
import Navbar from './components/Navbar.vue';
  export default {
    components: {
      
      Navbar,
      CountriesList,
      CountryDetails
    },
    data: () => ({
     
    })
  }
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.app {
  text-align: center;
}

.app-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .app-logo {
    animation: app-logo-spin infinite 20s linear;
  }
}

.app-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.app-link {
  color: #61dafb;
}

@keyframes app-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

</style>
