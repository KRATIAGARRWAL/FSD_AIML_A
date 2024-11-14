// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import qBank from "./qBank"
import './App.css'

function App(){
  return(
    <>
      <div id="Quiz"></div>
      <h1>My Quiz Application</h1>
      <br/>
      Question{qBank.id}.{qBank.question}<br/>
      <input type="radio" name="opt" />{qBank.option1}<br/>
      <input type="radio" name="opt" />{qBank.option2}<br/>
      <input type="radio" name="opt" />{qBank.option3}<br/>
      <input type="radio" name="opt" />{qBank.option4}<br/>
      <input type="button" value="previous"/>
      <input type="button" value="next"/>

    </>
  )
}