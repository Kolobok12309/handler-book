import { mapGetters } from 'vuex';

import { headers } from './config';

export default {
  middleware: ['admin'],

  computed: {
    ...mapGetters('breed', ['breedGroups', 'breeds']),

    headers: () => headers,
  },
};
