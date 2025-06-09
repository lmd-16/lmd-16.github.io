import background from '../images/bg2.png'
const Profile = () => {
    return (
    <>
    <div 
         className="h-screen bg-cover bg-center flex items-center justify-center"
         style={{ backgroundImage: `url(${background})` }}
    >      

    <h1 className="text-white text-3xl">This is the Profile Page</h1>


    </div>
    </>
    );
};
export default Profile;