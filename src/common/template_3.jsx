import PostsByCategory from '../components/postsByCategory';
import logoPanes from "../assets/resoucers/logo_panes.png";
import motivoFour from "../assets/resoucers/motiv_4.png";



const TemplateThree = () => {
    return (
        <div className="bg-gray-950 min-h-screen flex justify-center">
            <div className="md:w-[920px] w-full bg-background px-8  py-8 grid grid-cols-2  ">

                <div className="col_1 flex flex-col  p-4 relative">

                    <h2 className='text-text text-5xl font-extrabold pt-8 pb-4'>Sándwiches</h2>
                    <PostsByCategory categoryId="13" />
                    <h2 className='text-text text-5xl font-extrabold pt-8 pb-4'>Croissants</h2>
                    <PostsByCategory categoryId="14" />
                    <h2 className='text-text text-5xl font-extrabold pt-8 pb-4'>Miga</h2>
                    <PostsByCategory categoryId="15" />


                </div>

                <div className="col_2 flex flex-col  p-6">
                    <div>
                        <h2 className='text-text text-6xl font-extrabold pt-4 pb-4'>Lomitos</h2>
                        <PostsByCategory categoryId="16" />
                    </div>
                    <div>
                        <h2 className='text-text text-6xl font-extrabold pt-8 '>Pinchos</h2>
                        <p className='italic text-textAux font-medium text-lg pb-4 leading-[22px]'>Como picoteo o aperitivo, se sugiere para acompañar una copa de espumante Brut o Pisco Sour Tololo</p>
                        <PostsByCategory categoryId="17" />
                    </div>
                    <div>
                        <h2 className='text-text text-6xl font-extrabold pt-8 pb-4'>Veganos</h2>
                        <PostsByCategory categoryId="18" />
                    </div>
                    <div>
                        <h2 className='text-text text-6xl font-extrabold pt-8 pb-4'>Pizzas</h2>
                        <PostsByCategory categoryId="19" />
                    </div>

                    <div className='flex justify-center'>
                        <img src={motivoFour} className='w-[280px]' />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TemplateThree;
