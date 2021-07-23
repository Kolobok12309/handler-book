import { mapGetters, mapActions } from 'vuex';
import flatry from 'flatry';

import { Breed, BreedGroup } from '@hb/types';

import components from './components';

export default {
  validate({ store, params }) {
    return !!store.getters['breed/breedGroupById'][params.id];
  },

  components,

  data: () => ({
    isEdit: false,
    pending: false,
  }),

  computed: {
    ...mapGetters('breed', ['breedGroupById']),

    breedGroup(): BreedGroup {
      return this.breedGroupById[this.$route.params.id];
    },

    breadcrumbs() {
      const { id, fci } = this.breedGroup;

      return [
        {
          text: 'Главная',
          href: '/',
        },
        {
          text: 'Админ',
          href: '/admin',
        },
        {
          text: 'Группы пород',
          href: '/admin/breed-groups',
        },
        {
          text: `Группа ${fci}`,
          href: `/admin/breed-groups/${id}`,
          disabled: true,
        },
      ];
    },
  },

  methods: {
    ...mapActions('breed', [
      'updateBreedGroup',
      'deleteBreedGroup',
      'addBreed',
      'updateBreed',
      'deleteBreed',
    ]),

    onGroupEdit() {},

    async onGroupDelete() {
      const { id, name } = this.breedGroup;

      if (
        !confirm(
          `Вы уверены, что хотите удалить группу "${name}" и связанные породы?`,
        )
      )
        return;

      this.pending = true;
      const [err] = await flatry(this.deleteBreedGroup(id));
      this.pending = false;

      if (err)
        return this.$toast.error('Ошибка удаления группы', err.serverError);

      this.$toast.success(`Группа "${name}" успешно удалена`);
    },

    onBreedAdd() {},

    onBreedEdit(breed: Breed) {},

    async onBreedDelete(breed: Breed) {
      const { id, name } = breed;

      if (!confirm(`Вы уверены, что хотите удалить породу "${name}"?`)) return;

      this.pending = true;
      const [err] = await flatry(this.deleteBreed(id));
      this.pending = false;

      if (err)
        return this.$toast.error('Ошибка удаления породы', err.serverError);

      this.$toast.success(`Порода "${name}" успешно удалена`);
    },
  },
};
