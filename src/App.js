import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Create, Home, NotFound } from './pages';
import { Header, Footer } from './layout';
import { Details } from './components'

const App = () => {
    return(
    <>
        <Header />
            <div className="content">
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/create'>
                        <Create />
                    </Route>
                    <Route path='/blogs/:id'>
                        <Details />
                    </Route>
                    <Route >
                        <NotFound />
                    </Route>
                </Switch>
            </div>
        <Footer />
    </>
    )};

export default App;