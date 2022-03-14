//Cookie code:
const CookieButton = document.getElementById("CookieButton"); 
const CookieContainer = document.getElementById("CookieContainer"); 
setTimeout(() => {
    if(!localStorage.getItem("CookieBannerDisplayed"))//if CookieBannerDisplayed is not in the local storage then
    { //local storage can be checked via browser "inspect">"Application">"Local storage">"http...."> "Key" area
        CookieContainer.classList.add("d-block"); //cookie container shows up after 2s of loading the page
    } 
}, 2000);
CookieButton.onclick = function () //when clicking the "apstiprinat" cookies button
{
    if (CookieContainer.classList.contains("d-block")) //if the cookies content is visible 
    {
        CookieContainer.classList.remove("d-block"); //now its invisible
        localStorage.setItem("CookieBannerDisplayed", "true") //and the CookieBannerDisplayed = true is saved in local storage
    }
};



// //Language code:
// var latvian = document.getElementById("lv"),
//     english = document.getElementById("eng"),
//     russian = document.getElementById("ru"),
//     HeaderText = document.getElementById("header-text"),
//     TwoSection1 = document.getElementById("two-section-1"),
//     TwoSection2 = document.getElementById("two-section-2");

// // add an event listener to listen to when the user clicks on one of the language tags
// // this triggers our custom "change" function, which we will define later
// latvian.addEventListener("click", function() {
//     change(latvian, english, russian);
//   }, false
// );
// english.addEventListener("click", function() {
//     change(english, latvian, russian);
//   }, false
// );
// russian.addEventListener("click", function() {
//     change(russian, latvian, english);
//   }, false
// );


// function change(lang_on, lang_off1, lang_off2) 
// {
//     // if the link that the user clicks on does not have the "current_lang" class then
//     if (!lang_on.classList.contains("current_lang")) 
//     {
//     // add the "current_lang" class to it
//       lang_on.classList.add("current_lang");
//       //and remove the "current_lang" class from the other links
//       lang_off1.classList.remove("current_lang");
//       lang_off2.classList.remove("current_lang");
//     }
//     if (lang_on.innerHTML == "LV") {
//         HeaderText.classList.add("latvian");
//         HeaderText.classList.remove("english");
//         HeaderText.classList.remove("russian");
//         HeaderText.innerHTML = "SparkleHeart ir biedrība, kas radīta, lai palīdzētu cilvēkiem piepildīt pat pārdrošākos sapņus. \
//       Šeit satiekas sapņotāji un viņu atbalstītāji - uzņēmumi, kas sniedz palīdzīgu roku, lai kopā pasauli padarītu \
//       par labāku vietu mums visiem. Mēs esam gatavi palīdzēt Tev piepildīt sapni. Kā pamats iedvesmai - tiek radīti \
//       arī 99 stāsti par Latvijas sievietēm.";
//         TwoSection1.innerHTML = "VĒLIES PIEPILDĪT SAVU SAPNI?";
//         TwoSection2.innerHTML = "VĒLIES PALĪDZĒT KĀDAM PILDĪT SAPNI?";
//     }
//     else if (lang_on.innerHTML == "ENG") 
//     {
//       HeaderText.classList.add("english");
//       HeaderText.classList.remove("latvian");
//       HeaderText.classList.remove("russian");
//       HeaderText.innerHTML = "SparkleHeart is a union created to help people fulfill even the most daring dreams. \
//       This is where dreamers and their supporters come together - companies that give a helping hand to make the world \
//       a better place together for all of us. We are ready to help you fulfill your dream. As a basis for inspiration - \
//       99 stories about Latvian women are made too.";
//       TwoSection1.innerHTML = "WANT TO FULFIL YOUR DREAM?";
//       TwoSection2.innerHTML = "WANT TO HELP SOMEONE FULFIL A DREAM?";
//     }
//     else if (lang_on.innerHTML == "RU") {
//         HeaderText.classList.add("russian");
//         HeaderText.classList.remove("latvian");
//         HeaderText.classList.remove("english");
//         HeaderText.innerHTML = "SparkleHeart — это общество, созданное для помощи людям в осуществлении даже самых смелых желаний. \
//       Здесь встречаются мечтатели и их сторонники - компании, которые протягивают руку помощи, чтобы сделать мир лучше \
//       для всех нас вместе.Мы готовы помочь вам осуществить вашу мечту. B качестве основы для вдохновения также созданы \
//       99 историй o латвийских женщинах.";
//       TwoSection1.innerHTML = "ХОТИТЕ ИСПОЛНИТЬ СВОЮ МЕЧТУ?";
//       TwoSection2.innerHTML = "ХОТИТЕ ПОМОЧЬ КОМУ-ТО ОСУЩЕСТВИТЬ МЕЧТУ?";
//     }
// }

//Form code:
var form = document.querySelector('.needs-validation'); //gives access to form
    form.addEventListener('submit', function(event) //when the "Sūtīt" button is clicked then
    {
        if (form.checkValidity() === false) //if validity is false
        {
            event.preventDefault(); //no request is sent
            event.stopPropagation(); //form submission is stopped
        }
        //makes sure boostrap asigns the right styles to the elements and inputs inside the form:
        form.classList.add('was-validated'); 
    });