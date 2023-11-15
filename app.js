"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./src/user-microservice/api-endpoint/routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 3000;
app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
app.use(express_1.default.json());
app.use("/api/user", routes_1.default);
exports.default = app;
