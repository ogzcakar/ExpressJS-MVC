const index = function(req, res, next) {
    console.log('/');

    const testJosn = {
        title : 'Example Express MVC',
        name: 'Oğuzhan ÇAKAR'
    };

    const Home = require('../Models/Home');
    const classJs = new Home.Home(testJosn);

    Home.testSchema();

    res.render('home', {
        'title' : classJs.getTitle(),
        'name' : classJs.getName()
    })

};

const test = function(req, res, next) {

    console.log('/a');

    res.json(
        {
            'a': 'test'
        }
    );

};

module.exports.index = index;
module.exports.test = test;
