<template>
    <section class="ls-about-product">
        <p class="ls-about-product__title ls-h1">
            <slot name="title"></slot>
        </p>
        <div class="ls-about-product__text">
            <slot name="text"></slot>
        </div>
        <nuxt-link to="#order">
            <LsButton class="ls-about-product__btn ls-button--fullblue"
                >Получить доступ к системе</LsButton
            ></nuxt-link
        >
        <div class="ls-about-product__gallery">
            <div
                class="ls-about-product__item"
                v-for="(img, key) in images"
                :key="key"
            >
                <div class="ls-about-product__item-bg">{{ img.text }}</div>
                <img :src="img.src" alt="" />
            </div>
        </div>
    </section>
</template>
<script setup>
const props = defineProps(['images']);
</script>
