import { ReactNode, useEffect } from 'react'
// next
import { useRouter } from 'next/router'
// hooks
import useAuth from '../hooks/useAuth'
// routes
import { PATH_APP } from '../routes'
// components
import LoadingScreen from '../components/LoadingScreen'

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode
}

export default function GuestGuard({ children }: Props) {
  const { push } = useRouter()

  const { isAuthenticated, isInitialized } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      push(PATH_APP.root)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated])

  if (isInitialized === isAuthenticated) {
    return <LoadingScreen />
  }

  return <>{children}</>
}