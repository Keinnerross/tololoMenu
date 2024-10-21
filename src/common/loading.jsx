import logo from "../assets/resoucers/logo.png"

const Loading = () => {
    return (
        <div className="w-[100vw] h-[100vh] m-h-[100vh] m-w-[100vw] absolute z-50  top-0 left-0 bg-background flex flex-col justify-center items-center">
            <img src={logo} className="px-20 pb-6" />
            <p className="text-prices font-semibold text-2xl">Cargando...</p>
        </div>
    )
}

export default Loading;