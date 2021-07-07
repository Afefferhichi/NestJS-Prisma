"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_CONNECT = void 0;
const dotenv = require("dotenv");
dotenv.config();
console.log({ url: process.env.DB_CONNECT });
exports.DB_CONNECT = process.env.DB_CONNECT || 'mongodb://localhost/nest';
//# sourceMappingURL=index.js.map