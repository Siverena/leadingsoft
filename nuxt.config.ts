import { fileURLToPath } from 'url';

const imgPath =
    process.env.NODE_ENV === 'development' ? './assets/img' : '/images';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    alias: {
        images: fileURLToPath(new URL(imgPath, import.meta.url)),
        scss: fileURLToPath(new URL('./assets/scss', import.meta.url)),
        fonts: fileURLToPath(new URL('./assets/fonts', import.meta.url)),
    },
    devtools: { enabled: true },
    //If you want to auto-import components based only on its name, not path, then you need to set pathPrefix option to false using extended form of the configuration object:
    app: {
        baseURL: process.env.NODE_ENV === 'development' ? '/' : '/leadingsoft/',
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [
                { rel: 'manifest', href: '/leadingsoft/site.webmanifest' },
                {
                    rel: 'icon',
                    sizes: '16x16',
                    type: 'image/png',
                    href: '/leadingsoft/images/favicons/favicon.ico',
                },
            ],
        },
    },

    components: [
        {
            path: '~/components',
            pathPrefix: false,
            extensions: ['.vue'],
        },
        {
            path: '~/elements',
            pathPrefix: false,
            extensions: ['.vue'],
        },
        {
            path: '~/icons',
            pathPrefix: false,
            extensions: ['.vue'],
        },
    ],
    build: {
        transpile: ['primevue'],
    },
    modules: [
        // ...
        '@pinia/nuxt',
    ],
    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            'defineStore', // import { defineStore } from 'pinia'
            ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
    pages: true,
    css: [
        // SCSS file in the project
        '~/assets/scss/main.scss', // you should add main.scss somewhere in your app
        'primevue/resources/themes/lara-light-indigo/theme.css',
        'primevue/resources/primevue.min.css',
    ],
    router: {
        options: {},
    },
});
