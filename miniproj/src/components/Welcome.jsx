import background from '../images/bg1.png'
import { Link } from 'react-router-dom';


const Welcome = () => {
    return (
    <>
    <div 
         className="h-screen bg-cover bg-center flex items-center justify-center"
         style={{ backgroundImage: `url(${background})` }}>
    <div>
    <Link to="/About">               
        <button className="font-pixel absolute top-45 left-122 btn btn-outline btn-info px-4 py-2 rounded" >Click me</button> 
    </Link>
    </div>
    </div>
    <footer class="text-xs text-gray-500 absolute top-[760px] left-[930px]">Background image from https://www.ign.com/wikis/celeste/Chapter_1-_Forsaken_City
    </footer>        
    </>

    );
};
export default Welcome;