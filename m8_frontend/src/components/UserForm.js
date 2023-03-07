import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL, STATIC_URL } from "../constants";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function UserForm() {

    const upload = STATIC_URL + "upload.png";
    const hobbiesCSV = process.env.PUBLIC_URL + "hobbies.csv";

    const [inputs, setInputs] = useState({});
    const [img, setImg] = useState();
    const [preview, setPreview] = useState();
    const [hobbies, setHobby] = useState([]);
    const [options, setOptions] = useState([]);

    async function fetchCsv() {
        const response = await fetch(hobbiesCSV);
        const reader = response.body.getReader();
        const result = await reader.read();
        const decoder = new TextDecoder('utf-8');
        const csv = await decoder.decode(result.value);
        const data = csv.split("\n");
        return data.slice(1);
    }

    function uniqBy(a, key) {
        var seen = {};
        return a.filter(function(item) {
            var k = key(item);
            return seen.hasOwnProperty(k) ? false : (seen[k] = true);
        })
    }

    fetchCsv().then((data) => {
        data = uniqBy(data, JSON.stringify);
        setOptions(data);
    })

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
        console.log(value + name);
    }

    useEffect(() => {
        if (img) {
            const reader = new FileReader()
            reader.readAsDataURL(img);
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            console.log("here")
        } else {
            setPreview(upload);
        }
    }, [img, upload, hobbiesCSV]);

    const handleChangeImg = (event) => {
        setImg(event.target.files[0]);
    }

    const handleChangeHobby = (event, newHobby) => {
        setHobby(newHobby);
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        const renamedImg = new File([img], inputs.username + ".png")

        formData.append('img', renamedImg);
        formData.append('username', inputs.username);
        formData.append('age', inputs.age);
        formData.append('hobbies_str', hobbies)

        const config = {
            config: {
            'content-type': 'multipart/form-data',
            },
        };
        axios.post(API_URL + "generateUser", formData, config).then(response => {
            console.log(response.data.Users)
        });

    }
    const width = "190px";
    const imgStyle = {
        'width':'100%',
        'height':'auto'
    }
    const center = {
        'margin':'0 auto',
        'width':width,
        'gridTemplateColums':'1fr',
    }
    const blocks = {
        "display": "block",
        "width": width,
        "height": "auto",
        "marginTop":"5px"
      }


    return (
        <div style={center}>
            <form onSubmit={handleSubmit}>
                <div style={blocks}>
                    <TextField type="text" name="username" onChange={handleChange} label="Name"/>
                </div>
                <div style={blocks}>
                    <TextField type="number" name="age" onChange={handleChange}label="Age"/>
                </div>
                <div style={blocks}>
                    <Autocomplete multiple limitTags={10} id="combo-box-demo" options={options} onChange={handleChangeHobby}
                        renderInput={(params) => <TextField name="Hobbies" {...params} label="Hobbies" />}/>
                </div>
                <div style={blocks}>
                    <input type="file" name="uploadfile" id="img" style={{"display":"none"}} accept="image/*" onChange={handleChangeImg}/>
                    <label htmlFor="img"><img src={preview} alt="Failed" style={imgStyle}></img></label>
                </div>
            <Button variant="contained" style={blocks} type="submit">Upload</Button>
            </form>
        </div>
    )
}

export default UserForm;