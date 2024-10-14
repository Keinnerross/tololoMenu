import PostsByCategory from '../components/postsByCategory';
import logoPanes from "../assets/resoucers/logo_panes.png";
import motivo from "../assets/resoucers/motiv_1.png";



const TemplateOne = () => {
    return (
        <div className="bg-gray-950  flex justify-center">
            <div className="md:w-[920px] w-full bg-background px-8  py-8 grid grid-cols-2  ">

                <div className="col_1 flex flex-col items-center  p-4 relative">
                    <div className='flex justify-center w-full pb-4 '>
                        <img className="w-[70%] " src={logoPanes}></img>

                    </div>
                    <h2 className='text-text text-5xl font-extrabold pb-4'>Desayunos & Hora del Té</h2>
                    <PostsByCategory categoryId="7" />

                    <div className='flex justify-center w-full  absolute bottom-0'>
                        <img className="w-full" src={motivo}></img>

                    </div>
                </div>

                <div className="col_2 flex flex-col  p-6">
                    <div>
                        <h2 className='text-text text-6xl font-extrabold pb-4'>Cafetería</h2>
                        <PostsByCategory categoryId="3" />
                    </div>
                    <div>
                        <h2 className='text-text text-6xl font-extrabold pb-4'>Tortas</h2>
                        <PostsByCategory categoryId="4" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TemplateOne;
