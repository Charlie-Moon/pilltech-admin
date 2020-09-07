<template>
    <div>
        <!-- Load Facebook SDK for JavaScript -->
        <div id="fb-root"></div>
        <script>
            window.fbAsyncInit = function() {
                FB.init({
                xfbml            : true,
                version          : 'v8.0'
                });
            };
            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        </script>

        <!-- Your Chat Plugin code -->
        <div class="fb-customerchat"
            attribution=setup_toolπ
            page_id="106274377680035"
            theme_color="#4290CC"
            logged_in_greeting="Hello and thank you for contacting PillTech, your pharmacy online ordering solution.  How may we assist you?"
            logged_out_greeting="Hello and thank you for contacting PillTech, your pharmacy online ordering solution.  How may we assist you?">
        </div>
    </div>
</template>
<script>
export default {
    name: 'messanger'
}
</script>