import flatry from 'flatry';
import { mapActions } from 'vuex';
import { defineComponent } from '@vue/composition-api';
import {
  required,
  minLength,
  maxLength,
  email,
  sameAs,
  helpers,
} from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

const PASS_MIN_LENGTH = 8;

export default defineComponent({
  middleware: ['guest'],

  setup: () => ({ v$: useVuelidate() }),

  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  },

  validations() {
    return {
      name: {
        required: helpers.withMessage('Обязательное поле', required),
        minLength: helpers.withMessage(
          'Максимальная длина 64 символа',
          maxLength(64),
        ),
      },
      email: {
        required: helpers.withMessage('Обязательное поле', required),
        minLength: helpers.withMessage(
          'Минимальная длина 4 символа',
          minLength(4),
        ),
        email: helpers.withMessage('E-mail введён в неверном формате', email),
      },
      password: {
        required: helpers.withMessage('Обязательное поле', required),
        minLength: helpers.withMessage(
          `Минимальная длина ${PASS_MIN_LENGTH} символов`,
          minLength(PASS_MIN_LENGTH),
        ),
        sameAs: helpers.withMessage(
          'Пароли не совпадают',
          sameAs(this.confirmPassword),
        ),
      },
      confirmPassword: {
        required: helpers.withMessage('Обязательное поле', required),
        minLength: helpers.withMessage(
          `Минимальная длина ${PASS_MIN_LENGTH} символов`,
          minLength(PASS_MIN_LENGTH),
        ),
        sameAs: helpers.withMessage(
          'Пароли не совпадают',
          sameAs(this.password),
        ),
      },
    };
  },

  methods: {
    ...mapActions('user', ['signUp']),

    async onSubmit() {
      const isFormValid = await this.v$.$validate();

      if (!isFormValid) return;
      this.v$.$reset();

      const { name, email, password } = this;

      const [err, user] = await flatry(this.signUp({ name, email, password }));

      if (err) {
        this.$toast.error(err.serverError, 'Ошибка регистрации');
      } else {
        this.$router.push('/');
      }
    },
  },
});
