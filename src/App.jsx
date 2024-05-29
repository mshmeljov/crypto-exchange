import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Header from "./Header";
import Body from "./Body";
import Navigation from "./Header/Navigation";

const initialState = {
  page: 'main',
  showSideBar: false,
};


function App() {
    const [state, setState] = React.useState(initialState);


    // const [showSideBar, setShowSideBar] = React.useState(false);
    // const [page, setPage] = React.useState('main');

    const setShowSideBar = (show) => setState({ ...state, showSideBar: show });
    const setPage = (page) => setState({ ...state, page: page });
    const resetAppState = () => setState(initialState);  

  return (
    <Container>
      <Header 
      setShowSideBar={setShowSideBar} 
      resetAppState={resetAppState} 
      />
      <Body 
      showSideBar={state.showSideBar} 
      setShowSideBar={setShowSideBar}
      setPage={setPage} 
      page={state.page}
      />
    </Container>
  );
}

export default App;

// import './App.css';
// import TestComponent from './TestComponent';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <TestComponent head="Privet">
//           <p>Children</p>
//         </TestComponent>
//         <TestComponent head="Ivan Ivanov"/>
//         {/* <TestComponent head={35}/>
//         <TestComponent head={35}/>
//         <TestComponent head={35}/>
//         <TestComponent head={35}/> */}
//         <TestComponent head={35}
//         footer={<div>Footer Element</div>}
//         />
//       </header>
//     </div>
//   );
// }

// export default App;

// next

// import React from 'react';
// import ReactDOM from 'react-dom';
// import ParentComponent from './ParentComponent';

// const App = () => {
//   return (
//     <div>
//       <ParentComponent />
//     </div>
//   );
// };

// ReactDOM.render(<App />, document.getElementById('root'));

// export default App;

// function App() {
//   return (
//     <div className="App"></div>
//   )
// }
