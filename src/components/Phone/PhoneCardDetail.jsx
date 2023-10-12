import phonesData from "../../phones-data.json";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function PhoneCardDetail(props) {
  const [foundPhone, setFoundPhone] = useState(null);
  const { phoneId } = useParams();

  useEffect(() => {
    const phoneIdNumber = parseInt(phoneId);
    const phone = phonesData.find((onePhone) => {
      return onePhone.id === phoneIdNumber;
    });
    if (phone) {
      setFoundPhone(phone);
    }
  }, [phoneId]);
  return (
    <div className="container mx-auto py-8">
      <h3 className="text-2xl font-semibold mb-4">Phone Details</h3>
      {!foundPhone && <h3>Phone doesn't Exist!</h3>}

      {foundPhone && (
        <div className="phone-detail-card bg-white rounded-lg shadow-lg p-4">
          <h4 className="text-lg font-semibold">
            {foundPhone.brand} - {foundPhone.model}
          </h4>
          <div className="flex justify-center items-center">
            <img
              width={200}
              src={foundPhone.image}
              alt="phone"
              className="w-64 h-64 object-contain"
            />
          </div>
          <p className="text-gray-600">Price: ${foundPhone.price}</p>
          <p className="text-gray-600">Year: {foundPhone.year}</p>
          <p className="text-gray-600">Description: {foundPhone.description}</p>
          <Link to="/phones">Back To Phones</Link>
        </div>
      )}
    </div>
  );
}

export default PhoneCardDetail;
