import { required, integer, helpers } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

import { defaultForm } from './config';

export default {
  setup: () => ({ v$: useVuelidate() }),

  props: {
    value: {
      type: Object,
      default: null,
    },
  },

  data: () => ({
    form: defaultForm(),
  }),

  validations() {
    return {
      form: {
        name: {
          required: helpers.withMessage('Обязательное поле', required),
        },
        fci: {
          integer: helpers.withMessage('Только цифры', integer),
        },
      }
    }
  },

  computed: {
    isEdit() {
      return !!this.value;
    },

    title() {
      return this.isEdit
        ? 'Изменение породной группы'
        : 'Создание породной группы';
    },

    submitBtnText() {
      return this.isEdit
        ? 'Изменить'
        : 'Создать';
    },
  },

  watch: {
    value: {
      handler: 'reset',
      immediate: true,
    },
  },

  methods: {
    reset() {
      this.form = {
        ...defaultForm(),
        ...this.value,
      };
    },

    async onSubmit() {
      const isFormValid = await this.v$.$validate();

      if (!isFormValid) return;
      this.v$.$reset();

      this.$emit('submit', this.form);
    },

    onCancel() {
      this.reset();
      this.$emit('cancel');
    },
  },
};
