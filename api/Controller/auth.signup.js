const Person=require('../Modal/user.modal')
const bcryptjs = require('bcryptjs');
const { errorHandler } = require('../utils/error');

const singup =async(req, res,next) =>{
    try{
        
    let {username,email,password} = req.body;
    if(!username || !email || !password || username==''|| password==''|| email==''){
        next(errorHandler(400,'Please fill all the fields'))
        // return res.status(400).json({error: 'Please fill all the fields'});
    }else{
        password =bcryptjs.hashSync(password,10);
        const newPerson = new Person({username,email,password});
        const response=await newPerson.save()
        // console.log(response)
        res.status(200).json("signup successfully")
    }
    }catch(error){
        //  console.log(error)
        // res.status(500).json({error:error.message});
        next(error);
    }
}
module.exports = singup
