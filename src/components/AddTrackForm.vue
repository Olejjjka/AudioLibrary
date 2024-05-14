<template>
  <div>
    <h2>Добавить трек</h2>
    <form @submit.prevent="addTrack">
      <div>
        <label for="trackTitle">Название трека: </label>
        <input type="text" id="trackTitle" v-model="newTrack.title" required>
      </div>
      <br>
      <div>
        <label for="trackDuration">Длительность трека: </label>
        <input type="time" id="trackDuration" v-model="newTrack.duration" required>
      </div>
      <br>
      <div>
        <label for="trackGenres">Жанры трека: </label>
        <input type="text" id="trackGenres" v-model="newTrack.genresString" required>
        <small> (введите жанры через запятую)</small>
      </div>
      <br>
      <button type="submit">Добавить</button>
    </form>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const albums = inject('albums');
const route = useRoute();
const router = useRouter();

const newTrack = ref({
  title: '',
  duration: '',
  genresString: '',
});

const addTrack = () => {
  const albumId = route.params.albumId;
  const album = albums.value.find(album => album.id === parseInt(albumId));

  const genres = newTrack.value.genresString.split(',').map(genre => genre.trim());

  const track = {
    id: album.t_n_o_t + 1,
    title: newTrack.value.title,
    artist: album.artist,
    duration: newTrack.value.duration,
    genres: genres
  };

  if (album) {
    album.tracks.push(track);
    album.t_n_o_t = album.t_n_o_t + 1;
  }

  newTrack.value.title = '';
  newTrack.value.duration = '';
  newTrack.value.genresString = '';

  router.push({ path: `/albums/${album.id}` });
};
</script>


<style scoped>
h2 {
  color: #83c5be;
}

label,
small {
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
