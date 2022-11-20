exports.showVisitsList = (reg, res, next) => {
    res.render('Pages/Visit/allVisits', {navLocation: 'vis'});
}

exports.showAddVisitForm = (reg, res, next) => {
    res.render('Pages/Visit/visitForm', {navLocation: 'vis'});
}

exports.showVisitDetails = (reg, res, next) => {
    res.render('Pages/Visit/visitDetails', {navLocation: 'vis'});
}