import { mapGetters } from 'vuex';

import Sidebar from './components/sidebar';

export default {
  components: {
    Sidebar,
  },

  data: () => ({
    drawer: false,
  }),

  computed: {
    ...mapGetters('user', ['isGuest', 'isAdmin']),
  },
};
