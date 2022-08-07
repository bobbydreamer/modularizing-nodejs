exports.all_users = function(fn){
    fn(null, [
        {name: 'tobi'},
        {name: 'loki'},
        {name: 'jane'},
    ])
};