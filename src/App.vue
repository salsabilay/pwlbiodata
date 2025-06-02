<template>
  <div id="app">
    <nav>
      <router-link to="/biodata">Biodata</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
nav {
  padding: 20px;
  background: #333;
  color: white;
}
a {
  color: #fff;
  margin-right: 10px;
}
</style>
