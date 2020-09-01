<template>
  <div>
    <Header />
    <!-- background section -->
    <div class="background-img-header">
      <div class="row no-gutters">
        <div class="col-5"></div>
        <div class="col-7">
          <div class="img-bg"></div>
          <div class="img-img">
            <img
              :src="home_page.banner&&apiUrl+''+home_page.banner.banner_image.url"
              alt="..."
              class="w-75"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="pharmacy-trial">
      <div class="container">
        <div class="text-pharmacy mt-5 mt-lg-0 pb-3 pb-md-3 pb-lg-0">
          <div v-html="$i18n.locale=='en' ? home_page.banner&&home_page.banner.banner_title_en : home_page.banner&&home_page.banner.banner_title_kh "></div>
        </div>
        <div class="trial-watch pb-5 pb-md-5 pb-lg-0">
          <div class="trial">
            <a
              href="#"
            >{{ $i18n.locale=='en' ? home_page.banner&&home_page.banner.banner_trail_en : home_page.banner&&home_page.banner.banner_trail_kh }}</a>
          </div>
          <div class="watch">
            <b-button id="show-btn" @click="$bvModal.show('bv-demo')">
              <i class="fas fa-play-circle"></i>
              <span
                class="small"
              >{{ $i18n.locale=='en' ? home_page.banner&&home_page.banner.banner_demo_en : home_page.banner&&home_page.banner.banner_demo_kh }}</span>
            </b-button>
          </div>
        </div>
      </div>
    </div>

    <div class="py-lg-4"></div>

    <section class="feature pb-5" id="features">
      <div class="container">
        <div class="feature-title pb-5">
          <h1>
            {{ $t('feat_title_1') }}
            <br />
            {{ $t('feat_title_2') }}
          </h1>
        </div>
        <div class="row">
          <div
            class="col-12 col-md-6 col-lg-3 pb-3 pb-md-3 pb-lg-0"
            v-for="q_features in home_page.feat_list"
            v-bind:key="q_features.id"
          >
            <a href="javascript:void(0)">
              <div class="card shadow">
                <div class="card-header">
                  <div class="card-icon" v-html="$i18n.locale=='en' ? q_features.feat_icon :q_features.feat_icon">
                    
                  </div>
                </div>
                <div class="card-body">
                  <h5
                    class="card-title"
                  >{{ $i18n.locale=='en' ? q_features.feat_title_en :q_features.feat_title_kh }}</h5>
                  <p
                    class="card-text"
                    v-html="$i18n.locale=='en' ? q_features.feat_desc_en :q_features.feat_desc_kh"
                  ></p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <div class="py-lg-4"></div>

    <section class="message-ceo pb-5">
      <div class="container">
        <div class="ceo">
          <div class="ceo-bg-out">
            <img src="/images/bg1.jpg" alt class="w-100" />
          </div>
          <div class="ceo-in">
            <div class="row no-gutters align-self-center justify-content-center">
              <div class="col-12 col-md-3 col-lg-3 offset-1">
                <div class="img-ceo">
                  <img
                    :src="home_page.message_ceo ? (home_page.message_ceo.ceo_image ? apiUrl+''+ home_page.message_ceo.ceo_image.url : '') : ''"
                    alt="CEO profile"
                  />
                </div>
                <div class="ceo-title">
                  <h5>{{ $i18n.locale=='en' ? home_page.message_ceo&&home_page.message_ceo.ceo_name_en : home_page.message_ceo&&home_page.message_ceo.ceo_name_kh }}</h5>
                  <h5>{{ $i18n.locale=='en' ? home_page.message_ceo&&home_page.message_ceo.ceo_position_en: home_page.message_ceo&&home_page.message_ceo.ceo_position_kh }}</h5>
                  <a href="#" class="small">{{ $t('abt_ceo') }}</a>
                </div>
              </div>
              <div class="col">
                <div class="msg-title">
                  <h4>{{ $t('msg_ceo') }}:</h4>
                  <p
                    v-html="$i18n.locale=='en' ? home_page.message_ceo&&home_page.message_ceo.ceo_desc_en : home_page.message_ceo&&home_page.message_ceo.ceo_desc_kh "
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="py-lg-4" id="howitwork"></div>

    <section class="watch-tutorial pb-5">
      <div class="container">
        <div class="tutorial-title pb-5">
          <h1>{{ $t('w_demo') }}</h1>
        </div>

        <div class="tutorial-video">
          <div class="row">
            <div class="col-12 col-md-5 col-lg-5 align-self-center">
              <b-button id="show-btn" @click="$bvModal.show('bv-demo')">
                <div class="video-play">
                  <img
                    :src="home_page.demo ?  (home_page.demo.demo_image_en ? apiUrl+''+ home_page.demo.demo_image_en.url : '') : ''"
                    alt
                    class="w-100"
                  />
                </div>
              </b-button>
            </div>
            <div class="col-12 col-md-7 col-lg-7">
              <div class="tutorial-detail">
                <h2>{{ $i18n.locale=='en' ? home_page.demo&&home_page.demo.demo_title_en : home_page.demo&&home_page.demo.demo_title_kh }}</h2>
                <p
                  v-html="$i18n.locale=='en' ? home_page.demo&&home_page.demo.demo_desc_en : home_page.demo&&home_page.demo.demo_desc_kh "
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="video-demo">
      <b-modal id="bv-demo" hide-footer hide-header size="xl">
        <div class="d-block text-center">
          <b-button
            class="ml-auto w-auto bg-light mb-3"
            variant="parimary"
            block
            @click="$bvModal.hide('bv-demo')"
          >
            <span aria-hidden="true">×</span>
          </b-button>
          <div>
            <b-embed
              type="video"
              aspect="16by9"
              controls
              :poster="home_page.demo&&home_page.demo.demo_vid_en ? apiUrl+''+ home_page.demo.demo_vid_en.url : ''"
            >
              <source
                :src="home_page.demo&&home_page.demo.demo_vid_en ? apiUrl+''+ home_page.demo.demo_vid_en.url : ''"
                type="video/mp4"
              />
            </b-embed>
          </div>
        </div>
      </b-modal>
    </section>

    <div class="py-lg-4"></div>

    <section class="client-comment" id="client-say">
      <div class="container">
        <div class="client-title">
          <h1>{{ $t('cli_say') }}</h1>
        </div>
        <client-only>
          <Slick ref="slick" class="slick-carou" :options="slickOptions">
            <div class="client" v-for="cli_say in clients_say" :key="cli_say.id">
              <div
                class="media-cover"
                style="background-image: url('/images/bg2.jpg');background-repeat: no-repeat;background-size: cover;"
              >
                <div class="media">
                  <div class="embed-responsive embed-responsive-1by1 mr-3">
                    <img class="cover" :src="apiUrl + '' + cli_say.cli_image.url" />
                  </div>
                  <div class="media-body">
                    <div class="media-body">
                      <h5>{{ $i18n.locale=='en' ? cli_say.cli_name_en : cli_say.cli_name_kh }}</h5>
                      <h6>{{ $i18n.locale=='en' ? cli_say.cli_position_en : cli_say.cli_position_kh }}</h6>
                    </div>
                  </div>
                </div>
                <div class="media-content">
                  <i class="fas fa-quote-right c-b"></i>
                  <p
                    v-html=" $i18n.locale=='en' ? cli_say.cli_content_en : cli_say.cli_content_kh "
                  ></p>
                </div>
              </div>
            </div>
          </Slick>
        </client-only>
      </div>
      <!-- container -->
    </section>

    <div class="py-lg-4"></div>

    <section class="choose-price pb-5" id="pricing">
      <div class="container position-relative">
        <div class="choose-bg">
          <div class="choose-title py-5 pt-md-0">
            <h1>{{ $t('pri_plan') }}</h1>
          </div>

          <div class="select-price">
            <div class="row justify-content-center">
              <div class="col-12 col-md-5 pb-3 pb-md-3 pb-lg-0">
                <div class="card shadow">
                  <div class="card-body">
                    <div class="card-title-b">
                      <h5>{{$i18n.locale=='en' ? home_page.plan&&home_page.plan.price_25.int_title_en : home_page.plan&&home_page.plan.price_25.int_title_kh}}</h5>
                      <h4>{{home_page.plan&&home_page.plan.price_25.pri_num}}</h4>
                      <h6>{{$i18n.locale=='en' ? home_page.plan&&home_page.plan.price_25.pri_month_en : home_page.plan&&home_page.plan.pric_month_kh}}</h6>
                    </div>
                    <div
                      class="card-text"
                      v-html="$i18n.locale=='en' ? home_page.plan&&home_page.plan.price_25.pri_desc_en : home_page.plan&&home_page.plan.price_25.pri_desc_kh"
                    ></div>
                    <div class="card-title-g">
                      <h6>{{$i18n.locale=='en' ? home_page.plan&&home_page.plan.price_25.pri_feat_en : home_page.plan&&home_page.plan.price_25.pri_feat_kh}}</h6>
                    </div>
                    <div
                      class="card-text mb-3"
                      v-html="$i18n.locale=='en' ? home_page.plan&&home_page.plan.price_25.pri_feat_desc_en : home_page.plan&&home_page.plan.price_25.pri_feat_desc_kh"
                    ></div>
                    <div class="price-btn-b">
                      <a
                        href="#"
                      >{{$i18n.locale=='en' ? home_page.plan&&home_page.plan.price_25.pri_button_en : home_page.plan&&home_page.plan.price_25&&pricing.price_25.pri_button_kh}}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-5 pb-3 pb-md-3 pb-lg-0">
                <div class="card shadow">
                  <div class="card-body">
                    <div class="card-title-g">
                      <h5>{{$i18n.locale=='en' ? home_page.plan&&home_page.plan.price_30.int_title_en : home_page.plan&&home_page.plan.price_30&&pricing.price_30.int_title_kh}}</h5>
                      <h4>{{home_page.plan&&home_page.plan.price_30.pri_num}}</h4>
                      <h6>{{$i18n.locale=='en' ? home_page.plan&&home_page.plan.price_30.pri_month_en : home_page.plan&&home_page.plan.price_30.pric_month_kh}}</h6>
                    </div>
                    <div
                      class="card-text"
                      v-html="$i18n.locale=='en' ? home_page.plan&&home_page.plan.price_30.pri_desc_en : home_page.plan&&home_page.plan.price_30.pri_desc_kh"
                    ></div>
                    <div class="card-title-g">
                      <h6>{{$i18n.locale=='en' ? home_page.plan&&home_page.plan.price_30.pri_feat_en : home_page.plan&&home_page.plan.price_30&&pricing.price_30.pri_feat_kh}}</h6>
                    </div>
                    <div
                      class="card-text mb-3"
                      v-html="$i18n.locale=='en' ? home_page.plan&&home_page.plan.price_30.pri_feat_desc_en : home_page.plan&&home_page.plan.price_30.pri_feat_desc_kh"
                    ></div>
                    <div class="price-btn-g">
                      <a
                        href="#"
                      >{{$i18n.locale=='en' ? home_page.plan&&home_page.plan.price_30.pri_button_en : home_page.plan&&home_page.plan.price_30&&pricing.price_30.pri_button_kh}}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-style">
          <img src="/images/img-bggg.png" alt />
        </div>
      </div>
    </section>

    <div class="py-lg-4"></div>

    <section class="ask-question pb-5" id="faqs">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-6 pb-5 pb-md-5 pb-lg-0">
            <div class="ask-title pb-5">
              <h1>{{ $t('fr_ask')}}</h1>
            </div>

            <div
              role="tablist"
              class="panel-group"
              v-for="question in home_page.questions"
              v-bind:key="question.id"
            >
              <b-card no-body class="panel-default mb-3">
                <b-card-header header-tag="h6" class="p-1 panel-title" role="tab">
                  <b-button block v-b-toggle="'accordion-'+question.id">
                    <span>{{ $i18n.locale=='en' ? question.ques_title_en : question.ques_title_kh }}</span>
                    <i class="fal fa-chevron-up"></i>
                  </b-button>
                </b-card-header>
                <b-collapse :id="'accordion-'+question.id" accordion="my-accordion" role="tabpanel">
                  <div
                    class="panel-body"
                    v-html=" $i18n.locale=='en' ? question.ques_answer_en : question.ques_answer_kh "
                  ></div>
                </b-collapse>
              </b-card>
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-6">
            <div class="ask-title pb-5">
              <h1>{{ $t('ask_title')}}</h1>
            </div>
            <b-alert :show="dismissCountDown" dismissible fade variant="success">Submit success</b-alert>
            <form class="form-b">
              <div class="form-group">
                <input
                  type="text"
                  v-model="feedback.name"
                  class="form-control"
                  id="name"
                  aria-describedby="name"
                  placeholder="Name"
                />
              </div>
              <b-alert :show="errors" dismissible fade variant="danger">{{errorPhone}}</b-alert>
              <div class="form-group">
                <input
                  type="text"
                  v-model="feedback.phone"
                  class="form-control"
                  placeholder="Telephone"
                  @input="validatePhone"
                />
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  v-model="feedback.message"
                  id="textarea"
                  rows="4"
                  placeholder="Message"
                ></textarea>
              </div>
            </form>

            <div class="text-center pt-3 mb-3">
              <button
                @click="submitFeedback"
                :disabled="!(feedback.name&&feedback.phone&&feedback.message)"
                class="btn btn-sub"
              >{{ $t('btn_send') }}</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="py-lg-4"></div>

    <section class="download-app pb-5" id="download">
      <div class="container">
        <div class="download-bg-app">
          <div class="row no-gutters">
            <div class="col-12 col-md-6 col-lg-6 align-self-center">
              <div class="download-text-app pb-4">
                <h1>{{ $i18n.locale=='en' ? home_page.download_app&&home_page.download_app.down_title_en : home_page.download_app&&home_page.download_app.down_title_kh }}</h1>
                <p
                  v-html="$i18n.locale=='en' ? home_page.download_app&&home_page.download_app.down_desc_en : home_page.download_app&&home_page.download_app.down_now_kh"
                ></p>
              </div>
              <div class="download-link pb-mb-5 justify-content-around justify-content-md-start">
                <a
                  :href="$i18n.locale=='en' ? home_page.download_app&&home_page.download_app.down_now_en : home_page.download_app&&home_page.download_app.down_now_kh"
                  class="mr-md-3 mb-3 mb-sm-0"
                >
                  <div class="store">
                    <div class="icon">
                      <i class="fab fa-google-play"></i>
                    </div>
                    <div class="text">
                      <h6>{{$t('p_store')}}</h6>
                      <p>{{$t('download')}}</p>
                    </div>
                  </div>
                </a>

                <a :href="home_page.download_app&&home_page.download_app.download_play_store">
                  <div class="store">
                    <div class="icon">
                      <i class="fab fa-app-store"></i>
                    </div>
                    <div class="text">
                      <h6>{{$t('a_store')}}</h6>
                      <p>{{$t('download')}}</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-6 align-self-center">
              <div class="download-img-app">
                <img
                  :src="home_page.download_app&&home_page.download_app.down_image ? apiUrl+''+ home_page.download_app.down_image.url : ''"
                  alt
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="py-lg-4"></div>

    <section class="blog pb-5">
      <div class="container">
        <div class="blog-title pb-5">
          <h1>{{ $t('news')}}</h1>
        </div>
        <div class="row">
          <b-col v-for="article in articles" v-bind:key="article.id">
            <nuxt-link :to="`/detail/${article.id}`">
              <b-card no-body tag="article">
                <div class="embed-responsive embed-responsive-16by9">
                  <b-card-img
                    class="cover rounded-0"
                    :src="article.art_image&&apiUrl +''+ article.art_image.url"
                    alt="Image"
                  ></b-card-img>
                </div>

                <b-card-body>
                  <h5 class="mt-2 mb-4 font-bold">
                    <b-link
                      :href="`/detail/${article.id}`"
                      class="color-link"
                    >{{ $i18n.locale=='en' ? article.art_title_en : article.art_title_kh }}</b-link>
                  </h5>
                  <p
                    class="card-text"
                  >{{ $i18n.locale=='en' ? article.art_desc_en : article.art_desc_kh }}</p>
                </b-card-body>
              </b-card>
            </nuxt-link>
          </b-col>
        </div>
      </div>
    </section>

    <div class="py-lg-4"></div>

    <section class="interested pb-5">
      <div class="container">
        <div class="interest">
          <div class="interest-text pb-3 pb-md-0">
            <h1>{{ $i18n.locale=='en' ? home_page.interested&&home_page.interested.int_title_en : home_page.interested&&home_page.interested.int_title_kh }}</h1>
            <p>{{$i18n.locale=='en' ? home_page.interested&&home_page.interested.int_desc_en : home_page.interested&&home_page.interested.int_desc_kh }}</p>
          </div>
          <div class="interest-btn mb-0 mt-md-0">
            <a
              href="#"
            >{{ $i18n.locale=='en' ? home_page.interested&&home_page.interested.int_btn_en : home_page.interested&&home_page.interested.int_btn_kh }}</a>
          </div>
        </div>
      </div>
    </section>

    <div class="py-lg-4"></div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        prevArrow:
          "<button type='button' class='btn-prev'><i class='fas fa-chevron-left'></i></button>",
        nextArrow:
          "<button type='button' class='btn-next'><i class='fas fa-chevron-right'></i></button>",
        // Any other options that can be got from plugin documentation
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 639,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
      home_page: [],
      clients_say: [],
      articles: [],
      apiUrl: process.env.apiUrl,
      feedback: [(name) => "", (phone) => "", (message) => ""],
      dismissSecs: 5,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      errors: false,
      errorPhone: "Please input valid phone number",
    };
  },
  methods: {
    validatePhone() {
      let phone = this.feedback.phone;
      console.log(phone);
      if (
        !phone.match(
          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        )
      ) {
        this.errors = true;
      } else {
        this.errors = false;
      }
    },
    async homePage() {
      const response = await this.$axios.$get("/home-page");
      this.home_page = response;
    },
    async clientSay() {
      const response = await this.$axios.$get("/clients-says");
      this.clients_say = response;
    },
    async article() {
      const response = await this.$axios.$get("/articles?_limit=3");
      this.articles = response;
    },
    async submitFeedback() {
      let payload = this.feedback;
      await this.$axios.$post("/feedbacks", {
        name: payload.name,
        phone: payload.phone,
        message: payload.message,
      });
      this.dismissCountDown = this.dismissSecs;
      this.feedback.name = "";
      this.feedback.phone = "";
      this.feedback.message = "";
    },
  },
  async mounted() {
    await this.homePage();
    await this.clientSay();
    await this.article();
  },
  watch: {
    clients_say: function (newMessageCeo) {
      let currIndex = this.$refs.slick.currentSlide();
      this.$refs.slick.destroy();
      this.$nextTick(() => {
        this.$refs.slick.create();
        this.$refs.slick.goTo(currIndex, true);
      });
    },
  },
};
</script>