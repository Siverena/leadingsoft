<template>
    <div class="ls-welcome">
        <div class="ls-welcome__header">
            <h1 class="ls-welcome__title">Разработка IT-решений для бизнеса</h1>
            <p class="ls-welcome__text">
                Поможем автоматизировать рабочие процессы для экономии времени и
                денег.
            </p>
        </div>

        <div class="ls-welcome__buttons">
            <nuxt-link to="/it">
                <LsButton class="ls-button--blue">Подробнее</LsButton>
            </nuxt-link>
            <nuxt-link to="#order">
                <LsButton class="ls-button--fullblue"
                    >Заказать разработку</LsButton
                ></nuxt-link
            >
        </div>
    </div>
</template>
