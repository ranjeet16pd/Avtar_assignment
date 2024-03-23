// import React, { useRef, useEffect, useState } from 'react';
// import "./Navbarstyle.scss";
// import { IoIosArrowDown } from "react-icons/io";
// import logo from '../../assets/logo.svg';
// import Dropdown from '../Dropdown.jsx';

// const Navbar = () => {
//     const [listItems, setlistItems] = useState([]);
//     const [dropdownArray, setdropdownArray] = useState([]);
//     const [isOpen, setIsOpen] = useState(false);
//     const [width, setWidth] = useState(0);
//     const myUL = useRef(null);
//     const myArray = ['HOME', 'ELECTRONICS', 'BOOKS', 'MUSIC', 'MOVIES', 'CLOTHING', 'GAMES', 'FUNRNITURE', 'ELECTRONICS', 'TRAVEL', 'BOTANICAL', 'CATEGORY NAME'];
//     const toggleOpen = () => setIsOpen(!isOpen);

//     useEffect(() => {
//         const handleResize = () => {
//             setWidth(myUL.current.offsetWidth);
//         };

//         window.addEventListener('resize', handleResize);

//         // Cleanup on unmount
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     useEffect(() => {
//         const width = myUL.current.offsetWidth;
//         console.log(width);
//         let arr1 = []
//         let arr2 = []
//         const n = Math.floor(width / 100);
//         console.log(n)
//         let i;
//         for (i = 0; i < n - 1; i++) {
//             arr1.push(myArray[i]);
//         }
//         for (i; i < 12; i++) {
//             arr2.push(myArray[i]);
//         }
//         setlistItems(arr1)
//         setdropdownArray(arr2)
//     }, [width]);

//     return (
//         <div>
//             <nav className='navbar'>
//                 <img src={logo} alt="logo" />
//                 <ul className='items' ref={myUL}>
//                     {listItems.map(item => {
//                         return (
//                             <li>{item}</li>
//                         )
//                     })}
//                 </ul>
//                 <span className='dropdownBox'>

//                     <div className="dropdown">
//                         <button
//                             onClick={toggleOpen}
//                             className="dropdown-button">
//                             <span>More</span> <IoIosArrowDown />
//                         </button>

//                         {isOpen && (
//                             <div className="dropdown-menu">
//                                 {dropdownArray.map(item => {
//                                     return (
//                                         <li className="dropdown-item">{item}</li>
//                                     )
//                                 })}
//                             </div>
//                         )}
//                     </div>
//                 </span>

//                 <span className='searchbox'>
//                     <input
//                         className='searchbar'
//                         type="text"
//                         placeholder='🔍search something'
//                     />
//                 </span>
//             </nav>
//         </div>
//     )
// }

// export default Navbar


import React, { useRef, useEffect, useState } from 'react';
import "./Navbarstyle.scss";
import { IoIosArrowDown } from "react-icons/io";
import logo from '../../assets/logo.svg';

const Navbar = () => {
    const [listItems, setlistItems] = useState([]);
    const [dropdownArray, setdropdownArray] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [width, setWidth] = useState(0);
    const myUL = useRef(null);
    const dropdownRef = useRef(null); // Create a ref for the dropdown
    const myArray = ['HOME', 'ELECTRONICS', 'BOOKS', 'MUSIC', 'MOVIES', 'CLOTHING', 'GAMES', 'FUNRNITURE', 'ELECTRONICS', 'TRAVEL', 'BOTANICAL', 'CATEGORY NAME'];
    const toggleOpen = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleResize = () => {
            setWidth(myUL.current.offsetWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleClickOutside = event => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup on unmount
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        const width = myUL.current.offsetWidth;
        console.log(width);
        let arr1 = []
        let arr2 = []
        const n = Math.floor(width / 100);
        console.log(n)
        let i;
        for (i = 0; i < n - 1; i++) {
            arr1.push(myArray[i]);
        }
        for (i; i < 12; i++) {
            arr2.push(myArray[i]);
        }
        setlistItems(arr1)
        setdropdownArray(arr2)
    }, [width]);

    return (
        <div>
            <nav className='navbar'>
                <img src={logo} alt="logo" />
                <ul className='items' ref={myUL}>
                    {listItems.map(item => {
                        return (
                            <li>{item}</li>
                        )
                    })}
                </ul>
                <span className='dropdownBox'>

                    <div className="dropdown" ref={dropdownRef}>
                        <button
                            onClick={toggleOpen}
                            className="dropdown-button">
                            <span>More</span> <IoIosArrowDown />
                        </button>
                        {isOpen && (
                            <div className="dropdown-menu">
                                {dropdownArray.map(item => {
                                    return (
                                        <li className="dropdown-item">{item}</li>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </span>

                <span className='searchbox'>
                    <input
                        className='searchbar'
                        type="text"
                        placeholder='🔍search something'
                    />
                </span>
            </nav>
        </div>
    )
}

export default Navbar
