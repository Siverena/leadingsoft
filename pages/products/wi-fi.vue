<template>
    <Head>
        <Title>Система автоматизации и показа рекламы в сетях wi-fi</Title>
    </Head>
    <LsBreadcrumbs
        >Система автоматизации и показа рекламы в сетях wi-fi</LsBreadcrumbs
    >
    <LsAboutProduct :images="images">
        <template v-slot:title>
            Система авторизации и показа рекламы в сетях Wi-Fi – способ
            увеличить прибыль и привлечь клиентов
        </template>
        <template v-slot:text>
            <p>
                Wi-Fi для клиентов - это не только бесплатный доступ в интернет.
            </p>
            <p>
                <span
                    >Система автоматизации и показа рекламы в сетях wi-fi </span
                >— это комплекс мер, направленных на увеличение прибыли через
                создание дополнительного рекламного пространства и привлечения
                новых клиентов.
            </p>
            <p>
                С помощью нашей системы управления сетью вы сможете привлекать
                больше клиентов и изучать целевую аудиторию, что позволит
                предоставлять качественный сервис и необходимые услуги и товары.
                А также выполнение законодательства РФ.
            </p>
        </template>
    </LsAboutProduct>
    <LsAdvantages>
        <template v-slot:name>Точная настройка под каждый бизнес</template>
        <LsIconHText class="ls-icon-h-text--ligth">
            <template v-slot:icon>
                <Approval />
            </template>
            <template v-slot:header>Удобство</template>
            <template v-slot:text
                >Рекламодатели самостоятельно управляют рекламой, через личный
                кабинет, которым одинаково удобно пользоваться как с компьютера,
                так и со смартфона.</template
            >
        </LsIconHText>
        <img src="@/assets/img/wi-fi/advantages/1.jpg" alt="" />
        <LsIconHText class="ls-icon-h-text--ligth">
            <template v-slot:icon>
                <Expand />
            </template>
            <template v-slot:header>Гибкость</template>
            <template v-slot:text
                >Возможность быстро реагировать на изменение ситуации. Всего за
                5 секунд можно запустить рекламную акцию, заменить
                опубликованный баннер или совсем прекратить показы.
            </template>
        </LsIconHText>
        <img src="@/assets/img/wi-fi/advantages/2.jpg" alt="" />
        <LsIconHText class="ls-icon-h-text--blue">
            <template v-slot:icon>
                <RuleSettings />
            </template>
            <template v-slot:header>Точность</template>
            <template v-slot:text
                >Учет количества показов каждого баннера и стоимости показа в
                зависимости от приоритета, итоговый отчет по каждому
                рекламодателю для выставления счета. Статистика показов доступна
                каждому клиенту в личном кабинете.</template
            >
        </LsIconHText>

        <img src="@/assets/img/wi-fi/advantages/3.jpg" alt="" />
    </LsAdvantages>
    <LsProfit>
        Поможем с легальной организацией Wi-Fi доступа в Интернет для
        общественных мест
    </LsProfit>
    <section class="ls-getting">
        <p class="ls-getting__title ls-h2">Что вы получаете</p>
        <div class="ls-big-cards-layout">
            <LsImgText>
                <template v-slot:img>
                    <WiFi />
                </template>
                <template v-slot:text
                    >Готовую систему для использования сети WI-Fi</template
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
                    <Campaign />
                </template>
                <template v-slot:text
                    >Дополнительные рекламные площадки для 3-х типов
                    устройств</template
                >
            </LsImgText>
            <LsImgText>
                <template v-slot:img>
                    <QueryStats />
                </template>
                <template v-slot:text
                    >Возможность анализировать вашу целевую аудиторию</template
                >
            </LsImgText>
        </div>
    </section>
    <LsProducts :visibleProductsList="[1, 0, 3]" />
    <LsOrder />
</template>
<script setup>
const images = [
    {
        src: '/leadingsoft/images/wi-fi/1.jpg',
        text: 'Управление баннерами',
    },
    {
        src: '/leadingsoft/images/wi-fi/2.jpg',
        text: '3 формата рекламных баннеров',
    },
    {
        src: '/leadingsoft/images/wi-fi/3.jpg',
        text: 'Легкий способ отслеживания статистики',
    },
];
</script>
