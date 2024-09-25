import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import App from './App'
import SignUpPage from './pages/SignupPage.jsx';
import HomePage from './pages/HomePage.jsx';
import SignInPage from './pages/SignInPage.jsx';
import PrivatePages from './middlewares/PrivatePagesjsx';
import ProfilePage from './pages/ProfilePage.jsx';
import MyArticlePage from './pages/MyArticlePage,jsx';

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route index path='/' element={<SignUpPage/>}/>
            <Route path='/signin' element={<SignInPage/>}/>
            <Route path='/' element={<PrivatePages/>}>
                <Route path='/home' element={<HomePage/>} />
                <Route path='/profile' element={<ProfilePage/>} />
                <Route path='/my-contributions' element={<MyArticlePage/>} />
            </Route>
        </Route>
    )
)

export default routes;