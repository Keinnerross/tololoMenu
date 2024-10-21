import PostsByCategory from '../components/postsByCategory';
import coctel from "../assets/resoucers/coctel.png";
import cocteles from "../assets/resoucers/cocteles.png";
import motivo from "../assets/resoucers/motiv_5.png";
import tragos from "../assets/resoucers/tragos.png";
import TitleComponent from '../components/titleComponent';
import patron from "../assets/resoucers/patron.png";



const TemplateFour = () => {
    return (
        <div className="bg-gray-950 min-h-screen flex justify-center">
            <div className="md:w-[920px] w-full bg-background md:px-6  px-2 md:py-8 pt-4 grid md:grid-cols-2 grid-cols-[40%_60%] bg-cover" style={{ backgroundImage: `url(${patron})` }}>

                <div className="col_1 flex flex-col  md:p-6 p-1 relative">

                    <div className='w-[0.5px] h-[60%] absolute top-0 right-0 bg-[#cdb0ab] z-10 ' />
                    <TitleComponent title="Bar" />

                    <PostsByCategory categoryId="20" />
                    <div className='md:pl-40 pl-8 w-full md:h-auto'>
                        <img src={coctel} />
                    </div>

                    <div className='pl-28 pt-[250px]' />

                    <div className='flex justify-center w-[70%]  absolute  bottom-2 '>
                        <img className="w-full" src={motivo}></img>

                    </div>


                </div>

                <div className="w-full col_2 flex flex-col  md:p-6 p-1">
                    <div className='w-full'>
                        <img src={cocteles} />
                    </div>
                    <div className='pt-[30px]'>
                        <TitleComponent title="Red Bull Drinks" />
                    </div>

                    <div className="w-full md:h-[1000px] h-[600px] bg-no-repeat bg-contain" style={{ backgroundImage: `url(${tragos})` }}>
                        <div className='flex justify-end items-start '>

                            <div className='w-[60%] md:pt-14 pt-6 md:pr-4 pr-1'>
                                <PostsByCategory categoryId="21" column={true} tragos={true} />
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div >
    );
};

export default TemplateFour;
