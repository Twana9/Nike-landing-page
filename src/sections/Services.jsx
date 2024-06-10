import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";
export default function Services() {
  return (
    <section
      className="flex flex-wrap justify-center items-center
             max-container w-full gap-10"
    >
      {services.map((service) => (
        <ServiceCard key={service.label} service={service} />
      ))}
    </section>
  );
}
