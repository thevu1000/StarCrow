interface BannerProps {
    image: string;
    title: string;
    description?: string;
    className?: string;
}

function Banner({ image, title, description, className}: BannerProps) {
    return (
        <div className={`${className} lg:relative `}>
            <div className='h-full w-full overflow-hidden'>
                <a href="/" className='h-full w-full'>
                    <img className='h-full w-full object-cover object-[0_65%]' src={image} alt={title} />
                </a>
            </div>

            <div className='lg:absolute bottom-0 w-full h-full flex container mx-auto`'>
                <div className='lg:relative flex items-end'>
                    <div className='lg:sticky bottom-[50px] py-[20px] flex flex-col justify-start'>
                        <span className='font-prompt text-black lg:text-white text-[30px] lg:text-[50px] font-black uppercase'>
                            {title}
                        </span>

                        {description && (
                            <a 
                                href="/" 
                                className='menu-item reverse before:h-[4px] w-fit after:h-[4px] font-prompt text-black lg:text-white text-[12px] font-black uppercase'
                            >
                                {description}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
