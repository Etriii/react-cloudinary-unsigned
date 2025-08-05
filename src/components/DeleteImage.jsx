import React, { useState } from 'react'

import { deleteImage } from '../cloudinary/cloudinaryService'
import e from 'cors'

const DeleteImage = ({ public_id, setImages }) => {

    const [deleteLoading, setDeleteLoading] = useState(false)

    const handleDeleteImage = async () => {

        setDeleteLoading(true)

        const result = await deleteImage(public_id)
        
        console.log(result)
        if (result.result == "ok") {
            alert("Image deleted successfully.")
            setImages("")
        } else {
            alert("failed to delete Image")
        }

    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "5px",
        }}>
            <button style={{
                padding: "5px",
            }} onClick={() => handleDeleteImage()}>{deleteLoading ? 'Deleting image...': 'Delete Image'}</button>
        </div>
    )
}

export default DeleteImage