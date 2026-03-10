const fs = require("fs");

function readProfile(callback) {

    fs.readFile("./data/profile.json", "utf8", (error, data) => {

        if (error) {
            callback(error, null);
        } else {
            const profile = JSON.parse(data);
            callback(null, profile);
        }

    });

}

module.exports = readProfile;