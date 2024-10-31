import { Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import Stores from './pages/stores'
import Account from './pages/account'
import Collection from './pages/collection'
import Blogs from './pages/blogs'
import Abbout from './pages/about'
import Pages from './pages/pages'
import ProductDetail from './pages/productDetail'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pages/nos-magasins' element={<Stores />} />
        <Route path='/account/*' element={<Account />} />
        <Route path='/collections/:collectionId' element={<Collection />} />
        <Route path='/blogs/blog' element={<Blogs />} />
        <Route path='/pages/starcow-paris' element={<Abbout />} />
        <Route path='/pages/:page' element={<Pages />} />
        <Route path='/products/:productId' element={<ProductDetail />} />
    </Routes>
    </QueryClientProvider>
  )
}

export default App
