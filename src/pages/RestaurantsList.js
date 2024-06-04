import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RestaurantItem from '../components/RestaurantItem';

const RestaurantsList = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        axios.get('/api/restaurants')
            .then(response => {
                setRestaurants(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the restaurants!', error);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`/api/restaurants/${id}`)
            .then(() => {
                setRestaurants(restaurants.filter(restaurant => restaurant._id !== id));
            })
            .catch(error => {
                console.error('There was an error deleting the restaurant!', error);
            });
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Restaurants</h1>
            <ul>
                {restaurants.map(restaurant => (
                    <RestaurantItem key={restaurant._id} restaurant={restaurant} onDelete={handleDelete} />
                ))}
            </ul>
        </div>
    );
};

export default RestaurantsList;
