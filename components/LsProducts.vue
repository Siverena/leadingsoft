<template>
    <section class="ls-products">
        <h2
            class="ls-products__title ls-h2"
            id="programm-products"
            :class="
                index === true
                    ? 'ls-products__title--index'
                    : 'ls-products__title--without-text'
            "
        >
            {{ index === true ? ' Программные продукты' : 'Еще продукты' }}
        </h2>
        <div class="ls-products__text" v-if="index">
            <p>
                С нашими продуктами работа вашей компании станет эффективнее и
                быстрее. Вам не потребуются дополнительные специалисты по работе
                с нашими продуктами. Мы всегда придем на помощь с решением
                разнообразных задач и ваших пожеланий.
            </p>

            <p>
                Вы можете воспользоваться уже
                <a href="/">готовыми предложениями</a>.
            </p>
        </div>
        <div class="ls-products__container">
            <template v-for="(product, key) in visibleProducts" :key="key">
                <LsProduct :product="product" :id="key" />
            </template>
        </div>
        <LsButton
            class="ls-products__btn ls-button--blue"
            @click="showMore"
            v-if="isButtonVisible"
            >Показать еще</LsButton
        >
    </section>
</template>

<script setup>
//props
const props = defineProps(['visibleProductsList', 'index']);
//data
let counter = ref(4);
const products = [
    {
        name: 'Система публикаций',
        link: '/products/publication-system',
        description: `<p>Цифровая экосистема для арендаторов поможет:</p>
                                    <ul>
                                        <li>      автоматизировать учет своей недвижимости;</li>
                                        <li>расширить ваше присутствие в сети интернет;</li>
                                        <li>увеличить клиентскую базу;</li>
                                        <li>
                                создать большое количество сайтов с вашей недвижимостью для продвижения.</li>
                                    </ul>`,
        imgSrc: '/leadingsoft/images/ls-products/Publications.png',
    },
    {
        name: 'Система управления парковками',
        link: '/products/parking',
        description: `<p>Удобный сервис для управления Вашими парковками. Выдача, отслеживание оплата - пропусков в 1 программе.</p>`,
        imgSrc: '/leadingsoft/images/ls-products/parking.png',
    },
    {
        name: 'Система автоматизации и показа рекламы в сетях Wi-Fi',
        link: '/products/wi-fi',
        description: `<p>Удобная система, которая позволит больше узнать о ваших посетителях, настроить на них рекламу и увеличить ваши продажи.</p>`,
        imgSrc: '/leadingsoft/images/ls-products/wifi.png',
    },
    {
        name: 'Портал современной школы',
        link: '/products/school',
        description: `<p>Удобная система, которая включает в себя электронный журнал и электронный дневник. Это позволит Вам отслеживать домашние задания и успеваемость учеников, а так же получать домашние задания онлайн.</p>`,
        imgSrc: '/leadingsoft/images/ls-products/school.png',
    },
    {
        name: 'Система расчета переменной арендной платы',
        link: '/products/variable-rent',
        description: `<p>Система, в которой арендодатель распределяет затраты на оплату коммунальных услуг между арендаторами.</p>`,
        imgSrc: '',
    },
    {
        name: 'Личный кабинет арендатора',
        link: '/products/lk',
        description: `<p>Система, которая позволяет арендатору самостоятельно управлять арендой помещений, персоналом и услугами, подключенными к объекту аренды.</p>`,
        imgSrc: '/leadingsoft/images/ls-products/lk.png',
    },
];
//computed

const filteredProducts = computed(() => {
    if (props.visibleProductsList) {
        return products.filter((el, index) =>
            props.visibleProductsList.includes(index)
        );
    }
    return products;
});

const visibleProducts = computed(() => {
    return filteredProducts.value.slice(0, counter.value);
});

const isButtonVisible = computed(() => {
    return counter.value < filteredProducts.value.length;
});
const showMore = () => {
    counter.value += 4;
    if (counter > products.length) {
        counter = products.length;
    }
};
</script>
