const { Sequelize, db } = require('../Config/Database');

const User = (req, res) => {

    const UserModel = db.define('user', {
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        surname: {
            type: Sequelize.STRING
        }
    });

    return UserModel;
};

class UserClass {

    construct(data) {
        this.data = data;
    }

    getData(){
        return this.data;
    }

}

module.exports.User = User();
module.exports.UserClass = UserClass;
