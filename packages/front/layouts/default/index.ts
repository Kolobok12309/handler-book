import { mapGetters } from 'vuex';

import Sidebar from './components/sidebar';

export default {
  components: {
    Sidebar,
  },

  data: () => ({
    drawer: true,
  }),

  computed: {
    ...mapGetters('user', ['isGuest', 'isAdmin']),
  },
};
