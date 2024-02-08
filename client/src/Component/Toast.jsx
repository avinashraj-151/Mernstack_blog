
import { Toast } from 'flowbite-react';
import { HiExclamation } from 'react-icons/hi';
import PropTypes from 'prop-types';

export default function Component({ message, onclick }) {
    console.log(message);
    return (
        <div className="flex flex-col gap-4 mt-4">
            <Toast className='bg-red-500'>
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
                    <HiExclamation className="h-5 w-5" />
                </div>
                <div className="ml-3 text-sm font-normal text-white">{message}</div>
                <Toast.Toggle onClick={onclick} className='bg-red' />
            </Toast>
        </div>
    );
}

Component.propTypes = {
    message: PropTypes.string.isRequired,
    onclick: PropTypes.func.isRequired,
};