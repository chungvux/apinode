const axios = require('axios');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM()

exports.homeRoutes = (req, res) => {
    console.log(req.url)
    // Make a get request to /api/users
    axios.get(req.protocol + '://' + req.get('host') + "/api/users")
        .then(function(response){
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_user = (req, res) =>{
    res.render('add_user');
}

exports.update_user = (req, res) =>{
    axios.get(req.protocol + '://' + req.get('host') + '/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}