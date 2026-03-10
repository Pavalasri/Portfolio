const express = require("express");
const readProfile = require("./modules/readProfile");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/api/profile", (req, res) => {

    readProfile((error, data) => {

        if (error) {
            res.status(500).send("Error reading profile");
        } else {
            res.json(data);
        }

    });

});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});