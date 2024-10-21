import PostsByCategory from '../components/postsByCategory';
import motivoFour from "../assets/resoucers/motiv_4.png";
import TitleComponent from '../components/titleComponent';
import patron from "../assets/resoucers/patron.png";



const TemplateThree = () => {
    return (
        <div className="bg-gray-950 min-h-screen flex justify-center">
            <div className="md:w-[920px] w-full bg-background md:px-8  md:py-8  px-2 py-8 grid grid-cols-2 bg-cover" style={{ backgroundImage: `url(${patron})` }}>

                <div className="col_1 flex flex-col  md:p-6 p-2 relative">
                    <div className='w-[0.5px] h-[98%] absolute top-1/2 right-0 bg-[#cdb0ab] z-10 transform -translate-y-1/2' />

                    <TitleComponent title="Sándwiches" />

                    <PostsByCategory categoryId="13" />
                    <TitleComponent title="Croissant" />

                    <PostsByCategory categoryId="14" />
                    <TitleComponent title="Miga" />

                    <PostsByCategory categoryId="15" />


                </div>

                <div className="col_2 flex flex-col  md:p-6 p-2">
                    <div>
                        <TitleComponent title="Lomitos" />

                        <PostsByCategory categoryId="16" />
                    </div>
                    <div>
                        <TitleComponent title="Pinchos" />

                        <p className='italic text-textAux font-medium md:text-lg text-[10px] md:pb-4 pb-2 md:leading-[22px] leading-[12px]  '>Como picoteo o aperitivo, se sugiere para acompañar una copa de espumante Brut o Pisco Sour Tololo</p>
                        <PostsByCategory categoryId="17" />
                    </div>
                    <div>
                        <TitleComponent title="Veganos" />

                        <PostsByCategory categoryId="18" />
                    </div>
                    <div>
                        <TitleComponent title="Pizzas" />

                        <PostsByCategory categoryId="19" />
                    </div>

                    <div className='flex justify-center md:pt-0 pt-16'>
                        <img src={motivoFour} className='w-[280px]' />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TemplateThree;
