<template>
    <section class="ls-about-us">
        <h2 class="ls-about-us__title ls-h2" id="about-us">О нас</h2>
        <div class="ls-about-us__text">
            <p>
                Компания <a href="/">ЛидингСофт</a> работает в сфере IT больше
                10 лет. За эти годы многие наши клиенты оценили преимущества
                работы с нами. Мы быстро и эффективно решим IT-задачи и поможем
                сэкономить ваши время и деньги.
            </p>
        </div>
        <div class="ls-about-us__works ls-small-cards-layout">
            <LsIconHText>
                <template v-slot:icon>
                    <Comments />
                </template>
                <template v-slot:header>Консультация</template>
                <template v-slot:text
                    >Расскажем об удобстве и необходимости наших
                    продуктов.</template
                >
            </LsIconHText>
            <LsIconHText>
                <template v-slot:icon>
                    <Code />
                </template>
                <template v-slot:header>Разработка</template>
                <template v-slot:text
                    >Создадим комфортную среду для вашей работы.</template
                >
            </LsIconHText>
            <LsIconHText>
                <template v-slot:icon>
                    <SettingsHeart />
                </template>
                <template v-slot:header>Обслуживание</template>
                <template v-slot:text
                    >Реализуем идеи и пожелания, возникшие в процессе
                    пользования системой.</template
                >
            </LsIconHText>
        </div>
        <LsBannerDark>
            <template v-slot:text1>
                Наша работа включает в себя разработку гибких систем под
                потребности пользователей, поддержку клиентов, и многое другое.
            </template>
            <nuxt-link to="/it">
                <LsButton class="ls-button--fullwhite"
                    >Подробнее о разработке</LsButton
                >
            </nuxt-link>
        </LsBannerDark>
    </section>
</template>
