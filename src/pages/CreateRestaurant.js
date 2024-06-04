import React from 'react';
import RestaurantForm from '../components/RestaurantForm';

const CreateRestaurant = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Create Restaurant</h1>
            <RestaurantForm />
        </div>
    );
};

export default CreateRestaurant;
