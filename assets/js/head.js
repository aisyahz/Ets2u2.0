//iQuery (Template for HTML pages)
$(document).ready(function () {
    // Load the content of template.html into the element with id "template-container"
    $("#header-container").load("/assets/Components/header.html");
    $("#footer-container").load("/assets/Components/footer.html");
});

function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'en,ms' , layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL}, 'google_translate_element');
}

