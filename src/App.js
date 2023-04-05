import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import ContactListComponent from './components/container/contact_list';
import Ejemplo from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import Clock from './components/pure/clock';
import { ClockExercise } from './components/pure/ClockExercise';
import ListComponent from './components/pure/nomenCom';
import { Father } from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
import SquareComponent from './components/pure/squareComponent';
  // import result from 'constants';

function App() {
  
  

  return (
    <div className="App">
        {/* componente de listado de tareas */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <ContactListComponent></ContactListComponent> */}
         {/* <Ejemplo></Ejemplo> */}
         {/* <Ejemplo2></Ejemplo2> */}
         {/* <MiComponenteConContexto></MiComponenteConContexto> */}
         {/* <Ejemplo4 nombre='juani'>todo lo que haya aca dentro es tratado como props.children<h3>Contenido del props.children</h3></Ejemplo4> */}
        {/* <GreetingStyled name='juani'></GreetingStyled> */}
        {/* <Clock></Clock> */}
        {/* <ClockExercise ></ClockExercise> */}
        {/* </header> */}
        <TaskListComponent></TaskListComponent>
        {/* Ejemplos de renderizado condicional */}
        {/* <OptionalRender></OptionalRender> */}
        {/* <SquareComponent></SquareComponent> */}
        {/* <ListComponent list={result}></ListComponent> */}
        {/* gestin de eventos */}
        {/* <Father></Father> */}
    </div>
  );
}

export default App;
