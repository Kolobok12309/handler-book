import flatry from 'flatry';
import { mapActions } from 'vuex';

export default {
  middleware: ['auth'],

  methods: {
    ...mapActions('user', ['quit']),
  },

  async mounted() {
    const [err] = await flatry(this.quit());

    if (err) this.$toast.error(err.serverError, 'Ошибка выхода');

    this.$router.push('/');
  },
};
