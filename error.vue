<template>
    <Head>
        <Title>{{ statusCode }}</Title>
    </Head>
    <div class="ls-content-layout">
        <LsHeader />
        <div class="container">
            <div class="ls-404">
                <p class="ls-404__error">Страница не найдена</p>
                <p class="ls-404__text">
                    Запрашиваемая страница удалена или перемещена.
                </p>
                <nuxt-link to="/">
                    <LsButton class="ls-button--fullblue"
                        >Перейти на главную</LsButton
                    ></nuxt-link
                >
            </div>
            <LsFooter />
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        statusCode() {
            return this.$attrs.error.statusCode;
        },
    },
};
</script>
