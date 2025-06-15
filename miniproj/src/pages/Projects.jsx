import background from '../images/bg3.png';
import { Link } from 'react-router-dom';
import Pdf from '../assets/Leeann_D_Resume.pdf'

const Projects = () => {
    return (
        <>
        <div className="navbar bg-black text-white px-4">
        <div className="flex-1">
            <Link to="/" className="text-xl font-bold hover:text-blue-300"> Home </Link>
        </div>
        <div className="hidden lg:flex space-x-4">
            <Link to="/About" className="hover:text-blue-300"> About </Link>
        <a href= {Pdf} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300"> Resume
        </a>
        <Link to="/Insp" className="hover:text-blue-300">Inspiration </Link>
        </div>
        </div>
    <div
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${background})` }}>
        <img src={background} alt="Celeste Chapter 2: Old Site background" className="hidden" />
        <a href="https://github.com/lmd-16/Bubble-Sort-Visualizer" target="_blank" rel="noopener noreferrer">                
            <button className="text-xs absolute top-[350px] left-[250px] btn btn-accent rounded btn-bubble">Bubble Sort Visualizer</button> 
        </a>
        <a href="https://github.com/lmd-16/AVL-Tree-Word-Counter"target="_blank" rel="noopener noreferrer">
            <button className="text-xs absolute top-[600px] left-[570px] btn btn-accent px-4 py-2 rounded btn-glag">AVL Tree Word Sorter </button>
        </a>
        <a href="https://github.com/lmd-16/Guess-the-flag/tree/main/Desktop/HD3/Guess"target="_blank" rel="noopener noreferrer">
            <button className="text-xs absolute top-[620px] left-[1150px] btn btn-accent px-4 py-2 rounded btn-avl ">Guess the Flag</button>
        </a>
        <footer className="text-[6px] text-gray-500 absolute top-[800px] left-[920px]">Background image from https://www.ign.com/wikis/celeste/Chapter_2-_Old_Site
        </footer>        
    </div>
        </>
    );
};

export default Projects
