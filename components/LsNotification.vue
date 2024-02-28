<template>
    <div class="ls-notification">
        <div class="ls-notification__wrapper">
            <div class="ls-notification__top">
                <div class="ls-notification__close" @click="closeNotification">
                    <CloseSmall />
                </div>
            </div>
            <div class="ls-notification__content" v-if="code === 200">
                <div class="ls-notification__icon">
                    <Circle />
                </div>
                <div class="ls-notification__text">
                    <p>Спасибо!</p>
                    <p>Данные успешно отправлены</p>
                    <p>Мы свяжемся с вами в ближайшее время</p>
                </div>
            </div>
            <div class="ls-notification__content" v-else>
                <div class="ls-notification__icon">
                    <CircleClose />
                </div>
                <div class="ls-notification__text">
                    <p>Что-то пошло не так</p>

                    <p>Пожалуйста, попробуйте позже</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['code', 'closeNotification']);
</script>
