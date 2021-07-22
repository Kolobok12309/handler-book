import { mapGetters } from 'vuex';

import SidebarItem from './components/sidebar-item';

import { sidebar } from './config';

export default {
  components: {
    SidebarItem,
  },

  data() {
    return {
      items: [
        {
          icon: 'fa-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'fa-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      title: 'Handler-book',
    };
  },

  computed: {
    ...mapGetters('user', ['isGuest', 'isAdmin']),

    sidebar: () => sidebar,
  },
};
