<template>
<div class="home">
  <div class="header">
    <div class="web_name">
      <router-view/>
      <p><router-link :to="{name: 'home'}">Skin Cancer Diagnosis</router-link></p>
    </div>
    <div class="navigation_bar">
      <ul class="nav_content">
        <li><router-link :to="{name: 'info'}">Skin Cancer Information</router-link></li>
        <li><router-link :to="{name: 'risk'}">Risk Factors</router-link></li>
        <li><router-link :to="{name: 'prev'}">Prevention</router-link></li>
        <li><router-link :to="{name: 'diag'}">Diagnosis</router-link></li>
        <li><router-link :to="{name: 'treat'}">Treatment</router-link></li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Homepage'
  // data () {
  //   return {
  //     name: localStorage.getItem('name')
  //   }
  // },
  // methods: {
  //   logout () {
  //     this.$router.push('/')
  //   }
  // }
}
</script>

<style scoped lang="scss">
.header{
  position: fixed;
  margin-top: 0;
  a{
    text-decoration: none;
    color: #000000;
  }
}
.web_name {
  text-alian: center;
  display: inline-block;
  margin-left: 150px;
  p{
    font-weight: bolder;
    font-size: 150%;
  }
}

.navigation_bar{
  display: inline-block;
  position: relative;
  left: 10%;
}

ul.nav_content li {
  display: inline;
  margin:13px;
  color: #808080;
  font-weight: bold;
  a{
    text-decoration: none;
    color: #808080;
    &.active{
      border-radius: 8px;
      padding-top: 2px;
      padding-bottom: 2px;
      padding-left: 15px;
      padding-right: 15px;
      color: #FDFFFF;
      background-color: #000000;
    }
  }
}
</style>
