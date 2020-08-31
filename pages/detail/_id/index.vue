<template>
  <div>
    <section class="article-detail mt-5">
      <!-- Space  -->
      <div class="py-lg-4"></div>

      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-7">
            <article class="mb-3 mb-lg-5">
              <h1
                class="detail-title"
              >{{ $i18n.locale=='en' ? article.art_title_en : article.art_title_kh }}</h1>

              <figure class="article-cover mt-5 mb-4">
                <div class="embed-responsive embed-responsive-16by9 mb-4">
                  <img
                    :src="article.art_image ? apiUrl +''+article.art_image.url : ''"
                    alt
                    class="cover"
                  />
                </div>

                <figcaption>{{ $i18n.locale=='en' ? article.art_title_en : article.art_title_kh }}</figcaption>
                <!-- caption of image -->

                <div class="d-flex mt-4">
                  <time datetime="2015-05-16 19:00">
                    <i class="fal fa-calendar-alt mr-2"></i> 25-06-2020
                  </time>
                  <div class="sharing ml-auto">
                    <ul class="list-inline mb-0">
                      <li class="list-inline-item mr-3">Share</li>
                      <li class="list-inline-item social">
                        <a
                          :href="'http://www.facebook.com/sharer.php?s=' + apiUrl + `/detail/${article.id}`"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="share to Facebook"
                        >
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li class="list-inline-item social">
                        <a
                          :href="'https://twitter.com/intent/tweet?' + apiUrl + `/detail/${article.id}`"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="share to Twitter"
                        >
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </figure>

              <div
                v-if=" $i18n.locale=='en' ? article.art_content_en : article.art_content_kh"
                id="editor"
              >{{ $i18n.locale=='en' ? article.art_content_en : article.art_content_kh }}</div>
            </article>

            <hr class="mb-5" />

            <section class="related-news media-stack">
              <h3 class="media-title mb-4">{{ $t('re_news') }}</h3>

              <!-- media list -->
              <ul class="list-unstyled" v-for="re in related" v-bind:key="re.id">
                <li class="media">
                  <div class="media-cover embed-responsive-4by3">
                    <img :src="apiUrl +''+ re.art_image.url" alt class="cover" />
                  </div>
                  <div class="media-body">
                    <h6 class="mt-0 mb-1">
                      <b-link
                        :href="`/detail/${re.id}`"
                        class="color-link"
                      >{{ $i18n.locale=='en' ? re.art_title_en : re.art_title_kh }}</b-link>
                    </h6>
                    <p
                      class="media-detail"
                    >{{ $i18n.locale=='en' ? re.art_desc_en : re.art_desc_kh }}</p>
                    <div class="media-footer">
                      <b-link :href="`/detail/${re.id}`" class="color-link">
                        {{ $t('read_more') }}
                        <i class="fal fa-arrow-right"></i>
                      </b-link>
                    </div>
                  </div>
                </li>
              </ul>
            </section>

            <!-- spacing -->
            <div class="py-5"></div>
          </div>
          <!-- / col 7 -->

          <div class="col-md-4 media-stack">
            <hr class="mb-md-5" />

            <h3 class="media-title mb-4">{{ $t('la_news') }}</h3>

            <!-- media list -->
            <ul class="list-unstyled" v-for="lt in latest" v-bind:key="lt.id">
              <li class="media">
                <div class="media-cover embed-responsive-4by3">
                  <img :src="apiUrl +''+ lt.art_image.url" alt class="cover" />
                </div>
                <div class="media-body">
                  <h6 class="mt-0 mb-1">
                    <b-link
                      :href="`/detail/${lt.id}`"
                      class="color-link"
                    >{{ $i18n.locale=='en' ? lt.art_title_en : lt.art_title_kh }}</b-link>
                  </h6>
                </div>
              </li>
            </ul>

            <hr class="mt-md-5" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  async fetch() {
    await this.fetchArticle();
  },
  data() {
    return {
      related: [],
      latest: [],
      article: [],
      articles: [],
      apiUrl: process.env.apiUrl,
      id: this.$route.params.id,
    };
  },
  methods: {
    async fetchArticle() {
      const payload = await this.$axios.$get("/articles/" + this.id);
      this.article = payload;
    },
    async fetchArticles() {
      const payload = await this.$axios.$get("/articles");
      this.articles = payload;
    },
    async fetchLatestNew() {
      const payload = await this.$axios.$get("/articles");
      this.latest = payload
        .sort((a, b) => new Date(b.publish_at) - new Date(a.publish_at))
        .filter((item, index) => item.id != this.id)
        .slice(0, 5);
    },

    async fetchRelatedNew() {
      const payload = await this.$axios.$get("/articles");
      this.related = payload
        // .sort((a, b) => b.publish_at - a.publish_at)
        .filter((item, index) => item.id != this.id)
        .slice(0, 5);
    },
  },
  computed: {},
  mounted() {
    this.fetchArticle();
    this.fetchArticles();
    this.fetchRelatedNew();
    this.fetchLatestNew();
    //new change
  },
};
</script>
