import { mapGetters, mapActions } from 'vuex';
import flatry from 'flatry';

import { BreedGroup } from '@hb/types';

import { headers } from './config';
import components from './components';

export default {
  middleware: ['admin'],

  components,

  data: () => ({
    pending: false,
    addModalOpened: false,
  }),

  computed: {
    ...mapGetters('breed', ['breedGroups', 'breeds']),

    headers: () => headers,

    breadcrumbs: () => [
      {
        text: 'Главная',
        to: '/',
      },
      {
        text: 'Админ',
        exact: true,
        to: '/admin',
      },
      {
        text: 'Породные группы',
        to: '/admin/breed-groups',
        disabled: true,
      },
    ],
  },

  methods: {
    ...mapActions('breed', ['addBreedGroup', 'deleteBreedGroup']),

    async onDelete(item: BreedGroup) {
      if (
        !confirm(
          `Вы уверены, что хотите удалить группу "${item.name}" и связанные породы?`,
        )
      )
        return;

      this.pending = true;
      const [err] = await flatry(this.deleteBreedGroup(item.id));
      this.pending = false;

      if (err)
        return this.$toast.error('Ошибка удаления группы', err.serverError);

      this.$toast.success(`Группа ${item.name} успешно удалена`);
    },

    async onAddBreedGroup(body) {
      this.pending = true;
      const [err] = await flatry(this.addBreedGroup(body));
      this.pending = false;

      if (err)
        return this.$toast.error('Ошибка создания группы', err.serverError);

      this.addModalOpened = false;
      this.$toast.success('Группа успешно добавлена');
    },
  },
};
