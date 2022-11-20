function validatePatientForm() {
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const phoneNumberInput = document.getElementById('phoneNumber');

    const errorFirstName = document.getElementById('errorFirstName');
    const errorLastName = document.getElementById('errorLastName');
    const errorPhoneNumber = document.getElementById('errorPhoneNumber');
    const errorSummary = document.getElementById('errorsSummary');

    resetErrors([firstNameInput, lastNameInput, phoneNumberInput], [errorFirstName, errorLastName, errorPhoneNumber], errorSummary);

    let valid=true;

    if (!checkRequired(firstNameInput.value)){
        valid=false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText="First Name is required";
    } else if (!checkTextLengthRange(firstNameInput.value, 2,60)){
        valid=false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText="The field should contain from 2 to 60 characters";
    } else {
        errorFirstName.innerText="";
    }

    if (!checkRequired(lastNameInput.value)){
        valid=false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText="Last Name is required";
    } else if (!checkTextLengthRange(lastNameInput.value, 2,60)){
        valid=false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText="The field should contain from 2 to 60 characters";
    }  else {
        errorLastName.innerText="";
    }


    if (!checkRequired(phoneNumberInput.value)){
        valid=false;
        phoneNumberInput.classList.add("error-input");
        errorPhoneNumber.innerText="Phone number is required";
    } else if (!checkPhoneNumber(phoneNumberInput.value)){
        valid=false;
        phoneNumberInput.classList.add("error-input");
        errorPhoneNumber.innerText="Incorrect phone number";
    }  else {
        errorPhoneNumber.innerText="";
    }

    if (!valid) {
        errorSummary.innerText="The form contains errors";
    }

    return valid;
}