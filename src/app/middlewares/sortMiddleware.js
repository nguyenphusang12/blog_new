module.exports = function sortMiddleware(req, res, next) {
    res.locals._sort = {
        enabled: false,
        type: 'default'
    }
    const validateType = ['asc', 'desc'].includes(req.query.type);
    if (req.query.hasOwnProperty('_sort')) {
        Object.assign(res.locals._sort, {
            enabled: true,
            type: validateType ? req.query.type : 'default',
            column: req.query.column
        })
    }
    next();
}