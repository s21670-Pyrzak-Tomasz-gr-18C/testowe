function validateDoctorForm() {
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const specializationInput = document.getElementById('specialization');

    const errorFirstName = document.getElementById('errorFirstName');
    const errorLastName = document.getElementById('errorLastName');
    const errorSpecialization = document.getElementById('errorSpecialization');
    const errorSummary = document.getElementById('errorsSummary');

    resetErrors([firstNameInput, lastNameInput, specializationInput], [errorFirstName, errorLastName, errorSpecialization], errorSummary);

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
    } else {
        errorLastName.innerText="";
    }

    if (!checkRequired(specializationInput.value)){
        valid=false;
        specializationInput.classList.add("error-input");
        errorSpecialization.innerText="Specialization is required";
    } else if (!checkTextLengthRange(specializationInput.value, 2,60)){
        valid=false;
        specializationInput.classList.add("error-input");
        errorSpecialization.innerText="The field should contain from 2 to 60 characters";
    } else {
        errorSpecialization.innerText="";
    }

    if (!valid) {
        errorSummary.innerText="The form contains errors";
    }

    return valid;
}