import React, { useState } from 'react'
import CodeEditor from './external/CodeEditor'
import FileTree from './FileTree'

function CodeSpace() {
  return (
    <div style={{display:"flex",width:"100%"}}>
        <FileTree/>
        <CodeEditor/>
    </div>
  )
}

export default CodeSpace