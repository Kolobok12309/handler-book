import { mapGetters } from 'vuex';

import { Role } from '@hb/types';

import { SidebarItem } from '../../config';

export default {
  name: 'SidebarItem',

  props: {
    item: {
      type: Object as () => SidebarItem,
      required: true,
    },
  },

  computed: {
    ...mapGetters('user', ['can']),

    canSee() {
      const { acl = [null, Role.Admin, Role.User] } = this.item;

      return this.can(acl);
    },
  },
};
