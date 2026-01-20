// v.1.0.0
// TELUS Form.io Custom Styles
export const telusFormStyles = `
body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding: 24px;
    background-color: #ffffff;
}

/* Reset some default styles */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* TELUS Brand Colors */
:root {
    --telus-primary: #4B286D;
    --telus-primary-focus: #7C53A5;
    --telus-secondary: #613889;
    --telus-tertiary: #2B8000;
    --telus-light-purple: #F3F0F7;
    --primary-color: #4B286D;
    --secondary-color: #2B8000;
    --accent-color: #613889;
    --text-primary: #2C2C2C;
    --text-secondary: #666666;
    --text-light: #999999;
    --background: #FFFFFF;
    --background-light: #F8F9FA;
    --border-color: #E5E5E5;
    --success-color: #28A745;
    --warning-color: #FFC107;
    --error-color: #DC3545;
    --shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    --shadow-light: 0 1px 4px rgba(0, 0, 0, 0.08);
    --button-border-radius: 24px;
}

/* Custom styles to match the provided HTML structure */
.wizard-page {
    position: relative;
    background-color: #ffffff;
    padding: 24px 0px;
}

/* Style the wizard navigation header */
[ref="wizard-ez9p3p-header"], [ref="wizard-ep4zva-header"] {
    background-color: white;
    border-bottom: 1px solid #e0e0e0;
    padding: 16px;
    position: relative;
}

[ref="wizard-ez9p3p-header"] .pagination, [ref="wizard-ep4zva-header"] .pagination {
    display: none; /* Hide the default pagination */
}

/* Hide tabs using the telus_hide_tabs class */
.telus_hide_tabs nav[aria-label="Wizard navigation"] .pagination {
    display: none !important; /* Hide the tabs with higher specificity */
}

/* Hide all wizard navigation headers - more generic approach to handle dynamic IDs */
nav[aria-label="Wizard navigation"],
[id^="wizard-"][id$="-header"],
[ref^="wizard-"][ref$="-header"] {
    display: none !important; /* Hide the tabs with higher specificity */
}

/* Alternative approach to hide just the pagination inside any wizard header */
nav[aria-label="Wizard navigation"] .pagination,
[id^="wizard-"][id$="-header"] .pagination,
[ref^="wizard-"][ref$="-header"] .pagination {
    display: none !important; /* Hide the pagination with higher specificity */
}

/* Target the specific ID from the latest HTML */
#wizard-ek4tonv-header,
[ref="wizard-ek4tonv-header"] {
    display: none !important;
}

/* Remove the back arrow styling */
.wizard-page::before {
    display: none;
}

/* Style the main heading */
.formio-component-html19 h2 {
    font-size: 24px;
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: 8px;
    text-align: left;
    padding-left: 0;
}

/* Position the heading in the header */
.formio-component-html19 {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 600px;
    height: auto;
    display: block;
    background-color: white;
    z-index: 5;
    margin-bottom: 16px;
    padding-top: 24px;
}

/* Hide empty paragraphs */
.formio-component-html20,
.formio-component-html21,
.formio-component-html24 {
    display: none;
}

/* Style the header with back button */
.card-header {
    border-bottom: 1px solid #e0e0e0;
    padding: 15px;
    background-color: #fff;
}

/* 
 * Button Positioning and Styling
 * This CSS file modifies the positioning and styling of the form navigation buttons
 */

/* Common styles for all wizard navigation buttons */
.btn-wizard-nav-previous,
.btn-wizard-nav-next,
.btn-wizard-nav-cancel,
.btn-wizard-nav-submit,
button[ref="previous"],
button[ref="next"],
button[ref="cancel"],
button.btn-wizard-nav,
.btn-primary,
.formio-component button[type="button"],
.formio-component button[type="submit"] {
    background-color: var(--primary-color, #4B286D);
    color: white !important;
    border: 2px solid var(--primary-color, #4B286D);
    border-radius: 50px;
    font-weight: 500;
}

/* Override border-radius for buttons that should be 75% size */
.btn-wizard-nav-previous,
.btn-wizard-nav-cancel,
button[ref="previous"],
button[ref="cancel"],
button.btn-wizard-nav:not([ref="next"]):not(.btn-wizard-nav-submit) {
    border-radius: 6px; /* 75% of 8px */
}

/* Container for wizard navigation buttons - reset to allow absolute positioning */
.formio-wizard-nav-container {
    position: relative;
    width: 100%;
    min-height: 100px; /* Increased height to accommodate buttons */
    margin-top: 32px;
    padding: 0;
    display: block;
}

/* White background wrapper for the Continue button area */
.formio-wizard-nav-container::after {
    content: "" !important;
    position: fixed !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    height: 100px !important;
    background: linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 70%, rgba(255, 255, 255, 0) 100%) !important;
    z-index: 999 !important;
    pointer-events: none !important;
}

/* Continue/Next button - fixed at the bottom of viewport */
.btn-wizard-nav-next,
.btn-wizard-nav-submit,
button[ref="next"],
button.formio-wizard-nav-next,
button.btn-wizard-nav-next {
    position: fixed !important;
    left: 50% !important;
    bottom: 24px !important;
    transform: translateX(-50%) !important;
    padding: 12px 24px !important;
    min-width: 120px !important;
    width: calc(100% - 48px) !important; /* Full width minus 24px padding on each side */
    max-width: 600px !important; /* Match body max-width */
    text-align: center !important;
    z-index: 1000 !important; /* High z-index to stay on top */
    font-size: 1em !important;
    box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.1) !important; /* Add shadow for better visibility */
    border-radius: 50px !important; /* Pill shape */
    background-color: var(--primary-color, #4B286D) !important; /* Force purple color */
    border-color: var(--primary-color, #4B286D) !important;
}

/* Ensure button stays purple in all states */
.btn-wizard-nav-next:active,
.btn-wizard-nav-submit:active,
button[ref="next"]:active {
    background-color: var(--primary-color, #4B286D) !important;
    border-color: var(--primary-color, #4B286D) !important;
}

/* Ensure Next/Submit button is never scaled down */
.formio-form .btn-wizard-nav-next,
.formio-form .btn-wizard-nav-submit,
.formio-form button[ref="next"],
.formio-wizard-nav-container .btn-wizard-nav-next {
    transform: translateX(-50%) !important;
    font-size: 1em !important;
    padding: 12px 24px !important;
    min-width: 120px !important;
}

/* Previous/Back button - positioned at the top left */
.btn-wizard-nav-previous,
button[ref="previous"],
button.formio-wizard-nav-previous,
button.btn-wizard-nav-previous {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    padding: 9px 18px !important; /* 75% of original padding (12px 24px) */
    min-width: 90px !important; /* 75% of 120px */
    font-size: 0.85em !important; /* 85% of the original font size */
    transform: scale(0.75) !important; /* 75% of the original size */
    transform-origin: left top !important;
    z-index: 10 !important; /* Ensure button is above other elements */
    display: block !important; /* Force display */
}

/* Cancel button - positioned at the top right */
.btn-wizard-nav-cancel,
button[ref="cancel"],
button.formio-wizard-nav-cancel,
button.btn-wizard-nav-cancel,
.formio-component-cancel button[ref="button"],
.formio-component-cancel2 button[ref="button"],
[class*="formio-component-cancel"] button[ref="button"] {
    position: absolute !important;
    top: 0 !important;
    right: 0 !important;
    padding: 9px 18px !important; /* 75% of original padding (12px 24px) */
    min-width: 90px !important; /* 75% of 120px */
    font-size: 0.85em !important; /* 85% of the original font size */
    transform: scale(0.75) !important; /* 75% of the original size */
    transform-origin: right top !important;
    z-index: 10 !important; /* Ensure button is above other elements */
    display: block !important; /* Force display */
}

/* Ensure the container has enough height when buttons are positioned */
.formio-form {
    padding-bottom: 100px; /* Add space at the bottom for fixed button */
    position: relative;
}

/* Make sure the wizard page has enough space for the fixed button */
.wizard-page {
    padding-bottom: 100px; /* Add space at the bottom for fixed button */
    position: relative;
}

/* Override any display:none that might be applied to buttons */
.btn-wizard-nav-previous,
.btn-wizard-nav-next,
.btn-wizard-nav-cancel,
.btn-wizard-nav-submit,
button[ref="previous"],
button[ref="next"],
button[ref="cancel"],
button.btn-wizard-nav {
    display: block !important;
}

/* Fix for any hidden buttons */
.formio-wizard-nav-container button,
.formio-form .formio-button-wrapper button,
.formio-form .formio-wizard-nav-container button {
    opacity: 1 !important;
    visibility: visible !important;
}

/* Generic styling for all Form.io buttons (excluding wizard navigation buttons) */
.formio-component-button button[type="button"]:not(.btn-wizard-nav-next):not(.btn-wizard-nav-submit):not(.btn-wizard-nav-previous):not(.btn-wizard-nav-cancel),
button[ref="button"]:not(.btn-wizard-nav-next):not(.btn-wizard-nav-submit):not(.btn-wizard-nav-previous):not(.btn-wizard-nav-cancel):not([ref="next"]):not([ref="previous"]):not([ref="cancel"]),
.formio-form .btn:not(.btn-wizard-nav-next):not(.btn-wizard-nav-submit):not(.btn-wizard-nav-previous):not(.btn-wizard-nav-cancel):not([ref="next"]):not([ref="previous"]):not([ref="cancel"]),
.btn-primary:not(.btn-wizard-nav-next):not(.btn-wizard-nav-submit):not(.btn-wizard-nav-previous):not(.btn-wizard-nav-cancel):not([ref="next"]):not([ref="previous"]):not([ref="cancel"]),
.btn-secondary:not(.btn-wizard-nav-next):not(.btn-wizard-nav-submit):not(.btn-wizard-nav-previous):not(.btn-wizard-nav-cancel):not([ref="next"]):not([ref="previous"]):not([ref="cancel"]) {
    background-color: var(--primary-color, #4B286D) !important;
    color: white !important;
    border: 2px solid var(--primary-color, #4B286D) !important;
    border-radius: 50px !important; /* Pill shape */
    padding: 10px 24px !important;
    min-width: 120px !important;
    font-size: 1em !important;
    font-weight: 500 !important;
    width: 100% !important;
    max-width: 300px !important;
    display: block !important;
    margin: 0 auto !important;
}

/* Ensure all form buttons stay purple in active state */
.formio-component-button button[type="button"]:active:not(.btn-wizard-nav-next):not(.btn-wizard-nav-submit):not(.btn-wizard-nav-previous):not(.btn-wizard-nav-cancel),
button[ref="button"]:active:not(.btn-wizard-nav-next):not(.btn-wizard-nav-submit):not(.btn-wizard-nav-previous):not(.btn-wizard-nav-cancel),
.formio-form .btn:active:not(.btn-wizard-nav-next):not(.btn-wizard-nav-submit):not(.btn-wizard-nav-previous):not(.btn-wizard-nav-cancel),
.btn-primary:active:not(.btn-wizard-nav-next):not(.btn-wizard-nav-submit):not(.btn-wizard-nav-previous):not(.btn-wizard-nav-cancel),
.btn-secondary:active:not(.btn-wizard-nav-next):not(.btn-wizard-nav-submit):not(.btn-wizard-nav-previous):not(.btn-wizard-nav-cancel) {
    background-color: var(--primary-color, #4B286D) !important;
    border-color: var(--primary-color, #4B286D) !important;
}

/* TELUS Radio Button Styling - Comprehensive approach */

/* Target all radio components in Form.io */
.formio-component-radio,
.formio-component[class*='radio'],
.telus_options_style_class,
div[class*='radio'],
.form-radio,
.form-group[ref*='radio'] {
    margin-bottom: 15px !important;
}

/* Style the container of each radio option */
.formio-component-radio .form-check,
.formio-component[class*='radio'] .form-check,
.telus_options_style_class .form-check,
div[class*='radio'] .form-check,
.form-radio .form-check,
.form-group[ref*='radio'] .form-check,
.radio label,
.form-radio label {
    margin-bottom: 10px !important;
    position: relative !important;
    display: block !important;
    width: 100% !important;
    margin-left: 0 !important;
    padding-left: 0 !important;
}

/* Style the label for each radio option */
.formio-component-radio .form-check-label,
.formio-component[class*='radio'] .form-check-label,
.telus_options_style_class .form-check-label,
div[class*='radio'] .form-check-label,
.form-radio .form-check-label,
.form-group[ref*='radio'] .form-check-label,
.radio label,
.form-radio label {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    width: 100% !important;
    padding: 15px 20px !important;
    border-radius: 8px !important;
    border: 1px solid var(--border-color) !important;
    background-color: white !important;
    cursor: pointer !important;
    font-weight: 500 !important;
    color: var(--text-primary) !important;
    position: relative !important;
}

/* Hide the default radio input */
.formio-component-radio .form-check-input,
.formio-component[class*='radio'] .form-check-input,
.telus_options_style_class .form-check-input,
div[class*='radio'] .form-check-input,
.form-radio .form-check-input,
.form-group[ref*='radio'] .form-check-input,
.radio input[type="radio"],
.form-radio input[type="radio"] {
    position: absolute !important;
    opacity: 0 !important;
    cursor: pointer !important;
    height: 0 !important;
    width: 0 !important;
}

/* Style for the selected radio option */
.formio-component-radio .form-check-input:checked + .form-check-label,
.formio-component[class*='radio'] .form-check-input:checked + .form-check-label,
.telus_options_style_class .form-check-input:checked + .form-check-label,
div[class*='radio'] .form-check-input:checked + .form-check-label,
.form-radio .form-check-input:checked + .form-check-label,
.form-group[ref*='radio'] .form-check-input:checked + .form-check-label,
.radio input[type="radio"]:checked + label,
.form-radio input[type="radio"]:checked + label {
    border: 2px solid var(--telus-primary) !important;
    background-color: var(--telus-light-purple) !important;
}

/* Add checkmark icon for selected option */
.formio-component-radio .form-check-input:checked + .form-check-label::after,
.formio-component[class*='radio'] .form-check-input:checked + .form-check-label::after,
.telus_options_style_class .form-check-input:checked + .form-check-label::after,
div[class*='radio'] .form-check-input:checked + .form-check-label::after,
.form-radio .form-check-input:checked + .form-check-label::after,
.form-group[ref*='radio'] .form-check-input:checked + .form-check-label::after,
.radio input[type="radio"]:checked + label::after,
.form-radio input[type="radio"]:checked + label::after {
    content: "" !important;
    display: block !important;
    width: 24px !important;
    height: 24px !important;
    background-color: var(--telus-primary) !important;
    border-radius: 50% !important;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z'/%3E%3C/svg%3E") !important;
    background-size: 16px !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    position: absolute !important;
    right: 20px !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    z-index: 10 !important;
    pointer-events: none !important;
}



/* Direct styling for the radio component */
.formio-component-radio,
.formio-component[class*='radio'] {
    --telus-primary: #4B286D;
    --telus-primary-focus: #7C53A5;
    --telus-light-purple: #F3F0F7;
    --border-color: #E5E5E5;
    --text-primary: #2C2C2C;
}

/* Form.io Loader - styled to match TELUS app loader */
.formio-loader {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    min-height: 100vh !important;
    background-color: #FFFFFF !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    z-index: 9999 !important;
}

.loader-wrapper {
    position: static !important;
    background-color: transparent !important;
}

.loader {
    position: static !important;
    margin: 0 !important;
    border: 3px solid #F3F0F7 !important;
    border-top-color: #4B286D !important;
    width: 32px !important;
    height: 32px !important;
}
`;
