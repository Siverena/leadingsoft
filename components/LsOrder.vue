<template>
    <section class="ls-order" id="order">
        <div class="ls-order__col-1">
            <div class="ls-order__title ls-h2">
                Хотите заказать разработку или узнать больше о наших продуктах?
            </div>
            <p class="ls-order__text">Свяжитесь с нами</p>
            <div class="ls-order__contacts">
                <div class="ls-order__contact">
                    <Pin />
                    <p>
                        199155, Россия , город Санкт-Петербург, улица Уральская,
                        дом №19 кор.10. оф. 42
                    </p>
                </div>
                <div class="ls-order__contact">
                    <Phone />
                    <a href="tel:+78124073614"> +7 (812) 407-36-14 </a>
                </div>
                <div class="ls-order__contact">
                    <Mail />
                    <a href="mailto:info@le-soft.ru"> info@le-soft.ru</a>
                </div>
                <div class="ls-order__contact">
                    <VkWhite />
                    <a href="https://vk.com/le_soft">https://vk.com/le_soft</a>
                </div>
            </div>
        </div>
        <form class="ls-order__form" @submit.prevent="submitForm">
            <template v-for="(field, key) in fields" :key="key">
                <div
                    class="ls-order__field"
                    v-if="fieldsVisibility[field.name]"
                >
                    <label class="ls-order__label" :for="field.name"
                        >{{ field.label
                        }}<span class="ls-order__star" v-if="field.required"
                            >*</span
                        ></label
                    >
                    <InputMask
                        v-if="field.mask && field.type !== 'textarea'"
                        class="ls-order__input"
                        :class="{
                            'ls-order__input--error': field.error,
                        }"
                        :type="field.type"
                        :name="field.name"
                        :id="field.name"
                        :mask="field.mask"
                        :unmask="true"
                        :autoClear="false"
                        :unstyled="true"
                        v-model.trim="field.value"
                        :placeholder="field.placeholder"
                        @focusout="validateField(field)"
                    />
                    <input
                        v-if="!field.mask && field.type !== 'textarea'"
                        class="ls-order__input"
                        :class="{
                            'ls-order__input--error': field.error,
                        }"
                        :type="field.type"
                        :name="field.name"
                        :id="field.name"
                        v-model.trim="field.value"
                        :placeholder="field.placeholder"
                        @focusout="validateField(field)"
                    />
                    <textarea
                        v-if="field.type === 'textarea'"
                        class="ls-order__textarea"
                        name=""
                        id=""
                    ></textarea>
                    <span class="ls-order__error" v-if="field.error">{{
                        field.error
                    }}</span>
                </div>
            </template>
            <LsButton class="ls-order__btn ls-button--fullblue">
                Отправить
            </LsButton>

            <div class="ls-order__field--checkbox">
                <input
                    type="checkbox"
                    id="agree"
                    name="agree"
                    v-model="agree"
                />
                <label for="agree" class="ls-order__label--checkbox">
                    <div
                        class="ls-order__checkbox"
                        :class="{
                            'ls-order__checkbox--error':
                                !agree && agreementError,
                            'ls-order__checkbox--agree': agree,
                        }"
                    >
                        <LsCheckInput v-if="agree" />
                    </div>
                    <div
                        class="ls-order__label-text"
                        :class="
                            !agree && agreementError
                                ? 'ls-order__label-text--error'
                                : ''
                        "
                    >
                        <span
                            >Даю согласие на обработку моих персональных данных
                            в соответствии с

                            <NuxtLink
                                to="/policy"
                                target="_blank"
                                class="ls-order__agree"
                                >политикой обработки персональных
                                данных</NuxtLink
                            ></span
                        >
                    </div>
                </label>
            </div>
        </form>
    </section>
    <LsNotification
        v-if="isNotificationShow"
        :code="code"
        :closeNotification="closeNotification"
    />
</template>
<script setup>
let isNotificationShow = ref(false);
let code = ref(0);
let agree = ref(false);
let agreementError = ref(false);
let validationSuccess = ref(true);
let fields = ref([
    {
        name: 'name',
        label: 'Имя',
        value: '',
        required: true,
        type: 'text',
        placeholder: 'Имя',
        error: '',
    },
    {
        name: 'tel',
        label: 'Телефон',
        value: '',
        required: true,
        type: 'tel',
        placeholder: '+7(___) ___-__-__',
        mask: '+7 (999) 999-99-99',
        error: '',
    },
    {
        name: 'email',
        label: 'E-mail',
        value: '',
        required: false,
        type: 'email',
        mask: '',
        placeholder: 'example@mail.ru',
        error: '',
    },
    {
        name: 'comment',
        label: 'Комментарий',
        value: '',
        required: false,
        type: 'textarea',
        mask: '',
        placeholder: '',
        error: '',
    },
]);
let formData = ref({});
const fieldsVisibility = {
    name: true,
    tel: true,
    email: true,
    comment: true,
};

function validateName() {
    if (this.name.length < 0) {
        this.errors.name = 'Поле ';
    }
}

function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validateTel(tel) {
    return tel.length === 10;
}

function validateField(field) {
    field.error = '';

    if (
        fieldsVisibility[field.name] &&
        field.required &&
        field.value.length == 0
    ) {
        field.error = `Заполните поле ${field.label}`;
        return false;
    }
    if (
        field.type === 'email' &&
        field.value.length > 0 &&
        !validateEmail(field.value)
    ) {
        field.error = `Поле ${field.label} заполнено некорректно`;
        return false;
    }
    if (
        field.type === 'tel' &&
        field.value.length > 0 &&
        !validateTel(field.value)
    ) {
        field.error = `Поле ${field.label} заполнено некорректно`;
        return false;
    }
    return true;
}

function checkForm() {
    validationSuccess.value = true;
    agreementError.value = false;

    fields.value.forEach((field) => {
        if (!validateField(field)) {
            validationSuccess.value = false;
        }
    });

    if (!agree.value) {
        validationSuccess.value = false;
        agreementError.value = true;
    }
}

function closeNotification() {
    isNotificationShow.value = false;
}

function showNotification() {
    isNotificationShow.value = true;
    code.value = 200;
    setTimeout(closeNotification, 3000);
}

const submitForm = () => {
    checkForm();
    if (validationSuccess.value) {
        fields.value.forEach((field) => {
            if (fieldsVisibility[field.name]) {
                formData.value[field.name] = field.value;
            }
        });
        console.log(formData.value);
        showNotification();
        fields.value.forEach((field) => {
            field.value = '';
        });
    }
};
</script>
