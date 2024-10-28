import React from 'react';

interface InfiniteScrollProps {
  items: string[];          
  repeat?: boolean;         
  repeatCount?: number;     
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  items,
  repeat = false,
  repeatCount = 9,
}) => {
  const renderItems = () => {
    if (repeat) {
      // Nếu lặp lại cùng một nội dung
      return Array(repeatCount).fill(null).map((_, index) => (
        items.map((item, itemIndex) => (
          <li
            key={`${index}-${itemIndex}`}
            className={`uppercase ${item === "·" ? "!m-0" : "whitespace-nowrap mx-4"}`}
          >
            {item === "·" ? <span className="dot">{item}</span> : item}
          </li>
        ))
      ));
    }

    // Nếu hiển thị nội dung khác nhau
    return items.map((item, index) => (
      <li
        key={index}
        className={`uppercase text-[15px] ${item === "·" ? "!m-0" : "whitespace-nowrap mx-8"}`}
      >
        {item === "·" ? <span className="dot text-[30px]">{item}</span> : item}
      </li>
    ));
  };

  return (
    <div className="w-full font-jakarta font-black bg-black text-[13px] py-1 inline-flex flex-nowrap overflow-hidden text-white">
      <ul className="flex items-center justify-center md:justify-start animate-infinite-scroll">
        {renderItems()}
      </ul>

      <ul className="flex items-center justify-center md:justify-start animate-infinite-scroll">
        {renderItems()}
      </ul>
    </div>
  );
}

export default InfiniteScroll;
