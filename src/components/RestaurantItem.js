import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantItem = ({ restaurant, onDelete }) => {
    return (
        <li className="mb-2">
            {restaurant.name} - {restaurant.address} - {restaurant.telephone}
            <Link to={`/restaurants/${restaurant._id}`} className="text-blue-500 ml-2">View</Link>
            <Link to={`/restaurants/edit/${restaurant._id}`} className="text-yellow-500 ml-2">Edit</Link>
            <button onClick={() => onDelete(restaurant._id)} className="text-red-500 ml-2">Delete</button>
        </li>
    );
};

export default RestaurantItem;
