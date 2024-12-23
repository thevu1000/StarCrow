import { useEffect, useState } from 'react';
import { LogoLight, CartIcon, OpenMenuIcon, SearchIcon, LocationIcon, GlobalIcon, UserIcon } from '@/components/shared/Icon';
import CartContent from './CartContent';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import { Link } from 'react-router-dom';

const MenuBar = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShowSearch = () => setShowSearch(!showSearch);

  return (
    <div className={`menubar py-[20px] fixed bg-white z-30 w-full transition-all duration-500 linear ${showHeader ? 'top-0' : 'top-[-100%]'}`}>
      <div className='container mx-auto flex justify-between'>
        <div>
          <LogoLight height={'30px'} />
        </div>
        <div className='flex gap-[35px]'>
          <div onClick={handleShowSearch}>
            <SearchIcon height={'20px'} className='cursor-pointer' />
          </div>
          <Link to="/pages/nos-magasins">
            <LocationIcon height={'20px'} className='cursor-pointer' />
          </Link>
          <GlobalIcon height={'20px'} className='cursor-pointer' />
          <UserIcon height={'20px'} className='cursor-pointer' />
          <Sheet>
            <SheetTrigger asChild>
              <div>
                <CartIcon height={'20px'} className='cursor-pointer' />
              </div>
            </SheetTrigger>
            <CartContent />
          </Sheet>
          <Sheet open={showMenu} onOpenChange={setShowMenu}>
            <SheetTrigger asChild>
              <div>
                <OpenMenuIcon height={'20px'} className='cursor-pointer' />
              </div>
            </SheetTrigger>
            {/* Menu content goes here */}
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
