import React, { useState } from 'react';
import './PostVehicle.css'; // Import CSS file for styling
import NavigationBar from '../Components/NavigationBar/Navigation.jsx'; // Import the NavigationBar component
import axios from 'axios'; // Import axios for making HTTP requests
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const PostVehicle = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State to store the selected image file
  const [vehicleDetails, setVehicleDetails] = useState({ // State to store form input values
    VehicleNum: '',
    Type: '',
    Model: '',
    RegistrationNo: '',
    Features: '',
    PricePerDay: ''
  });

  const navigate = useNavigate(); // Use useNavigate instead of useHistory for navigation

  // Handle input change for form fields
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setVehicleDetails({ 
      ...vehicleDetails, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  // Handle image file selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('VehicleNum', vehicleDetails.VehicleNum);
      formData.append('Type', vehicleDetails.Type);
      formData.append('Model', vehicleDetails.Model);
      formData.append('RegistrationNo', vehicleDetails.RegistrationNo);
      formData.append('Features', vehicleDetails.Features);
      formData.append('PricePerDay', vehicleDetails.PricePerDay);
      formData.append('image', selectedImage); // Append the selected image file

      // Make POST request to backend API
      await axios.post('http://localhost:5001/api/v1/vehicle/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // Set content type to multipart/form-data for file upload
        }
      });

      // Log success message
      console.log('Vehicle details submitted:', vehicleDetails);

      // Navigate to login page after successful submission
      navigate('/ManageVehicles'); // Replace with the actual route to your login page
    } catch (error) {
      console.error('Error:', error);
      // Handle error: display message to user or log it
    }
  };

  return (
    <div>
      <NavigationBar /> {/* Render the NavigationBar component */}
      <div className="post-vehicle-page">
        <div className="vehicle-details1">
          <h2 className='heading-h2'>Add Vehicle Details</h2>
          <form className='form1' onSubmit={handleSubmit}>
            <div className="form-columns">
              <div className="form-column">
                {/* Vehicle ID input */}
                <div className="form-group">
                  <label htmlFor="vehicle-id">Vehicle ID:</label>
                  <input
                    type="text"
                    id="vehicle-id"
                    name="VehicleNum"
                    value={vehicleDetails.VehicleNum}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Model input */}
                <div className="form-group">
                  <label htmlFor="model">Model:</label>
                  <input
                    type="text"
                    id="model"
                    name="Model"
                    value={vehicleDetails.Model}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Vehicle Type input */}
                <div className="form-group">
                  <label htmlFor="vehicle-type">Vehicle Type:</label>
                  <textarea
                    id="vehicle-type"
                    name="Type"
                    value={vehicleDetails.Type}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                {/* Registration Number input */}
                <div className="form-group">
                  <label htmlFor="vehicle-number">Registration Number:</label>
                  <input
                    type="text"
                    id="vehicle-number"
                    name="RegistrationNo"
                    value={vehicleDetails.RegistrationNo}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-column">
                {/* Price Per Day input */}
                <div className="form-group">
                  <label htmlFor="price-per-day">Price Per Day:</label>
                  <input
                    type="text"
                    id="price-per-day"
                    name="PricePerDay"
                    value={vehicleDetails.PricePerDay}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Features input */}
                <div className="form-group">
                  <label htmlFor="features">Available Features:</label>
                  <input
                    type="text"
                    id="features"
                    name="Features"
                    value={vehicleDetails.Features}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Image file upload */}
                <div className="form-group">
                  <label htmlFor="add-image">Add Image:</label>
                  <input
                    type="file"
                    id="add-image"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  {/* Display image preview if an image is selected */}
                  {selectedImage && (
                    <div className="image-preview">
                      <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Submit button */}
            <button type="submit" className="save-button">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostVehicle;
