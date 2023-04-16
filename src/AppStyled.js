import { BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import SignIn from './styledComponents/pages/auth';

import styled from "styled-components";

export const AppContainer = styled.div`
  min-width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

function AppStyledRouting() {

  //variable apra manejar el logueo
  
  return (
    <AppContainer>
      <Router>
        <Switch>
          <Route exact path='/' component={SignIn}/>
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default AppStyledRouting;


