function FirstBlogItem() {
    return (
        <div className="flex flex-col lg:flex-row group mt-8">
            <div className="md:w-1/2 overflow-hidden">
                <img
                    alt="Person standing against a wall wearing a denim jacket, brown pants, and blue shoes"
                    className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110"
                    height={800}
                    src="https://storage.googleapis.com/a1aa/image/mR4lqfXY3I2qcKVgrYmGLogDsqFdoN74fuGUTcsM5eS0BTWnA.jpg"
                    width={800}
                />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center lg:px-[100px] mt-4">
                <h1 className="lg:text-5xl text-[21px] font-black font-prompt text-black">
                    UGG TASMAN WEATHER HYBRID
                </h1>
                <p className="text-[15px] text-gray-700 font-jakarta lg:mt-4">
                    Nouvelle UGG TASMAN WEATHER HYBRID
                </p>
                <p className="text-[12px] text-gray-700 font-jakarta font-black mt-2">
                    24.10.2024
                </p>
            </div>
        </div>
    );
}

export default FirstBlogItem;