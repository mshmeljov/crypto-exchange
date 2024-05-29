import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Header from "./Header";
import Body from "./Body";

function App() {
    const [showSideBar, setShowSideBar] = React.useState(false);
    const [page, setPage] = React.useState('main');

  return (
    <Container>
      <Header 
      setShowSideBar={setShowSideBar} page={page} setPage={setPage}/>
      <Body 
      showSideBar={showSideBar} 
      setShowSideBar={setShowSideBar}
      setPage={setPage} 
      page={page}
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
