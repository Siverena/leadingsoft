<template>
    <header
        class="ls-header"
        :class="{
            'ls-header--scroll': isScroll,
        }"
    >
        <div class="container">
            <div class="ls-header__content">
                <div class="ls-header__top">
                    <div class="ls-logo ls-header__logo">
                        <LsLogo />
                    </div>
                    <div class="ls-header__contacts">
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
                    </div>
                    <nuxt-link to="#order">
                        <LsButton class="ls-header__btn ls-button--fullblue"
                            >Заказать разработку</LsButton
                        >
                    </nuxt-link>
                    <Burger class="ls-header__open" @click="openMenu" />
                </div>
                <div class="ls-header__nav">
                    <LsNav
                        :closeMenu="closeMenu"
                        :isMenuOpen="isMenuOpen"
                        :mode="'header'"
                    />
                </div>
            </div>
        </div>
    </header>
</template>
<script setup>
const isMenuOpen = ref(false);
const isScroll = ref(false);

function openMenu() {
    isMenuOpen.value = true;
}

function closeMenu() {
    isMenuOpen.value = false;
}

function getScrollPosition() {
    let posTop = 0;
    addEventListener('scroll', (e) => {
        posTop = window.scrollY;
        if (posTop > 0) {
            isScroll.value = true;
        } else {
            isScroll.value = false;
        }
    });
}
onMounted(() => {
    getScrollPosition();
});
</script>
