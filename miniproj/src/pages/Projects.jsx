import background from '../images/bg3.png';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <>
        <div
            className="h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${background})` }}
        >
        

            <button class="absolute top-[300px] left-[330px] btn btn-accent px-4 py-2 rounded btn-bubble">Bubble Sort Visualizer</button> 
            <button class="absolute top-[600px] left-[650px] btn btn-accent px-4 py-2 rounded btn-glag">AVL Tree Word Sorter </button>
            <button class="absolute top-[520px] left-[1250px] btn btn-accent px-4 py-2 rounded btn-avl ">Guess the Flag</button>
            <Link to="/About">About
                <button class="absolute top-[90px] left-[30px] px-4 py-2 rounded btn btn-error btn-home">Home</button>
            </Link>
        </div>
        </>
    );
};

export default Projects
