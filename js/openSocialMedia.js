var socialMediaBar = document.getElementById('socialMedia-bar');
var socialMediaButton = document.getElementById('socialMedia-button');



socialMediaButton.addEventListener('click', element => {
    if(socialMediaBar.classList.contains("openSocialMedia")){
        socialMediaBar.classList.remove("openSocialMedia");
        socialMediaBar.classList.add("closeSocialMedia");
        setTimeout(function() {
            socialMediaBar.style.left = "-50px";
        }, 1000)
    }else{
        socialMediaBar.classList.remove("closeSocialMedia");
        socialMediaBar.classList.add("openSocialMedia");
        setTimeout(function() {
            socialMediaBar.style.left = "0";
        }, 1000)
    }
})