import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout: React.FC = () => (
  <div className="flex flex-col min-h-screen">
    <main className="flex-1 overflow-auto">
      <Outlet />
    </main>
  </div>
)

export default RootLayout
