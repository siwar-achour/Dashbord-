const Ride = require('../model/Ride');


// ...

// Add new ride
const ride_create = async (req, res) => {
  const ride = new Ride({
    id: req.body.id,
    name: req.body.name,
    theoretical_price: req.body.theoretical_price,
    cost: req.body.cost,
    date: req.body.date,
    time: req.body.time,
    vehicleId: req.body.vehicleId,
    pickAddress: req.body.pickAddress,
    dropAddress: req.body.dropAddress
  });

  try {
    const savedRide = await ride.save();
    res.send(savedRide);
  } catch (error) {
    res.json({ message: error });
  }
};

// Get all rides
const ride_all = async (req, res) => {
  try {
    const rides = await Ride.find();
    res.json(rides);
  } catch (error) {
    res.json({ message: error });
  }
};

// Single ride
const ride_details = async (req, res) => {
  try {
    const ride = await Ride.findById(req.params.rideId);
    res.json(ride);
  } catch (error) {
    res.json({ message: error });
  }
};

// Update ride
const ride_update = async (req, res) => {
  try {
    const ride = {
      id: req.body.id,
      name: req.body.name,
      theoretical_price: req.body.theoretical_price,
      cost: req.body.cost,
      date: req.body.date,
      time: req.body.time,
      vehicleId: req.body.vehicleId,
      pickAddress: req.body.pickAddress,
      dropAddress: req.body.dropAddress
    };

    const updatedRide = await Ride.findByIdAndUpdate(
      { _id: req.params.rideId },
      ride
    );
    res.json(updatedRide);
  } catch (error) {
    res.json({ message: error });
  }
};

// Delete ride
const ride_delete = async (req, res) => {
  try {
    const removedRide = await Ride.findByIdAndDelete(req.params.rideId);
    res.json(removedRide);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
 
  ride_create,
  ride_all,
  ride_details,
  ride_update,
  ride_delete
};
