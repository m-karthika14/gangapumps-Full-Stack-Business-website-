import { Link } from 'react-router-dom';

const PressureSection = () => {
  return (
    <div className="w-full bg-white">
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="max-w-3xl mx-auto text-dark">
          <div className="w-20 h-1 bg-accent rounded mb-6" />
          <h2 className="text-2xl font-bold mb-4 font-playfair">
            <Link to="/booster-pumps-bangalore" className="no-underline text-inherit">Pressure Booster Pumps in Bangalore</Link>
          </h2>
          <p className="text-base leading-relaxed mb-6">
            Low water pressure is a common problem in <Link to="/booster-pump-for-building" className="text-accent">multi-storey</Link>
            {' '}
            <Link to="/booster-pump-for-apartment" className="text-accent">buildings in Bangalore</Link>. Our <Link to="/booster-water-pump" className="text-accent">booster pumps</Link> and <Link to="/booster-pump-for-house" className="text-accent">pressure pumps</Link> help maintain
            consistent water flow across all floors.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 font-playfair">
            <Link to="/grundfos-pump-dealer-bangalore" className="no-underline text-inherit">Grundfos Pressure Pumps Dealer in Bangalore</Link>
          </h2>
          <p className="text-base leading-relaxed mb-6">
            We are trusted suppliers of <Link to="/grundfos-pressure-pumps" className="text-accent">Grundfos pressure pumps</Link> including SCALA and
            booster pump systems designed for residential and commercial water supply.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 font-playfair">Looking for Pressure Pumps Near Me?</h2>
          <p className="text-base leading-relaxed">
            If you are searching for <Link to="/grundfos-water-pressure-pump" className="text-accent">pressure pumps near me</Link> in Bangalore,
            Ganga Electrical & Hardwares provides <Link to="/grundfos-scala-pump" className="text-accent">high quality pumps</Link> with <Link to="/grundfos-booster-pump" className="text-accent">expert guidance</Link>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PressureSection;
