import { useState } from 'react';
import axios from 'axios';

import './FileUploader.css';

export const FileUploader = ({ onSuccess }) => {
    const [files, setFiles] = useState([]);

    const onInputChange = (e) => {
        setFiles(e.target.files)
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();

        for (let i = 0; i < files.length; i++) {
            data.append('file', files[i]);
        }

        axios.post('//localhost:3001/api/files/upload', data)
            .then((response) => {
                alert('Upload Successful');
                onSuccess(response.data)
            })
    };

    return (
        <div>
        <h4> Upload your CV for the deVault team to review</h4>
            <form method="post" action="#" id="#" onSubmit={onSubmit}>
                <div className="form-group files">
                    <input type="file"
                        onChange={onInputChange}
                        className="form-control"
                        multiple />
                </div>

                <button>Submit</button>
            </form>
        </div>
    )
};