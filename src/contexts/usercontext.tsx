import { createContext } from 'react'

const UserContext = createContext({
  poshition: "",
  setPosition: (value: string) => { },
  menuState: false,
  setMenuState: (value: boolean) => { },
  modeState: false,
  setModeState: (value: boolean) => { },
})

export default UserContext