//iQuery (Template for HTML pages)
$(document).ready(function () {
    // Load the content of template.html into the element with id "template-container"
    $("#header-container").load("../Components/header.html");
});
$(document).ready(function () {
    // Load the content of template.html into the element with id "template-container"
    $("#footer-container").load("../Components/footer.html");
});

function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'en,ms' , layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL}, 'google_translate_element');
}

