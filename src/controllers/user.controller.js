import { asyncHandlerAwait } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js'
import { User } from '../models/user.model.js'
import { ApiResponse } from '../utils/ApiResponse.js'

const registerUser = asyncHandlerAwait(async (req, res) => {
    const { username, email, password, fullname } = req.body

    if ([username, email, password, fullname].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }

    const existedUser = await User.findOne({ $or: [{ username }, { email }] })
    if (existedUser) {
        throw new ApiError(400, "User already exists");
    }

    const user = new User({ username, email, password, fullname })
    await user.save()

    const createUser = User.findById(user._id).select("-password -refreshToken")
    if (createUser) {
        res
            .status(201)
            .json(new ApiResponse(201,
                "User registered successfully",
            ))
    } else {
        throw new ApiError(500, "User registration failed")
    }

})


export {
    registerUser
}