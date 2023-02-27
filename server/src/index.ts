import App from "./app";

import CandidateController from "../controllers/candidate.controller";
import MeetingController from "../controllers/meeting.controller";

const PORT = process.env.PORT || 3084;

//cors config

const app = new App([new CandidateController(), new MeetingController()], PORT);

app.listen();
