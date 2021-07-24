import { Breed } from '@hb/types';

import { headers } from './config';

export default {
  props: {
    breeds: {
      type: Array as () => Breed[],
      default: () => [],
    },

    pending: {
      type: Boolean,
      defaul: false,
    },
  },

  computed: {
    headers: () => headers,
  },

  methods: {
    onEdit(item: Breed) {
      this.$emit('edit', item);
    },

    onDelete(item: Breed) {
      this.$emit('delete', item);
    },
  },
};
