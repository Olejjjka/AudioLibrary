<template>
    <div v-if="track">
        <h2>{{ track.title }}</h2>
        <p>Исполнитель: {{ track.artist }}</p>
        <p>Длительность: {{ track.duration }}</p>
        <p>Жанры: {{ track.genres.join(', ') }}</p>
        <div>
            <button id="back" @click="goBack()">Вернуться к альбому</button>
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
const trackId = route.params.trackId;
const track = ref(null);

if (albumId !== undefined && trackId !== undefined) {
    const album = albums.value.find(album => album.id === parseInt(albumId));
    if (album) {
        track.value = album.tracks.find(track => track.id === parseInt(trackId));
    }
}

const goBack = () => {
    router.back();
}
</script>

<style scoped>
h2 {
    color: #83c5be;
}

p {
    color: white;
}

#back {
    background-color: #83c5be;
    color: #000;
}

#back:hover {
    background-color: #444;
}
</style>
