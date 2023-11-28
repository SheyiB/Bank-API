const CustomerService = require('../services/customer.service');

const Customer = new CustomerService();

module.exports.getAllCustomers = (req, res) => {
    try{
        const allCustomers = Customer.getCustomers();

        res.status(200).json(allCustomers);
    }

    catch(err){
        res.status(500).json({message: err.message})
    }
}