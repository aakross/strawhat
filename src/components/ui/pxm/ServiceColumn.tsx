import type { ServiceItem } from "../../../hooks/useServices";

interface ServiceColumnProps {
  items: ServiceItem[];
  className?: string;
}

export const ServiceColumn = ({
  items,
  className = "",
}: ServiceColumnProps) => (
  <div className={`flex flex-col space-y-4 md:space-y-6 ${className}`}>
    {items.map((item, index) => (
      <div
        key={index}
        className="flex items-center space-x-3 md:space-x-4 group hover:scale-105 transition-transform duration-300"
      >
        <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-colors">
          <img
            src={item.icon}
            alt={item.text}
            className="w-6 h-6 md:w-10 md:h-10 object-contain"
          />
        </div>
        <span className="text-white font-montserrat text-sm md:text-base lg:text-lg font-medium drop-shadow-md">
          {item.text}
        </span>
      </div>
    ))}
  </div>
);
