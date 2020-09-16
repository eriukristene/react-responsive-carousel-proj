/* Import react & plugins */
import React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";

/* Assets */
import './Assets/Bootstrap.css';
import './Assets/App.scss';

/* Import components */
import PageContent from './Components/Content.jsx';

/* Router Views */
import Frontpage from "./Pages/Frontpage.jsx";


class App extends React.Component {


  constructor(props) {
    super(props);

    var defaultData = {
      routes: [
        {
          path: "/",
          exact: true,
          view: () => <Frontpage storeData={this.state} />
        }
      ]
    }


    this.state = defaultData;

    
  }

  routeChange(route) {
    console.log('route chagned -->', route);
  }

  componentDidMount() {
    
    
  }

  // using the Router allows you to use routing features for any 
  // component that is a subcomponent of the Router
  // can use routing features anywhere inside this Router
  render() {
    return (
      <div className="App">
        <Router>
          <PageContent pageData={this.state} routeChange={this.routeChange} />
        </Router>
      </div>
    );
  }
}


export default App;
