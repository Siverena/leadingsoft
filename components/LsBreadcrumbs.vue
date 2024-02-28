<template>
    <div class="ls-breadcrumbs">
        <nuxt-link class="ls-breadcrumbs__link" to="/">Главная</nuxt-link>
        <ArrowBreadcrumbs class="ls-breadcrumbs__arrow" />
        <p class="ls-breadcrumbs__current">
            <slot></slot>
        </p>
    </div>
</template>
