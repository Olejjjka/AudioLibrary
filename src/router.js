import { createRouter, createWebHistory } from 'vue-router';
import AlbumsList from './components/AlbumsList.vue';
import AlbumDetails from './components/AlbumDetails.vue';
import AddAlbumForm from './components/AddAlbumForm.vue';
import AddTrackForm from './components/AddTrackForm.vue';
import TrackDetails from './components/TrackDetails.vue';

const routes = [
  { path: '/', redirect: '/albums' },
  { path: '/albums', component: AlbumsList },
  { path: '/albums/:albumId', component: AlbumDetails },
  { path: '/add-album', component: AddAlbumForm },
  { path: '/add-track/:albumId', component: AddTrackForm },
  { path: '/albums/:albumId/tracks/:trackId', component: TrackDetails }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;