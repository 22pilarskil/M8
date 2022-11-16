import { useState } from 'react';
import axios from 'axios';
import { API_URL } from "../constants";
import AutoComplete from './AutoComplete';

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
    const labelStyle = {
        'display': 'inline-block',
        'width': '170px',
        'text-align': 'left',
        'margin-top': '10px',
    }
    const center = {
        'margin':'0 auto',
        'width':'550px',
        'grid-template-colums':'1fr',
        
    }
    return (
        <div style={center}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label style={labelStyle}>Enter your full name</label>
                    <input type="text" name="username" value={inputs.username} onChange={handleChange} placeholder="Name"/>
                </div>
                <div>
                    <label style={labelStyle}>Enter your age</label>
                    <input type="number" name="age" value={inputs.age} onChange={handleChange} placeholder="Age"/>
                </div>
                <div>
                    <label style={labelStyle}>Enter a profile picture</label>
                    <input type="file" name="img" accept='.png' onChange={handleChangeImg}/>
                </div>
                <div>
                    <label style={labelStyle}>Enter your hobbies</label>
                    <AutoComplete suggestions={["Tennis", "Soccer", "Swimming", "Singing", "Sight-seeing"]}/>
                </div>
            <button type="submit">Upload</button>
            </form>
        </div>
    )
}

export default UserForm;