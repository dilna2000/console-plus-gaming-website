const express = require("express");
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const auth = require('../middleware/auth');
const User = require("../models/gamers.model");

/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
 */

router.post(
    "/signup",
    [
        check("username", "Please Enter a Valid Username")
            .not()
            .isEmpty(),
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a valid password").isLength({
            min: 6
        })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const {
            username,
            email,
            password,
            
        } = req.body;
        try {
            let user = await User.findOne({
                email
            });
            if (user) {
                return res.status(400).json({
                    msg: "User Already Exists"
                });
            }

            user = new User({
                username,
                email,
                password,
                
            });

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            await user.save();

            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(
                payload,
                "randomString", {
                expiresIn: 10000
            },
                (err, token) => {
                    if (err) throw err;
                    res.status(200).json({
                        token
                    });
                }
            );
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error in Saving");
        }
    }
);

router.post(
    "/login",
    [
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a valid password").isLength({
            min: 6
        })
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const { email, password } = req.body;
        try {
            let user = await User.findOne({
                email
            });
            if (!user)
                return res.status(400).json({
                    message: "User Not Exist"
                });

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch)
                return res.status(400).json({
                    message: "Incorrect Password !"
                });

            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(
                payload,
                "randomString",
                {
                    expiresIn: 3600
                },
                (err, token) => {
                    if (err) throw err;
                    res.status(200).json({
                        token
                    });
                }
            );
        } catch (e) {
            console.error(e);
            res.status(500).json({
                message: "Server Error"
            });
        }
    }
);

router.get("/me", auth, async (req, res) => {
    try {
        // request.user is getting fetched from Middleware after token authentication
        const user = await User.findById(req.user.id);
        res.json(user);
       
        console.log(user.snakegame);
    } catch (e) {
        res.send({ message: "Error in Fetching user" });
    }
});


router.route("/addsnakegame").put(function (req, res) {
    const { username, score } = req.body;
    User.updateOne(
        { username: username  },
        {
            $push: { snakegame: score }
        },
        function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        }
    );
});

router.route("/addchess").put(function (req, res) {
    const { username, score } = req.body;
    User.updateOne(
        { username: username },
        {
            $push: { chess : score }
        },
        function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        }
    );
});

router.route("/addtic").put(function (req, res) {
    const { email, score } = req.body;
    User.updateOne(
        { email: email },
        {
            $push: { tictactoe: score }
        },
        function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        }
    );
});

router.route("/addbrick").put(function (req, res) {
    const { email, score } = req.body;
    User.updateOne(
        { email: email },
        {
            $push: { brickbreak : score }
        },
        function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        }
    );
});

router.route("/addhangman").put(function (req, res) {
    const { email, score } = req.body;
    User.updateOne(
        { email: email },
        {
            $push: { hangman : score }
        },
        function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        }
    );
});

router.route("/add2048").put(function (req, res) {
    const { email, score } = req.body;
    User.updateOne(
        { email: email },
        {
            $push: { A2048 : score }
        },
        function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        }
    );
});

router.route("/addtetris").put(function (req, res) {
    const { email, score } = req.body;
    User.updateOne(
        { email: email },
        {
            $push: { tetris : score }
        },
        function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        }
    );
});
router.route("/editprofile").put(function (req, res) {
    const { username, email, new_user, new_mail} = req.body;
    //const salt =  bcrypt.genSalt(10);
    //new_pass = bcrypt.hash(new_pass , salt);

    User.update(
        { username: username, email: email }, { $set: { username: new_user, email: new_mail } },
        function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        }
    );
});

/*router.route("/fetchgraphs").get(function (req, res) {
    User.find( req.body , function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
            console.log(result);
           
        }
    });
});

router.get("/fetch2", async (req, res) => {
    try {
        // request.user is getting fetched from Middleware after token authentication
        const user = await User.find(req.body);
        res.json(user);
        console.log(user);


    } catch (e) {
        res.send({ message: "Error in Fetching user" });
    }
});*/

router.route('/fetch3/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(gamers => res.json(gamers))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/del').delete((req, res) => {
    const email = req.body.email;
    User.remove({ email: email }, function (err) {
        if (err) { console.log(err); }
        else {
            console.log("Successful deletion");
        }
    });
});

router.route('/delete/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('Game deleted !'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;