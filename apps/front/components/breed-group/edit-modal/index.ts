import BreedGroupForm from '../form';

export default {
  components: {
    BreedGroupForm,
  },

  props: {
    opened: {
      type: Boolean,
      default: false,
    },

    value: {
      type: Object,
      default: null,
    },

    pending: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    compOpened: {
      get() {
        return this.opened;
      },

      set(newVal) {
        this.$emit('update:opened', newVal);
      }
    },

    isEdit() {
      return !!this.value;
    },
  },

  watch: {
    opened: 'reset',
    value: 'reset',
  },

  methods: {
    onSubmit(body) {
      const eventName = this.isEdit
        ? 'edit'
        : 'add';

      this.$emit(eventName, body);
    },

    onCancel() {
      this.compOpened = false;
    },

    reset() {
      this.$refs.form && this.$refs.form.reset();
    },
  }
};
