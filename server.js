
const express = require('express');
const bodyParser = require('body-parser');
const blogRoutes = require('./routes/blogRoutes');
const miceRoutes = require('./routes/miceRoutes'); 
const transferRoutes = require('./routes/transferRoutes'); 
const thingsToDoRoutes = require('./routes/thingsToDoRoutes'); 
const oneDayTourPackageRoutes = require('./routes/oneDayTourPackageRoutes');
const user_routes = require('./routes/userRoutes');
const newTransferInfoRoutes = require('./routes/newTransferInfoRoutes');
const travelPackage  = require('./routes/travelPackageRoutes');
const bookingRoutes = require('./routes/bookingRoutes'); 
const userRequestRoutes  = require('./routes/userRequestRoutes'); 
const ratingRoutes = require('./routes/ratingRoutes');
const CountryRoutes = require('./routes/CountryRoutes');
const seasonRoutes = require('./routes/seasonRoutes');
const discountInfoRoutes = require('./routes/discountInfoRoutes');
const categoryInfoRoutes = require('./routes/categoryInfoRoutes');
const bookRequestRoutes = require('./routes/bookRequest');




const app = express();
app.use(bodyParser.json());


app.use('/uploads', express.static('blogUploads'));
app.use('/miceUploads', express.static('miceUploads'));
app.use('/api', blogRoutes);
app.use('/api', miceRoutes);
app.use('/api', transferRoutes); 
app.use('/api', thingsToDoRoutes);
app.use('/api', oneDayTourPackageRoutes);
app.use('/api', user_routes);
app.use('/api', newTransferInfoRoutes);
app.use('/api', travelPackage);
app.use('/api', bookingRoutes);
app.use('/api', userRequestRoutes);
app.use('/api', ratingRoutes);
app.use('/api', CountryRoutes);
app.use('/api/seasons', seasonRoutes);
app.use('/api/discountInfos', discountInfoRoutes);
app.use('/api', categoryInfoRoutes);
app.use('/api', bookRequestRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
