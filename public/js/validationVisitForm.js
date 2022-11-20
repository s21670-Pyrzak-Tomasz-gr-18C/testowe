function validateVisitForm() {
    const DoctorNameInput = document.getElementById('DoctorName');
    const PatientNameInput = document.getElementById('PatientName');
    const visitDateInput = document.getElementById('visitDate');
    const payerTypeInput = document.getElementById('payer');

    const errorDoctorName = document.getElementById('errorDoctorName');
    const errorPatientName = document.getElementById('errorPatientName');
    const errorVisitDate = document.getElementById('errorVisitDate');
    const errorPayer = document.getElementById('errorPayer')
    const errorSummary = document.getElementById('errorsSummary');

    resetErrors([DoctorNameInput, PatientNameInput, visitDateInput, payerTypeInput], [errorDoctorName, errorPatientName, errorVisitDate, errorPayer], errorSummary);

    let valid=true;

    if (!checkRequired(DoctorNameInput.value)){
        valid=false;
        DoctorNameInput.classList.add("error-input");
        errorDoctorName.innerText="First Name is required";
    } else if (!checkTextLengthRange(DoctorNameInput.value, 2,60)){
        valid=false;
        DoctorNameInput.classList.add("error-input");
        errorDoctorName.innerText="The field should contain from 2 to 60 characters";
    } else {
        errorDoctorName.innerText="";
    }

    if (!checkRequired(PatientNameInput.value)){
        valid=false;
        PatientNameInput.classList.add("error-input");
        errorPatientName.innerText="Last Name is required";
    } else if (!checkTextLengthRange(PatientNameInput.value, 2,60)){
        valid=false;
        PatientNameInput.classList.add("error-input");
        errorPatientName.innerText="The field should contain from 2 to 60 characters";
    } else {
        errorPatientName.innerText="";
    }

    if (!checkRequired(visitDateInput.value)){
        valid=false;
        visitDateInput.classList.add("error-input");
        errorVisitDate.innerText="Visit date is required";
    } else if (!checkDate(visitDateInput.value)){
        valid=false;
        visitDateInput.classList.add("error-input");
        errorVisitDate.innerText="The date must be later than today";
    } else {
        errorVisitDate.innerText="";
    }

    if (!checkRequired(payerTypeInput.value)){
        valid=false;
        payerTypeInput.classList.add("error-input");
        errorPayer.innerText="Payer is required";
    } else if (!checkTextLengthRange(payerTypeInput.value, 2,60)) {
        valid=false;
        payerTypeInput.classList.add("error-input");
        errorPayer.innerText="The field should contain from 2 to 60 characters";
    } else {
        errorPayer.innerText="";
    }

    if (!valid) {
        errorSummary.innerText="The form contains errors";
    }

    return valid;
}