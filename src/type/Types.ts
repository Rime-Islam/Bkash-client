export type TUser = {
  _id?: string;
  name: string;
  email: string;
  createPassword: string;
  confirmPassword: string;
  phone: string;
  address: string;
};

export type TCar = {
    _id?: string;
    name: string;
    type: ["SUV" | "Sedan" | "hybrid"];
    color: string;
    features: string[];
    description: string | FileList;
    pricePerHour: number;
    image: string;
    isElectric: boolean;
    status?: "available" | "unavailable";
    isDeleted?: boolean;
  };

  export interface Filters {
    carType: string;
    priceRange: [number, number];
    color: string;
    features: string[];
  }

  export interface CarState {
    car: TCar[];
    updateCar: TCar[];
    filteredCars: TCar[];
    filters: Filters;
  }