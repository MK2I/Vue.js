// Viu App
const app = Vue.createApp({
    data() {
        return {
            mesSage: 'Finish the course and learn Vue!',
            vueLink: 'https://google.com/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 'Learn Vue';
            } else {
                return 'Master Vue';
            }
        }
    }
});

app.mount('#user-goal');
