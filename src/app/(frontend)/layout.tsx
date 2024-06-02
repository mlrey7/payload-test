import React from 'react'

import './globals.css'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={'min-h-screen dark'}>{children}</body>
    </html>
  )
}

export default Layout
