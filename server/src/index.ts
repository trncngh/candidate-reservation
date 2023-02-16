import express, { Application, Request, Response } from "express";
import cors, { CorsOptions } from "cors";
import App from "./app";

import CandidateController from "../controllers/candidate.controller";
import MeetingController from "../controllers/meeting.controller";

const PORT = process.env.PORT || 3084;
const clientPort = 3000;

//cors config
var corsOptions: CorsOptions = {
  origin: `http://localhost/${clientPort}`,
};

const app = new App([new CandidateController(), new MeetingController()], PORT);

app.listen();
// const app: Application = express();
// app.use(cors(corsOptions));
// app.use(express.json());
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );

// app.get("/", async (req: Request, res: Response) => {
//   return res.status(200).send({
//     message: "hello world!",
//   });
// });

// try {
//   app.listen(PORT, (): void => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// } catch (error: any) {
//   console.log(`Error occured: ${error.message}`);
// }
