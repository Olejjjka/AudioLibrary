import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { ref } from 'vue';

const albums = ref([
    {
        id: 1,
        title: 'Юбилейный 30',
        artist: 'NILETTO',
        releaseDate: '2021-01-15',
        tracks: [
            { id: 1, title: 'Привет пока', artist: 'NILETTO', duration: '2:58', genres: ['поп-музыка', 'рэп'] },
            { id: 2, title: 'Навигатор', artist: 'NILETTO', duration: '2:21', genres: ['поп-музыка', 'рэп'] },
            { id: 3, title: 'Someone like you', artist: 'NILETTO', duration: '3:12', genres: ['поп-музыка', 'рэп'] },
            { id: 4, title: 'Проблем', artist: 'NILETTO', duration: '2:53', genres: ['поп-музыка', 'рэп'] },
            { id: 5, title: 'Подойди', artist: 'NILETTO', duration: '2:54', genres: ['поп-музыка', 'рэп'] },
            { id: 6, title: 'Всё РЕшеНО', artist: 'NILETTO', duration: '2:24', genres: ['поп-музыка', 'рэп'] }
        ],
        t_n_o_t: 6
    },
    {
        id: 2,
        title: 'Fairytales',
        artist: 'Александр Рыбак',
        releaseDate: '2024-03-20',
        tracks: [
            { id: 1, title: 'Roll with the wind', artist: 'Александр Рыбак', duration: '3:34', genres: ['поп-музыка'] },
            { id: 2, title: 'Fairytale', artist: 'Александр Рыбак', duration: '3:03', genres: ['поп-музыка'] },
            { id: 3, title: 'Dolphin', artist: 'Александр Рыбак', duration: '4:15', genres: ['поп-музыка'] },
            { id: 4, title: 'Kiss and Tell', artist: 'Александр Рыбак', duration: '3:21', genres: ['поп-музыка'] }
        ],
        t_n_o_t: 4
    }
]);

const t_n_o_a = ref(2);

const app = createApp(App);

// Предоставляем глобальные данные всем компонентам
app.provide('albums', albums);
app.provide('t_n_o_a', t_n_o_a);

app.use(router).mount('#app');