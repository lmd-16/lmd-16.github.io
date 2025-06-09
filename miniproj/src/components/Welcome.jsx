import background from '../images/bg1.png'
import { Link } from 'react-router-dom';


const Welcome = () => {
    return (
    <>
    <div 
         className="h-screen bg-cover bg-center flex items-center justify-center"
         style={{ backgroundImage: `url(${background})` }}>
    <div>
    <Link to="/About">About                
        <button className="absolute top-45 left-122 btn btn-success px-4 py-2 rounded" >Click me</button> 
    </Link>
    </div>
    </div>
    </>


    );
};
export default Welcome;