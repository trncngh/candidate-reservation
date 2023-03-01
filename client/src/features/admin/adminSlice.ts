import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Candidate, Meeting } from "../../interfaces";
import AdminDataService from "../../services/admin.services";

export interface AdminState {
  meetingList: Meeting[];
  isLoading: boolean;
  hasError: boolean;
}

const initialState: AdminState = {
  meetingList: [],
  isLoading: false,
  hasError: false,
};

export const loadMeetingList = createAsyncThunk(
  "admin/loadMeetingList",
  async () => {
    const res = await AdminDataService.getAll()
      .then((result) => {
        return result.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return res;
  }
);

export const createNewMeeting = createAsyncThunk(
  "admin/createNewMeeting",
  async (candidate: Candidate) => {
    const res = await AdminDataService.createMeeting(candidate)
      .then((result) => {
        return result.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return res;
  }
);

export const sendInvitation = createAsyncThunk(
  "admin/sendInvitation",
  async (id: string) => {
    const res = await AdminDataService.sendInvitation(id)
      .then((result) => {
        return result.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return res;
  }
);

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadMeetingList.pending, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadMeetingList.fulfilled, (state, action) => {
        state.meetingList = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(loadMeetingList.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(createNewMeeting.pending, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(createNewMeeting.fulfilled, (state, action) => {
        state.meetingList.push(action.payload);
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(createNewMeeting.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(sendInvitation.pending, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(sendInvitation.fulfilled, (state, action) => {
        state.meetingList.map((item: Meeting, index: number) => {
          if (item.id === action.payload.id) {
            item.isSent = true;
          }
          return item; // need to check
        });
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(sendInvitation.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const selectAdmin = (state: RootState) => state.admin;
export const selectMeetingList = (state: RootState) => {
  return state.admin.meetingList;
};

export default adminSlice.reducer;
