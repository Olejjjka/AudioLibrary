<template>
  <div id="app">
    <header>
      <h1>Аудиотека</h1>
      <nav>
        <router-link :to="'/'">Список альбомов</router-link>
        <router-link :to="'/add-album'">Добавить альбом</router-link>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style scoped>
header {
  background-color: #222;
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
}

nav {
  margin-top: 10px;
  margin-bottom: 10px;
}

nav a {
  color: #fff;
  background-color: #83c5be;
  padding: 8px 16px;
  margin-right: 10px;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

nav a:hover {
  background-color: #00e6b8;
}
</style>
