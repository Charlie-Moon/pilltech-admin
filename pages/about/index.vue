<template>
  <div>
    <section class="page-detail mt-5">
      <div class="py-lg-4"></div>

      <b-container>
        <h1 class="detail-title color-link">{{ $t('abt_us') }}</h1>

        <h3 class="py-4 text-center font-bold color-link">{{ $t('app_title') }}</h3>

        <br />

        <b-row cols="1" cols-sm="2" cols-md="3">
          <b-col v-for="t in about.team" v-bind:key="t.id">
            <b-card no-body tag="article">
              <div class="embed-responsive embed-responsive-16by9">
                <b-card-img
                  class="cover rounded-0"
                  :src="t.image&&apiUrl +''+ t.image.url"
                  alt="Image"
                ></b-card-img>
              </div>

              <b-card-body>
                <h5
                  class="mt-2 mb-4 font-bold color-link"
                >{{$i18n.locale=='en' ? t.title_en : t.title_en}}</h5>
                {{$i18n.locale=='en' ? t.desc_en : t.desc_en }}
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>

        <div class="py-3"></div>

        <h3 class="py-4 text-center font-bold">{{$t('core_team')}}</h3>

        <b-row cols="1" cols-sm="2" cols-md="3" class="core-team">
          <b-col v-for="c in about.core" v-bind:key="c.id">
            <b-card no-body tag="article">
              <b-card-img class="rounded-0" :src="c.image&&apiUrl +''+ c.image.url" alt="Image"></b-card-img>

              <b-card-body>
                <h5 class="mt-2 mb-4 font-bold text-center color-link">
                  {{$i18n.locale=='en' ? c.name_en : c.name_kh }}
                  <span
                    class="position"
                  >{{$i18n.locale=='en' ? c.position_en : c.position_kh}}</span>
                </h5>
                {{$i18n.locale=='en' ? c.desc_en : c.desc_kh}}
                <b-card-text>
                  <b-list-group horizontal class="justify-content-center social">
                    <b-list-group-item>
                      <a :href="!!c.social ? c.social.facebook_url : null" target="_blank">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </b-list-group-item>
                    <b-list-group-item>
                      <a :href="!!c.social ? c.social.instagram_url : null" target="_blank">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </b-list-group-item>
                    <b-list-group-item>
                      <a :href="!!c.social ? c.social.linkin_url : null" target="_blank">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </b-list-group-item>
                    <b-list-group-item>
                      <a :href="!!c.social ? c.social.twitter_url : null" target="_blank">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </b-list-group-item>
                  </b-list-group>
                </b-card-text>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <div class="py-4"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      about: [],
      apiUrl: process.env.apiUrl,
    };
  },

  methods: {
    async aboutAs() {
      const payload = await this.$axios.$get("/about-us");
      this.about = payload;
    },
  },
  computed: {},
  async mounted() {
    await this.aboutAs();
  },
};
</script>