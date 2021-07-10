import Vue from 'vue';
import VueToastify from 'vue-toastify';

declare module 'vue/types/vue' {
  interface VueConstructor {
    $vToastify: any;
    $toast: any;
  }

  interface Vue {
    $vToastify: any;
    $toast: any;
  }
}

Vue.use(VueToastify, {
  position: 'top-right',
});

export default (context, inject) => {
  inject('toast', Vue.$vToastify);
};
