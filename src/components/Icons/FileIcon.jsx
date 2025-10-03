import React from 'react'
import { FaJsSquare, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava, FaPython, FaPhp, FaRegFile, FaFileWord, FaFileExcel, FaFilePowerpoint, FaFilePdf } from "react-icons/fa";
import { VscJson, VscMarkdown, VscFileZip, VscFileBinary, VscTerminalCmd } from "react-icons/vsc";
import { SiTypescript, SiCplusplus, SiC, SiGo, SiRust, SiKotlin, SiSwift, SiRuby } from "react-icons/si";


function FileIcon({fileName}) {

  function getIcon(fileName) {
    if (!fileName) return <FaRegFile style={{ color: "#cccccc" }} />;
    const ext = fileName.split(".").pop()?.toLowerCase();

    switch (ext) {
      // Web
      case "html":
        return <FaHtml5 style={{ color: "#e34c26" }} />;
      case "css":
        return <FaCss3Alt style={{ color: "#1572b6" }} />;
      case "js":
        return <FaJsSquare style={{ color: "#f7df1e" }} />;
      case "ts":
        return <SiTypescript style={{ color: "#3178c6" }} />;
      case "jsx":
        return <FaReact style={{ color: "#61dafb" }} />;
      case "tsx":
        return <FaReact style={{ color: "#61dafb" }} />;
      case "json":
        return <VscJson style={{ color: "#cbcb41" }} />;
      case "md":
        return <VscMarkdown style={{ color: "#ffffff" }} />;

      // Backend / Languages
      case "node":
        return <FaNodeJs style={{ color: "#539e43" }} />;
      case "java":
        return <FaJava style={{ color: "#f89820" }} />;
      case "py":
        return <FaPython style={{ color: "#3776ab" }} />;
      case "php":
        return <FaPhp style={{ color: "#8892be" }} />;
      case "cpp":
      case "cc":
      case "cxx":
        return <SiCplusplus style={{ color: "#00599c" }} />;
      case "c":
        return <SiC style={{ color: "#283593" }} />;
      case "go":
        return <SiGo style={{ color: "#00ADD8" }} />;
      case "rs":
        return <SiRust style={{ color: "#dea584" }} />;
      case "kt":
        return <SiKotlin style={{ color: "#7f52ff" }} />;
      case "swift":
        return <SiSwift style={{ color: "#f05138" }} />;
      case "rb":
        return <SiRuby style={{ color: "#cc342d" }} />;

      // Docs
      case "pdf":
        return <FaFilePdf style={{ color: "#e74c3c" }} />;
      case "doc":
      case "docx":
        return <FaFileWord style={{ color: "#2a5699" }} />;
      case "xls":
      case "xlsx":
        return <FaFileExcel style={{ color: "#1d6f42" }} />;
      case "ppt":
      case "pptx":
        return <FaFilePowerpoint style={{ color: "#d04423" }} />;

      // Archives
      case "zip":
      case "rar":
      case "7z":
      case "tar":
      case "gz":
        return <VscFileZip style={{ color: "#ffcc00" }} />;

      // Shell / Binary
      case "exe":
      case "bin":
        return <VscFileBinary style={{ color: "#a6a6a6" }} />;
      case "sh":
      case "bat":
        return <VscTerminalCmd style={{ color: "#4caf50" }} />;

      // Default
      default:
        return <FaRegFile style={{ color: "#cccccc" }} />;
    }
  }
  
  return (
    <div style={{marginLeft:"1rem"}}>
      {getIcon(fileName)}
    </div>
  )
}

export default FileIcon