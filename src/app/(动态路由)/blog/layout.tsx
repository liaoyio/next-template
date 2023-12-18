import React from 'react'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h3 className="py-4 c-red font-600">Blog Layout 🤹</h3>
      {children}
    </>
  )
}
export default Layout
