const socketKeys = {
    on: {
        pong: "pong",
        initialDirPath: "on:dir:initial-path",
        fileContent: "on:file:content",
        dirBaseFile: "on:dir:base-file",
        terminalData: "on:terminal:data",
        initialFileLoadComplete: "on:file:initial-load-complete"
    },
    emit: {
        ping: "ping",
        loadInitialFile: "dir:load-initial-file",
        fileContent: "file:content",
        dirBaseFile: "dir:base-file",
        fileContentSync: "file:content-sync",
        newFileCreate: "file:new-create",
        newDirCreate: "dir:new-create",
        terminalWrite: "terminal:write",
        terminalRequest: "terminal:request",
    }
}

export default socketKeys;