import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL, STATIC_URL } from "../constants";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function UserSearch() {

    const upload = STATIC_URL + "upload.png";
    const hobbiesCSV = process.env.PUBLIC_URL + "hobbies.csv";

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

    const handleChangeHobby = (event, newHobby) => {
        setHobby(newHobby);
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('hobbies_str', hobbies)
        const config = {
            config: {
            'content-type': 'multipart/form-data',
            },
        };
        axios.post(API_URL + "queryUser", formData, config).then(response => {
            console.log(response.data.usernames)
        });

    }
    const width = "190px";
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
                    <Autocomplete multiple limitTags={10} id="combo-box-demo" options={options} onChange={handleChangeHobby}
                        renderInput={(params) => <TextField name="Hobbies" {...params} label="Hobbies" />}/>
                </div>
            <Button variant="contained" style={blocks} type="submit">Upload</Button>
            </form>
        </div>
    )
}

export default UserSearch;