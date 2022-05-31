import React, { useState } from 'react'
import ProgressBar from './ProgressBar'

export default function UploadForm() {
    const [file, setfile] = useState(null)
    const [error, seterror] = useState(null)
    let valid = ["image/jpeg", "image/png", "image/gif"]

    const changeHandler = (e) => {
        let selected = e.target.files[0]
        console.log(selected)

        if (selected && valid.includes(selected.type)) {
            setfile(selected)
            seterror(null)
        }
        else {
            setfile(null)
            seterror('Not valid image file')
        }
    }
    return (
        <div>
            <div className="upload">
                <form>
                    <label>
                        <input type="file" name="file" id="file" onChange={changeHandler} />
                        <img src="/images/add.svg" alt="add" style={{width:35 , height:35 , cursor:'pointer'}} />
                    </label>
                </form>
            </div>

            {error && (
                <p>{error}</p>
            )}

            {/* {file && (
                <p>{file.name}</p>
            )} */}

            {file && <ProgressBar file={file} setfile={setfile } /> }
        </div>
    )
}
