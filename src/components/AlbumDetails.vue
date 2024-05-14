<template>
  <div v-if="album">
    <h2>{{ album.title }}</h2>
    <p>Исполнитель: {{ album.artist }}</p>
    <p>Дата выпуска: {{ album.releaseDate }}</p>
    <h3>Треки</h3>
    <ul>
      <li v-for="(track, index) in album.tracks" :key="index">
        <router-link :to="'/albums/' + album.id + '/tracks/' + (album.tracks[index].id)">
          <span id="tittle"> {{ track.title }} </span>
        </router-link>
        <br>
        <span id="artist"> {{ track.artist }} </span>
        <div id="but">
          <button @click="deleteTrack(track)">Удалить</button>
        </div>
      </li>
    </ul>
    <div>
      <button id="add" @click="goAddTrack(album.id)">Добавить трек</button>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const albums = inject('albums');
const route = useRoute();
const router = useRouter();

const albumId = route.params.albumId;
const album = ref(albums.value.find(album => album.id === parseInt(albumId)));

const deleteTrack = (track) => {
  const index = album.value.tracks.findIndex(t => t === track);
  if (index !== -1) {
    album.value.tracks.splice(index, 1);
  }
};

const goAddTrack = (albumId) => {
  router.push({ path: `/add-track/${albumId}` });
}
</script>

<style scoped>
h2,
h3 {
  color: #83c5be;
}

#tittle {
  font-size: larger;
  color: #edf6f9;
  text-decoration: none;
}

a {
  text-decoration: none;
}

#artist {
  font-size: small;
}

p {
  color: white;
}

ul li {
  color: #fff;
  background-color: #264653;
  padding: 8px 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
}

ul li:hover {
  background-color: #333;
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

#add {
  background-color: #83c5be;
  color: #000;
}

#add:hover {
  background-color: #444;
}
</style>
