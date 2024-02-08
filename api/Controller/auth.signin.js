const user=require('../Modal/user.modal')
const { errorHandler } = require('../utils/error');
const bcryptjs = require('bcryptjs');
const jwt=require('jsonwebtoken');
const dotenv = require('dotenv')

const singin=async(req, res,next)=>{
    const {username,email, password} = req.body;
    if(!username || !email || !password || username==''|| password==''|| email==''){
        next(errorHandler(400,'Please fill all the fields'))
        // return res.status(400).json({error: 'Please fill all the fields'});
    }
    try{
        const vaildemail =await user.findOne({email});
        // console.log(vaildemail);
        if(!vaildemail){
            return next(errorHandler(404,'user does not exist'))
        }else{
            const vaildPassword =await bcryptjs.compareSync(password,vaildemail.password);
            if(!vaildPassword){
                return next(errorHandler(404,'password does not match'))
            }else{
                const vailusername= vaildemail.username==username;
                // console.log('yes yaha taka sahi hai');
                if(!vailusername){
                     console.log('yes yaha taka sahi hai');
                   return  next(errorHandler(404,'username does not match'))
                }else{
                    // res.status(200).json("login successfully")

                    const token=jwt.sign(
                        {id:vaildemail._id},'avinash')
                    res.status(200).cookie('access_token',token,{
                        httpOnly:true
                    }).json(vaildemail)
                }
            }
        }
    }catch(err){
        next(err)
    }
}



module.exports =singin;