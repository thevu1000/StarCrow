// import { CloseIcon } from '@/components/shared/Icon';
// import { useState } from 'react';

// const SearchOverlay = () => {
//   const [showSearch, setShowSearch] = useState(false);
  
//   const handleShowSearch = () => setShowSearch((prev) => !prev);

//   return (
//     <>
//       <div className={`container flex items-center h-[70px] w-full mx-auto fixed z-30 bg-white ${showSearch ? 'top-0' : 'top-[-100%]'}`}>
//         <div className='flex justify-between items-center w-full'>
//           <input type="text" placeholder="SEARCH" className="flex-1 py-[5px] text-4xl font-bold text-gray-300 border-none focus:outline-none" />
//           <div className="cursor-pointer" onClick={handleShowSearch}>
//             <CloseIcon className='h-[40px]'/>
//           </div>
//         </div>
//       </div>
//       <div style={{ backgroundColor: 'rgba(32, 32, 32, 0.8)' }} className={`search-overlay h-[100vh] ${showSearch ? 'block' : 'hidden'} fixed z-20 w-[100vw]`}>
//       </div>
//     </>
//   );
// };

// export default SearchOverlay;
