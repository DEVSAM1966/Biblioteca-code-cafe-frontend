import { Outlet } from 'react-router'
import Header from '../modules/header/Header'

export const DefaultLayout = () => {
   return (
      <>
         <Header />
         <Outlet />
         <footer>Footer</footer>
      </>
   )
}
