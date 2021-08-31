const server = require('@prequest/response-types-server')

/**
 * 本项目默认使用 [script-runner](https://github.com/xdoer/script-runner) 管理脚本
 * 如果你不需要，你可以直接在你的项目中写这样一个文件
 * 然后在 node server.js 即可
 */
server.default({ port: 10010 })
