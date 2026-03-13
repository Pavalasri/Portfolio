const express = require("express");
const readProfile = require("./modules/readProfile");

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

app.get("/api/profile", (req, res) => {

    readProfile((error, data) => {

        if (error) {
            res.status(500).send("Error reading profile");
        } else {
            res.json(data);
        }

    });

});

app.post("/api/contact", (req, res) => {

    const { name, email, message } = req.body;

    console.log("New Contact Message:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("----------------------------");

    res.json({
        message: "Message sent successfully!"
    });

});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});