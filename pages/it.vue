<template>
    <Head>
        <Title>ИТ-разработка</Title>
    </Head>
    <LsBreadcrumbs>ИТ-разработка</LsBreadcrumbs>
    <section class="ls-it ls-content">
        <div class="ls-it__header">
            <p class="ls-h1">Разработка IT продукта под ключ</p>
            <div class="ls-it__header-content">
                <p>
                    Цель нашей работы дать возможность нашим заказчикам
                    автоматизировать рабочие процессы, чтобы экономить время и
                    деньги
                </p>
                <p>
                    Заказная разработка в ЛидингСофт – это более 10 лет опыта на
                    рынке разработки и успешно реализованные проекты в крупных
                    компаниях. Мы осуществляем как крупные комплексные проекты
                    по построению информационных систем, так и оказываем услуги
                    по настройке отдельных модулей системы, которые интегрируем
                    с существующей IT-инфраструктурой заказчика.
                </p>
            </div>
            <LsBannerDark>
                <template v-slot:text1>
                    <p>
                        Закажите полный цикл разработки IT-продукта под ключ: от
                        управления до внедрения.
                    </p>
                    <p>
                        Создадим минимальную базовую версию (MVP), если продукт
                        требуется выпустить быстро, и доработаем ее после того,
                        как вы получите первую обратную связь от пользователей и
                        инвесторов.
                    </p>
                </template>
                <LsButton class="ls-button--fullwhite">Заказать</LsButton>
            </LsBannerDark>
        </div>
        <div class="ls-it__steps">
            <p class="ls-it__steps-h2 ls-h2">Этапы разработки</p>
            <div class="ls-small-cards-layout ls-it__steps-layout">
                <LsIconHText>
                    <template v-slot:icon>
                        <QueryStats />
                    </template>
                    <template v-slot:header>1. Аналитика и дизайн</template>
                    <template v-slot:text
                        >Наши специалисты соберут у вас информацию о требуемом
                        вам цифровом продукте, проанализируют ее и разработают
                        дизайн.</template
                    >
                </LsIconHText>
                <LsIconHText>
                    <template v-slot:icon>
                        <Code />
                    </template>
                    <template v-slot:header
                        >2. Разработка и тестирование</template
                    >
                    <template v-slot:text
                        >После демонстрации прототипа продукта заказчику наши
                        программисты разработают систему, и мы проведем ее
                        тестирование.</template
                    >
                </LsIconHText>
                <LsIconHText>
                    <template v-slot:icon>
                        <Manufacturing />
                    </template>
                    <template v-slot:header>3. Внедрение системы</template>
                    <template v-slot:text
                        >Как только тестирование будет успешно завершено и
                        продукт будет готов к использованию, Вы получите полный
                        доступ ко всем его функциям. Также наши специалисты
                        проведут обучение и настроят продукт под вас.</template
                    >
                </LsIconHText>
            </div>
        </div>
        <LsWhyUs />
        <LsGetting />
        <LsOrder />
    </section>
</template>
