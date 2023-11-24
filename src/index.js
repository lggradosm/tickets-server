import express from "express";
import { createServer } from "http";
import cors from "cors";
import router from "./routes/router.js";
import { initializeSocketServer } from "./socket.js";
import { connect } from "./conf/database.js";
import { config } from "dotenv";

const app = express();
const httpServer = createServer(app);
initializeSocketServer(httpServer);
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(router);

app.set("port", 3000);
config();
connect();

httpServer.listen(app.get("port"), () => {
  const port = httpServer.address().port;
  console.log(`Server is running on port ${port}`);
});
