import { Button, Label, TextInput, Spinner } from 'flowbite-react';

import { Link, useNavigate } from 'react-router-dom';
import image from '../image/signinimage.png';
import backgroundImage from '../image/background.webp';
import { useState } from 'react';
// import { FaTh } from 'react-icons/fa';
// import Toast from '../Component/Toast';
import Component from '../Component/Toast';
import { SigninSuccess, SigninStart, SigninFail } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux'
function Singin() {
    const [formdata, setformdata] = useState({});
    const navigate = useNavigate();
    // const [loading, setloading] = useState(false);
    // const [error, seterror] = useState(null);
    const { loading, error } = useSelector(state => state.user)
    const dispath = useDispatch();
    function handelchange(event) {
        setformdata({ ...formdata, [event.target.id]: event.target.value.trim() });
    }
    // console.log(formdata)
    function handelToasttoggle() {
        // seterror(null);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(formdata);
        if (!formdata.email || !formdata.password) {
            // return seterrormessage('Please fill all the fields');
            return dispath(SigninFail("Please fill all the fields"))
        }
        try {
            dispath(SigninStart())
            const res = await fetch('/api/auth/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formdata),
            });
            const data = await res.json();
            // console.log(data);
            if (data.success === false) {
                dispath(SigninFail(data.message));
            }
            // setloading(false);
            if (res.ok) {
                dispath(SigninSuccess(data));
                navigate('/');
            }
        } catch (err) {
            // console.log(err)
            dispath(SigninFail(err.message));

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
                                <Label htmlFor="email2" value="Your email" />
                            </div>
                            <TextInput id="email" type="email" placeholder="avinash@gmail.com" required shadow onChange={handelchange} className='w-[420px] md:w-[260px]' />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="Your password" />
                            </div>
                            <TextInput id="password" type="password" placeholder='password' required shadow onChange={handelchange} />
                        </div>
                        {/* <div className="flex items-center gap-2">
                            <Checkbox id="agree" />
                            <Label htmlFor="agree" className="flex">
                                I agree with the&nbsp;
                                <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                    terms and conditions
                                </Link>
                            </Label>
                        </div> */}
                        <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
                            {
                                loading ? (
                                    <>
                                        <Spinner size='sm'></Spinner>
                                        <span className='pl-3'>loading...</span>
                                    </>
                                ) : 'Sign in'
                            }
                        </Button>
                    </form>
                    <div className='flex gap-2 text-sm justify-center '>
                        <span>{"Don't have an account?"}</span>
                        <Link to='/Sign-up'>
                            <span className='text-blue-600'>Sign up</span>
                        </Link>
                    </div>
                    {error && <Component onclick={handelToasttoggle}></Component>}
                </div>
                {/*  */}

            </div>
        </div>
    )
}

export default Singin