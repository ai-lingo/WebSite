
/**
 * Contact form
 */
var contactFormID = "contact-form-1";
var contactForm = document.getElementById( contactFormID );
if ( contactForm ) {
    var simple_form_contact = new SimpleForms( "#" + contactFormID, {
        action: "assets/vendor/simple-forms/sendmail.php", // (!!Don't change in Particle) set form action attribute, default value: simple-forms/sendmail.php
        lang: "en",                          // language for error/info strings
        theme: "faded-dark",                 // (!!Don't change in Particle) form color theme, options: white | dark | purple | red | green | blue | faded-light | faded-dark
        style: "none",                       // (!!Don't change in Particle) was fieldsStyle: "default" // form fields style, options: none | underline | classic | classic-rounded | modern | modern-rounded
        ajaxSubmit: true,                    // (!!Don't change in Particle) send form using AJAX (no page reload)
        validate: true,                      // (!!Don't change in Particle) enable form fields validation
        validateOnKeyup: true,               // (!!Don't change in Particle) validate form fields On KeyUp Event
        browserValidation: false,            // (!!Don't change in Particle) use browser validation
        tooltips: true,                      // (!!Don't change in Particle) show validation errors as tooltips, if false will show errors as strings bellow the field
        showErrors: true,                    // (!!Don't change in Particle) show validation errors
        responseOverlay: false,              // NEW (!!Don't change in Particle) show errors in overlay (cover the form)
        focusErrorFields: true,              // NEW (!!Don't change in Particle) focus error fields on form submit
        debug: true,                         // enable debugging mode (will show errors in browser console)
        hideFormAfterSubmit: false,          // (!!Don't change in Particle) hide the form after submit
        customSuccessMessage: "",            // overwrite server response with a custom message
        formCSS: "",                         // (!!Don't change in Particle) add css styles to the form, example: box-shadow: none;
        files: {
            enabled: false,                  // (!!Don't change in Particle) enable files uploading
            extensions: "jpg jpeg svg png",                              // allowed extensions
            min: 0,                                                      // min required files count
            max: 10,                                                     // max allowed files count
            maxFileSize: 24,                                             // max file item size in MB
            filesUploadHandler: "simple-forms/files-upload-handler.php", // WAS EMPTY // files upload handler, default: simple-forms/files-upload-handler.php
        },
        redirect: {
            enabled: false,                  // (!!Don't change in Particle) enable redirect after form submit
            url: "success.html",             // (!!Don't change in Particle) url to redirect to
            timeout: 3                       // (!!Don't change in Particle) redirect timeout (seconds), leave 0 for instant redirect
        },
        captcha: {                           // (!! Particle, we used (and tested) recaptcha-v3)
            enabled: true,                   // enable captcha
            type: "recaptcha-v3",            // set captcha type, options: math | recaptcha-v3
            siteKey: "CHANGEME",             // recaptcha V3 SITE KEY, generate here: https://www.google.com/recaptcha/admin/create
            theme: "dark"                    // recaptcha theme color, options: light | dark
        },
        accessibility: {
            escapeReset: true,               // press ESC key to reset/clear all form fields and files
            tabHighlight: false              // press tab to highlight form fields
        },
        consent: false,                      // enable submit button after consent checkbox is checked
        validator: {
            rules: {                         // add custom validation rules
                ".validate-name": {          // (!!Don't change in Particle) select form field with class .validate-name
                    required: true,          // (!!Don't change in Particle) add required attribute to form field
                    min: 2,                  // (!!Don't change in Particle) set field min attribute
                    max: 30,                 // (!!Don't change in Particle) set field max attribute
                    name: true               // (!!Don't change in Particle) attach NAME validation
                },
                ".validate-email": {
                    required: true,
                    min: 8,
                    email: true              // (!!Don't change in Particle) attach EMAIL validation
                }
            }
        },
    });
}