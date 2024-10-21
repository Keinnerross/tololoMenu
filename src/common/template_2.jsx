import PostsByCategory from '../components/postsByCategory';
import logoPanes from "../assets/resoucers/logo_panes.png";
import motivo2 from "../assets/resoucers/motiv_2.png";
import motivo3 from "../assets/resoucers/motiv_3.png";
import redbull from "../assets/resoucers/rebull_img.png";
import TitleComponent from '../components/titleComponent';
import patron from "../assets/resoucers/patron.png";



const TemplateTwo = () => {
    return (
        <div className=" bg-background min-h-screen flex flex-col items-center ">

            <div className="md:w-[920px] w-full bg-background md:px-10 p-1 grid grid-cols-2 md:gap-4 gap-0 relative bg-cover" style={{ backgroundImage: `url(${patron})` }}>

                <div className='flex w-[85%] justify-center absolute md:top-[25px] top-[10px] md:right-[25px] right-[10px]'>
                    <img className=" " src={motivo2}></img>
                </div>

                <div className="col_1 flex flex-col  md:p-6 p-3 relative">
                    <div className='w-[0.5px] h-[85%] absolute bottom-0 right-0 bg-[#cdb0ab] z-10' />

                    <div className='md:pt-[150px] pt-[100px]'>
                        <TitleComponent title="Tetería" />
                    </div>
                    <span className='italic text-text pb-4 md:text-lg text-sm'>(En tetera de 400 ml de agua)</span>

                    <PostsByCategory categoryId="8" />
                    <div className='pt-4'>
                        <TitleComponent title="Bollería & Tartas" />
                    </div>

                    <PostsByCategory categoryId="9" />



                </div>

                <div className="col_2 flex flex-col  md:p-6 p-3 relative pt-40">

                    <div>
                        <div className='md:pt-[250px] pt-[50px] '>
                            <TitleComponent title="Bebidas" />
                        </div>

                        <PostsByCategory categoryId="10" />
                        <div className='!md:pt-[150px] md:pt-16 pt-24'>
                            <TitleComponent title="Otras Bebidas" />
                        </div>

                        <PostsByCategory categoryId="11" />
                    </div>

                </div>
            </div>
            <div className='flex md:items-center justify-center gap-8 md:gap-0'>

                <div className='md:w-[500px] w-[100%] pb-[50px] pl-4 flex justify-end'>
                    <img src={motivo3} />

                </div>
                <div className='md:w-[360px] md:h-[250px] w-full h-[100px] bg-contain bg-centerbg-no-repeat md:translate-x-[-50px] translate-x-[-20px] md:translate-y-[45px] translate-y-[10px]  flex justify-end bg-no-repeat'
                    style={{ backgroundImage: `url(${redbull})` }}
                >
                    <div className='w-1/2 h-full flex items-center'>
                        <PostsByCategory column={true} categoryId="12" />
                    </div>



                </div>

            </div>
        </div>
    );
};

export default TemplateTwo;
