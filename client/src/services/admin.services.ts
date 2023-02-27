import http from "../http-common";
import { Candidate, ConfirmedMeeting } from "../interfaces";

class AdminDataService {
  getAll(): Promise<any> {
    return http.get("/meeting/all");
  }

  getBookedMeetings(date: string): Promise<any> {
    console.log(date);
    return http.post(`/meeting/booked`, {
      dateTime: date,
    });
  }

  createMeeting(candidate: Candidate): Promise<any> {
    return http.post("/meeting", candidate);
  }

  sendInvitation(id: string): Promise<any> {
    return http.put(`/meeting?id=${id}`);
  }

  getCurrentMeetingInfo(id: string): Promise<any> {
    return http.get(`/meeting?id=${id}`);
  }

  confirmMeeting(data: ConfirmedMeeting): Promise<any> {
    return http.post(`/meeting/confirm`, data);
  }
}

export default new AdminDataService();
