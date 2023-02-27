import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import adminReducer from "../features/admin/adminSlice";
import meetingReservationReducer from "../features/home/meetingReservationSlice";

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    meetingReservation: meetingReservationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
