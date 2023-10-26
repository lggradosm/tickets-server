import express from "express";
import {createServer} from 'http'
import cors from 'cors'
import router from "./routes/router.js";
import {initializeSocketServer} from './socket.js'
const app = express();
const httpServer = createServer(app)
initializeSocketServer(httpServer)

app.use(cors({origin:'*'}))
app.use('/tickets',router)


app.set('port', 3000)

httpServer.listen(app.get('port'), () => {
  const port = httpServer.address().port;
  console.log(`Server is running on port ${port}`)
})


