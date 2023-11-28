const express = require('express');

const customerRoutes = require('./routes/customer.routes');
const app = express();

app.use(express.json())
app.use('/api/customers', customerRoutes);

app.listen(8080, ()=>{
    console.log('Server is running on port 8080')
})