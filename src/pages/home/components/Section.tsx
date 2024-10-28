import React, { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    title: string;
    link: string;
    className?: string;
}

function Section({ children, title, link, className }: SectionProps) {
    return (
        <div className={`section container mx-auto bg-white ${className}`}>
            <div className="flex justify-between items-center mb-[5px]">
                <h1 className="text-[20px] font-black font-prompt uppercase">
                    {title}
                </h1>
                <a
                    className="text-[13px] menu-item reverse before:h-[1px] after:h-[1px] font-black uppercase"
                    href="#"
                >
                    {link}
                </a>
            </div>

            {children}
        </div>
    );
}

export default Section;
