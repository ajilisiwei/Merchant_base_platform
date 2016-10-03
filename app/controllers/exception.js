// catch 404 and forward to error handler
exports.nofound=function (req,res,next) {
    var err=new Error('Not Found');
    err.status=404;
    next(err);
}

//production error handler
exports.err=function(err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
};