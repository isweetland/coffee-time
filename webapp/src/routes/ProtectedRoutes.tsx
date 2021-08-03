import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import NewBrew from '../pages/NewBrew/NewBrew'

export const PrivateRoutes = () => {
    return (
        <Switch>
            <Route path="/new-brew">
                <NewBrew />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}

export default PrivateRoutes
