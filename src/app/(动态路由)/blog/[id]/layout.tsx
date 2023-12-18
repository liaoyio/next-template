import React from 'react'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h3 className="py-4 text-indigo-700 font-600">[...id] Layout 🎯</h3>
      {children}
    </>
  )
}
export default Layout
