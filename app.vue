<template>
    <div class="ls-content-layout">
        <LsHeader />
        <LsLogoBg v-if="currentUrl === 'index'" />
        <div class="container">
            <div class="ls-content">
                <NuxtPage />
                <LsFooter />
            </div>
        </div>
    </div>
</template>
<script>
import currentUrl from '@/utils/mixins/current-url';

export default {
    mixins: [currentUrl],
};
</script>
