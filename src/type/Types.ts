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
    description: string ;
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

  export interface Booking {
    id: string;
    date: string;
    time: string;
    status: "canceled" | "confirmed" | "pending";
    approved: boolean;
  }

  export type TBookingForm = {
    _id?: string;
    nidOrPassport: string;
    drivingLicense: string;
    cardNumber: string;
    exprirationDate: string;
    cvv: string;
    startTime: string;
  }

  export type TBook = {
    _id?: string;
    user?: string;
    carId?: string;
    endTime?: string;
    totalCost?: number;
    isBooked?: "unconfirmed" | "confirmed";
    isDeleted?: boolean;
    payment?: TBookingForm;
  }

  export interface BookingState {
    bookings: Booking[];
    booked: TBook[];
    returnCar: TBook[];
    bookedCar: TBookingForm[];
    confirmBooking: unknown;
    paymentInfo: unknown;
  }


