import React from 'react'
import logo from '@/assets/Logo (11).svg'
import Image from 'next/image'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';


const Footer = () => {
    return (
        <footer className='bg-[#FFE6D2] text-black border-t border-black'>
            <div className='container m-auto h-20 flex items-center justify-between'>
                <div className='flex gap-10 items-center'>
                    <div>
                        <Link href={'/'}>
                            <Image src={logo} alt='logo' />
                        </Link>
                    </div>
                    <p>©2021 Finsweet</p>
                </div>
                <div className='flex items-center gap-7 text-lg'>
                    <FaFacebook/>
                    <FaTwitter/>
                    <FaInstagram/>
                    <FaLinkedin/>
                </div>
            </div>
        </footer>
    )
}

export default Footer