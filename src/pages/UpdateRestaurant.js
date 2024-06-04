import React from 'react';
import RestaurantForm from '../components/RestaurantForm';
import { useParams } from 'react-router-dom';

const UpdateRestaurant = () => {
    const { id } = useParams();

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Update Restaurant</h1>
            <RestaurantForm id={id} isEdit={true} />
        </div>
    );
};

export default UpdateRestaurant;
