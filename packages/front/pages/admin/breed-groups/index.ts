import { mapGetters, mapActions } from 'vuex';
import flatry from 'flatry';

import { BreedGroup } from '@hb/types';

import { headers } from './config';

export default {
  middleware: ['admin'],

  data: () => ({
    pending: false,
  }),

  computed: {
    ...mapGetters('breed', ['breedGroups', 'breeds']),

    headers: () => headers,
  },

  methods: {
    ...mapActions('breed', ['deleteBreedGroup']),

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
  },
};
