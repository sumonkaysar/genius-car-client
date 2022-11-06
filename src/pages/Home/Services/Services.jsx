import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => setServices(data));
  }, []);

  return (
    <div className="mb-32">
      <div className="text-center w-3/4 md:w-1/2 mx-auto">
        <p className="text-2xl font-bold text-orange-600 mb-4">Services</p>
        <h2 className="text-5xl font-semibold mb-5">Our Service Area</h2>
        <p className="mb-8">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          services.map(service => <ServiceCard
            key={service._id}
            service={service}
          />)
        }
      </div>
    </div>
  );
}

export default Services;
