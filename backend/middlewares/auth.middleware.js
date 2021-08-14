const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    if (req.path === "/auth/login" || req.path === "/auth/register" || req.path.includes('products')) {
        return next();
    }

    try {
        const authorizationHeader = req.headers["authorization"];

        const token = authorizationHeader.split(" ")[1].trim();
        if (!token) {
            res.status(401).json(err);
            return;
        }

        jwt.verify(token, process.env.SECRET_JWT, (err, data) => {
            if (err) {
                res.status(401).json(err);
                return;
            } else {
                next();
            }
        });
    } catch (err) {
        res.status(401).json(err)
    }
};
