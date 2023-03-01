import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Dayjs } from "dayjs";
import { RootState } from "../../app/store";
import { ConfirmedMeeting, Meeting } from "../../interfaces";
import AdminDataService from "../../services/admin.services";

export const getCurrentMeetingInfo = createAsyncThunk(
  "meetingReservation/getCurrentMeetingInfo",
  async (id: string) => {
    const res = AdminDataService.getCurrentMeetingInfo(id)
      .then((result) => {
        console.log(result.data);
        return result.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return res;
  }
);

export const confirmMeeting = createAsyncThunk(
  "meetingReservation/confirmMeeting",
  async (data: ConfirmedMeeting) => {
    const res = AdminDataService.confirmMeeting(data)
      .then((result) => {
        console.log(result.data);
        return result.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return res;
  }
);

export const getAllMeetingsByDate = createAsyncThunk(
  "meetingReservation/getAllMeetingsByDate",
  async (date: Dayjs) => {
    console.log(date);
    const res = await AdminDataService.getBookedMeetings(date.toISOString())
      .then((result) => {
        return result.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return res;
  }
);

export interface MeetingReservationState {
  meetingInfo: Meeting;
  currentMeetingsList: Meeting[];
  isLoading: boolean;
  hasError: boolean;
}

const initialState: MeetingReservationState = {
  meetingInfo: {
    id: "",
    dateTime: "",
    isSent: false,
    isConfirmed: false,
    candidateId: null,
    candidate: {
      email: "",
      id: null,
      name: "",
    },
  },
  currentMeetingsList: [],
  isLoading: false,
  hasError: false,
};

export const meetingReservationSlice = createSlice({
  name: "meetingReservation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentMeetingInfo.pending, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getCurrentMeetingInfo.fulfilled, (state, action) => {
        state.meetingInfo = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(getCurrentMeetingInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(getAllMeetingsByDate.pending, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getAllMeetingsByDate.fulfilled, (state, action) => {
        state.currentMeetingsList = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(getAllMeetingsByDate.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(confirmMeeting.pending, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(confirmMeeting.fulfilled, (state, action) => {
        state.meetingInfo.isConfirmed = action.payload.isConfirmed;
        state.meetingInfo.dateTime = action.payload.dateTime;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(confirmMeeting.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

// export const {} = meetingReservationSlice.actions;

export const selectMeetingReservationInfo = (state: RootState) =>
  state.meetingReservation.meetingInfo;
export const selectCurrentMeetingSlots = (state: RootState) =>
  state.meetingReservation.currentMeetingsList;

export default meetingReservationSlice.reducer;
