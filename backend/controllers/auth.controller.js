const Customer = require("../models/customer.model");
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");

module.exports.login = async (req, res) => {
    const { username, password } = req.body;
    // console.log("LOGIN")

    const customer = await Customer.findOne({ username });

    if (!customer) {
        res.status(401).json({ message: "Account does not exist!" });
        return;
    }

    if (md5(password) !== customer.password) {
        res.status(401).json({ message: "Wrong password!" });
        return;
    }

    try {
        const token = jwt.sign({ customer: customer }, process.env.SECRET_JWT, {
            expiresIn: "1 day",
        });

        const obj = {
            accessToken: token,
        };

        res.status(200).json(obj);
    } catch (err) {
        // console.log(err)
        res.status(403).json(err);
    }
};

module.exports.register = async (req, res) => {
    const { email, username, password } = req.body;
    req.body.password = md5(password);

    const cusEmail = await Customer.findOne({ email });
    const cusUsername = await Customer.findOne({ username });

    if (cusEmail) {
        res.status(403).json({ message: "Email already exists!" });
        return;
    }

    if (cusUsername) {
        res.status(403).json({ message: "Username already exists!" });
        return;
    }

    try {
        const customer = await Customer.create(req.body);
        res.status(200).json(customer);
    } catch (err) {
        res.status(403).json(err);
    }
};

module.exports.changePassword = (req, res) => {
    res.json({});
};
