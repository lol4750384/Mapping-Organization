
import React from 'react'
import Home from '../pages/Home'

export interface AppRoute {
  path: string
  element: React.ReactNode
}

export const routes: AppRoute[] = [
  { path: '/', element: <Home /> },
]
