const NodeMediaServer = require("node-media-server");
const config = require("./mediaServerConfig.json");

var nms = new NodeMediaServer(config);
nms.run();
