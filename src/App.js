import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './App.css';

const App = () => {
  const [state, setState] = useState({
    basement_square_footage: '',
    first_floor_square_footage: '',
    front_yard_lot_size: '',
    full_bathrooms: '',
    garage_square_footage: '',
    house_id: '',
    living_area_square_footage: '',
    lot_size: '',
    masonry_veneer_square_footage: '',
    number_cars_in_garage: '',
    quality_of_materials: '',
    second_floor_square_footage: '',
    type_1_square_footage: '',
    year_built: '',
    year_garage_built: '',
    year_remodeled: '',
  });

  const handleState = (e, key) => {
    setState((prev) => {
      prev[key] = e.target.value;
      return { ...prev };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: process.env.REACT_APP_API_KEY,
        features: [state],
        include_features: false,
        model: 'custom_prediction_regression_1647828889618',
        version: '1',
      }),
    };

    fetch('https://api.mage.ai/v1/predict', requestOptions)
      .then((response) => response.json())
      .then((data) => alert(`Prediction: $${data[0].prediction.toFixed(2)}`));
  };

  return (
    <div className="d-flex justify-content-center">
      <div>
        <h1>Mage Demo</h1>
        <h2>Housing Price Prediction</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Basement Square Footage</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Basement Square Footage"
              onChange={(e) => handleState(e, 'basement_square_footage')}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>First Floor Square Footage</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Floor Square Footage"
              onChange={(e) => handleState(e, 'first_floor_square_footage')}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Front Yard Lot Size</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Front Yard Lot Size"
              onChange={(e) => handleState(e, 'front_yard_lot_size')}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Full Bathrooms</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Number of Full Bathrooms"
              onChange={(e) => handleState(e, 'full_bathrooms')}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Garage Square Footage</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Garage Square Footage"
              onChange={(e) => handleState(e, 'garage_square_footage')}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>House ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter House ID"
              onChange={(e) => handleState(e, 'house_id')}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Living Area Square Footage</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Area Square Footage"
              onChange={(e) => handleState(e, 'living_area_square_footage')}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Lot Size</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Area Square Footage"
              onChange={(e) => handleState(e, 'lot_size')}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Masonry VEneer Square Footage</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Masonry Veneer Square Footage"
              onChange={(e) => handleState(e, 'masonry_veneer_square_footage')}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Number of Cars in Garage</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Number of Cars in Garage"
              onChange={(e) => handleState(e, 'number_cars_in_garage')}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Quality of Materials</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Quality of Materials"
              onChange={(e) => handleState(e, 'quality_of_materials')}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Second Floor Square Footage</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Second Floor Square Footage"
              onChange={(e) => handleState(e, 'second_floor_square_footage')}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Type 1 Square Footage</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Type 1 Square Footage"
              onChange={(e) => handleState(e, 'type_1_square_footage')}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Year Built</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Year Built"
              onChange={(e) => handleState(e, 'year_built')}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Year Garage Built</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Year Garage Built"
              onChange={(e) => handleState(e, 'year_garage_built')}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Year Remodeled</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Year Remodeled"
              onChange={(e) => handleState(e, 'year_remodeled')}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default App;
