<template>
  <!-- header section -->
  <header class="pill-header" :class="{'fixed-tran' :fixedTran,'fixed-top':!fixedTran}">
    <b-container>
      <b-navbar class="px-0" toggleable="lg" type="light">
        <b-navbar-brand class="mr-auto col-6 col-md-3 pl-lg-0" :href="localePath('/')">
          <img src="/images/logox1.png" class="w-100" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <div class="nav-item">
              <nuxt-link :to="localePath('/about')" class="nav-link">About Us</nuxt-link>
            </div>
            <div class="nav-item">
              <nuxt-link :to="localePath('/#howitwork')" class="nav-link">How it works</nuxt-link>
            </div>
            <div class="nav-item">
              <nuxt-link :to="localePath('/#pricing')" class="nav-link">Pricing</nuxt-link>
            </div>
            <div class="nav-item">
              <nuxt-link :to="localePath('/category')" class="nav-link">News</nuxt-link>
            </div>
            <div class="nav-item">
              <nuxt-link :to="localePath('/contact')" class="nav-link">Contact</nuxt-link>
            </div>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="nav-right">
            <b-nav-item class="telephone" href="tel:012 83 24 16">
              <i class="fas fa-phone-alt"></i> 012 83 24 16
            </b-nav-item>
            <b-nav-item class="login" href="#">Login</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </header>
</template>

<script>
export default {
  name: "pill-header",
  data() {
    return {
      windowTop: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll(e) {
      this.windowTop = e.target.documentElement.scrollTop;
    },
  },
  computed: {
    fixedTran() {
      return this.windowTop > 30;
    },
  },
};
</script>