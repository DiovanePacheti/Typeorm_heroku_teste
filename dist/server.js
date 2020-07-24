"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
require("reflect-metadata");
require("./database");
var app_1 = __importDefault(require("./app"));
dotenv_1.default.config();
app_1.default.listen(process.env.PORT || 3000, function () {
    console.log('rodando server !!!');
});
//# sourceMappingURL=server.js.map