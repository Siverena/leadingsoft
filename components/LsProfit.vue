<template>
    <div class="ls-profit">
        <div class="ls-profit__text">
            <slot></slot>
        </div>
        <nuxt-link to="#order">
            <LsButton class="ls-profit__btn ls-button--fullblue"
                >Получить доступ к системе</LsButton
            >
        </nuxt-link>
    </div>
</template>
