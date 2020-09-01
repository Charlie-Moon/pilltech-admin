<template>
  <div>
    <section class="page-contact mt-5">
      <div class="py-lg-4"></div>
      <b-container>
        <h1 class="detail-title color-link pb-5">Contact</h1>
        <section class="contact-field text-center">
          <b-row cols-sm="12" cols-md="3">
            <b-col>
              <address>
                <i class="fal fa-map-marker-alt"></i>
                <p class="mt-2">
                  <b>Address</b>
                </p>
                <p>
                  Than’s Corp Building 6th floor #46 Street
                  Mao Tse Tong Blvd Sangkat Boung Trobek,Phnom Penh
                  (Corner of Monivong Blvd & Mao Tse Tong Blvd)
                </p>
              </address>
            </b-col>

            <b-col>
              <i class="fal fa-envelope-open-text"></i>
              <p class="mt-2">
                <b>Email: Info@pilltech.com.kh</b>
              </p>
            </b-col>

            <b-col>
              <i class="fab fa-whatsapp"></i>
              <i class="fab fa-telegram-plane"></i>
              <p class="mt-2">
                <b>Phone number, WhatsApp, Telegram</b>
              </p>
              <p>+855 12 832 416</p>
            </b-col>
          </b-row>
        </section>
        <div class="py-4"></div>
        <b-alert :show="dismissCountDown" dismissible fade variant="success">Submit success</b-alert>
        <b-form>
          <b-row>
            <b-col cols="4"></b-col>
            <b-col cols="4">
              <b-alert :show="errors.email" dismissible fade variant="danger">{{msgError.email}}</b-alert>
            </b-col>
            <b-col cols="4">
              <b-alert :show="errors.phone" dismissible fade variant="danger">{{msgError.phone}}</b-alert>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="4">
              <b-input
                id="inline-form-input-name"
                class="mb-4"
                placeholder="Name"
                v-model="contact.name"
              ></b-input>
            </b-col>

            <b-col cols="4">
              <b-input
                id="inline-form-input-username"
                class="mb-4"
                type="email"
                placeholder="Email"
                v-model="contact.email"
                @input="validateEmail"
              ></b-input>
            </b-col>
            <b-col cols="4">
              <b-input
                id="inline-form-input-username"
                class="mb-4"
                placeholder="Phone Number"
                v-model="contact.phone"
                @input="validatePhone"
              ></b-input>
            </b-col>
          </b-row>

          <b-form-textarea
            id="textarea"
            class="w-100"
            v-model="contact.message"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
          <center class="mt-5 w-100">
            <b-button
              variant="submit"
              :disabled="!(contact.name&&contact.email&&contact.phone&&contact.message)"
              @click="submitContact"
            >Send Message</b-button>
          </center>
        </b-form>

        <div class="py-3"></div>
        <h1 class="detail-title color-link pb-5 pt-5">Contact Us</h1>
        <iframe
          :src="map.url"
          width="100%"
          height="500"
          frameborder="0"
          style="border:0;"
          allowfullscreen
          aria-hidden="false"
          tabindex="0"
        ></iframe>
        <div class="py-4"></div>
      </b-container>
    </section>

    <div class="py-4"></div>

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
  </div>
</template>
<script>
export default {
  data() {
    return {
      contact: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
      dismissSecs: 5,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      home_page: [],
      map: [],
      errors: {
        phone: false,
        email: false,
      },
      msgError: {
        phone: "Please input valid phone number",
        email: "Please input valid email address",
      },
    };
  },

  methods: {
    validateEmail() {
      let email = this.contact.email;
      if (
        !email.match(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        this.errors.email = true;
      } else {
        this.errors.email = false;
      }
    },
    validatePhone() {
      let phone = this.contact.phone;
      if (
        !phone.match(
          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        )
      ) {
        this.errors.phone = true;
      } else {
        this.errors.phone = false;
      }
    },
    async getMap() {
      const response = await this.$axios.$get("/map");
      this.map = response;
    },
    async homePage() {
      const response = await this.$axios.$get("/home-page");
      this.home_page = response;
    },
    async submitContact() {
      let payload = this.contact;
      await this.$axios.$post("/contacts", payload);
      this.dismissCountDown = this.dismissSecs;
      this.contact.name = "";
      this.contact.name = "";
      this.contact.email = "";
      this.contact.phone = "";
      this.contact.message = "";
    },
  },
  async mounted() {
    await this.homePage();
    await this.getMap();
  },
};
</script>