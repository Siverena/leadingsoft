<template>
    <nav
        class="ls-nav"
        :class="{
            'ls-nav--header-hidden': !isMenuOpen,
            'ls-nav--header': mode === 'header',
            'ls-nav--footer': mode === 'footer',
        }"
    >
        <div class="ls-nav__content">
            <div
                class="ls-nav__list"
                :class="{
                    'ls-nav__list--footer': mode === 'footer',
                }"
            >
                <template v-for="(link, key) in navLinks">
                    <nuxt-link :to="link.link" class="ls-nav__link">{{
                        link.name
                    }}</nuxt-link>
                </template>
            </div>
            <div
                class="ls-nav__contacts"
                :class="{
                    'ls-nav__contacts--footer': mode === 'footer',
                }"
            >
                <a
                    class="ls-header__contact ls-base-link"
                    href="mailto:info@le-soft.ru"
                    >info@le-soft.ru</a
                >
                <a
                    class="ls-header__contact ls-base-link"
                    href="tel:+78124073614"
                    >+7 (812) 407-36-14</a
                >
                <a class="ls-header__vk" href="https://vk.com/le_soft">
                    <Vk />
                </a>
                <nuxt-link to="#order">
                    <LsButton class="ls-nav__btn ls-button--fullblue"
                        >Заказать разработку</LsButton
                    >
                </nuxt-link>
            </div>
        </div>
        <div
            class="ls-nav__close"
            @click="closeMenu"
            :class="{
                'ls-nav__close--footer': mode === 'footer',
            }"
        >
            <Close />
        </div>
    </nav>
</template>

<script setup>
const props = defineProps(['closeMenu', 'isMenuOpen', 'mode']);

const navLinks = [
    {
        name: 'Главная',
        link: '/',
    },
    {
        name: 'O нас',
        link: '/#about-us',
    },
    {
        name: 'IT-разработка',
        link: '/it',
    },
    {
        name: 'Программные продукты',
        link: '/#programm-products',
    },
    {
        name: 'Радиоэлектронные утройства',
        link: '/#radio-product',
    },
    {
        name: 'Отзывы',
        link: '/#reviews',
    },
    {
        name: 'Контакты',
        link: '#order',
    },
];
</script>
