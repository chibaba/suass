

exports.get_landed = function(req, res, next) {
    res.render('landed', {title: 'Express'})
}


exports.submit_lead = function(req, res, next) {
    console.log("lead email", req.body.lead_email);
    res.redirect('/');

}