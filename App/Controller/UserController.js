const UserModel = require('../Models/User');
const User = UserModel.User;
const UserClass = new UserModel.UserClass;

const index = function(req, res, next) {

    const Users = () => {
        return User.findAll()
    };

    const setClass = (users) => {
        UserClass.construct(users);
    };

    async function async() {
        try{

            const users = await Users();
            await setClass(users);

            return res.json({
                'data' : users,
                'classTestData' : UserClass.getData(),
                'class': UserClass
            });

        }catch (error){
            return next({
                status: 500,
                message:'There is a Problem',
                code: '1'
            });
        }
    }

    async();

};

module.exports.index = index;
