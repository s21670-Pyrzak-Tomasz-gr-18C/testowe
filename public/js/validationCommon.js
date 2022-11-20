function resetErrors(inputs, errorTexts, errorInfo) {
    for(let i=0; i<inputs.length; i++) {
        inputs[i].classList.remove("error-input");
    }
    for(let i=0; i<errorTexts.length; i++) {
        errorTexts[i].innerText=";"
    }
    errorInfo.innerText="";
}

function checkRequired(value) {
    if (!value) {
        return false;
    }
    value = value.toString().trim();
    if (value === ""){
        return false;
    }
    return true;
}

function checkTextLengthRange(value, min, max) {
    if (!value) {
        return false;
    }
    value = value.toString().trim();
    const length = value.length;
    if (max && length > max) {
        return false;
    }
    if (min && length < min) {
        return false;
    }
    return true;
}

function checkPhoneNumber(value) {
    if (!value) {
        return false;
    }
    value = value.toString().trim();
    const re = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    return re.test(value);
}

function checkDate(value) {
    let nowDate = new Date();
    
    if (!value) {
        return false;
    }

    const valueDate = new Date(value);

    if (valueDate.getTime() <= nowDate.getTime()) {
        return false;
    }
    return true;
}
