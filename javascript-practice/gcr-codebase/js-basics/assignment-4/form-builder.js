// Q4 - Custom Form Builder
// FormBuilder class that generates a form from a config array

class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    buildForm(containerId) {
        let container = document.getElementById(containerId);
        let html = "";

        this.fields.forEach(field => {
            html += `<div class="field">
                        <label>${field.label}</label>
                        <input type="${field.type}" id="${field.id}" placeholder="${field.placeholder || ""}">
                     </div>`;
        });

        container.innerHTML = html;
    }

    getFormData() {
        let data = {};
        this.fields.forEach(field => {
            let input = document.getElementById(field.id);
            data[field.id] = input ? input.value : "";
        });
        return data;
    }
}

// field config array — this is what drives the form
let fieldConfig = [
    { type: "text",     id: "username",  label: "Username",  placeholder: "Enter username"  },
    { type: "email",    id: "email",     label: "Email",     placeholder: "Enter email"     },
    { type: "tel",      id: "phone",     label: "Phone",     placeholder: "Enter phone"     },
    { type: "password", id: "password",  label: "Password",  placeholder: "Create password" },
];

let form = new FormBuilder(fieldConfig);
form.buildForm("formContainer");

function submitForm() {
    let formData = form.getFormData();
    document.getElementById("output").textContent = JSON.stringify(formData, null, 2);
}
