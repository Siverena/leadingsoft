<template>
    <Head>
        <Title>Система управления парковками</Title>
    </Head>
    <LsBreadcrumbs>Система управления парковками</LsBreadcrumbs>
    <LsAboutProduct :images="images">
        <template v-slot:title>
            Система управления парковками: удобное решение для управления
            парковкой
        </template>
        <template v-slot:text>
            <p>
                <span>Система управления парковками</span>— это удобный сервис,
                который позволяет управлять парковками, выдавать, отслеживать и
                оплачивать пропуска, используя одну программу.
            </p>
            <p>
                Система может быть использована для управления парковками на
                различных объектах, таких как офисы, торговые центры, гостиницы,
                аэропорты и т.д. Она позволяет создавать различные типы
                пропусков, определять правила парковки и устанавливать тарифы.
                Система также может предоставлять отчеты о количестве выданных
                пропусков, времени пользования парковкой и др. Это позволяет
                владельцам парковок и управляющим компаниям получать подробную
                информацию о том, как используются их парковочные места и как
                можно улучшить бизнес-процессы.
            </p>
            <p>
                Кроме того, система управления парковками может быть
                интегрирована с другими системами, такими как системы контроля
                доступа и видеонаблюдения, что позволяет обеспечить безопасность
                на парковке и предотвращать кражи и вандализм.
            </p>
            <p>
                Система управления парковками является важным инструментом для
                владельцев парковок и управляющих компаний, который помогает им
                управлять своими объектами более эффективно и повышать качество
                обслуживания клиентов.
            </p>
        </template>
    </LsAboutProduct>
    <LsAdvantages>
        <template v-slot:name> Преимущества системы </template>
        <LsIconHText class="ls-icon-h-text--ligth">
            <template v-slot:icon>
                <Approval />
            </template>
            <template v-slot:header>Удобство</template>
            <template v-slot:text
                >Выдача, отслеживание и оплата пропусков в 1
                программе.</template
            >
        </LsIconHText>
        <img src="@/assets/img/parking/advantages/1.jpg" alt="" />
        <LsIconHText class="ls-icon-h-text--ligth">
            <template v-slot:icon>
                <Manufacturing />
            </template>
            <template v-slot:header>Автоматизация</template>
            <template v-slot:text
                >Возможность сформировать аналитику по пропускам и загруженности
                парковок. Сервис интегрирован с 1С, что позволяет формировать
                отчетные документы быстро и точно.
            </template>
        </LsIconHText>
        <img src="@/assets/img/parking/advantages/2.jpg" alt="" />
        <LsIconHText class="ls-icon-h-text--blue">
            <template v-slot:icon>
                <Payments />
            </template>
            <template v-slot:header>Экономия</template>
            <template v-slot:text
                >Проанализировав часы загруженности вашей парковки, вы можете
                перераспределить ее загрузку.</template
            >
        </LsIconHText>

        <img src="@/assets/img/parking/advantages/3.jpg" alt="" />
    </LsAdvantages>
    <LsProfit>
        Поможем автоматизировать процесс управления вашими парковками и
        выработать лояльность клиентов.
    </LsProfit>
    <section class="ls-getting">
        <p class="ls-getting__title ls-h2">Что вы получаете</p>
        <div class="ls-big-cards-layout">
            <LsImgText>
                <template v-slot:img>
                    <Verified />
                </template>
                <template v-slot:text
                    >Готовую систему для управления вашими парковками</template
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
                    <Payments />
                </template>
                <template v-slot:text
                    >Дополнительную возможность заработка на вашей
                    парковке</template
                >
            </LsImgText>
            <LsImgText>
                <template v-slot:img>
                    <Volunteer />
                </template>
                <template v-slot:text>Лояльность ваших клиентов</template>
            </LsImgText>
        </div>
    </section>
    <LsProducts :visibleProductsList="[0, 3, 2]" />
    <LsOrder />
</template>
<script setup>
const images = [
    {
        src: '/leadingsoft/images/parking/1.jpg',
        text: 'Выдача, отслеживание и оплата пропусков в 1 программе.',
    },
    {
        src: '/leadingsoft/images/parking/2.jpg',
        text: 'Аналитика по пропускам и загруженности парковок',
    },
];
</script>
