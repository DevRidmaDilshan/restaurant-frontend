import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RestaurantForm = ({ id, initialData = { name: '', address: '', telephone: '' }, isEdit = false }) => {
    const [formData, setFormData] = useState(initialData);
    const navigate = useNavigate();

    useEffect(() => {
        if (isEdit && id) {
            axios.get(`/api/restaurants/${id}`)
                .then(response => {
                    setFormData(response.data);
                })
                .catch(error => {
                    console.error('There was an error fetching the restaurant details!', error);
                });
        }
    }, [id, isEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const request = isEdit
            ? axios.put(`/api/restaurants/${id}`, formData)
            : axios.post('/api/restaurants', formData);

        request.then(() => {
            navigate('/');
        }).catch(error => {
            console.error(`There was an error ${isEdit ? 'updating' : 'creating'} the restaurant!`, error);
        });
    };

    return (
        <form onSubmit={handleSubmit} className="container mx-auto">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Telephone</label>
                <input
                    type="text"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                {isEdit ? 'Update' : 'Create'}
            </button>
        </form>
    );
};

export default RestaurantForm;
