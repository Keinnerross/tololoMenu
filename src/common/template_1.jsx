import PostsByCategory from '../components/postsByCategory';
import logoPanes from "../assets/resoucers/logo_panes.png";
import motivo from "../assets/resoucers/motiv_1.png";
import TitleComponent from '../components/titleComponent';
import patron from "../assets/resoucers/patron.png";




const TemplateOne = () => {
    return (
        <div className="w-screen bg-gray-950  flex justify-center">
            <div className="md:w-[920px] w-full bg-background md:px-8 p-2 md:py-8 pt-4 md:pt-0 grid grid-cols-2  relative bg-cover" style={{ backgroundImage: `url(${patron})` }}>

                {/* <div className='patron w-full h-full bg-container' style={{ backgroundImage: `url(${patron})` }}> */}

                <div className="col_1 flex flex-col h-auto items-center md:p-4 p-3 relative">
                    <div className='w-[0.5px] h-[92%] absolute top-1/2 right-0 bg-[#cdb0ab] z-10 transform -translate-y-1/2' />

                    <div className='flex justify-center w-full pb-4 '>
                        <img className="md:w-[70%]  " src={logoPanes}></img>

                    </div>

                    <TitleComponent title="Desayunos & Hora del Té" />
                    <PostsByCategory categoryId="7" />

                    <div className='flex justify-center w-full  absolute bottom-0'>
                        <img className="w-full" src={motivo}></img>

                    </div>
                </div>

                <div className="col_2 flex flex-col md:p-6 p-3 ">
                    <div>
                        <TitleComponent title="Cafetería" />

                        <PostsByCategory categoryId="3" />
                    </div>
                    <div>
                        <TitleComponent title="Tortas" />

                        <PostsByCategory categoryId="4" />
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    );
};

export default TemplateOne;
