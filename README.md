# Apartment Listings : Backend

This is the Express backend for my fake Boston apartments listing web application. This is a simple REST API connected to a MongoDB cluster. There are 5 endpoints for basic CRUD operations on Apartments in the database.

```
An Apartment is a
{
  name: { type: String, required: true },
  address: { type: String, required: true },
  neighborhood: { type: String, required: true },
  description: { type: String, required: true },
  rent: { type: Number, required: true },
  date: { type: Date, required: true },
  reviews: { type: [Review], required: true }
}
```

```
A Review is a
{
  username: { type: String, required: true },
  rating: { type: Number, required: true },
  comments: { type: String, required: true }
}
```

API Endpoints:

- Create: POST https://apartment-listing-backend.herokuapp.com/apartments/create
- Find All: GET https://apartment-listing-backend.herokuapp.com/apartments
- Find By ID: GET https://apartment-listing-backend.herokuapp.com/apartments/:id
- Update: POST https://apartment-listing-backend.herokuapp.com/apartments/update/:id
- Delete: DELETE https://apartment-listing-backend.herokuapp.com/apartments/delete:id
