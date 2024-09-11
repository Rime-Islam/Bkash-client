import { RootState } from '../../app/store';
import { TFormInput } from './../../../type/Types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type TCarslice = {
    car: TFormInput[];
    updateCar: TFormInput[];
};

const initialState: TCarslice = {
    car: [],
    updateCar: [],
};

export const carSlice = createSlice({
    name: "Cars",
    initialState,
    reducers: {
        getAllCar: (state, action: PayloadAction<TFormInput[]>) => {
            const totalCar = action.payload;
            console.log(totalCar)
            const filterCar = totalCar?.filter(
                item => item.status !== "unavailable"
            );
            state.car = filterCar;
        },
        carUpdate: (state, action) => {
            state.updateCar = action.payload;
        },
    },
});

export const { getAllCar, carUpdate } = carSlice.actions;

export const useCar = (state: RootState) => state.cars;
export const useUpdate = (state: RootState) => state.cars.updateCar;

export default carSlice.reducer;