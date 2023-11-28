class CustomerService{

    getCustomers(){
        return [{
            id: 1,
            name: 'John'
        },{
            id: 2,
            name: 'Mary'
        },{
            id: 3,
            name: 'Peter'
        }]
    }

    getCustomer(){
        return {
            id: 1,
            name: 'John'
        }
    }

    updateCustomer(){
        return {
            id: 1,
            name: 'John Lake'
        }
    }

    deleteCustomer(){
        return 'Customer deleted'
    }
}

module.exports = CustomerService;