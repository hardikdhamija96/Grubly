const express = require('express');
const cors = require('cors');
const fetch = require('cross-fetch');

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.use(cors());

app.get('/', (req, res) => { 
    res.json({"test":"Hi! What do you want to order?"});
  }
)

// creating api endpoint for restaurant using lat and lang

app.get('/api/restaurants', (req, res) => {
    const { lat, lng } = req.query;
    console.log(req.query);
    const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}`;

    // https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3131722&lng=76.38462179999999
  
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        res.json(data);
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('An error occurred');
      });
  });

  // creating api endpoint for restaurant with id

  
  app.get('/api/restaurants/restaurantDetail', (req, res) => {
    const { lat, lng, resId } = req.query;
    console.log(req.query);
    const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${resId}`;

    // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3131722&lng=76.38462179999999&restaurantId=147375
  
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        res.json(data);
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('An error occurred');
      });
  });