import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout: React.FC = () => (
  <div className="flex flex-col h-screen">
    <main className="flex-1 overflow-hidden">
      <Outlet />
    </main>
  </div>
)

export default RootLayout
