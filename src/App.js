import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RestaurantsList from './pages/RestaurantsList';
import RestaurantDetails from './components/RestaurantDetails';
import CreateRestaurant from './pages/CreateRestaurant';
import UpdateRestaurant from './pages/UpdateRestaurant';
import './App.css';

const App = () => {
  return (
      <Router>
          <div>
              <Routes>
                    <Route path="/" element={<RestaurantsList />} />
                    <Route path="/restaurants/new" element={<CreateRestaurant />} />
                    <Route path="/restaurants/edit/:id" element={<UpdateRestaurant />} />
                    <Route path="/restaurants/:id" element={<RestaurantDetails />} />
              </Routes>
          </div>
      </Router>
  );
};

export default App;