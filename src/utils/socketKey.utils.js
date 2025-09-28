const socketKeys = {
    on: {
        pong: "pong",
        initialDirPath: "on:dir:initial-path",
        fileContent: "on:file:content",
        dirBaseFile: "on:dir:base-file"
    },
    emit: {
        ping: "ping",
        loadInitialFile: "dir:load-initial-file",
        fileContent: "file:content",
        dirBaseFile: "dir:base-file",
        fileContentSync: "file:content-sync",
        newFileCreate: "file:new-create",
        newDirCreate: "dir:new-create",
    }
}

export default socketKeys;