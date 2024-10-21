const Footer = () => {
    return (
        <div className="w-screen h-16 flex justify-center items-center bg-[#001e3c] text-white md:text-lg text-[12px]">
            <div className="w-[70%] h-full flex md:justify-end justify-between items-center gap-4">
                <a className="h-full" href="https://pink-bear-576532.hostingersite.com/wp-admin" target="_blank"><p className="h-full md:px-8 hover:bg-slate-900 flex items-center cursor-pointer  ">Admin </p></a>
                <a className="h-full" href="https://www.instagram.com/webelchile/" target="_blank"><p className="h-full md:px-8 hover:bg-slate-900 flex items-center cursor-pointer  ">Webel 2024</p></a>
                <a className="h-full" href="#"><p className="h-full md:px-8 hover:bg-slate-900 flex items-center cursor-pointer  ">Versión 1.0</p></a>

             

            </div>
        </div>
    )
}

export default Footer;