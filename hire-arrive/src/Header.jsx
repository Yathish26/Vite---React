import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const [menu, setMenu] = useState(false);
    const [logorotate, setlogorotate] = useState(false);
    const menuRef = useRef(null);
    const [location, setLocation] = useState({ lat: null, lon: null });
    const [error, setError] = useState(null);
    const [place, setPlace] = useState('');

    const url = useLocation()

    const login = url.pathname === '/login' || url.pathname === '/register';

    // Fetch the reverse geocode based on the user's coordinates
    useEffect(() => {
        if (location.lat && location.lon) {
            fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${location.lat}&lon=${location.lon}&apiKey=4626726a7987421297b4a38a4a88cf6c`)
                .then(response => response.json())
                .then(result => {
                    if (result.features && result.features.length > 0) {
                        setPlace(result.features[0].properties.city || 'Unknown location');
                    }
                })
                .catch(error => console.log('Error fetching location:', error));
        }
    }, [location]);

    // Get the user's current location using the browser's geolocation API
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                    });
                },
                (err) => {
                    setError('Unable to retrieve your location');
                }
            );
        } else {
            setError('Geolocation is not supported by your browser');
        }
    }, []);

    const toggleMenu = () => {
        setMenu(!menu);
        setlogorotate(!logorotate);
    };

    useEffect(() => {
        if (menu && menuRef.current) {
            menuRef.current.style.maxHeight = `${menuRef.current.scrollHeight}px`;
            menuRef.current.style.opacity = '1';
        } else if (menuRef.current) {
            menuRef.current.style.maxHeight = '0px';
            menuRef.current.style.opacity = '0';
        }
    }, [menu]);

    return (

        <div className="bg-gray-900 h-fit flex flex-col ">
            {login ? <LoginHeader /> :
                (
                    <>
                        <div className='flex justify-center items-center px-6 py-4 lg:justify-between'>
                            <div className='flex items-center gap-4'>
                                <Link to={"/"}>
                                    <svg className='w-12 h-12' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <polygon points="10.96 17.68 7 9.76 1.38 21 22.55 21 16 6.58 10.96 17.68" fill="white" />
                                        <circle cx="11" cy="6" r="3" fill="white" />
                                    </svg>
                                </Link>
                                <Link to={"/"}>
                                    <div className='font-bree text-white text-4xl'>Hire Arrive</div>
                                </Link>
                                <svg
                                    onClick={toggleMenu}
                                    className={`w-6 h-6 fill-purple-400 transition-transform duration-300 ${logorotate ? 'rotate-180' : ''}`}
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M21,21H3L12,3Z" />
                                </svg>
                            </div>
                            <div className='flex items-center gap-4 '>
                                <div className='flex items-center'>
                                    <svg className='w-10 h-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12.2848 18.9935C12.1567 19.0875 12.0373 19.1728 11.9282 19.2493C11.8118 19.1721 11.6827 19.0833 11.5427 18.9832C10.8826 18.5109 10.0265 17.8176 9.18338 16.9529C7.45402 15.1792 6 12.9151 6 10.5C6 7.18629 8.68629 4.5 12 4.5C15.3137 4.5 18 7.18629 18 10.5C18 12.8892 16.4819 15.1468 14.6893 16.9393C13.8196 17.8091 12.9444 18.5099 12.2848 18.9935ZM19.5 10.5C19.5 16.5 12 21 12 21C11.625 21 4.5 16.5 4.5 10.5C4.5 6.35786 7.85786 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5ZM13.5 10.5C13.5 11.3284 12.8284 12 12 12C11.1716 12 10.5 11.3284 10.5 10.5C10.5 9.67157 11.1716 9 12 9C12.8284 9 13.5 9.67157 13.5 10.5ZM15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z" fill="#ffffff"></path> </g></svg>
                                    <div className='text-white'>
                                        <h1>{error ? error : place}</h1>
                                    </div>
                                </div>
                                <div className='text-white flex'>
                                    <Link to={'/login'}>
                                        <button className='px-4 py-2 rounded-lg bg-purple-700 transition-opacity duration-300'>Signup/Login</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div
                            ref={menuRef}
                            className="menu-container overflow-hidden transition-all duration-300 ease-in-out"
                            style={{ maxHeight: '0px', opacity: 0 }}
                        >
                            <Menus />
                        </div>
                    </>
                )}

        </div>
    );
}

export default Header;

const Menus = () => {
    return (
        <ul className='flex justify-center gap-10 py-4 font-spartan text-lg text-white'>
            <Link to='/'><li className='px-4 py-2 rounded-lg hover:bg-purple-700 transition-opacity duration-300'>Home</li></Link>
            <Link to='/listing'><li className='px-4 py-2 rounded-lg hover:bg-purple-700 transition-opacity duration-300'>Free Listing</li></Link>
        </ul>
    );
};


const LoginHeader = () => {
    return (
        <>

            <div className='flex justify-center items-center px-6 py-4'>
                <div className='flex items-center gap-4'>

                    <svg className='w-12 h-12' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="10.96 17.68 7 9.76 1.38 21 22.55 21 16 6.58 10.96 17.68" fill="white" />
                        <circle cx="11" cy="6" r="3" fill="white" />
                    </svg>


                    <div className='font-bree text-white text-4xl'>Hire Arrive</div>

                </div>
            </div>
        </>
    )
}
