import logo from '../images/IMG_4197.JPG';

const Profile = () => {
    return (
        <>
        <div className="grid justify-end p-10">
        <div className="avatar">
          <div className="w-64 h-64 rounded-full overflow-hidden">
              <img src={logo} alt="Profile picture" class="rounded-xl" />
          </div>
      </div>
      </div>
        </>
    );
};
export default Profile;