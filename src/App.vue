<template>
  <div id="app">
    <Navigation />
    <Spinner /> 
    <div class="main-background"></div>
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>
<script>

import Navigation from './components/Navigation'
import axios from 'axios'
import Spinner from './components/Spinner'
axios.defaults.headers.common['Authorization'] = localStorage.getItem('Authorization');

export default {
    name: "App",
    components: { Navigation , Spinner},
    methods :{
      
    },
    created (){
      console.log('환경변수확인 : ',process.env)
      console.log('환경변수확인 : ',process.env.VUE_APP_API)
    }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap');
.main-background{
  background: url('./assets/home_image.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -50;
}


#app {
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  //padding: 30px;

  a {
    font-weight: bold;
    color:black
    //color: #2c3e50;

    // &.router-link-exact-active {
    //   color: #42b983;
    // }
  }
}

.hidden {
  display: none;
}
</style>
