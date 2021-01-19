const express = require('express');
const jwt = require('jsonwebtoken');

var router = express.Router();

router.post('/login', function(req, res) {
    
    const username = req.body.username;
    const password = req.body.password;

    //if (validateEmailAndPassword()) {
    if (username != "") 
    {
       //const userId = findUserIdForUserName(username);
        const userId = "someuserid";
       
       //Get the real secret key from db or envinroment variable..
        const RSA_PRIVATE_KEY = 'somekey';

        var tokenData = jwt.sign({ id: userId },
                             RSA_PRIVATE_KEY,
                            {expiresIn: 7200  } // expires in 2 hours
                            );

        let roleData = "user";
        if(username == "Uriel") {
            roleData = "admin"
        }

        res.status(200).send({ token: tokenData, role: roleData });
    }
    else
    {
        res.sendStatus(401); 
    }

  });

  module.exports = router;
