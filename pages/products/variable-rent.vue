<template>
    <Head>
        <Title>Система расчета переменной арендной платы</Title>
    </Head>
    <LsBreadcrumbs>Система расчета переменной арендной платы</LsBreadcrumbs>
    <LsAboutProduct>
        <template v-slot:title>
            Система расчета переменной арендной платы
        </template>
        <template v-slot:text>
            <p>
                <span>Система расчета переменной арендной платы</span>— это
                система, в которой арендодатель распределяет затраты на оплату
                коммунальных услуг между арендаторами. Арендодатель
                устанавливает фиксированную ставку аренды, а затем распределяет
                расходы на коммунальные услуги между арендаторами на основе их
                фактического потребления.
            </p>
            <p>
                Примером системы расчетов переменной платы может быть система
                оплаты электроэнергии, в которой арендатор оплачивает только те
                киловатты электроэнергии, которые он использовал за месяц.
            </p>
        </template>
    </LsAboutProduct>
    <LsAdvantages>
        <template v-slot:name
            >Преимущества системы расчетов переменной платы</template
        >
        <img src="@/assets/img/pay/advantages/1.jpg" alt="" />
        <LsIconHText class="ls-icon-h-text--ligth">
            <template v-slot:icon>
                <QueryStats />
            </template>
            <template v-slot:header>Выгода</template>
            <template v-slot:text
                >Эффективное управление расходами и снижение общих затрат на
                аренду дает возможность устанавливать более выгодную цену на
                рынке арендных услуг.</template
            >
        </LsIconHText>

        <LsIconHText class="ls-icon-h-text--blue">
            <template v-slot:icon>
                <Approval />
            </template>
            <template v-slot:header>Доверие</template>
            <template v-slot:text
                >Прозрачная система расчетов повышает уровень доверия к
                арендодателю и привлекает новых арендаторов.</template
            >
        </LsIconHText>
        <LsIconHText class="ls-icon-h-text--blue">
            <template v-slot:icon>
                <Approval />
            </template>
            <template v-slot:header>Прозрачность</template>
            <template v-slot:text
                >Прозрачная система распределения затрат позволяет арендаторам
                четко понимать, как они используют коммунальные услуги, и как
                это влияет на их ежемесячные расходы.</template
            >
        </LsIconHText>
        <img src="@/assets/img/pay/advantages/2.jpg" alt="" />
        <LsIconHText class="ls-icon-h-text--ligth">
            <template v-slot:icon>
                <Approval />
            </template>
            <template v-slot:header>Экономия</template>
            <template v-slot:text
                >Арендаторы оплачивают только те услуги, которые используют.
            </template>
        </LsIconHText>
    </LsAdvantages>
    <LsProfit>
        Поможем арендодателю снизить расходы и обеспечивать более прозрачное
        распределение затрат между арендаторами.
    </LsProfit>
    <section class="ls-getting">
        <p class="ls-getting__title ls-h2">Что вы получаете</p>
        <div class="ls-big-cards-layout">
            <LsImgText>
                <template v-slot:img>
                    <Verified />
                </template>
                <template v-slot:text
                    >Готовую систему расчета переменных затрат</template
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
                    >Возможность устанавливать выгодные цены на рынке арендных
                    услуг</template
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
