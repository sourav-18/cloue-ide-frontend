import NewFileAndFolderInputBox from './NewFileAndFolderInputBox'
import FolderIcon from './Icons/FolderIcon'

function FolderCreate({handleFolderCrate}) {
    return (
        <div style={{ display: "flex" }}>
            <FolderIcon />
            <NewFileAndFolderInputBox handleCreate={handleFolderCrate} />
        </div>
    )
}

export default FolderCreate