import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// Props: service { icon, title, tagline, desc, methods?, areas?, targets?, includes?, types?, prep?, additional?, items?, assurances?, longDesc }
const ServiceCard = ({ service }) => {
  const Icon = service.icon;
  const [expanded, setExpanded] = useState(false);
  const toggle = () => setExpanded(prev => !prev);

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        {Icon && <Icon className="text-teal-light" size={24} />}
        <h3 className="text-xl font-semibold text-white">{service.title}</h3>
        <button onClick={toggle} className="text-teal-light focus:outline-none">
          {expanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      <p className="text-sm text-gray-300 mb-2">{service.tagline}</p>
      {expanded && (
        <div className="mt-2 text-gray-200 text-sm space-y-2">
          {service.desc && <p>{service.desc}</p>}
          {service.methods && (
            <div>
              <strong className="text-teal-300">Methods:</strong>
              <ul className="list-disc list-inside">
                {service.methods.normal && service.methods.normal.map((m, i) => (<li key={"n" + i}>{m}</li>))}
                {service.methods.deep && service.methods.deep.map((m, i) => (<li key={"d" + i}>{m}</li>))}
              </ul>
            </div>
          )}
          {service.types && (
            <div>
              <strong className="text-teal-300">Types:</strong>
              <ul className="list-disc list-inside">
                {service.types.map((t, i) => (<li key={i}>{t}</li>))}
              </ul>
            </div>
          )}
          {service.items && (
            <div>
              <strong className="text-teal-300">Items:</strong>
              <ul className="list-disc list-inside">
                {service.items.map((iItem, i) => (<li key={i}>{iItem}</li>))}
              </ul>
            </div>
          )}
          {service.assurances && (
            <div>
              <strong className="text-teal-300">Assurances:</strong>
              <ul className="list-disc list-inside">
                {service.assurances.map((a, i) => (<li key={i}>{a}</li>))}
              </ul>
            </div>
          )}
          {service.longDesc && <p>{service.longDesc}</p>}
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
