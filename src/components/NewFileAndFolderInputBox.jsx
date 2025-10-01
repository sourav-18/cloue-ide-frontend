
function NewFileAndFolderInputBox({handleCreate}) {
  return (
    <div>
        <input className="new-input" autoFocus={true} onKeyDown={handleCreate} style={{width:"100%",backgroundColor:"#1c2236ff" ,border:"none" ,color:"white"}}></input>
    </div>
  )
}

export default NewFileAndFolderInputBox