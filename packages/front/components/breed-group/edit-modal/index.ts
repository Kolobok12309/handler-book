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
  },

  computed: {
    compOpened: {
      get() {
        return this.opened;
      },

      set(newVal) {
        this.$emit('update:opened', newVal);
      }
    }
  },

  watch: {
    opened: 'reset',
    value: 'reset',
  },

  methods: {
    onSubmit(body) {
      this.$emit('submit', body);
    },

    onCancel() {
      this.compOpened = false;
    },

    reset() {
      this.$refs.form && this.$refs.form.reset();
    },
  }
};
