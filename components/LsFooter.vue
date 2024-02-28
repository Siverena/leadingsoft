<template>
    <footer class="ls-footer">
        <div class="ls-footer__top">
            <LsLogo />
        </div>
        <div class="ls-footer__nav">
            <LsNav :mode="'footer'" />
        </div>
        <div class="ls-footer__links">
            <div class="ls-footer__contacts">
                <a
                    class="ls-footer__contact ls-base-link"
                    href="mailto:info@le-soft.ru"
                    >info@le-soft.ru</a
                >
                <a
                    class="ls-footer__contact ls-base-link"
                    href="tel:+78124073614"
                    >+7 (812) 407-36-14</a
                >
            </div>

            <a class="ls-footer__vk" href="https://vk.com/le_soft">
                <Vk />
            </a>
        </div>
        <nuxt-link class="ls-footer__policy ls-base-link" to="/policy">
            Политика обработки <br />
            персональных данных
        </nuxt-link>
        <div class="ls-footer__copyright">
            © 2020-{{ currentYear }}. ЛидингСофт
        </div>
    </footer>
</template>
<script setup>
const currentYear = ref(new Date().getFullYear());
</script>
