<template>
    <Head>
        <Title>Личный кабинет арендатора</Title>
    </Head>
    <LsBreadcrumbs>Личный кабинет арендатора</LsBreadcrumbs>
    <LsAboutProduct :images="images">
        <template v-slot:title>
            Личный кабинет арендатора — удобный инструмент аренды
        </template>
        <template v-slot:text>
            <p>
                <span>Личный кабинет арендатора</span> — это система, которая
                позволяет арендатору самостоятельно управлять арендой помещений,
                персоналом и услугами, подключенными к объекту аренды. Это
                обеспечивает удобство и экономию времени для арендаторов,
                позволяя им управлять своими ресурсами в режиме реального
                времени.
            </p>
            <p>
                Личный кабинет арендатора включает следующие функции: 1.
                Управление персоналом: арендатор может просматривать информацию
                о сотрудниках находящихся на работе, о сотрудниках которые
                находились на рабочем месте менее 8 часов, заказать пропуск на
                сотрудника. Это позволит эффективно контролировать работу
                сотрудников и оптимизировать расходы на персонал. <br />
                2. Управлять услугами: арендатор может подать показания
                счетчиков, сформировать счет на оплату, заказать справку по
                расчету, оставить заявку по эксплуатации, просмотреть отчет о
                парковочном месте, отменить парковочные пропуска. Это поможет
                отслеживать расходы по аренде.
            </p>
            <p>
                Личный кабинет арендатора представляет собой удобный и
                эффективный инструмент для управления арендой и ресурсами,
                который позволяет арендаторам контролировать свои финансы и
                ресурсы, а также упрощает процессы аренды и облуживания.
            </p>
        </template>
    </LsAboutProduct>
    <LsAdvantages>
        <template v-slot:name>
            Преимущества системы для ваших арендаторов
        </template>
        <img src="@/assets/img/lk/advantages/1.jpg" alt="" />
        <LsIconHText class="ls-icon-h-text--ligth">
            <template v-slot:icon>
                <Folder />
            </template>
            <template v-slot:header>Вся информация в одной системе</template>
            <template v-slot:text>
                <ul>
                    <li>
                        Актуальная информация по всем заключенным активным и
                        архивным договорам аренды;
                    </li>
                    <li>
                        Отслеживание счетов, переплат, задолженностей и пени по
                        каждому из договоров;
                    </li>
                </ul>
            </template>
        </LsIconHText>

        <LsIconHText class="ls-icon-h-text--blue">
            <template v-slot:icon>
                <Description />
            </template>
            <template v-slot:header>Электронный документооборот</template>
            <template v-slot:text>
                <ul>
                    <li>Подписание документов, не выходя из дома;</li>
                    <li>Сотрудничаем со всеми ведущими операторами ЮЗЭДО.</li>
                </ul>
            </template>
        </LsIconHText>
        <LsIconHText class="ls-icon-h-text--blue">
            <template v-slot:icon>
                <Groups />
            </template>
            <template v-slot:header>Управление персоналом</template>
            <template v-slot:text>
                <ul>
                    <li>Заказ и перевыпуск пропусков онлайн;</li>
                    <li>
                        Отслеживание трудовой дисциплины: приход и уход
                        сотрудников;
                    </li>
                    <li>Напоминание о днях рождения сотрудников.</li>
                </ul>
            </template>
        </LsIconHText>
        <img src="@/assets/img/lk/advantages/2.jpg" alt="" />
        <LsIconHText class="ls-icon-h-text--light">
            <template v-slot:icon>
                <Manage />
            </template>
            <template v-slot:header>Управление заявками в ЛК</template>
            <template v-slot:text>
                <ul>
                    <li>Управление и классификация заявок по эксплуатации;</li>
                    <li>
                        Управление услугами: полный список услуг с описанием,
                        настройка услуги в личном кабинете.
                    </li>
                </ul></template
            >
        </LsIconHText>
    </LsAdvantages>
    <LsProfit>
        Поможем вашим арендаторам легко получать актуальную информацию по
        договорам аренды, эффективно управлять персоналом и услугами, вести
        электронный документооборот в одном личном кабинете.
    </LsProfit>
    <section class="ls-getting">
        <p class="ls-getting__title ls-h2">Что вы получаете</p>
        <div class="ls-big-cards-layout">
            <LsImgText>
                <template v-slot:img>
                    <Verified />
                </template>
                <template v-slot:text
                    >Готовую систему для управления арендными
                    площадями</template
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
                    <Description />
                </template>
                <template v-slot:text>Электронный документооборот</template>
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
        src: '/leadingsoft/images/lk/1.jpg',
        text: 'Личный доступ в систему',
    },
    {
        src: '/leadingsoft/images/lk/2.jpg',
        text: 'Вся информация в одной системе',
    },
    {
        src: '/leadingsoft/images/lk/3.jpg',
        text: 'Управление в ЛК',
    },
];
</script>
