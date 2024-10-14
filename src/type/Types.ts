export type TUser = {
  _id?: any;
  name: string;
  email: string;
  role?: string;
  createPassword: string;
  confirmPassword: string;
  phone: string;
  address: string;
  status?: string
};

export type TCar = {
    _id?: any;
    name: string;
    type: ["SUV" | "Sedan" | "hybrid"];
    color: string;
    features: string[];
    description: string ;
    pricePerHour: number;
    image: any;
    isElectric: boolean | string;
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
    _id?: string | undefined | any;
    user?: TUser;
    carId?: TCar;
    endTime?: string;
    totalCost?: number;
    isBooked?: "unconfirmed" | "confirmed" | "canceled";
    isDeleted?: boolean;
    payment?: TBookingForm;
    paymentStatus?: string;
  }

  export interface BookingState {
    bookings: Booking[];
    booked: TBook[];
    returnCar: TBook[];
    bookedCar: TBookingForm[];
    confirmBooking: unknown;
    paymentInfo: unknown;
  }


