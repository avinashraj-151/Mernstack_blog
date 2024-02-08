// import React from 'react'
import { Button, Checkbox, Label, TextInput, Spinner } from 'flowbite-react';

import { Link, useNavigate } from 'react-router-dom';
import image from '../image/signupimage3.png';
import backgroundImage from '../image/background.webp';
import { useState } from 'react';
// import { FaTh } from 'react-icons/fa';


function Singup() {
    const [formdata, setformdata] = useState({});
    // const [errormessage, seterrormessage] = useState(null);
    const navigate = useNavigate();
    const [loading, setloading] = useState(false);
    function handelchange(event) {
        setformdata({ ...formdata, [event.target.id]: event.target.value.trim() });
    }
    // console.log(formdata)
    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(formdata);
        if (!formdata.username || !formdata.email || !formdata.password) {
            // return seterrormessage('Please fill all the fields');
            return;
        }
        try {
            setloading(true);
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formdata),
            });
            const data = await res.json();
            // console.log(data);
            setloading(false);
            if (res.ok)
                navigate('/sign-in');
        } catch (err) {
            console.log(err)
            setloading(false);
        }
    }
    // console.log(formdata);
    return (
        <div className='min-h-screen mt-0 bg-center md:mt-10 ' >
            {/* left  */}
            <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5 shadow-2xl bg-center  mb-24' style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className='flex-1 mt-2'>
                    <img src={image} alt='' />
                </div>
                {/* right */}
                <div className=''>
                    <form className="flex max-w-md flex-col gap-4 p-3 " onSubmit={handleSubmit}>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="text" value="Your username" />
                            </div>
                            <TextInput id="username" type="text" placeholder="username" required shadow onChange={handelchange} />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email2" value="Your email" />
                            </div>
                            <TextInput id="email" type="email" placeholder="avinash@gmail.com" required shadow onChange={handelchange} />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="Your password" />
                            </div>
                            <TextInput id="password" type="password" placeholder='password' required shadow onChange={handelchange} />
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
                        <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
                            {
                                loading ? (
                                    <>
                                        <Spinner size='sm'></Spinner>
                                        <span className='pl-3'>loading...</span>
                                    </>
                                ) : 'Sign up'
                            }
                        </Button>
                    </form>
                    <div className='flex gap-2 text-sm justify-center '>
                        <span>Have a account ?</span>
                        <Link to='/Sign-in'>
                            <span className='text-blue-600'>Sign in</span>
                        </Link>
                    </div>
                </div>
                {/*  */}
            </div>
        </div>
    )
}

export default Singup