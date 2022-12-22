function toggleMenu(){
    let toggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');

    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

function activeProfile(){
    let cc = document.querySelector("#cb2").checked;
    var stat = document.querySelector(".navProfile").attributes['href'].value;
    if (cc == true){
        stat = "../profile.html";
        document.querySelector(".navProfile").attributes['href'].value = stat;
    }else{
        stat = "#";
        document.querySelector(".navProfile").attributes['href'].value = stat;
    }
}

function activeAbout(){
    let cc = document.querySelector("#cb3").checked;
    var stat = document.querySelector(".navAbout").attributes['href'].value;
    if (cc == true){
        stat = "../about.html";
        document.querySelector(".navAbout").attributes['href'].value = stat;
    }else{
        stat = "#";
        document.querySelector(".navAbout").attributes['href'].value = stat;
    }
}

function activeService(){
    let cc = document.querySelector("#cb4").checked;
    var stat = document.querySelector(".navService").attributes['href'].value;
    if (cc == true){
        stat = "../service.html";
        document.querySelector(".navService").attributes['href'].value = stat;
    }else{
        stat = "#";
        document.querySelector(".navService").attributes['href'].value = stat;
    }
}

function activeSocial(){
    let cc = document.querySelector("#cb5").checked;
    var stat = document.querySelector(".navSocial").attributes['href'].value;
    if (cc == true){
        stat = "../social.html";
        document.querySelector(".navSocial").attributes['href'].value = stat;
    }else{
        stat = "#";
        document.querySelector(".navSocial").attributes['href'].value = stat;
    }
}

function activeBank(){
    let cc = document.querySelector("#cb6").checked;
    var stat = document.querySelector(".navBank").attributes['href'].value;
    if (cc == true){
        stat = "../bank.html";
        document.querySelector(".navBank").attributes['href'].value = stat;
    }else{
        stat = "#";
        document.querySelector(".navBank").attributes['href'].value = stat;
    }
}

function activeGallery(){
    let cc = document.querySelector("#cb7").checked;
    var stat = document.querySelector(".navGal").attributes['href'].value;
    if (cc == true){
        stat = "../gallery.html";
        document.querySelector(".navGal").attributes['href'].value = stat;
    }else{
        stat = "#";
        document.querySelector(".navGal").attributes['href'].value = stat;
    }
}

function activeSettings(){
    let cc = document.querySelector("#cb8").checked;
    var stat = document.querySelector(".navset").attributes['href'].value;
    if (cc == true){
        stat = "../settings.html";
        document.querySelector(".navset").attributes['href'].value = stat;
    }else{
        stat = "#";
        document.querySelector(".navset").attributes['href'].value = stat;
    }
}