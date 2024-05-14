<template>
  <div v-if="albums">
    <h2>Список альбомов</h2>
    <ul>
      <li v-for="album in albums" :key="album.id">
        <router-link :to="'/albums/' + album.id">
          <h3>{{ album.title }}</h3>
        </router-link>
        <p>Исполнитель: {{ album.artist }}</p>
        <p>Дата выпуска: {{ album.releaseDate }}</p>
        <div id="but">
          <button @click="deleteAlbum(album)">Удалить</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const albums = inject('albums');

const deleteAlbum = (album) => {
  const index = albums.value.findIndex(a => a === album);
  if (index !== -1) {
    albums.value.splice(index, 1);
  }
};
</script>

<style scoped>
h2 {
  color: #83c5be;
}

h3 {
  color: #fff;
  background-color: #83c5be;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
}

ul li {
  color: #ddd;
  padding: 8px 16px;
  margin-right: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

ul li:hover {
  background-color: #333;
}

a {
  text-decoration: none;
}

#but {
  display: flex;
  justify-content: right;
}

button {
  background-color: #444;
  color: #fff;
}

button:hover {
  background-color: #00ffcc;
}
</style>
