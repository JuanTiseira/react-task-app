import { BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import { NotFoundPage } from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskPage from './pages/tasks/TaskPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import { useEffect } from 'react';
import StatePage from './pages/home/StatePage';

function AppRouting() {

  //variable apra manejar el logueo
  let logged =  false;
  let taskList = [
    {
      id:1,
      name: 'task1',
      description: 'myfirst task'
    },
    {
      id:2,
      name: 'task2',
      description: 'my second task'
    }
  ]
  useEffect(() => {
    
    logged =  localStorage.getItem('credentials');
    console.log('user logged', logged)
  }, []);

  return (
    <Router>
        <div>
            <aside>
                <Link to='/'>|  Home  |</Link>
                <Link to='/about'>|  About  |</Link>
                <Link to='/faqs'>|  FAQs  |</Link>
                <Link to='/profile'>| Profile |</Link>
                <Link to='/tasks'>| Tasks |</Link>
                <Link to='/login'>| Login |</Link>
                <Link to='/task/1'>| Task 1 |</Link>
                <Link to='/task/2'>| Task 2 |</Link>



            </aside>
            <main>
              <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/about' component={ AboutPage }/>
                <Route path='/online-state' component={StatePage}></Route>
                <Route path='/faqs' component={ AboutPage }/>
                <Route path='/login' component={LoginPage}>
                    {
                      logged ? 
                        () => {
                          alert('You are logged in. Redirecting to home..')
                          return (<Redirect to='/'></Redirect>)
                        }
                        :
                        () => {
                          return (<LoginPage></LoginPage>)
                        }

                    }
                </Route>
                <Route path='/profile' component={ ProfilePage }>
                    {
                      logged ? 
                        <ProfilePage></ProfilePage> 
                         :
                        () => {
                          alert('You must be logged. Redirecting to Login')
                         return (<Redirect to='/login'></Redirect>)
                        }
                        

                    }
                </Route>
                <Route path='/tasks' component={ TaskPage }/>
                <Route 
                exact 
                path='/task/:id'
                render={
                  ({match}) => (
                    <TaskDetailPage task={taskList[match.params.id-1]}/>
                  )
                  
                }
                >

                </Route>
                {/* Not Found Page */}
                <Route component={ NotFoundPage }/>
              </Switch>              
            </main>
        </div>
        
    </Router>
  );
}

export default AppRouting;
