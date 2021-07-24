import { required, integer, helpers } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import pick from 'lodash/pick';
import { mapGetters } from 'vuex';

import { defaultForm } from './config';

export default {
  setup: () => ({ v$: useVuelidate() }),

  props: {
    value: {
      type: Object,
      default: null,
    },

    pending: {
      type: Boolean,
      default: false,
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
    ...mapGetters('breed', ['subBreeds']),

    subBreedNames() {
      const names = this.subBreeds
        .map(({ name }) => name);

      return new Set(names);
    },

    isEdit() {
      return !!this.value;
    },

    title() {
      return this.isEdit
        ? 'Изменение породы'
        : 'Создание породы';
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
      const defaults = defaultForm();
      const picked = pick(this.value || {}, Object.keys(defaults));

      this.form = {
        ...defaults,
        ...picked,
        subgroups: (picked.subgroups || [])
          .map(({ name }) => name),
      };
    },

    formatForm(form) {
      const res = { ...form };

      res.subgroups = form.subgroups
        .map((name) => ({ name }));

      return res;
    },

    async onSubmit() {
      const isFormValid = await this.v$.$validate();

      if (!isFormValid) return;
      this.v$.$reset();

      this.$emit('submit', this.formatForm(this.form));
    },

    onCancel() {
      this.reset();
      this.$emit('cancel');
    },
  }
};

