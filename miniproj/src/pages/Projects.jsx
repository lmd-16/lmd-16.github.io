import background from '../images/bg3.png';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <>
        <div
            className="h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${background})` }}
        >
            <a href="https://github.com/lmd-16/Bubble-Sort-Visualizer" target="_blank" rel="noopener noreferrer">                
                <button class="absolute top-[300px] left-[330px] btn btn-accent px-4 py-2 rounded btn-bubble">Bubble Sort Visualizer</button> 
            </a>
            <a href="https://github.com/lmd-16/AVL-Tree-Word-Counter"target="_blank" rel="noopener noreferrer">
                <button class="absolute top-[600px] left-[650px] btn btn-accent px-4 py-2 rounded btn-glag">AVL Tree Word Sorter </button>
            </a>
            <a href="https://github.com/lmd-16/Guess-the-flag/tree/main/Desktop/HD3/Guess"target="_blank" rel="noopener noreferrer">
                <button class="absolute top-[520px] left-[1250px] btn btn-accent px-4 py-2 rounded btn-avl ">Guess the Flag</button>
            </a>
            <Link to="/About">About
                <button class="absolute top-[90px] left-[30px] px-4 py-2 rounded btn btn-outline btn-accent btn-home">Home</button>
            </Link>
            <footer class="text-xs text-gray-500 absolute top-[760px] left-[930px]">Background image from https://www.ign.com/wikis/celeste/Chapter_2-_Old_Site
            </footer>        
            </div>
        </>
    );
};

export default Projects
