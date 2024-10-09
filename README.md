# [Car Rental reservation](https://empty-oven.surge.sh/)

This is a Car Booking System web application built using **React**, **Vite**, **TypeScript**, **Redux**, and **Tailwind CSS**. The system includes features like user authentication, car listing, car booking, admin and user dashboards, and more.

## Features

- **Car Listing & Details:** Users can browse through available cars and view detailed information.
- **User Authentication:** Includes login and signup pages for user access.
- **Booking System:** Users can book cars and manage their bookings through a personal dashboard.
- **Admin Panel:** Admins can manage users, car listings, and bookings.
- **Protected Routes:** Certain routes (like booking and admin dashboard) are protected and can only be accessed by logged-in users.
- **Responsive Design:** The UI is fully responsive, built using **Tailwind CSS** to provide a smooth user experience on all devices.

## Routes

The application follows a modular route structure using **react-router-dom** and includes the following routes:

- **/**: Home Page
- **/cars**: Lists all available cars for booking.
- **/cars/:carId**: View detailed information about a specific car.
- **/about**: Displays company information.
- **/terms**: View the privacy policy.
- **/contact**: Contact page for inquiries.
- **/login**: User login page.
- **/register**: User registration page.
- **/booking**: Booking form (Protected route).
- **/booking-confirmation**: Booking confirmation page (Protected route).
- **/admin_statistics**: Admin dashboard (Protected route).
- **/user_management**: User profile update page (Protected route).

## Admin and User Routes

- **Protected routes** are managed with the `ProtectedRoute` component to ensure only logged-in users can access specific pages.

## Installation

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/bashputi/car_rental_reservation-frontend.git
    cd car-booking-system
    ```

2. Install dependencies:

    ```bash
    npm install
    # or, if you are using yarn
    yarn install
    ```

3. Create an `.env` file in the root directory and add the required environment variables:

    ```env
    DB_URL=your-api-base-url
    VITE_OTHER_ENV_VARIABLE=your-other-env-value
    ```

## Scripts

Here are the available scripts you can run:

- **Development:** Start the development server:

    ```bash
    npm run dev
    ```



## Technologies Used

The project uses the following key dependencies:

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web development.
- **Redux Toolkit**: For efficient state management.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React Router**: A library for managing client-side routing.
- **AOS**: A library for creating animations.

