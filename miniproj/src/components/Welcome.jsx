import logo from '../images/cat-cry.png'

import Card from './Card';

const Welcome = () => {
    return (
    <>
    <Card bg = '--color-info'>
        <div className = "p-4">
                <div className="flex items-center justify-center min-h-screen bg-base-200">
                <div className="text-center">

                <img className="w-16 rounded" src={logo} alt='Logo'/>
                <h2 className="text-gray-800 text-3xl font-bold mb-3">Welcome to my website! I'm Leeann.</h2>
                <h1 className="text-gray-600 mb-6">Click the links below to get to know a little about me!</h1>
                </div>
            </div>
            </div>
    </Card>
    </>


    );
};
export default Welcome;