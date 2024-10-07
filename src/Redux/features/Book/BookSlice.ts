import { RootState } from './../../app/store';
import { TBook, TBookingForm } from './../../../type/Types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingState } from "../../../type/Types";


const initialState: BookingState = {
    bookings: [],
    booked: [],
    returnCar: [],
    bookedCar: [],
    confirmBooking: [],
    paymentInfo: [],
};

export const bookSlice = createSlice({
    name: "book",
    initialState: initialState,
    reducers: {
        getAllBookHistory: (state, action) => {
            state.booked = action.payload;
        },
        bookedCar: (state, action: PayloadAction<TBookingForm[]>) => {
            state.bookedCar = action.payload;
        },
        FilterBookedCar: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            state.booked = state?.booked?.filter((item) => item._id !== id);
        },
        returnACar: (state, action: PayloadAction<TBook[]>) => {
            const allBookedcar = action.payload;
            state.returnCar = allBookedcar.filter((item) => item.isBooked === "confirmed" && item.totalCost == 0);
        },
        confirmBooking: (state, action) => {
            state.confirmBooking = action.payload;
        },
        carPayment: (state, action) => {
            state.paymentInfo = action.payload;
        },
    }
});


export const {
getAllBookHistory,
bookedCar,
FilterBookedCar,
returnACar,
confirmBooking,
carPayment,
} = bookSlice.actions;

export default bookSlice.reducer;

export const useBookHistory = (state: RootState) => state.book.booked;
export const useBookedCar = (state: RootState) => state.book.bookedCar;
export const useAllBook = (state: RootState) => state.book.booked;
export const useReturnCar = (state: RootState) => state.book.returnCar;
export const useConfirmBooking = (state: RootState) => state.book.confirmBooking;
export const useCarPayment = (state: RootState) => state.book.paymentInfo;