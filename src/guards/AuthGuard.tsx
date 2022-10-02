import { ReactNode, useEffect } from 'react'

interface Props {
  children: ReactNode
}

const AuthGuard = ({ children }: Props) => {
  useEffect(() => {}, [])

  return <>{children}</>
}

export default AuthGuard
