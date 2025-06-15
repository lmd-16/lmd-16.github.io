import background from '../images/bg4.png'
import Pdf from '../assets/Leeann_D_Resume.pdf'
import {Link} from 'react-router-dom';


const About = () => {
    return (
        <>
        <div
            className="h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${background})`}}
            
        >
        <img src={background} alt="Celeste Chapter 2: Old Site background" className="hidden" />
        <div className="navbar bg-black text-white px-4">
            <div className="flex-1">
                <Link to="/" className="absolute top-5 left-5 text-xl font-bold hover:text-blue-300 absolute">
                Home
                </Link>
            </div>
        </div>

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
            </div>
        </div>
        <footer class="text-[6px] text-gray-500 absolute top-[760px] left-[930px]">Background image from https://www.ign.com/wikis/celeste/Chapter_2-_Old_Site
        </footer>        

        </>
    )
}

export default About
