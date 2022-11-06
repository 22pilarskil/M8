import './App.css';
import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import UserForm from "./components/UserForm";


class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <UserForm />
      </Fragment>
    );
  }
}



export default App;

// import './App.css';
// import React, {useState} from 'react';
// import axios from 'axios';

// function App() {

//   const [img, setImg] = useState()

//   function handleChange(event) {
//     setImg(event.target.files[0])
//   }
  
//   function handleSubmit(event) {
//     event.preventDefault()
//     const url = 'http://localhost:8000/generateUser';
//     const formData = new FormData();
//     formData.append('img', img);
//     formData.append('imgName', img.name)
//     const config = {
//       config: {
//         'content-type': 'multipart/form-data',
//       },
//     };
//     axios.post(url, formData, config).then((response) => {
//       console.log(response.data);
//     });

//   }

//   return (
//     <div className="App">
//         <form onSubmit={handleSubmit}>
//           <h1>React File Upload</h1>
//           <input type="file" onChange={handleChange}/>
//           <button type="submit">Upload</button>
//         </form>
//     </div>
//   );
// }

// export default App;