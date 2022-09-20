const Account = require('../models/Account');
const {
    mongooseToObject
} = require('../../util/mongoose');
const jwt = require('jsonwebtoken');
class LoginController {

    index(req, res) {
        res.render('login');
    }

    login(req, res, next) {

        Account.findOne({
                id: req.params.id,
                username: req.body.username,
                password: req.body.password,
            })
            .then((user) => {
                // res.render('login/store', {
                //     user: mongooseToObject(user)
                // });
                if (user) {
                    const token = jwt.sign({
                        _id: user._id
                    }, 'mk');
                    return res.json({
                        message: 'success',
                        token: token
                    });
                } else {
                    res.json('failed');
                }
            })
            .catch(next);

    }
}


module.exports = new LoginController()