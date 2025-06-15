import React from 'react'
import background from '../images/bg6.png'
import { Link } from 'react-router-dom';


const Insp = () => {
    return (
        <>

        <div className="h-screen bg-cover bg-center flex flex-col" style={{ backgroundImage: `url(${background})` }}>
        <section className="pt-40 px-10 flex flex-col items-start max-w-5xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-2">Welcome to My Portfolio</h1>
            <p className="max-w-xl text-sm md:text-base mb-6"> Inspired by <span className="text-blue-300 font-bold">Celeste</span>, this site showcases my projects, journey, and aspirations.
            </p>
        </section>

        <div className="flex flex-wrap justify-center gap-6 px-10 max-w-5xl mx-auto">
        <div className="card w-72 bg-base-100 shadow-sm">
            <div className="card-body">
            <h2 className="card-title text-sm">Project Inspiration</h2>
            <p className="text-[10px]">
                I enjoy travelling, design, and solving puzzles — my projects reflect creativity and problem-solving.
            </p>
            <div className="card-actions flex justify-center flex-wrap gap-2 mt-2">
                <a href="https://marleeco7.wordpress.com/2023/09/10/project-2-guess-the-flag/" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-outline btn-sm rounded-full hover:scale-105 transition-transform text-[10px]">
                    Read: Flag Game Story
                </button>
                </a>
                <a href="https://marleeco7.wordpress.com/2023/09/03/project-1-sorting-visualizer/" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-outline btn-sm rounded-full hover:scale-105 transition-transform text-[10px]">
                    Read: Sorting Visualizer Story
                </button>
                </a>
            </div>
        </div>
        </div>

        <div className="card w-72 bg-base-100 shadow-sm">
            <div className="card-body">
            <h2 className="card-title text-sm">Website Design Inspiration</h2>
            <p className="text-[10px]">
                Inspired by the video game Celeste, my portfolio combines my love for the game and past projects.
            </p>
            <div className="card-actions flex justify-center flex-wrap gap-2 mt-2">
                <a href="https://www.celestegame.com/" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-outline btn-sm rounded-full hover:scale-105 transition-transform text-[10px]">
                    Visit Celeste Website
                </button>
                </a>
                <a href="https://www.ign.com/wikis/celeste/Walkthrough" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-outline btn-sm rounded-full hover:scale-105 transition-transform text-[10px]">
                    View Game Walkthrough
                </button>
                </a>
            </div>
        </div>
        </div>

        <div className="card w-72 bg-base-100 shadow-sm">
            <div className="card-body">
            <h2 className="card-title text-sm">GitHub Projects</h2>
            <p className="text-[10px]">
                Click the links to view my Github.
            </p>
            <div className="card-actions flex justify-center flex-wrap gap-2 mt-2">
                <a href="https://github.com/lmd-16/AVL-Tree-Word-Counter" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-outline btn-sm rounded-full hover:scale-105 transition-transform text-[10px]">
                    View AVL Tree Code
                </button>
                </a>
                <a href="https://github.com/lmd-16" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-outline btn-sm rounded-full hover:scale-105 transition-transform text-[10px]" >
                    Visit GitHub Profile
                </button>
                </a>
            </div>
            </div>
        </div>
        </div>
    </div>
        </>
    )
}
export default Insp
