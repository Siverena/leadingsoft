<template>
    <section class="ls-getting">
        <p class="ls-getting__title ls-h2">Что вы получаете</p>
        <div class="ls-big-cards-layout">
            <LsImgText>
                <template v-slot:img>
                    <Verified />
                </template>
                <template v-slot:text
                    >Готовый софт под ключ, который соответствует вашим
                    ожиданиям и служит целям бизнеса</template
                >
            </LsImgText>
            <LsImgText>
                <template v-slot:img>
                    <Description />
                </template>
                <template v-slot:text
                    >Руководства по работе с продуктом</template
                >
            </LsImgText>
            <LsImgText>
                <template v-slot:img>
                    <Smartphone />
                </template>
                <template v-slot:text
                    >Размещение мобильных приложений на маркетах</template
                >
            </LsImgText>
            <LsImgText>
                <template v-slot:img>
                    <AdminPanel />
                </template>
                <template v-slot:text
                    >Исключительные права на разработанное ПО</template
                >
            </LsImgText>
        </div>
    </section>
</template>
