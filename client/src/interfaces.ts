import { Dayjs } from "dayjs";

export interface ConfirmedMeeting {
  id: string;
  dateTime: Dayjs;
}
export interface Meeting {
  id: string;
  dateTime: string;
  isSent: boolean;
  isConfirmed: boolean;
  candidateId: number | null;
  candidate: CandidateInfo;
}

export const initialMeeting = (): Meeting => ({
  id: "",
  dateTime: "",
  candidateId: 0,
  isConfirmed: false,
  isSent: false,
  candidate: { id: null, createdAt: "", updatedAt: "", name: "", email: "" },
});

export interface CandidateInfo extends Candidate {
  id: number | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface Candidate {
  name: string;
  email: string;
}

export const initialCandidate = (): Candidate => ({
  name: "",
  email: "",
});
