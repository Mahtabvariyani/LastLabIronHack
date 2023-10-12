import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PhoneCard(props) {
  
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    setPhones(props.phones);
  }, [props.phones]);


  return (
    <div className="container mx-auto py-8">
      <h3 className="text-2xl font-semibold mb-4">Phones</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {phones.map((phone) => {
          console.log(phone)
          return (
            <div
              key={phone.id}
              className="phone-card bg-white rounded-lg shadow-lg p-4"
            >
              <h4 className="text-lg font-semibold">{phone.brand}</h4>
              <img
                src={phone.image}
                alt="phone"
                className="my-2 w-full h-40 object-cover"
              />
              <p className="text-gray-600">${phone.price}</p>
              <p className="text-gray-600">{phone.model}</p>
              <p className="text-gray-600">
                <Link to={`/phones/${phone.id}`}>More</Link>
            {    console.log(phone.id)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PhoneCard;
