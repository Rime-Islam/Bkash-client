import { CarState, Filters, TCar } from '../../../type/Types';
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
    
            const filterCar = totalCar?.filter(
                (item) => item.status !== "unavailable"
            );
            state.car = filterCar;
        },
        carUpdate: (state, action) => {
            state.updateCar = action.payload;
        },
        setFilters: (state, action: PayloadAction<Partial<Filters>>) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        filterCars: (state) => {
            state.filteredCars = state.car.filter((item) => {
                const hasFilters = state.filters.carType || state.filters.color ;
            
                if (!hasFilters) {
                    return true;
                   }            
                   const matchType = state.filters.carType 
                   ? (item.type as unknown as string).toLowerCase().includes((state.filters.carType as string).toLowerCase()) 
                   : true;
                const matchColor = state.filters.color ? item.color.toLowerCase().includes(state.filters.color.toLowerCase()) : true;

           
            return matchType && matchColor;

            });
        },
    },
});




export const { setAllCar, carUpdate, setFilters, filterCars } = carSlice.actions;
export default carSlice.reducer;

export const useCar = (state: RootState) => state.car.car;
export const useUpdate = (state: RootState) => state.car.updateCar;
export const filteredCars = (state: RootState) => state.car.filteredCars;