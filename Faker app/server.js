const faker = require("faker");
const express = require("express");

const app=express();
const port = 8000;

const UserObj=()=>({
    _id: faker.datatype.uuid(),
    firstName: faker.name.first.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password(),
});
console.log(UserObj());

const companyObj = ()=>({
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
        stree: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zipcode: faker.address.zipCode(),
        country: faker.address.country(),
    }
});
console.log(companyObj());

app.get("/api/users/new", (req,res)=>{
    const newUser = UserObj();
    res.json(newUser);
})

app.get("/api/companies/new", (req,res)=>{
    const newCompany = companyObj();
    res.json(newCompany);
})

app.get("/api/user/company", (req,res)=>{
    const newUser = companyObj();
    const newCompany = companyObj();
    const callBoth= {
        user: newUser,
        company : newCompany,
    };
    res.json(callBoth);
})


app.listen(port,()=> console.log("Express Server Running on port ${port}"));


