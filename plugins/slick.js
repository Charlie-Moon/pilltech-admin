import Vue from 'vue';
import SlickSlide from 'vue-slick';

const Slick = {
  install(Vue, options) {
    Vue.component('Slick', SlickSlide)
  }
};

Vue.use(Slick);
export default Slick;