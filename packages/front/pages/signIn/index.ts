import flatry from 'flatry';
import { mapActions } from 'vuex';
import { defineComponent } from '@vue/composition-api';
import { required, minLength, email, helpers } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

const PASS_MIN_LENGTH = 10;

export default defineComponent({
  setup: () => ({ v$: useVuelidate() }),

  data() {
    return {
      email: '',
      password: '',
    };
  },

  validations() {
    return {
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
    };
  },

  methods: {
    ...mapActions('user', ['signIn']),

    async onSubmit() {
      const isFormValid = await this.v$.$validate();

      if (!isFormValid) return;
      this.v$.$reset();

      const { email, password } = this;

      const [err, user] = await flatry(this.signIn({ email, password }));

      if (err) {
        this.$toast.error('Ошибка авторизации', err.serverError);
      } else {
        this.$router.push('/');
      }
    },
  },
});
