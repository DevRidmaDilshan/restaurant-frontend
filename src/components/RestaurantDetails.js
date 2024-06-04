import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RestaurantDetails = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        axios.get(`/api/restaurants/${id}`)
            .then(response => {
                setRestaurant(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the restaurant details!', error);
            });
    }, [id]);

    if (!restaurant) return <div>Loading...</div>;

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">{restaurant.name}</h1>
            <p><strong>Address:</strong> {restaurant.address}</p>
            <p><strong>Telephone:</strong> {restaurant.telephone}</p>
        </div>
    );
};

export default RestaurantDetails;
