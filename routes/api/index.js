const router = require('express').Router(); 
const userRoutes = require('./userRoutes'); 
const thoughtRoutes = require('./thoughtRoutes'); 

// Indicated which routes to use for the corresponding routes
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);


module.exports = router;