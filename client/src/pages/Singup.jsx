// import React from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import image from '../image/signupimage2.png';
import backgroundImage from '../image/background.webp';
function Singup() {
    return (
        <div className='min-h-screen mt-0 bg-center md:mt-10' >
            {/* left  */}
            <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5 shadow-xl bg-center' style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className='flex-1 mt-2'>
                    <img src={image} alt='' />
                </div>
                {/* right */}
                <div className='p-4'>
                    <form className="flex max-w-md flex-col gap-4 p-3">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="text" value="Your username" />
                            </div>
                            <TextInput id="text" type="text" placeholder="username" required shadow />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email2" value="Your email" />
                            </div>
                            <TextInput id="email2" type="email" placeholder="avinash@gmail.com" required shadow />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password2" value="Your password" />
                            </div>
                            <TextInput id="password2" type="password" placeholder='password' required shadow />
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="agree" />
                            <Label htmlFor="agree" className="flex">
                                I agree with the&nbsp;
                                <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                    terms and conditions
                                </Link>
                            </Label>
                        </div>
                        <Button gradientDuoTone='purpleToPink'>Sign up</Button>
                        <div className='flex gap-2 text-sm '>
                            <span>Have a account ?</span>
                            <Link to='/Sign-in'>
                                <span className='text-blue-600'>Sign in</span>
                            </Link>
                        </div>
                    </form>
                </div>
                {/*  */}
            </div>
        </div>
    )
}

export default Singup