<template>
    <Head>
        <Title>Система публикаций</Title>
    </Head>
    <LsBreadcrumbs>Система публикаций</LsBreadcrumbs>
    <LsAboutProduct :images="images">
        <template v-slot:title>
            Система публикаций: аренда без границ — цифровые возможности для
            владельцев помещений.
        </template>
        <template v-slot:text>
            <p>
                <span>Система публикаций</span> — это уникальная цифровая
                экосистема, которая позволяет владельцам и арендаторам
                коммерческих объектов эффективно управлять своей недвижимостью и
                экономить время и деньги.
            </p>
            <p>
                Система является инновационным решением, которое не имеет
                аналогов в сфере онлайн-аренды коммерческой недвижимости, и
                позволяет автоматизировать большинство процессов, связанных с
                арендой. Она помогает снизить затраты на управление объектами, а
                также улучшить коммуникацию между сторонами сделки.
            </p>
            <p>
                С помощью цифровой экосистемы владельцы помещений могут легко и
                удобно размещать свои объявления об аренде на нескольких
                крупнейших досках объявлений: ЦИАН, Авито и ЯндексНедвижимость.
                Это позволяет охватить больше потенциальных арендаторов. Кроме
                того, они могут создавать одностраничные или многостраничные
                сайты для помещений различных назначений, чтобы предоставить
                больше информации о объектах недвижимости и привлечь больше
                внимания. Проводить акции для арендаторов, создавать различные
                арендные концепции из одного помещения.
            </p>
        </template>
    </LsAboutProduct>
    <LsAdvantages>
        <template v-slot:name> Преимущества цифровой системы </template>
        <LsIconHText class="ls-icon-h-text--ligth">
            <template v-slot:icon>
                <GridView />
            </template>
            <template v-slot:header>Единая база</template>
            <template v-slot:text
                >Для всех ваших помещений, сайтов, акций, объявлений.</template
            >
        </LsIconHText>
        <img src="@/assets/img/publication-system/adwantages2.jpg" alt="" />
        <LsIconHText class="ls-icon-h-text--blue">
            <template v-slot:icon>
                <PhotoCamera />
            </template>
            <template v-slot:header>Фотобанк</template>
            <template v-slot:text
                >Выбирайте фотографии объекта из базы. Если у вас нет фотографий
                наши специалисты это исправят.</template
            >
        </LsIconHText>
        <img src="@/assets/img/publication-system/adwantages4.jpg" alt="" />
        <LsIconHText class="ls-icon-h-text--blue">
            <template v-slot:icon>
                <RuleSettings />
            </template>
            <template v-slot:header>Автоматизация</template>
            <template v-slot:text
                >Больше не нужно править одно и тоже, достаточно внести
                изменения 1 раз.</template
            >
        </LsIconHText>
        <LsIconHText class="ls-icon-h-text--ligth">
            <template v-slot:icon>
                <Dashboard />
            </template>
            <template v-slot:header>Интерактивные планы помещений</template>
            <template v-slot:text
                >Теперь создавать их просто. Если у вас еще нет планов - мы
                поможем.
            </template>
        </LsIconHText>
        <LsIconHText class="ls-icon-h-text--blue">
            <template v-slot:icon>
                <Summarize />
            </template>
            <template v-slot:header>Публикации</template>
            <template v-slot:text
                >Создавайте множество публикаций разного назначения на основе
                одного помещения.</template
            >
        </LsIconHText>
        <LsIconHText class="ls-icon-h-text--ligth">
            <template v-slot:icon>
                <SelectWindow />
            </template>
            <template v-slot:header>Создание сайтов</template>
            <template v-slot:text
                >Создавайте сайты сколько хотите, а мы поможем. База готовых
                шаблонов под любые назначения.
            </template>
        </LsIconHText>
        <img src="@/assets/img/publication-system/adwantages9.jpg" alt="" />
    </LsAdvantages>
    <LsProfit>
        Наши эксперты готовы помочь в решении любых проблем для
        <span>оптимизации</span> рабочего процесса и
        <span>привлечения прибыли</span>. Вы можете пользоваться системой
        самостоятельно, а можете делегировать это нам.
    </LsProfit>
    <LsProducts :visibleProductsList="[1, 2, 3]" />
    <LsOrder />
</template>
<script setup>
const images = [
    {
        src: '/leadingsoft/images/publication-system/1.png',
        text: 'Личный доступ в систему',
    },
    {
        src: '/leadingsoft/images/publication-system/2.png',
        text: 'Вывод аналитических данных',
    },
    {
        src: '/leadingsoft/images/publication-system/3.png',
        text: 'Одна база для всех объектов',
    },
];
</script>
