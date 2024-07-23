const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const { PORT, CLIENT_ORIGIN } = require("./config");
const db  = require("./models/index");
const { UploadsRoute } = require("./routes/uploads");
const port = PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: CLIENT_ORIGIN,
    credentials: true,
    methods: ["POST", "GET", "PATCH", "DELETE", "PUT"]
}));

app.get("/", (req, res) => {
    res.send("hello");
});

app.use("/uploads", UploadsRoute);

db.sequelize.sync().then( () => {
    app.listen(port, () => {
        console.log(`http://localhost:${PORT}`);
    });
})
