import Divider from 'primevue/divider';
<template>
    <section class="ls-products ls-products">
        <h2 class="ls-products__title--without-text ls-h2" id="radio-product">
            Радиоэлектронные устройства
        </h2>

        <div class="ls-products__container">
            <template v-for="(product, key) in products" :key="key">
                <LsProduct :product="product" :id="key" />
            </template>
        </div>
    </section>
</template>
<script setup>
const products = [
    {
        name: 'Радиоэлектронные устройства',
        link: '/products/electronic-devices',
        description: `<p>Разработка радиоэлектронных устройств
                    с использованием отечественной компонентной базы
                    под ваши задачи.</p>`,
        imgSrc: null,
    },
];
</script>
