window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})
document.querySelector("body > div.page-wapper.home-page-two > main > section.welcome_section.hme-one")

const textarea = document.querySelector(".card");
textarea.addEventListener("keyup", e =>{
    textarea.style.height = "auto";
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`
});