import React from 'react';
import './App.css';
import store from './userComponents/userStore'
import UserContainer from './userComponents/userContainer'
import CreateUser from './userComponents/createUser'
import { Provider } from 'react-redux'


//users application
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <UserContainer /> */}
        <CreateUser />
      </div>
    </Provider>
  )
}









//cake application

// function App() {
//   return (
//     <Provider store={store}>
//       <div className="App">
//         <CakeContainer />
//       </div>
//     </Provider>
//   )
// }


//axios form

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <ReportForm />
//       </div>
//     )
//   }
// }


//default

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header"> */}
//         <FirstComponent />
//         {/* <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           React project is started
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       {/* </header> */}
//     </div>
//   );
// }


//examples

// class App extends Component {
//   render() {
//     return (
//       <div className="App" >
//         <Counter />
//         <Message />
//         <FirstComponent name="first" >
//           <p>
//             functional component is created for React app
//           </p>
//         </FirstComponent>
//         <FirstComponent name="second" >
//           <button>second</button>
//         </FirstComponent>

//         <FirstClass name="third">
//           <p>
//             class component is created for React app
//           </p>
//         </FirstClass>
//       </div >
//     );
//   }
// }

export default App;
