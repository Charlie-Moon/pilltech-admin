<template>
    <div>

        <section  class="page-contact mt-5">

            <div class="py-lg-4"></div>

            <b-container>

                <h1 class="detail-title color-link">Contact</h1>

                <div class="py-4"></div>

                <section class="contact-field text-center">

                    <b-row cols-sm="12" cols-md="3">

                        <b-col>

                            <address>
                                <i class="fal fa-map-marker-alt"></i>
                                <p class="mt-2"> <b>Address</b></p>
                                <p>Than’s Corp Building 6th floor #46 Street 
                                    Mao Tse Tong Blvd Sangkat Boung Trobek,Phnom Penh
                                    (Corner of Monivong Blvd & Mao Tse Tong Blvd)
                                </p>
                            </address>

                        </b-col>

                        <b-col>
                                <i class="fal fa-envelope-open-text"></i>
                                <p class="mt-2"><b>Email: Info@pilltech.com.kh</b></p>

                        </b-col>

                        <b-col>
                                <i class="fab fa-whatsapp"></i> <i class="fab fa-telegram-plane"></i>
                                <p class="mt-2"><b>Phone number, WhatsApp, Telegram</b></p>
                                <p>+855 12 832 416</p>

                        </b-col>

                    </b-row>

                </section>

                    <h5 class="pt-5 pb-3"><b>Send us your message</b></h5>
                    
                    <b-form>
                        
                        <b-row>
                            <b-col cols="4">
                                <b-input
                                id="inline-form-input-name"
                                class="mb-4"
                                placeholder="Name"
                                ></b-input>
                            </b-col>

                            <b-col cols="4">
                                <b-input
                                id="inline-form-input-username"
                                class="mb-4"
                                placeholder="Email"
                                ></b-input>
                            </b-col>
                            
                            <b-col cols="4">
                                <b-input
                                id="inline-form-input-username"
                                class="mb-4"
                                placeholder="Phone Number"
                                ></b-input>
                            </b-col>
                            
                        </b-row>

                        <b-form-textarea
                            id="textarea"
                            class="w-100"
                            v-model="text"
                            placeholder="Enter something..."
                            rows="3"
                            max-rows="6"
                            ></b-form-textarea>

                        <center class="mt-5 w-100"><b-button variant="submit">Save</b-button></center>
                    </b-form>

                    <div class="py-3"></div>
                    
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.716253982304!2d104.89055280251452!3d11.57218731921935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5649bb570efde54b!2sAngkor%20E%26C%20(Cambodia)%20Co.%2CLtd.!5e0!3m2!1sen!2skh!4v1592887803551!5m2!1sen!2skh" width="100%" height="500" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

            </b-container>


        </section>
        <div class="py-4"></div>

    </div>
</template>