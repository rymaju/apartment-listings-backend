const router = require("express").Router();
let Apartment = require("../models/apartment.model");

router.route("/").get((req, res) => {
  Apartment.find()
    .then(apartments => res.json(apartments))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/create").post((req, res) => {
  const name = req.body.name;
  const address = req.body.address;
  const neighborhood = req.body.neighborhood;
  const description = req.body.description;
  const rent = req.body.rent;
  const date = Date.parse(req.body.date);
  const reviews = req.body.reviews;

  const newApartment = new Apartment({
    name,
    address,
    neighborhood,
    description,
    rent,
    date,
    reviews
  });

  newApartment
    .save()
    .then(() => res.json("Apartment added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Apartment.findById(req.params.id)
    .then(apartment => res.json(apartment))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/delete/:id").delete((req, res) => {
  Apartment.findByIdAndDelete(req.params.id)
    .then(() => res.json("Apartment deleted."))
    .catch(err => res.status(400).json("Error " + err));
});

router.route("/update/:id").post((req, res) => {
  Apartment.findById(req.params.id)
    .then(apartment => {
      apartment.name = req.body.name;
      apartment.address = req.body.address;
      apartment.neighborhood = req.body.neighborhood;
      apartment.description = req.body.description;
      apartment.rent = req.body.rent;
      apartment.date = Date.parse(req.body.date);
      apartment.reviews = req.body.reviews;
      apartment
        .save()
        .then(() => res.json("Exercise updated."))
        .catch(err => res.status(400).json("Error " + err));
    })
    .catch(err => res.status(400).json("Error " + err));
});

module.exports = router;
