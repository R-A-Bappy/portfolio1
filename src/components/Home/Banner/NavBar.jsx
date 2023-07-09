import { BsDownload } from "react-icons/bs";

const NavBar = () => {
    const navOptions =
        <>
            <li><a href="#banner">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#services">Service</a></li>
        </>;
    return (
        // bg-base-100 bg-opacity-70
        <div className="w-full top-0 z-50 mx-auto fixed bg-base-100 bg-opacity-60">
            <div className="navbar   w-full md:w-10/12 mx-auto  justify-between">
                <div className="">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg font-semibold">
                            {
                                navOptions
                            }
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost normal-case text-xl">Bappy</a> */}
                    <h2 className="text-3xl font-semibold"><span className="text-orange-400">B</span>appy&apos;s <span className="text-orange-400">P</span>ortfolio</h2>
                </div>
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                        {
                            navOptions
                        }
                    </ul>
                </div>
                <div className="">
                    <a href="https://drive.google.com/uc?export=download&id=10mCKfMWDmWT4pLYUBgmX7FfabFOa00uo" className='btn bg-orange-400 hover:bg-orange-300 text-white border-0' download><BsDownload /> Resume</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;