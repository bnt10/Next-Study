import { useState, ReactNode, useEffect } from 'react'
// next
import { useRouter } from 'next/router'
// hooks
import useAuth from '../hooks/useAuth'

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode
}

export default function AuthGuard({ children }: Props) {
  const { isAuthenticated, isInitialized } = useAuth()

  const { pathname, push } = useRouter()

  const [requestedLocation, setRequestedLocation] = useState<string | null>(null)

  useEffect(() => {
    console.log(isAuthenticated, isInitialized)
    if (requestedLocation && pathname !== requestedLocation) {
      push(requestedLocation)
    }
    if (isAuthenticated) {
      setRequestedLocation(null)
    }
  }, [isAuthenticated, pathname, push, requestedLocation])

  if (!isInitialized) {
    return <div>is Loading!</div>
  }

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname)
    }
    return <div>Login Page</div>
  }

  return <>{children}</>
}
