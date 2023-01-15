import { mapGetters, mapActions } from 'vuex';
import flatry from 'flatry';

import { Breed, BreedGroup } from '@hb/types';

import components from './components';

export default {
  validate({ store, params }) {
    return !!store.getters['breed/breedGroupById'][params.id];
  },

  middleware: ['admin'],

  components,

  data: () => ({
    editGroupModalOpened: false,
    editBreedModalOpened: false,
    nowBreed: null,
    pending: false,
  }),

  computed: {
    ...mapGetters('breed', ['breedGroupById']),

    breedGroup(): BreedGroup {
      return this.breedGroupById[this.$route.params.id];
    },

    breadcrumbs() {
      const { id, fci, name } = this.breedGroup;

      return [
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
          exact: true,
          to: '/admin/breed-groups',
        },
        {
          text: `Группа ${fci || name}`,
          to: `/admin/breed-groups/${id}`,
          disabled: true,
        },
      ];
    },
  },

  watch: {
    '$route.hash': {
      handler(newVal) {
        if (newVal === '#edit') {
          this.onGroupEdit();
        }
      },
      immediate: true,
    },

    editGroupModalOpened(newVal) {
      if (!newVal) this.$router.push({ hash: null });
    }
  },

  methods: {
    ...mapActions('breed', [
      'updateBreedGroup',
      'deleteBreedGroup',
      'addBreed',
      'updateBreed',
      'deleteBreed',
    ]),

    onGroupEdit() {
      this.editGroupModalOpened = true;
    },

    async groupEdit(body) {
      const { id } = this.breedGroup;

      this.pending = true;
      const [err] = await flatry(this.updateBreedGroup({ id, ...body }));
      this.pending = false;

      if (err)
        return this.$toast.error('Ошибка изменения группы', err.serverError);

      this.editGroupModalOpened = false;
      this.$toast.success('Группа успешно изменена');
    },

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

    onBreedAdd() {
      this.nowBreed = null;
      this.$nextTick(() => this.editBreedModalOpened = true);
    },

    onBreedEdit(breed: Breed) {
      this.nowBreed = breed;
      this.$nextTick(() => this.editBreedModalOpened = true);
    },

    async breedAdd(body) {
      const { id: groupId } = this.breedGroup;

      this.pending = true;
      const [err] = await flatry(this.addBreed({ groupId, ...body }));
      this.pending = false;

      if (err)
        return this.$toast.error('Ошибка создания породы', err.serverError);

      this.editBreedModalOpened = false;
      this.$toast.success(`Порода "${body.name}" успешно создана`);
    },

    async breedEdit(body) {
      const { id: groupId } = this.breedGroup;
      const { id } = this.nowBreed;

      this.pending = true;
      const [err] = await flatry(this.updateBreed({ id, groupId, ...body }));
      this.pending = false;

      if (err)
        return this.$toast.error('Ошибка изменения породы', err.serverError);

      this.editBreedModalOpened = false;
      this.nowBreed = null;
      this.$toast.success(`Порода "${body.name}" успешно изменена`);
    },

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
