import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <div>
            <div className="text-center mb-6">

                <h2 className="text-xl text-[#FF3811] font-bold">Services</h2>

                <h1 className="text-5xl font-bold width-[376px] mt-5">Our Service Area</h1>

                <p className="mt-5">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {services.map(service => <ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)}
            </div>

        </div>
    );
};

export default Services;