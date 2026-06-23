"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes/");
let app = (0, express_1.default)();
app.use(routes_1.authRouter);
app.get("/", (req, res) => {
    return res.json({
        "toy": "cool"
    });
});
app.listen(process.env.PORT, () => {
    console.log("Successfully started server ");
});
