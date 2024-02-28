<template>
    <div class="ls-product" :class="id % 2 ? 'ls-product--2' : 'ls-product--1'">
        <div
            class="ls-product__text"
            :class="id % 2 ? 'ls-product__text--2' : 'ls-product__text--1'"
        >
            <p
                class="ls-product__name"
                :class="id % 2 ? 'ls-product__name--2' : 'ls-product__name--1'"
            >
                {{ product.name }}
            </p>
            <div
                class="ls-product__description"
                v-html="product.description"
            ></div>
            <div class="ls-product__btns">
                <nuxt-link :to="product.link">
                    <LsButton
                        :class="
                            id % 2 ? 'ls-button--blue' : ' ls-button--white'
                        "
                        >Подробнее</LsButton
                    >
                </nuxt-link>

                <LsButton
                    :class="
                        id % 2 ? 'ls-button--fullblue' : ' ls-button--fullwhite'
                    "
                    >Заказать</LsButton
                >
            </div>
        </div>
        <div
            class="ls-product__img"
            :class="id % 2 ? 'ls-product__img--2' : 'ls-product__img--1'"
        >
            <img v-if="product.imgSrc" :src="product.imgSrc" alt="" />
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['product', 'id']);
</script>
