import React from 'react'
import background from '../images/bg6.png'
import { Link } from 'react-router-dom';


const Insp = () => {
    return (
        <>
        <div class="navbar bg-black">
        <div class="navbar-start">
            <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </label>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                <a>Menu</a>
                <ul class="p-2">
                    <li><a>About</a></li>
                    <li><a>Resume</a></li>
                    <li><a>Inspiration</a></li>
                </ul>
                </li>
            </ul>
            </div>
            <Link to="/">
                <a class="btn btn-ghost normal-case text-l">Home</a>
            </Link>
        </div>
        <div class="navbar-end hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
            <li tabindex="0">
                <details>
                <summary>Menu</summary>
                <ul class="p-1">
                    <Link to="/About">
                        <li><a>About</a></li>
                    </Link>
                    <a href={Pdf} target="_blank" rel="noopener noreferrer">
                    <li><a>Resume</a></li>
                    </a>
                </ul>
                </details>
            </li>
            </ul>
        </div>
        </div>        
        <div
            className="h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${background})` }}
        >
        <div>
        <div
            className="h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${background})`}}
            
        >
        <img
        src={background}
        alt="Celeste Chapter 3: Old Site background"
        className="hidden"
        />
        <div className="font-pixel text-xs text-center text-blue-300 absolute top-[300px] left-[230px] w-80 h-50 overflow-y-scroll bg-blue p-4">I’m Leeann, a computer science student at Simon Fraser University with a strong mathematics background and a growing interest in the intersection of math and computer science. I’m currently working on exploring different avenues, 
            such as data science and machine learning. Click the link to see some fun projects!
        </div>
        <div>
            <a href={Pdf} target="_blank" rel="noopener noreferrer">
                <button class="absolute top-[350px] left-[940px] btn btn-accent px-4 py-2 rounded btn-resume ">Resume</button>
            </a>
            <Link to="/Projects">
                <button class="absolute top-[250px] left-[930px] btn btn-accent px-4 py-2 rounded btn-projects ">Projects</button>
            </Link>
            <Link to="/">
                <button class="absolute top-[40px] left-[120px] btn btn-outline btn-accent px-4 py-2 rounded btn-home">Home</button>  
    
            </Link>
        </div>
        </div>
        <footer class="text-[6px] text-gray-500 absolute top-[760px] left-[930px]">Background image from https://www.ign.com/wikis/celeste/Chapter_3-_Celestial_Resort
        </footer>        

            
        </div>
        </div>
        </>
    )
}

export default Insp
