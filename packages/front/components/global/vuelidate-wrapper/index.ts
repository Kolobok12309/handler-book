export default {
  props: {
    validator: {
      type: Object,
      required: true,
    },
  },

  computed: {
    errors() {
      return this.validator.$errors.map(({ $message }) => $message);
    },
  },
};
