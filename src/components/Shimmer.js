
const Shimmer = () => {
    return (
        <div className="flex flex-wrap justify-around max-w-9/10 mx-auto my-9 p-2">
            {Array(8).fill(null).map((_, index) => (
                <div key={index} className="w-[250px] h-[300px] flex flex-col items-start p-4 m-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                    <div className="w-[80%] h-[45%] bg-gray-300 rounded-md mb-4 animate-pulse"></div>
                    <div className="w-[50%] h-[10%] bg-gray-300 rounded-md mb-4 animate-pulse"></div>
                    <div className="w-[50%] h-[10%] bg-gray-300 rounded-md animate-pulse"></div>
                </div>
            ))}
        </div>
    );
};

export default Shimmer;
