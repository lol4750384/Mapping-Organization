import React from 'react'
import Home from '../pages/Home'
import Testing from '../pages/Testing'
import AboutDeveloper from '../pages/AboutDeveloper'
import Funding from '../pages/Funding'

export interface AppRoute {
  path: string
  element: React.ReactNode
}

export const routes: AppRoute[] = [
  { path: '/', element: <Home /> },
  { path: '/testing', element: <Testing /> },
  { path: '/about-developer', element: <AboutDeveloper /> },
  { path: '/funding', element: <Funding /> },
]
