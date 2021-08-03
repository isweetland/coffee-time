import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'

const PublicRoutes = () => {
    return (
        <Switch>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}

export default PublicRoutes
