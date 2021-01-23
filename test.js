const { db } = require("./pgAdaptor");

db.query('select * from cis2019')
    .then(res => {
        console.log(res);
    });