import { CarState, TCar } from '../../../type/Types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../../app/store';


const initialState: CarState = {
    car: [],
    updateCar: [],
    filteredCars: [],
    filters: {
        carType: "",
        priceRange: [0, 5000],
        color: "",
        features: [],
    },
};

 const carSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {
        setAllCar: (state, action: PayloadAction<TCar[]>) => {
            const totalCar = action.payload;
            console.log(totalCar)
            const filterCar = totalCar?.filter(
                (item) => item.status !== "unavailable"
            );
            state.car = filterCar;
        },
        carUpdate: (state, action) => {
            state.updateCar = action.payload;
        },
    },
});




export const { setAllCar } = carSlice.actions;
export default carSlice.reducer;

export const useCar = (state: RootState) => state.car.car;
// export const useCurrentUser = (state: RootState) => state.auth.user;