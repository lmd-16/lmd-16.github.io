import background from '../images/bg3.png';
import { Link } from 'react-router-dom';
import Pdf from '../assets/Leeann_D_Resume.pdf'

const Projects = () => {
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
                    <li><a>Resume</a></li>
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
            <a href="https://github.com/lmd-16/Bubble-Sort-Visualizer" target="_blank" rel="noopener noreferrer">                
                <button class="absolute top-[350px] left-[250px] btn btn-accent rounded btn-bubble">Bubble Sort Visualizer</button> 
            </a>
            <a href="https://github.com/lmd-16/AVL-Tree-Word-Counter"target="_blank" rel="noopener noreferrer">
                <button class="absolute top-[600px] left-[570px] btn btn-accent px-4 py-2 rounded btn-glag">AVL Tree Word Sorter </button>
            </a>
            <a href="https://github.com/lmd-16/Guess-the-flag/tree/main/Desktop/HD3/Guess"target="_blank" rel="noopener noreferrer">
                <button class="absolute top-[620px] left-[1150px] btn btn-accent px-4 py-2 rounded btn-avl ">Guess the Flag</button>
            </a>
            {/* <Link to="/About">
                <button class="absolute top-[70px] left-[40px] px-4 py-2 rounded btn btn-outline btn-accent btn-home">Home</button>
            </Link> */}
            <footer class="text-[6px] text-gray-500 absolute top-[760px] left-[730px]">Background image from https://www.ign.com/wikis/celeste/Chapter_2-_Old_Site
            </footer>        
            </div>
        </>
    );
};

export default Projects
