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
            <button className="btn btn-soft btn-proj mr-3" >Projects</button> 
        </div>
        <div>
            <button className="btn btn-soft btn-resume mr-3" >Resume</button> 
        </div>
    </Card>
    </>
    );
};

export default Navbar;

// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="p-4 bg-base-200 flex gap-4 justify-center">
//       <Link className="btn" to="/profile">Profile</Link>
//     </nav>
//   );
// };

// export default Navbar;
