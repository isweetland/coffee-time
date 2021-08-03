import React, { Suspense } from 'react'

const ProtectedRoutes = React.lazy(() => import('./ProtectedRoutes'))
const PublicRoutes = React.lazy(() => import('./PublicRoutes'))

const useUser = () => {
    // TODO: IMPLEMENT, AND NOT HERE.
    return { username: 'User', sub: 123 }
}

const AppRouter = () => {
    const user = useUser()
    return <Suspense fallback="Loading...">{user ? <ProtectedRoutes /> : <PublicRoutes />}</Suspense>
}

export default AppRouter
