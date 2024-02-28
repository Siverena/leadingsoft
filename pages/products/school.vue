<template>
    <Head>
        <Title>Портал для современной школы</Title>
    </Head>
    <LsBreadcrumbs>Портал для современной школы</LsBreadcrumbs>
    <LsAboutProduct :images="images">
        <template v-slot:title> Портал для современной школы </template>
        <template v-slot:text>
            <p>
                <span>Портал для современной школы</span> — это удобная система,
                которая включает в себя электронный журнал и электронный
                дневник. Она позволяет отслеживать домашние задания и
                успеваемость учеников, а так же получать домашние задания
                онлайн.
            </p>
        </template>
    </LsAboutProduct>
    <LsAdvantages>
        <template v-slot:name> Преимущества портала</template>
        <LsIconHText class="ls-icon-h-text--ligth">
            <template v-slot:icon>
                <Approval />
            </template>
            <template v-slot:header>Удобство</template>
            <template v-slot:text
                >1 программа для учеников, родителей, учителей и
                административного персонала.</template
            >
        </LsIconHText>
        <img src="@/assets/img/school/advantages/1.jpg" alt="" />
        <LsIconHText class="ls-icon-h-text--blue">
            <template v-slot:icon>
                <Clock />
            </template>
            <template v-slot:header>Экономия времени</template>
            <template v-slot:text
                >Быстрое и своевременное информирование учеников и их родителей
                об успеваемости учеников; Большая база данных и возможность
                быстро формировать отчеты с большими объемами данных.
            </template>
        </LsIconHText>
        <img src="@/assets/img/school/advantages/2.jpg" alt="" />
        <LsIconHText class="ls-icon-h-text--blue">
            <template v-slot:icon>
                <QueryStats />
            </template>
            <template v-slot:header>Прозрачность</template>
            <template v-slot:text
                >Доступ родителей к успеваемости ребенка, домашним заданиям,
                расписанию и внеклассным мероприятиям</template
            >
        </LsIconHText>
        <LsIconHText class="ls-icon-h-text--ligth">
            <template v-slot:icon>
                <AdminPanel />
            </template>
            <template v-slot:header>Безопасность</template>
            <template v-slot:text
                >Ученики и родители, учителя и административный персонал имеют
                разные права доступа в портал и не могут вносить изменения в
                работу другой роли.
            </template>
        </LsIconHText>
    </LsAdvantages>
    <LsProfit>
        Поможем автоматизировать учебный процесс и сделаем его максимально
        прозрачным, сэкономим время учителей, родителей и завучей.
    </LsProfit>
    <section class="ls-getting">
        <p class="ls-getting__title ls-h2">Что вы получаете</p>
        <div class="ls-big-cards-layout">
            <LsImgText>
                <template v-slot:img>
                    <Manage />
                </template>
                <template v-slot:text
                    >Готовую систему для автоматизации учебного
                    процесса</template
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
        </div>
    </section>
    <LsProducts :visibleProductsList="[0, 1, 2]" />
    <LsOrder />
</template>
<script setup>
const images = [
    {
        src: '/leadingsoft/images/school/1.jpg',
        text: 'Электронный журнал',
    },
    {
        src: '/leadingsoft/images/school/2.jpg',
        text: 'Электронный дневник',
    },
    {
        src: '/leadingsoft/images/school/3.jpg',
        text: 'Блог',
    },
];
</script>
