<template>
    <div>

        <section  class="page-detail mt-5">

            <div class="py-lg-4"></div>

            <b-container>

                <h1 class="detail-title color-link">News</h1>

                <div class="py-4"></div>

                <b-row cols="1" cols-sm="2" cols-md="2" cols-lg="3">


                   <b-col v-for="article in articles" v-bind:key="article.id">
                        <b-card
                            no-body
                            tag="article"
                        >

                            <div class="embed-responsive embed-responsive-16by9">
                                <b-card-img class="cover rounded-0" :src="apiUrl +''+ article.art_image.url" alt="Image"></b-card-img>
                            </div>

                            <b-card-body>
                                <h5 class="mt-2 mb-4 font-bold">
                                    <b-link :href="`/detail/${article.id}`" class="color-link">{{ article.art_title_en }}</b-link> 
                                </h5>
                                <p>{{ article.art_desc_en }}</p>
                            </b-card-body>
                        </b-card>
                   </b-col>                
                </b-row>                
                <b-pagination v-model="currentPage" :per-page="perPage" @change="fetchArticle"  pills :total-rows="rows" size="sm"></b-pagination>
                <div class="py-3"></div>
            </b-container>
        </section>
        <div class="py-4"></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      perPage: 6,
      currentPage: 1,
      rows: 0,
      articles: [],
      apiUrl: process.env.apiUrl,
    }
  },

  methods: {
    async fetchArticle(e=0) {
      let index = e>0 ? (e-1>0) ? ((e-1)*6) : 0 : 0;
      let limit = this.perPage;
      const total = await this.$axios.$get('/articles/count');
      this.rows = total;
      let payload = await this.$axios.$get('/articles?_start='+ index +'&_limit='+ limit)
      this.articles = payload;
    },
  },
  computed: {

    
  },
  mounted() {
    this.fetchArticle();
  },
}
</script>