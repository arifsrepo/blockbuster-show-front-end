import React from 'react';
import useServices from '../hooks/useServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const services = useServices();
    return (
        <>
        <br />
        <br />
            <div className="service">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </>
    );
};

export default Services;