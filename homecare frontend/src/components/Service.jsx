import React from "react";
import { ourServices, nursingHomeCareServices, otherServices } from "../assets/service";

const Service = () => {
  return (
    <section className="section">
      <h2 className="section-title">Services</h2>
      <div className="services grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap3 py-6 px-3">
        <div className="flex flex-col gap-2 ">
       <h3 className="text-dblue text-lg font-black md:text-2xl text-center">Our Services</h3>
          {ourServices.map((service, index) => (
            <div key={index} className="p-6 hover:shadow-lg bg-slate-50/60 shadow-md">
              <h3 className="font-bold text-lg md:text-xl ">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 ">
        <h3 className="text-dblue text-lg font-black md:text-2xl text-center">Other Services</h3>
          {otherServices.map((service, index) => (
            <div key={index} className="p-6 hover:shadow-lg bg-slate-50/60 shadow-md">
              <h3 className="font-bold text-lg md:text-xl ">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 ">
        <h3 className="text-dblue text-lg font-black md:text-2xl text-center">Nursing Home Care Services</h3>
          {nursingHomeCareServices.map((service, index) => (
            <div key={index} className="p-6 hover:shadow-lg bg-slate-50/60 shadow-md">
              <h3 className="font-bold text-lg md:text-xl ">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
