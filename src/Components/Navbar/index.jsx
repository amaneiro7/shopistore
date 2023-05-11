import React, { lazy } from 'react'
import { NavLink } from 'react-router-dom'

const CartIcon = lazy(() => import('@src/Components/CartIcon').then(module => ({default: module.CartIcon})))

export const Navbar = () => {
  const activeDecoration = 'underline underline-offset-4'
  return (
    <nav className='flex items-center justify-between w-full py-5 px-8 text-sm sticky z-10'>
      <LeftMenu activeDecoration={activeDecoration} />
      <RightMenu activeDecoration={activeDecoration} />
    </nav>
  )
}

const LeftMenu = ({ activeDecoration }) => {
  const menuList = [
    { to: '/', text: 'Shopi', className: 'font-semibold text-lg' },
    { to: '/', text: 'All', className: '' },
    { to: '/clothes', text: 'clothes', className: '' },
    { to: '/electronics', text: 'electronics', className: '' },
    { to: '/furnitures', text: 'furnitures', className: '' },
    { to: '/toys', text: 'toys', className: '' },
    { to: '/others', text: 'others', className: '' }
  ]
  return (
    <ul className='flex items-center gap-3 capitalize'>
      {menuList.map(menu => (
        <li
          key={menu.text}
          className={menu.className}
        >
          <NavLink
            to={menu.to}
            className={({ isActive }) => isActive && menu.text !== 'Shopi' ? activeDecoration : undefined}
          >
            {menu.text}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

const RightMenu = ({ activeDecoration }) => {
  const menuList = [
    { to: '/email', text: 'johndoe1234@gmail.com', className: 'text-black/60' },
    { to: '/my-orders', text: 'My Orders', className: '' },
    { to: '/my-account', text: 'My Account', className: '' },
    { to: '/sign-in', text: 'Sign In', className: '' },
    { to: '/shoppcar', text: <CartIcon />, className: '' }
  ]
  return (
    <ul className='flex gap-3 items-center'>
      {menuList.map(menu => (
        <li
          key={menu.text}
          className={menu.className}
        >
          <NavLink
            to={menu.to}
            className={({ isActive }) => isActive ? activeDecoration : undefined}
          >
            {menu.text}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
