const Navbar = () => {
    
    return (
        <nav className="bg-[var(--background)] flex sticky top-0 bottom-0 w-full h-auto py-4 justify-between items-center px-4 md:px-8 lg:px-16">
            <h1 className="flex-none m-0 text-lg md:text-xl lg:text-2xl">
                Caleb Free
            </h1>
            <div className="flex-auto flex justify-center gap-2 md:gap-4 lg:gap-6">
                <a href="http://www.cdfree.dev" className="no-underline text-center p-2 text-sm md:text-base lg:text-lg transition-all duration-300 ease-in-out text-black dark:text-white hover:bg-gray-300 hover:text-black rounded-md">Home</a>
                <a href="http://www.cdfree.dev/projects"  className="no-underline text-center p-2 text-sm md:text-base lg:text-lg transition-all duration-300 ease-in-out text-black dark:text-white hover:bg-gray-300 hover:text-black rounded-md">Projects</a>
                <a href="http://www.cdfree.dev/resume" className="no-underline text-center p-2 text-sm md:text-base lg:text-lg transition-all duration-300 ease-in-out text-black dark:text-white hover:bg-gray-300 hover:text-black rounded-md">Resume</a>
            </div>
        </nav>
    );
}

export default Navbar;