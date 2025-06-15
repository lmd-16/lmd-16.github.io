import React from 'react'
import background from '../images/bg6.png'
import { Link } from 'react-router-dom';


const Insp = () => {
    return (
        <>
<div
  className="h-screen bg-cover bg-center flex flex-col"
  style={{ backgroundImage: `url(${background})` }}
>
  <section className="pt-40 px-10 flex flex-col items-start max-w-5xl mx-auto text-center">
    <h1 className="text-3xl font-bold mb-2">Welcome to My Portfolio</h1>
    <p className="max-w-xl text-sm md:text-base mb-6">
      Inspired by <span className="text-blue-300 font-bold">Celeste</span>, this site showcases my projects, journey, and aspirations.
    </p>
  </section>

  <div className="flex flex-wrap justify-center gap-6 px-10 max-w-5xl mx-auto">
    {/* Card 1 */}
    <div className="card w-72 bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">Project Inspo</h2>
        <p className="text-xs">
          A card component has a figure, a body part, and inside body there are title and actions parts
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-sm">Buy Now</button>
        </div>
      </div>
    </div>

    <div className="card w-72 bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">Website Inspo</h2>
        <p className="text-xs">
          A card component has a figure, a body part, and inside body there are title and actions parts
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-sm">Buy Now</button>
        </div>
      </div>
    </div>

    <div className="card w-72 bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">Github Link</h2>
        <p className="text-xs">
          A card component has a figure, a body part, and inside body there are title and actions parts
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-sm">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
</div>
</>
    )
}
export default Insp
