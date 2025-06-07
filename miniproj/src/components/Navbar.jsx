import Card from './Card'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <>
    <Card>
        <div>
            <Link to="/About">
                <button className="btn btn-soft btn-bio mr-3" >Bio</button> 
            </Link>
        </div>
        <div>
            <Link to="/Projects">
                <button className="btn btn-soft btn-proj mr-3" >Projects</button> 
            </Link>
        </div>
        <div>
            <Link to="/Resume">
                <button className="btn btn-soft btn-resume mr-3" >Resume</button> 
            </Link>
        </div>
    </Card>
    </>
    );
};

export default Navbar;

