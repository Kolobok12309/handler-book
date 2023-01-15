import flatry from 'flatry';
import { mapActions } from 'vuex';
import { defineComponent } from '@vue/composition-api';
import { required, minLength, email, helpers } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

const PASS_MIN_LENGTH = 8;

export default defineComponent({
  middleware: ['guest'],

  setup: () => ({ v$: useVuelidate() }),

  data: () => ({
    form: {
      email: '',
      password: '',
    },
    pending: false,
  }),

  validations() {
    return {
      form: {
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
        },
      }
    };
  },

  methods: {
    ...mapActions('user', ['signIn']),

    async onSubmit() {
      const isFormValid = await this.v$.$validate();

      if (!isFormValid) return;
      this.v$.$reset();

      this.pending = true;
      const [err, user] = await flatry(this.signIn(this.form));
      this.pending = false;

      if (err) {
        this.$toast.error('Ошибка авторизации', err.serverError);
      } else {
        this.$router.push('/');
      }
    },
  },
});
