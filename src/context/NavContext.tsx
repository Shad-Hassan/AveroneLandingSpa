import React, { createContext, useContext, useState, ReactNode } from 'react'

interface NavContextType {
  activeMenu: string | null
  setActiveMenu: (id: string | null) => void
}

const NavContext = createContext<NavContextType | undefined>(undefined)

export const NavProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  return (
    <NavContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </NavContext.Provider>
  )
}

export const useNav = () => {
  const context = useContext(NavContext)
  if (!context) {
    throw new Error('useNav must be used within NavProvider')
  }
  return context
}
