<template>
    <div class="ls-review">
        <div class="ls-review__img">
            <img :src="item.imgSrc" alt="" />
        </div>
        <div class="ls-review__company">
            {{ item.name }}
        </div>
        <div class="ls-review__city">
            {{ item.city }}
        </div>
        <div class="ls-review__rate">
            <img src="@/assets/img/icons/star.svg" alt="" v-for="el in 5" />
        </div>
        <div class="ls-review__text">
            {{ item.description }}
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['item']);
</script>
