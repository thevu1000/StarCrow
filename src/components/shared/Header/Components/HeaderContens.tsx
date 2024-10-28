import { LogoLight } from "@/components/shared/Icon";

const HeaderContent = () => {
    const menuA = [
      { title: 'search', onClick: () => {} },
      { title: 'stores', link: '/' },
      { title: 'en', link: '/' },
      { title: 'menu', onClick: () => {} },
      { title: 'account', link: '/' },
      { title: 'cart (0)', link: '/' }
    ];
  
    const menuB = [
      { title: 'outlet', link: '/', isActive: false },
      { title: 'new in', link: '/', isActive: true },
      { title: 'footwear', link: '/', isActive: false },
      { title: 'clothing', link: '/', isActive: false },
      { title: 'launches', link: '/', isActive: false }
    ];
  
    return (
      <header className="container mx-auto grid grid-cols-2 py-[20px] bg-white">
        <div>
          <a href="/">
            <LogoLight height={'full'} />
          </a>
        </div>
        <div className="flex flex-col justify-between items-end">
          <ul className="uppercase flex gap-[20px] font-jakarta">
            {menuA.map((item, index) => (
              <li key={index} className="menu-item">
                <a
                  href={item.link || '#'}
                  onClick={(e) => {
                    if (!item.link) e.preventDefault();
                    if (item.onClick) item.onClick();
                  }}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <ul className="uppercase flex gap-[20px] font-prompt font-black text-[23px]">
            {menuB.map((item, index) => (
              <li key={index} className={`menu-item ${item.isActive && 'active px-[8px] bg-black text-white rounded-[8px]'}`}>
                <a href={item.link}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
    );
  };
  
  export default HeaderContent;
  