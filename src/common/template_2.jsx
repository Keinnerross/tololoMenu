import PostsByCategory from '../components/postsByCategory';
import logoPanes from "../assets/resoucers/logo_panes.png";
import motivo2 from "../assets/resoucers/motiv_2.png";
import motivo3 from "../assets/resoucers/motiv_3.png";
import redbull from "../assets/resoucers/rebull_img.png";



const TemplateTwo = () => {
    return (
        <div className="bg-background min-h-screen flex flex-col items-center ">

            <div className="md:w-[920px] w-full bg-background px-10 grid grid-cols-2 gap-4 relative">

                <div className='flex w-[65%] justify-center absolute top-[25px] right-[25px] '>
                    <img className=" " src={motivo2}></img>
                </div>

                <div className="col_1 flex flex-col  p-4 ">

                    <h2 className='text-text text-5xl font-extrabold pt-28 '>Tetería</h2>
                    <span className='italic text-text pb-4'>En tetera de 400 ml de agua</span>
                    <PostsByCategory categoryId="8" />
                    <h2 className='text-text text-5xl font-extrabold pt-8 pb-4'>Bollería & Tartas</h2>
                    <PostsByCategory categoryId="9" />



                </div>

                <div className="col_2 flex flex-col  p-6 relative pt-40">

                    <div>
                        <h2 className='text-text text-6xl font-extrabold pt-[100px] pb-4'>Bebidas</h2>
                        <PostsByCategory categoryId="10" />
                        <h2 className='text-text text-6xl font-extrabold pt-28 pb-4'>Otras Bebidas</h2>
                        <PostsByCategory categoryId="11" />
                    </div>

                </div>
            </div>
            <div className='flex items-center justify-center'>

                <div className='w-[500px] pb-[50px] flex justify-end'>
                    <img src={motivo3}  />

                </div>
                <div className='w-[360px] h-[250px] bg-contain bg-centerbg-no-repeat translate-x-[-50px] translate-y-[45px] flex justify-end bg-no-repeat'
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
