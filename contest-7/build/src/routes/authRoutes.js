"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = __importDefault(require("express"));
let authRouter = express_1.default.Router();
exports.authRouter = authRouter;
authRouter.get("/signup", (req, res) => {
    return res.json({
        "balls": "100x"
    });
});
authRouter.get("/signin", () => {
});
