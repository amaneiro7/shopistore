import React, { lazy } from 'react'
const Title = lazy(() => import('@src/Components/Title').then(module => ({ default: module.Title })))
export const MyAccount = () => {
  return (
    <Title title='My Account' />
  )
}
