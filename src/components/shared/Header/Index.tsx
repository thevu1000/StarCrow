import { useEffect, useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CartIcon, CloseIcon, FacbookIcon, GlobalIcon, InstaIcon, LocationIcon, LogoLight, OpenMenuIcon, SearchIcon, TikTokIcon, UserIcon } from '../Icon';
import InfiniteSlider from '../InfiniteSlider';
import CartContent from './Components/CartContent';
import { Link } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';
import CollectionSheet from './Components/CollectionSheet';

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleShowSearch = () => {
    setShowSearch(prev => !prev);
  };

  const handleShowCart = () => {
    setShowCart(prev => !prev);
  };

  const handleShowMenu = () => {
    setShowMenu(prev => !prev);
  };

  const menuA = [
    {
      title: 'search',
      onClick: handleShowSearch,
    },
    {
      title: 'stores',
      link: '/pages/nos-magasins',
    },
    {
      title: (
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className="custom-select"
        >
          <option value="en">EN</option>
          <option value="fr">FR</option>
        </select>
      ),
      link: null,
    },
    {
      title: 'menu',
      onClick: handleShowMenu,
    },
    {
      title: 'account',
      link: '/account/login',
    },
    {
      title: 'cart (0)', // Display cart item count dynamically
      onClick: handleShowCart,
    }
  ];

  const menuB = [
    {
      title: 'outlet',
      link: '/collections/outlet',
      isActive: false,
      sheet: false
    },
    {
      title: 'new in',
      link: '/',
      isActive: true,
      sheet: true,
    },
    {
      title: 'footwear',
      link: '/',
      isActive: false,
      sheet: true,
    },
    {
      title: 'clothing',
      link: '/',
      isActive: false,
      sheet: true,
    },
    {
      title: 'launches',
      link: '/launches',
      isActive: false,
      sheet: false
    },
  ];

  const repeatedItems = ["DISCOVER OUR NEW PLACE", "·"];

  return (
    <div>
      <InfiniteSlider items={repeatedItems} repeat={true} repeatCount={9} />
      <div className={`menubar py-[20px] top-0 lg:fixed static bg-white z-30 w-full transition-all duration-500 linear ${showHeader ? 'lg:top-0' : 'lg:top-[-100%]'}`}>
        <div className='container mx-auto flex justify-between'>
          <div>
            <Link to="/">
              <LogoLight className='h-[30px]' />
            </Link>
          </div>

          <div className='flex lg:gap-[35px] gap-[15px] items-center'>
            <div onClick={handleShowSearch}>
              <SearchIcon className='cursor-pointer h-[20px]' />
            </div>

            <Link className='hidden lg:block' to="/pages/nos-magasins">
              <LocationIcon height={'20px'} className='cursor-pointer h-[20px]' />
            </Link>

            <div className='relative hidden lg:block'>
              <GlobalIcon className='cursor-pointer h-[20px]' />
              <div className='absolute h-[20px] w-[20px] top-0 left-[-10px]'>
                <div className='relative h-full w-full'>
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="text-transparent absolute top-0 bg-transparent outline-none"
                  >
                    <option className="text-black" value="en">EN</option>
                    <option className="text-black" value="fr">FR</option>
                  </select>
                </div>
              </div>
            </div>

            <Link to={"/account/login"}>
              <UserIcon className='cursor-pointer h-[20px]' />
            </Link>

            <div className='cursor-pointer'>
              <Sheet open={showCart} onOpenChange={handleShowCart}>
                <SheetTrigger asChild>
                  <div>
                    <CartIcon className='cursor-pointer h-[20px]' />
                  </div>
                </SheetTrigger>
                <SheetContent className='p-[0px] text-white w-[100vw] lg:w-[30vw] !max-w-[none]'>
                  <CartContent />
                </SheetContent>
              </Sheet>
            </div>

            <div className='cursor-pointer'>
              <Sheet open={showMenu} onOpenChange={setShowMenu}>
                <SheetTrigger asChild className='outline-none border-none'>
                  <div>
                    <OpenMenuIcon className='cursor-pointer h-[20px]' />
                  </div>
                </SheetTrigger>
                <SheetTitle className='hidden'></SheetTitle>
                <SheetContent className='lg:w-[30vw] w-[100vw] !max-w-[none]'>
                  <div>
                    <ul className="uppercase flex flex-col gap-[5px] font-prompt font-black text-[40px]">
                      {menuB.map((item, index) => (
                        item.sheet ? (
                          <Sheet key={index}>
                            <SheetTrigger asChild>
                              <li className={`${item.isActive ? 'active px-[8px] w-fit bg-black text-white rounded-[8px]' : ''}`}>
                                {item.title}
                              </li>
                            </SheetTrigger>
                            <CollectionSheet />
                          </Sheet>
                        ) : (
                          <li key={index} className={`${item.isActive ? 'active px-[8px] w-fit bg-black text-white rounded-[8px]' : ''}`}>
                            <Link to={item.link}>
                              {item.title}
                            </Link>
                          </li>
                        )
                      ))}
                    </ul>
                  </div>

                  <div className='mt-[35px]'>
                    <ul className='font-jakarta font-black text-[15px]'>
                      <li>
                        <Link to="/blogs/blog" className='mb-[3px]'>Editional</Link>
                      </li>

                      <li>
                        <Link to="/pages/nos-magasins" className='mb-[3px]'>Stores</Link>
                      </li>
                      <Link to="/pages/starcow-paris">
                        <li className='mb-[3px]'>About</li>
                      </Link>
                    </ul>
                  </div>

                  <div className='mt-[35px]'>
                    <ul className='font-jakarta font-black text-[15px]'>
                      <li className='flex gap-[10px] items-center mb-[3px]'>
                        <GlobalIcon height='15px' className='h-[15px]' />
                        <select className='custom-select'>
                          <option>English</option>
                          <option>Français</option>
                        </select>
                      </li>
                      <Link to="/account/login">
                        <li className='flex gap-[10px] items-center mb-[3px]'>
                          <UserIcon height='15px' className='h-[15px]' />
                          Account
                        </li>
                      </Link>
                      <li className='flex gap-[10px] items-center mb-[3px]'>
                        <LocationIcon height='15px' className='h-[15px]' />
                        Suivre ma commande
                      </li>
                    </ul>
                  </div>

                  <div className="flex justify-start gap-[20px] mt-[35px]">
                    <a href="/">
                      <FacbookIcon height='25px' className='h-[25px]' />
                    </a>
                    <a href="/">
                      <InstaIcon height='25px' className='h-[25px]' />
                    </a>
                    <a href="/">
                      <TikTokIcon height='25px' className='h-[25px]' />
                    </a>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        <div className={`container flex items-center h-[70px] w-full mx-auto fixed z-30 bg-white ${showSearch ? 'top-0' : 'top-[-100%]'}`}>
          <div className='flex justify-between items-center w-full'>
            <input type="text" placeholder="SEARCH" className="flex-1 w-full py-[5px] text-4xl font-bold text-gray-300 border-none focus:outline-none" />
            <div className="cursor-pointer" onClick={handleShowSearch}>
              <CloseIcon className="h-[40px]" />
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: 'rgba(32, 32, 32, 0.8)' }} className={`search-overlay h-[100vh] ${showSearch ? 'block' : 'hidden'} fixed z-20 w-[100vw]`}>
      </div>

      <header className="hidden lg:grid container mx-auto grid grid-cols-2 py-[20px] bg-white">
        <div>
          <Link to="/">
            <LogoLight height={'full'} />
          </Link>
        </div>

        <div className="flex flex-col justify-between items-end">
          <ul className="uppercase flex gap-[20px] font-jakarta">
            {menuA.map((item, index) => (
              <li key={index} className="menu-item before:h-[1px] after:h-[1px]">
                <Link
                  to={item.link ? item.link : '#'}
                  onClick={(e) => {
                    if (!item.link) {
                      e.preventDefault();
                    }
                    item.onClick ? item.onClick() : undefined;
                  }}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="uppercase flex gap-[20px] font-prompt font-black text-[23px]">
            {menuB.map((item, index) => (
              item.sheet ? (
                <Sheet key={index}>
                  <SheetTrigger asChild className='cursor-pointer'>
                    <li className={`${item.isActive ? 'active px-[8px] w-fit bg-black text-white rounded-[8px]' : ''}`}>
                      {item.title}
                    </li>
                  </SheetTrigger>
                  <CollectionSheet />
                </Sheet>
              ) : (
                <li key={index} className={`${item.isActive ? 'active px-[8px] w-fit bg-black text-white rounded-[8px]' : ''}`}>
                  <Link to={item.link}>
                    {item.title}
                  </Link>
                </li>
              )
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
