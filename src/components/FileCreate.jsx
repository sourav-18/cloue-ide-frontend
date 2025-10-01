import React from 'react'
import NewFileAndFolderInputBox from './NewFileAndFolderInputBox'
import FileIcon from './Icons/FileIcon'

function FileCreate({handleFileCrate}) {
  return (
    <div style={{display:"flex", gap:"5px", marginLeft: 2, padding: 3 }}>
        <FileIcon />
        <NewFileAndFolderInputBox handleCreate={handleFileCrate}/>
    </div>
  )
}

export default FileCreate