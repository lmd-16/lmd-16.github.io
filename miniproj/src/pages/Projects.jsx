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
                <button class="absolute top-[300px] left-[250px] btn btn-accent rounded btn-bubble">Bubble Sort Visualizer</button> 
            </a>
            <a href="https://github.com/lmd-16/AVL-Tree-Word-Counter"target="_blank" rel="noopener noreferrer">
                <button class="absolute top-[600px] left-[570px] btn btn-accent px-4 py-2 rounded btn-glag">AVL Tree Word Sorter </button>
            </a>
            <a href="https://github.com/lmd-16/Guess-the-flag/tree/main/Desktop/HD3/Guess"target="_blank" rel="noopener noreferrer">
                <button class="absolute top-[550px] left-[1150px] btn btn-accent px-4 py-2 rounded btn-avl ">Guess the Flag</button>
            </a>
            <Link to="/About">
                <button class="absolute top-[70px] left-[40px] px-4 py-2 rounded btn btn-outline btn-accent btn-home">Home</button>
            </Link>
            <footer class="text-[6px] text-gray-500 absolute top-[760px] left-[730px]">Background image from https://www.ign.com/wikis/celeste/Chapter_2-_Old_Site
            </footer>        
            </div>
        </>
    );
};

export default Projects
