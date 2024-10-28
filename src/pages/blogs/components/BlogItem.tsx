import React from 'react';

interface BlogItemProps {
    title: string;
    subtitle: string;
    date: string;
    imageUrl: string;
    alt: string;
}

function BlogItem({ title, subtitle, date, imageUrl, alt }: BlogItemProps) {
    return (
        <div className="max-w-2xl mx-auto group">
            <div className="overflow-hidden rounded-[5px]">
                <img
                    alt={alt}
                    className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110"
                    height={600}
                    src={imageUrl}
                    width={800}
                />
            </div>
            <div className="mt-4">
                <h1 className="text-2xl text-[21px] font-black font-prompt text-black">
                    {title}
                </h1>
                <p className="text-[15px] font-jakarta text-gray-700">
                    {subtitle}
                </p>
                <p className="text-[11px] text-gray-500 font-jakarta mt-[2px] font-black">
                    {date}
                </p>
            </div>
        </div>
    );
}

export default BlogItem;
