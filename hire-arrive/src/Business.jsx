import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Business() {
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('https://hire-arrive-server.onrender.com/api/auth/user', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setDetails(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchUserData();
    }, []);

    if (loading) {
        return (
            <div className="flex-1 bg-gray-900 text-white flex justify-center p-6 items-center">
                {/* Shimmer Effect */}
                <div className="animate-pulse flex justify-center items-center flex-col gap-6">
                    <div className="w-32 h-32 rounded-full bg-gray-700 flex-shrink-0"></div>
                    <div className="h-8 bg-gray-600 rounded-xl w-[213px]"></div>
                    <div className="h-6 bg-gray-600 rounded-xl w-20"></div>
                    <div className="h-4 bg-gray-600 rounded-xl w-16"></div>
                    <div className="h-4 bg-gray-600 rounded-xl w-20"></div>
                    <div className="h-4 bg-gray-600 rounded-xl w-16"></div>

                </div>
            </div>
        );
    }

    return (
        <>
            <div className="flex-1 bg-gray-900 flex flex-col justify-center items-center p-6">
                {/* ------------------------Mobile View------------------------ */}
                <div className='hidden mo:block'>
                    <div className='w-screen flex flex-col justify-center items-center'>
                        <div className='w-[135px] h-[135px] rounded-full flex justify-center items-center bg-gray-900 border-4 border-purple-700 flex-shrink-0'>
                            <div className='w-[114px] h-[114px] rounded-full bg-purple-700 flex justify-center items-center'>
                                <p className='text-6xl font-extrabold text-white'>{details.businessName[0].toUpperCase()}</p>
                            </div>
                        </div>
                        <div className='text-4xl font-extrabold mt-6 text-white'>{details?.businessName}</div>
                        <div className='w-fit px-4 h-[34px] gap-1 bg-[#452A5C] border-2 border-purple-700 rounded-3xl flex justify-center items-center mt-6'>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_7_169)">
                                    <path d="M14 0H0V14H14V0Z" stroke="white" strokeWidth="0.00048" />
                                    <path d="M6.99999 2.24584L8.54582 4.66667H5.42499L6.99999 2.24584ZM6.99999 0.583337C6.89978 0.587637 6.80216 0.616483 6.7157 0.667339C6.62925 0.718195 6.5566 0.789505 6.50415 0.875003L3.84999 4.95834C3.80607 5.0493 3.78326 5.149 3.78326 5.25C3.78326 5.35101 3.80607 5.45071 3.84999 5.54167C3.89803 5.63101 3.96966 5.70545 4.0571 5.75688C4.14453 5.80831 4.2444 5.83476 4.34582 5.83334H9.62499C9.7252 5.82904 9.82282 5.80019 9.90928 5.74934C9.99573 5.69848 10.0684 5.62717 10.1208 5.54167C10.1785 5.45534 10.2093 5.35384 10.2093 5.25C10.2093 5.14617 10.1785 5.04467 10.1208 4.95834L7.49582 0.875003C7.44778 0.785664 7.37615 0.711224 7.28871 0.659794C7.20128 0.608364 7.10141 0.581918 6.99999 0.583337Z" fill="white" stroke="white" strokeWidth="0.00048" />
                                    <path d="M12.5417 12.5417H8.45833C8.30362 12.5417 8.15525 12.4802 8.04585 12.3708C7.93646 12.2614 7.875 12.113 7.875 11.9583V7.87501C7.875 7.7203 7.93646 7.57192 8.04585 7.46253C8.15525 7.35313 8.30362 7.29167 8.45833 7.29167H12.5417C12.6964 7.29167 12.8447 7.35313 12.9541 7.46253C13.0635 7.57192 13.125 7.7203 13.125 7.87501V11.9583C13.125 12.113 13.0635 12.2614 12.9541 12.3708C12.8447 12.4802 12.6964 12.5417 12.5417 12.5417ZM9.04167 11.375H11.9583V8.45834H9.04167V11.375Z" fill="white" stroke="white" strokeWidth="0.00048" />
                                    <path d="M3.79167 8.16667C4.13779 8.16667 4.47613 8.2693 4.76392 8.46159C5.0517 8.65389 5.276 8.9272 5.40846 9.24697C5.54091 9.56674 5.57557 9.91861 5.50804 10.2581C5.44052 10.5975 5.27385 10.9094 5.02911 11.1541C4.78436 11.3988 4.47254 11.5655 4.13308 11.633C3.79361 11.7006 3.44174 11.6659 3.12197 11.5335C2.8022 11.401 2.52889 11.1767 2.3366 10.8889C2.1443 10.6011 2.04167 10.2628 2.04167 9.91667C2.04167 9.45254 2.22604 9.00742 2.55423 8.67923C2.88242 8.35104 3.32754 8.16667 3.79167 8.16667ZM3.79167 7C3.21481 7 2.6509 7.17106 2.17125 7.49155C1.69161 7.81203 1.31777 8.26756 1.09702 8.80051C0.876264 9.33346 0.818504 9.9199 0.931044 10.4857C1.04358 11.0515 1.32137 11.5712 1.72927 11.9791C2.13718 12.387 2.65688 12.6648 3.22265 12.7773C3.78843 12.8898 4.37488 12.8321 4.90783 12.6113C5.44078 12.3906 5.8963 12.0167 6.21679 11.5371C6.53727 11.0574 6.70833 10.4935 6.70833 9.91667C6.70833 9.53364 6.63289 9.15437 6.48632 8.80051C6.33974 8.44664 6.1249 8.12511 5.85406 7.85427C5.58322 7.58343 5.26169 7.36859 4.90783 7.22202C4.55396 7.07544 4.17469 7 3.79167 7Z" fill="white" stroke="white" strokeWidth="0.00048" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_7_169">
                                        <rect width="14" height="14" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <div className='text-sm font-bold text-white'>{details.workcategory}</div>
                        </div>
                        <div className='flex text-white text-base items-center gap-1 font-semibold mt-3'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_7_199)">
                                    <path d="M12.5417 4.16666C13.3556 4.32547 14.1036 4.72354 14.69 5.30994C15.2764 5.89634 15.6745 6.64438 15.8333 7.45833M12.5417 0.833328C14.2327 1.02119 15.8096 1.77847 17.0135 2.98083C18.2174 4.1832 18.9767 5.75917 19.1667 7.44999M18.3333 14.1V16.6C18.3343 16.8321 18.2867 17.0618 18.1937 17.2745C18.1008 17.4871 17.9644 17.678 17.7934 17.8349C17.6224 17.9918 17.4205 18.1112 17.2006 18.1856C16.9808 18.2599 16.7478 18.2876 16.5167 18.2667C13.9523 17.988 11.4892 17.1118 9.32498 15.7083C7.31151 14.4289 5.60443 12.7218 4.32499 10.7083C2.91663 8.53433 2.04019 6.05916 1.76665 3.48333C1.74583 3.25288 1.77321 3.02063 1.84707 2.80135C1.92092 2.58207 2.03963 2.38057 2.19562 2.20968C2.35162 2.03879 2.54149 1.90225 2.75314 1.80876C2.9648 1.71527 3.1936 1.66688 3.42499 1.66666H5.92498C6.32941 1.66268 6.72148 1.80589 7.02812 2.06961C7.33476 2.33332 7.53505 2.69953 7.59165 3.09999C7.69717 3.90005 7.89286 4.6856 8.17499 5.44166C8.2871 5.73993 8.31137 6.06409 8.24491 6.37573C8.17844 6.68737 8.02404 6.97342 7.79998 7.2L6.74165 8.25833C7.92795 10.3446 9.65536 12.072 11.7417 13.2583L12.8 12.2C13.0266 11.9759 13.3126 11.8215 13.6243 11.7551C13.9359 11.6886 14.26 11.7129 14.5583 11.825C15.3144 12.1071 16.0999 12.3028 16.9 12.4083C17.3048 12.4654 17.6745 12.6693 17.9388 12.9812C18.203 13.2931 18.3435 13.6913 18.3333 14.1Z" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_7_199">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p>{details.phoneNumber}</p>
                        </div>
                        <div className='flex text-white text-base items-center gap-1 font-semibold mt-3'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.2848 18.9935C12.1567 19.0875 12.0373 19.1728 11.9282 19.2493C11.8118 19.1721 11.6827 19.0833 11.5427 18.9832C10.8826 18.5109 10.0265 17.8176 9.18338 16.9529C7.45402 15.1792 6 12.9151 6 10.5C6 7.18629 8.68629 4.5 12 4.5C15.3137 4.5 18 7.18629 18 10.5C18 12.8892 16.4819 15.1468 14.6893 16.9393C13.8196 17.8091 12.9444 18.5099 12.2848 18.9935ZM19.5 10.5C19.5 16.5 12 21 12 21C11.625 21 4.5 16.5 4.5 10.5C4.5 6.35786 7.85786 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5ZM13.5 10.5C13.5 11.3284 12.8284 12 12 12C11.1716 12 10.5 11.3284 10.5 10.5C10.5 9.67157 11.1716 9 12 9C12.8284 9 13.5 9.67157 13.5 10.5ZM15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z" fill="white" />
                            </svg>
                            <p>{details.location}</p>
                        </div>
                        <div className='flex text-white text-base items-center font-semibold mt-3'>
                            <p className='w-[190px] h-fit text-center'>{details.streetAddress},
                                {details.city}, {details.state}
                                {` - ${details.zipCode}`}</p>
                        </div>
                        <div className='w-full max-w-md h-60 bg-gradient-to-b from-black to-[#111826] mt-6 rounded-3xl'>
                            <p className='text-white text-center text-2xl font-semibold mt-6'>About Business</p>
                            <p className='mt-9 text-purple-700 font-semibold text-base text-center'>{details.description}</p>
                        </div>
                        <Link to={'/listing'}>
                            <div className='bg-purple-700 mt-9 text-white font-semibold flex py-2 gap-2 px-4 rounded-3xl'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.3804 5.37125H1.61996C0.725195 5.37125 0 6.09675 0 6.99125V9.20988L8.26199 10.9523V9.84765H11.6906V10.9523L20 9.19879V6.99125C20 6.09675 19.2748 5.37125 18.3804 5.37125Z" fill="white" />
                                    <path d="M11.6906 14.4191H8.26199V12.1919L0.571594 10.6645V17.1801C0.571594 18.0745 1.29648 18.8 2.19093 18.8H17.8091C18.7035 18.8 19.4287 18.0745 19.4287 17.1801V10.6532L11.6906 12.1918V14.4191Z" fill="white" />
                                    <path d="M10.8334 10.7048H9.11923V13.5616H10.8334V10.7048Z" fill="white" />
                                    <path d="M7.56977 2.82054C7.57008 2.75401 7.59469 2.70112 7.63813 2.65616C7.68215 2.61308 7.7354 2.58905 7.80125 2.58843H12.1988C12.2647 2.58905 12.3182 2.61308 12.3623 2.65616C12.4054 2.70112 12.4297 2.75401 12.43 2.82054V3.97784H13.8185V2.82054C13.8188 2.37483 13.6363 1.96605 13.3441 1.67487C13.0533 1.38249 12.6436 1.19964 12.1988 1.19995H7.80125C7.35618 1.19964 6.94676 1.38249 6.65594 1.67487C6.36414 1.96605 6.18102 2.3748 6.18192 2.82054V3.97784H7.56977V2.82054Z" fill="white" />
                                </svg>
                                <p>Edit Business</p>
                            </div>
                        </Link>
                    </div>
                </div>



                {/* ------------------------PC View------------------------ */}


                <div className='mo:hidden'>
                    <div className='flex justify-center items-center'>
                        <div className=' w-[711px] h-[356px] bg-gradient-to-b from-[#090C14] to-[#111827] flex flex-col justify-center items-center rounded-3xl'>
                            <div className='flex w-full justify-end pr-[19px] pt-[16px]'>
                                <Link to={'/listing'}>
                                    <div className='w-[60px] h-[60px] bg-purple-700 rounded-full flex justify-center items-center'>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.75 5.00001H5C4.33696 5.00001 3.70107 5.2634 3.23223 5.73224C2.76339 6.20108 2.5 6.83697 2.5 7.50001V25C2.5 25.663 2.76339 26.2989 3.23223 26.7678C3.70107 27.2366 4.33696 27.5 5 27.5H22.5C23.163 27.5 23.7989 27.2366 24.2678 26.7678C24.7366 26.2989 25 25.663 25 25V16.25M23.125 3.12501C23.6223 2.62773 24.2967 2.34836 25 2.34836C25.7033 2.34836 26.3777 2.62773 26.875 3.12501C27.3723 3.62229 27.6517 4.29675 27.6517 5.00001C27.6517 5.70327 27.3723 6.37773 26.875 6.87501L15 18.75L10 20L11.25 15L23.125 3.12501Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                            <div className='w-full h-full flex'>
                                <div className='w-[50%] flex flex-col justify-center items-center'>
                                    <div className='w-36 h-36 rounded-full flex justify-center items-center bg-gray-900 border-4 border-purple-700 flex-shrink-0'>
                                        <div className='w-[114px] h-[114px] rounded-full bg-purple-700 flex justify-center items-center'>
                                            <p className='text-6xl font-extrabold text-white'>{details.businessName[0].toUpperCase()}</p>
                                        </div>
                                    </div>
                                    <div className='w-fit px-6 h-[34px] gap-1 bg-[#452A5C] border-2 border-purple-700 rounded-3xl flex justify-center items-center m-4 mt-6'>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_7_169)">
                                                <path d="M14 0H0V14H14V0Z" stroke="white" strokeWidth="0.00048" />
                                                <path d="M6.99999 2.24584L8.54582 4.66667H5.42499L6.99999 2.24584ZM6.99999 0.583337C6.89978 0.587637 6.80216 0.616483 6.7157 0.667339C6.62925 0.718195 6.5566 0.789505 6.50415 0.875003L3.84999 4.95834C3.80607 5.0493 3.78326 5.149 3.78326 5.25C3.78326 5.35101 3.80607 5.45071 3.84999 5.54167C3.89803 5.63101 3.96966 5.70545 4.0571 5.75688C4.14453 5.80831 4.2444 5.83476 4.34582 5.83334H9.62499C9.7252 5.82904 9.82282 5.80019 9.90928 5.74934C9.99573 5.69848 10.0684 5.62717 10.1208 5.54167C10.1785 5.45534 10.2093 5.35384 10.2093 5.25C10.2093 5.14617 10.1785 5.04467 10.1208 4.95834L7.49582 0.875003C7.44778 0.785664 7.37615 0.711224 7.28871 0.659794C7.20128 0.608364 7.10141 0.581918 6.99999 0.583337Z" fill="white" stroke="white" strokeWidth="0.00048" />
                                                <path d="M12.5417 12.5417H8.45833C8.30362 12.5417 8.15525 12.4802 8.04585 12.3708C7.93646 12.2614 7.875 12.113 7.875 11.9583V7.87501C7.875 7.7203 7.93646 7.57192 8.04585 7.46253C8.15525 7.35313 8.30362 7.29167 8.45833 7.29167H12.5417C12.6964 7.29167 12.8447 7.35313 12.9541 7.46253C13.0635 7.57192 13.125 7.7203 13.125 7.87501V11.9583C13.125 12.113 13.0635 12.2614 12.9541 12.3708C12.8447 12.4802 12.6964 12.5417 12.5417 12.5417ZM9.04167 11.375H11.9583V8.45834H9.04167V11.375Z" fill="white" stroke="white" strokeWidth="0.00048" />
                                                <path d="M3.79167 8.16667C4.13779 8.16667 4.47613 8.2693 4.76392 8.46159C5.0517 8.65389 5.276 8.9272 5.40846 9.24697C5.54091 9.56674 5.57557 9.91861 5.50804 10.2581C5.44052 10.5975 5.27385 10.9094 5.02911 11.1541C4.78436 11.3988 4.47254 11.5655 4.13308 11.633C3.79361 11.7006 3.44174 11.6659 3.12197 11.5335C2.8022 11.401 2.52889 11.1767 2.3366 10.8889C2.1443 10.6011 2.04167 10.2628 2.04167 9.91667C2.04167 9.45254 2.22604 9.00742 2.55423 8.67923C2.88242 8.35104 3.32754 8.16667 3.79167 8.16667ZM3.79167 7C3.21481 7 2.6509 7.17106 2.17125 7.49155C1.69161 7.81203 1.31777 8.26756 1.09702 8.80051C0.876264 9.33346 0.818504 9.9199 0.931044 10.4857C1.04358 11.0515 1.32137 11.5712 1.72927 11.9791C2.13718 12.387 2.65688 12.6648 3.22265 12.7773C3.78843 12.8898 4.37488 12.8321 4.90783 12.6113C5.44078 12.3906 5.8963 12.0167 6.21679 11.5371C6.53727 11.0574 6.70833 10.4935 6.70833 9.91667C6.70833 9.53364 6.63289 9.15437 6.48632 8.80051C6.33974 8.44664 6.1249 8.12511 5.85406 7.85427C5.58322 7.58343 5.26169 7.36859 4.90783 7.22202C4.55396 7.07544 4.17469 7 3.79167 7Z" fill="white" stroke="white" strokeWidth="0.00048" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_7_169">
                                                    <rect width="14" height="14" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <div className='text-sm font-bold text-white'>{details.workcategory}</div>
                                    </div>
                                </div>
                                <div className='w-[50%] flex flex-col justify-center items-start '>
                                    <div className='text-white font-bold text-4xl mb-[20px]'>{details.businessName}</div>
                                    <div className='text-gray-400 text-xl mb-[10px]'>{details.email}</div>
                                    <div className='text-gray-400 mb-[10px] flex gap-2 items-center justify-center'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_5_50)">
                                                <path d="M12.5417 4.16667C13.3556 4.32547 14.1037 4.72355 14.6901 5.30995C15.2765 5.89635 15.6745 6.64439 15.8333 7.45834M12.5417 0.833336C14.2327 1.0212 15.8097 1.77848 17.0135 2.98084C18.2174 4.1832 18.9767 5.75918 19.1667 7.45M18.3333 14.1V16.6C18.3343 16.8321 18.2867 17.0618 18.1938 17.2745C18.1008 17.4871 17.9644 17.678 17.7934 17.8349C17.6224 17.9918 17.4205 18.1112 17.2006 18.1856C16.9808 18.2599 16.7478 18.2876 16.5167 18.2667C13.9524 17.988 11.4892 17.1118 9.325 15.7083C7.31152 14.4289 5.60445 12.7218 4.325 10.7083C2.91665 8.53434 2.0402 6.05916 1.76667 3.48334C1.74584 3.25289 1.77323 3.02064 1.84708 2.80136C1.92094 2.58208 2.03964 2.38058 2.19564 2.20969C2.35163 2.0388 2.5415 1.90226 2.75316 1.80877C2.96481 1.71528 3.19362 1.66689 3.425 1.66667H5.925C6.32942 1.66269 6.72149 1.8059 7.02813 2.06961C7.33478 2.33332 7.53506 2.69954 7.59167 3.1C7.69719 3.90006 7.89288 4.68561 8.175 5.44167C8.28712 5.73994 8.31139 6.0641 8.24492 6.37574C8.17846 6.68737 8.02405 6.97343 7.8 7.2L6.74167 8.25834C7.92796 10.3446 9.65538 12.072 11.7417 13.2583L12.8 12.2C13.0266 11.9759 13.3126 11.8215 13.6243 11.7551C13.9359 11.6886 14.2601 11.7129 14.5583 11.825C15.3144 12.1071 16.0999 12.3028 16.9 12.4083C17.3048 12.4654 17.6745 12.6693 17.9388 12.9812C18.2031 13.2932 18.3435 13.6913 18.3333 14.1Z" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_5_50">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p className="text-gray-400 text-xl">{details.phoneNumber}</p>
                                    </div>
                                    <div className='text-gray-400 flex gap-2 mb-[10px] items-center justify-center'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12.2848 18.9935C12.1567 19.0875 12.0373 19.1728 11.9282 19.2493C11.8118 19.1721 11.6827 19.0833 11.5427 18.9832C10.8826 18.5109 10.0265 17.8176 9.18338 16.9529C7.45402 15.1792 6 12.9151 6 10.5C6 7.18629 8.68629 4.5 12 4.5C15.3137 4.5 18 7.18629 18 10.5C18 12.8892 16.4819 15.1468 14.6893 16.9393C13.8196 17.8091 12.9444 18.5099 12.2848 18.9935ZM19.5 10.5C19.5 16.5 12 21 12 21C11.625 21 4.5 16.5 4.5 10.5C4.5 6.35786 7.85786 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5ZM13.5 10.5C13.5 11.3284 12.8284 12 12 12C11.1716 12 10.5 11.3284 10.5 10.5C10.5 9.67157 11.1716 9 12 9C12.8284 9 13.5 9.67157 13.5 10.5ZM15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z" fill="white" />
                                        </svg>
                                        <p className="text-gray-400 text-xl">{details.location}</p>
                                    </div>
                                    <div className='text-gray-400 flex gap-2 mb-[10px] items-start justify-center'>
                                        <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.4914 7.59574C13.435 7.55766 13.3648 7.5369 13.2925 7.5369C13.2202 7.5369 13.1501 7.55766 13.0937 7.59574L10.25 9.52428C10.2135 9.54905 10.1841 9.58041 10.1639 9.61604C10.1437 9.65168 10.1333 9.69067 10.1335 9.73014V14.6635C10.1335 14.7351 10.1672 14.8037 10.2273 14.8543C10.2874 14.9049 10.3689 14.9333 10.4539 14.9333H12.3463C12.4313 14.9333 12.5128 14.9049 12.5729 14.8543C12.633 14.8037 12.6668 14.7351 12.6668 14.6635V12.8H13.9335V14.6635C13.9335 14.7351 13.9672 14.8037 14.0273 14.8543C14.0874 14.9049 14.1689 14.9333 14.2539 14.9333H16.1463C16.2313 14.9333 16.3128 14.9049 16.3729 14.8543C16.433 14.8037 16.4668 14.7351 16.4668 14.6635V9.72801C16.4677 9.68715 16.4574 9.64665 16.4368 9.60966C16.4161 9.57267 16.3857 9.54018 16.3477 9.51468L13.4914 7.59574ZM12.6668 11.7333H11.4001V10.6667H12.6668V11.7333ZM15.2001 11.7333H13.9335V10.6667H15.2001V11.7333ZM7.23278 1.93601C7.20367 1.89905 7.16414 1.86872 7.11773 1.84775C7.07131 1.82677 7.01946 1.8158 6.96678 1.8158C6.91411 1.8158 6.86225 1.82677 6.81584 1.84775C6.76943 1.86872 6.7299 1.89905 6.70078 1.93601L2.58665 6.33174C2.55179 6.376 2.53327 6.42797 2.53345 6.48108V14.6635C2.53328 14.6988 2.54137 14.7338 2.55726 14.7664C2.57315 14.7991 2.59652 14.8288 2.62604 14.8539C2.65557 14.8789 2.69066 14.8988 2.72933 14.9125C2.76799 14.9261 2.80947 14.9332 2.85138 14.9333H6.01805C6.10205 14.9325 6.18226 14.9038 6.24131 14.8535C6.30035 14.8032 6.33346 14.7353 6.33345 14.6645V12.8H7.60012V14.6645C7.60012 14.7358 7.63375 14.8042 7.69361 14.8546C7.75347 14.905 7.83466 14.9333 7.91932 14.9333H8.86678V8.53334C8.86673 8.45323 8.88811 8.37413 8.92933 8.30193C8.97056 8.22973 9.03057 8.16627 9.10492 8.11628L11.4001 6.40001C11.4001 6.34668 7.23278 1.93601 7.23278 1.93601ZM5.06678 10.6667H3.80012V9.60001H5.06678V10.6667ZM5.06678 7.46668H3.80012V6.40001H5.06678V7.46668ZM7.60012 10.6667H6.33345V9.60001H7.60012V10.6667ZM7.60012 7.46668H6.33345V6.40001H7.60012V7.46668Z" fill="white" stroke="white" stroke-width="0.00015" />
                                        </svg>
                                        <p className='w-[190px] h-fit text-xl'>{details.streetAddress},
                                            {details.city}, {details.state}
                                            {` - ${details.zipCode}`}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 w-full flex justify-center items-center flex-col'>
                        <h1 className='text-white text-2xl font-semibold'>About Business</h1>
                        <p className='text-gray-400'>{details.description}</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        {/* <Link to={'/business'}> */}
                        <div className='bg-purple-700 justify-center items-center my-16 text-white font-semibold flex py-4 gap-2 px-8 rounded-3xl'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.3804 5.37125H1.61996C0.725195 5.37125 0 6.09675 0 6.99125V9.20988L8.26199 10.9523V9.84765H11.6906V10.9523L20 9.19879V6.99125C20 6.09675 19.2748 5.37125 18.3804 5.37125Z" fill="white" />
                                <path d="M11.6906 14.4191H8.26199V12.1919L0.571602 10.6645V17.1801C0.571602 18.0745 1.29648 18.8 2.19094 18.8H17.8091C18.7035 18.8 19.4287 18.0745 19.4287 17.1801V10.6532L11.6906 12.1918V14.4191Z" fill="white" />
                                <path d="M10.8334 10.7048H9.11922V13.5616H10.8334V10.7048Z" fill="white" />
                                <path d="M7.56976 2.82054C7.57007 2.75401 7.59468 2.70112 7.63812 2.65616C7.68214 2.61308 7.73539 2.58905 7.80125 2.58843H12.1988C12.2646 2.58905 12.3182 2.61308 12.3623 2.65616C12.4053 2.70112 12.4297 2.75401 12.43 2.82054V3.97784H13.8185V2.82054C13.8188 2.37483 13.6362 1.96605 13.3441 1.67487C13.0533 1.38249 12.6436 1.19964 12.1988 1.19995H7.80125C7.35617 1.19964 6.94675 1.38249 6.65593 1.67487C6.36414 1.96605 6.18101 2.3748 6.18191 2.82054V3.97784H7.56976V2.82054Z" fill="white" />
                            </svg>
                            <p className='font-bold text-xl'>Add Services</p>
                        </div>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </>
    );
}
