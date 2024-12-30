class ApiError extends Error {
    constructor(
        statusCode,
        message = 'Internal Server Error',
        errors = [],
        stack = '') {
        super(message)
        this.statusCode = statusCode
        this.message = message
        this.success = false
        this.errors = errors
        this.data = null
        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }



}

export { ApiError }