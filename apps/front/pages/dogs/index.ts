import asyncData from './asyncData';
import { headers } from './config';

export default {
  asyncData,

  data: () => ({
    dogs: [], // AsyncData
    pending: false,
  }),

  computed: {
    headers: () => headers,

    breadcrumbs: () => [
      {
        text: 'Главная',
        to: '/',
      },
      {
        text: 'Собаки',
        to: '/dogs',
        disabled: true,
      },
    ],
  },

  methods: {
    itemClass() {
      return 'dogs__row';
    },

    onDogClick({ id }) {
      this.$router.push(`/dogs/${id}`);
    },
  },
};
