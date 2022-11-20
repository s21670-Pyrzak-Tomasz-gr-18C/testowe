exports.showPatientsList = (reg, res, next) => {
    res.render('Pages/Patient/allPatients', {navLocation: 'pat'});
}

exports.showAddPatientForm = (reg, res, next) => {
    res.render('Pages/Patient/patientForm', {navLocation: 'pat'});
}

exports.showPatientDetails = (reg, res, next) => {
    res.render('Pages/Patient/patientDetails', {navLocation: 'pat'});
}