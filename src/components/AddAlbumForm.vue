<template>
  <div>
    <h2>Добавить альбом</h2>
    <form @submit.prevent="addAlbum">
      <div>
        <label for="title">Название: </label>
        <input type="text" id="title" v-model="newAlbum.title" required>
      </div>
      <br>
      <div>
        <label for="artist">Исполнитель: </label>
        <input type="text" id="artist" v-model="newAlbum.artist" required>
      </div>
      <br>
      <div>
        <label for="releaseDate">Дата выпуска: </label>
        <input type="date" id="releaseDate" v-model="newAlbum.releaseDate" required>
      </div>
      <br>
      <button type="submit">Добавить</button>
    </form>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue';
import { useRouter } from 'vue-router';

const albums = inject('albums');
const t_n_o_a = inject('t_n_o_a');
const router = useRouter();

const newAlbum = ref({
  title: '',
  artist: '',
  releaseDate: '',
});

const addAlbum = () => {
  const album = {
    id: t_n_o_a.value + 1,
    title: newAlbum.value.title,
    artist: newAlbum.value.artist,
    releaseDate: newAlbum.value.releaseDate,
    tracks: [],
    t_n_o_t: 0
  };

  albums.value.push(album);

  t_n_o_a.value = t_n_o_a.value + 1;

  newAlbum.value.title = '';
  newAlbum.value.artist = '';
  newAlbum.value.releaseDate = '';

  router.push({ path: `/albums/${album.id}` });
};
</script>

<style scoped>
h2 {
  color: #83c5be;
}

label {
  color: #ddd;
}

input[type="text"],
input[type="date"],
input[type="time"] {
  background-color: #333;
  color: #ddd;
  border: 1px solid #444;
}

input[type="text"]:focus,
input[type="date"]:focus,
input[type="time"]:focus {
  border-color: #00ffcc;
}

button {
  background-color: #83c5be;
  color: #000;
}

button:hover {
  background-color: #444;
}
</style>
