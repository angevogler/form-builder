// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------
// Create parent div id "fields"
let formFields = document.querySelector("#fields");

// Create for loop to loop through formData and fill in input details
function formInputs () {
  for (let i = 0; i < formData.length; i++) {

    // Create input element
    let input = document.createElement("input");
    let select = document.createElement("select");
    let textArea = document.createElement("textarea");

    // Set attributes of the inputs: type, label, id, icon, options
    if (formData[i].type === "select") {
      select.setAttribute("type", formData[i].type);
      select.setAttribute("placeholder", formData[i].label);
      select.setAttribute("id", formData[i].id);
      select.setAttribute("icon", formData[i].icon);
      // select.setAttribute("options", formData[i].options);
      // Need to create drop down list

        for (let j = 0; j < formData[i].options.length; j++) {
          let languageOption = document.createElement("option");

          languageOption.setAttribute("value", formData[i].options[j].value);
          languageOption.textContent = formData[i].options[j].label;
          select.appendChild(languageOption);
        }

      // Add select element to DOM
      formFields.appendChild(select);
    }

    else if (formData[i].type === "textarea"){
      textArea.setAttribute("type", formData[i].type);
      textArea.setAttribute("placeholder", formData[i].label);
      textArea.setAttribute("id", formData[i].id);
      textArea.setAttribute("icon", formData[i].icon);
      // textArea.setAttribute("options", formData[i].options);
      // Add textArea element to DOM
      formFields.appendChild(textArea);
    }

    else {
      input.setAttribute("type", formData[i].type);
      input.setAttribute("placeholder", formData[i].label);
      input.setAttribute("id", formData[i].id);
      input.setAttribute("icon", formData[i].icon);
      // input.setAttribute("options", formData[i].options);
      // Add input element to DOM
      formFields.appendChild(input);
    }
  }
}

// Call formInputs function
formInputs();
