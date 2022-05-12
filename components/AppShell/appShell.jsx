import { StyledAppMain } from './styled'

const AppShell = ({ children }) => {
  return (
    <div>
      <p>span</p>
      <StyledAppMain>{children}</StyledAppMain>
    </div>
  )
}

export default AppShell
