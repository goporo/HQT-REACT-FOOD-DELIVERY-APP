import { TextField } from '@mui/material'
import React from 'react'



const Profile = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(e.target[0].value);
    }

    return (
        <div className='bg-white w-11/12 rounded-md shadow-sm m-10 p-10'>
            <div className='font-semibold text-xl mb-5'>Profile information</div>

            <div className="flex flex-row items-center mt-5">
                <button className="rounded-full overflow-hidden h-10 xl:h-12  w-10 xl:w-12 shadow-md">
                    <img
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        className="object-cover h-full w-full"
                        alt="ava"
                    />

                </button>
                <p className="text-md ml-5">KHACH HANG {localStorage.getItem("MAKH")}</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-4">
                <TextField id="outlined-basic" label="Name" variant="outlined" />
                <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
                <TextField id="outlined-basic" label="Address" variant="outlined" />
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                <button type='submit' className='py-3 bg-red-500 text-white hover:opacity-80 rounded-md'>Save Changes</button>
            </form>


        </div>
    )
}

export default Profile