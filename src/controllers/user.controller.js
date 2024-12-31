import { asyncHandlerAwait } from '../utils/asyncHandler.js'

const registerUser = asyncHandlerAwait(async (req, res) => {
    res.status(200).json({
        message: "ok"
    })
})


export {
    registerUser
}