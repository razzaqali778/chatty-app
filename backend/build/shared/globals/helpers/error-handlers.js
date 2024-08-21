"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoiRequestValidationrError = exports.ServerError = exports.FileToLargeError = exports.NotAuthoriseError = exports.NotFoundError = exports.BadRequestError = exports.CustomError = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
class CustomError extends Error {
    constructor(message) {
        super(message);
        // Object.setPrototypeOf(this, new.target.prototype)
    }
    serializeError() {
        return {
            message: this.message,
            status: this.status,
            statusCode: this.statusCode,
        };
    }
}
exports.CustomError = CustomError;
class BadRequestError extends CustomError {
    constructor(message) {
        super(message);
        this.statusCode = http_status_codes_1.default.BAD_REQUEST;
        this.status = 'error';
    }
}
exports.BadRequestError = BadRequestError;
class NotFoundError extends CustomError {
    constructor(message) {
        super(message);
        this.statusCode = http_status_codes_1.default.NOT_FOUND;
        this.status = 'error';
    }
}
exports.NotFoundError = NotFoundError;
class NotAuthoriseError extends CustomError {
    constructor(message) {
        super(message);
        this.statusCode = http_status_codes_1.default.UNAUTHORIZED;
        this.status = 'error';
    }
}
exports.NotAuthoriseError = NotAuthoriseError;
class FileToLargeError extends CustomError {
    constructor(message) {
        super(message);
        this.statusCode = http_status_codes_1.default.REQUEST_TOO_LONG;
        this.status = 'error';
    }
}
exports.FileToLargeError = FileToLargeError;
class ServerError extends CustomError {
    constructor(message) {
        super(message);
        this.statusCode = http_status_codes_1.default.SERVICE_UNAVAILABLE;
        this.status = 'error';
    }
}
exports.ServerError = ServerError;
class JoiRequestValidationrError extends CustomError {
    constructor(message) {
        super(message);
        this.statusCode = http_status_codes_1.default.BAD_REQUEST;
        this.status = 'error';
    }
}
exports.JoiRequestValidationrError = JoiRequestValidationrError;
//# sourceMappingURL=error-handlers.js.map