
const Card = ({children, bg ='--color-base-content'}) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-base-200">
        <div className="text-center"></div>
        <div className={`card ${bg} text-neutral-content w-96`}>{children}
        <div className="card-body items-center text-center">    
    </div>
    </div>    
    </div>    

    )
}

export default Card
