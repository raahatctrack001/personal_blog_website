
import User from "../Models/user.model.js";
import { generateAccessAndRefreshToken, options } from "../Tokens/loginTokens.js";
import apiError from "../Utils/apiError.js";
import ApiError  from "../Utils/apiError.js";
import apiResponse from "../Utils/apiResponse.js";
import { asyncHandler } from "../Utils/asyncHandler.js";
import { emailSchema, removePassword, uniqueIdValidator, userSchema } from "../Validators/zod.validator.js";
import jwt from 'jsonwebtoken'
export const registerUser = asyncHandler(async (req, res, next)=>{
    const {username, email, fullName, password, isAdmin} = req.body;
    const userData = [username, email, fullName, password];
    
    try {

        if(userData.some(field=>field?.trim()?0:1)){
            throw new apiError(404, "All fields are necessary!");
        }

        if(emailSchema.safeParse(username).success){
            throw new apiError(403, "username and email shouldn't be similar")
        }
        
        const result = userSchema.safeParse({username, email, fullName, password})
        if(!result.success){
            throw new apiError(406, result?.error?.errors[0]?.message)
        }

        User
            .create({username, email, fullName, password, isAdmin})
            .then((newUser)=>{
                res
                    .status(201)
                    .json(
                        new apiResponse(201, "new user created", newUser)
                    )
                })
            .catch(error=>next(error))

    } catch (error) {
        next(error)
    }
})
export const loginUser = asyncHandler(async (req, res, next)=>{
    const {userEmail, password: pass} = req.body;
    
    try {
        const query = uniqueIdValidator(userEmail);
        User
            .findOne(query)
            .then((user)=>{
                if(user){
                    if(!user.isPasswordCorrect(pass)){
                        throw new apiError(403, "password didn't matched!")
                    }
                    
                    generateAccessAndRefreshToken(user)
                       .then((tokens)=>{
                            const { accessToken, refreshToken } = tokens;
                            const userData = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
                            const {iat, exp, ...rest} = userData;
                            res
                                .status(202)
                                .cookie('accessToken', accessToken, options)
                                .cookie('refreshToken', refreshToken, options)
                                .json(
                                    new apiResponse(202, "user logged in", rest)
                                )                        
                       })
                       .catch(err=>next(err))
                }
                else{
                    throw new apiError(404, "user not found!")
                }
                
            })
            .catch(error=>next(error))            
    } catch (error) {
        console.log(error)
        next(error);
    }

})
export const logoutUser = asyncHandler(async (req, res, next)=>{
    try {
        const currentUser = await User
            .findByIdAndUpdate(req.user?._id, {
                $set: {
                    refreshToken: 1,
                },
                
            },
            {
                new: true
            }
        )
        console.log(currentUser);
        return res
                .status(200)
                .clearCookie('accessToken', options)
                .clearCookie('refreshToken', options)
                .json(
                    new apiResponse(200, "user logged out", {})
                )
        
    } catch (error) {
        next(error)
    }
})
export   const resetPassword = asyncHandler(async (req, res)=>{

})
export const updatePassword = asyncHandler(async (req, res)=>{

})
export const googleLogin = asyncHandler(async (req, res)=>{

})
export const deleteUser = asyncHandler(async (req, res)=>{

})
