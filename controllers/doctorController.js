exports.showDoctorsList = (reg, res, next) => {
    res.render('Pages/Doctor/allDoctors', {navLocation: 'doc'});
}

exports.showAddDoctorForm = (reg, res, next) => {
    res.render('Pages/Doctor/doctorForm', {navLocation: 'doc'});
}

exports.showDoctorDetails = (reg, res, next) => {
    res.render('Pages/Doctor/doctorDetails', {navLocation: 'doc'});
}

exports.showDoctorAddedMessage = (reg, res, next) => {
    res.render('Pages/Doctor/doctorAddedMessage')
}
