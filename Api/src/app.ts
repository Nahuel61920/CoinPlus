// import express from "express"
// const app =express()
// app.set("port", 3001)
// export default app

import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import routes from "./routes/index";
import express from "express";
import morgan from "morgan";
const server = express();
import { Request, Response, NextFunction } from "express";
var cors = require('cors')

require("./db");
require("./controllers/AutoUpload");

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
// server.use((_req: Request, res: Response, next: NextFunction) => {
//   res.setHeader("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, DELETE"
//   );
//   next();
// });
server.use(cors())
server.set("port", process.env.PORT || 3001);
server.use(express.json());
server.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  })
);

const host = process.env.HOST || "0.0.0.0";

server.use("/", routes);
server.listen(server.get("port"), host, () => {
  console.log("Ya me levanté");
});

module.exports = server;