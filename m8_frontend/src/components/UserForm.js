import { useState } from 'react';
import axios from 'axios';
import { API_URL } from "../constants";
import "./css/audiolanding.css";

function UserForm() {
    const [inputs, setInputs] = useState({});
    const [img, setImg] = useState();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleChangeImg = (event) => {
        setImg(event.target.files[0]);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        const renamedImg = new File([img], inputs.username + ".png")

        formData.append('img', renamedImg);
        formData.append('username', inputs.username);
        formData.append('age', inputs.age);

        const config = {
            config: {
            'content-type': 'multipart/form-data',
            },
        };
        axios.post(API_URL + "generateUser", formData, config).then(response => {
            console.log(response.data.success)
        });

    }

    return (
        
        <form onSubmit={handleSubmit}>
        <label>Enter your name:
            <input type="text" name="username" value={inputs.username} onChange={handleChange}/>
        </label>
        <label>Enter your age:
            <input type="number" name="age" value={inputs.age} onChange={handleChange}/>
        </label>
        <label>Enter a profile picture (.png only)
            <input type="file" name="img" accept='.png' onChange={handleChangeImg} />
        </label>
        <button type="submit">Upload</button>
        </form>
    )
}

export default UserForm;