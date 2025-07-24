import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div>
      {/* SEO Helmet Meta Tags */}
      <Helmet>
        <title>About Us | Ganga Electrical & Hardwares</title>
        <meta
          name="description"
          content="Learn more about Ganga Electrical & Hardwares – trusted electrical and plumbing service providers in Bangalore offering affordable water pump and hardware solutions."
        />
        <link
          rel="preload"
          as="image"
          href="https://i.postimg.cc/j5H1CjWg/pexels-tomfisk-5115946.avif"
          type="image/avif"
          fetchPriority="high"
        />
      </Helmet>

      {/* Hero Banner */}
      <div
        className="relative bg-cover bg-center h-[75vh]"
        style={{ backgroundImage: "url('https://i.postimg.cc/0yHcTmc4/pexels-tomfisk-5115946.avif')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-end pb-24 h-full text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-2xl">
            Ganga Electrical & Hardwares offers the best plumbing and electrical sales in Bangalore.
          </p>
        </div>
      </div>

      {/* Reference Design Section */}
      {/* Changed py-20 to py-12 to make section smaller vertically */}
      <div className="bg-dark min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Empowering Homes & Businesses With{' '}
                <span className="text-accent">Reliable</span>{' '}
                <span className="text-accent">Plumbing</span> {' '}
                <span className="text-accent">Solutions</span>
              </h1>

              <div className="space-y-6 text-white">
                <p className="text-lg">
                  At Ganga Electrical & Hardwares, our mission is simple — to provide affordable, high-quality plumbing, water pump, and electrical services in Bangalore. With over a decade of hands-on experience, we've grown into a trusted name serving residential, commercial, and industrial clients alike.
                </p>

                <p className="text-lg">
                  Our dedicated team ensures every product we offer and every service we deliver meets the highest standards of trust, durability, and value. Bangalore’s Best Source for Pumps and Electrical Essentials.
                </p>
              </div>
            </div>

            {/* Right Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Experience Card */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 shadow-xl rounded-3xl p-8 text-center text-white">
                <div className="w-16 h-16 bg-blue-200/20 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <div className="w-8 h-8 border-2 border-cyan-400 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">10+ Years</div>
                <div className="text-white/80">Experience</div>
              </div>

              {/* Happy Clients Card */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 shadow-xl rounded-3xl p-8 text-center text-white">
                <div className="w-16 h-16 bg-yellow-100/10 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm shadow-inner">
                  <span className="text-yellow-300 text-2xl">👥</span>
                </div>
                <div className="text-3xl font-bold text-white mb-2">10,000+</div>
                <div className="text-white/80">Happy Clients</div>
              </div>

              {/* Guarantee Card */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 shadow-xl rounded-3xl p-8 text-center text-white">
                <div className="w-16 h-16 bg-green-100/10 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm shadow-inner">
                  <span className="text-green-300 text-2xl">🛡️</span>
                </div>
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-white/80">Guaranteed</div>
              </div>

              {/* Coverage Card */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 shadow-xl rounded-3xl p-8 text-center text-white">
                <div className="w-16 h-16 bg-purple-100/10 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm shadow-inner">
                  <span className="text-purple-300 text-2xl">📍</span>
                </div>
                <div className="text-3xl font-bold text-white mb-2">Best</div>
                <div className="text-white/80">In Bangalore</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Working Process Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-4">
              How We Work – <span className="text-primary">Simple</span>, <span className="text-accent">Transparent</span>, Effective
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures you get the best service experience from start to finish.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line between icons */}
            <div className="hidden lg:block absolute top-[50px] left-[10%] right-[10%] h-0.5 bg-accent z-0"></div>

            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 text-center relative z-10">
              {[
                { number: '01', icon: '🛒', title: 'Choose a Service', desc: 'Select plumbing, pump repair, or electrical services from our comprehensive catalog.' },
                { number: '02', icon: '📞', title: 'Free Consultation', desc: 'Call us or request an online estimate with full cost transparency.' },
                { number: '03', icon: '🚚', title: 'Quick Dispatch', desc: 'Our expert team reaches your doorstep at the scheduled time.' },
                { number: '04', icon: '🔧', title: 'Trusted Service', desc: 'We perform the task using quality parts and trusted practices.' },
                { number: '05', icon: '✅', title: 'Customer Satisfaction', desc: "We ensure you're satisfied before we leave your premises." }
              ].map((step, index) => (
                <div key={index} className="flex-1 relative">
                  <div className="relative mb-6 z-10">
                    <div className="w-20 h-20 bg-dark rounded-full flex items-center justify-center mx-auto text-2xl border-4 border-white shadow-lg">
                      {step.icon}
                    </div>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-5xl font-bold text-dark-1000 opacity-20">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-dark mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed px-2">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    {/* Service Coverage Section */}
<div className="bg-dark py-20">
  <div className="max-w-7xl mx-auto px-4 text-center">
    {/* Heading */}
    <div className="flex flex-col items-center mb-12">
      <div className="text-blue-600 text-5xl mb-3 animate-bounce">📍</div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
        We Proudly Serve All of <span className="text-accent">Bangalore</span>
      </h2>
      <p className="max-w-2xl text-white/90 text-lg">
        From Indiranagar to Whitefield, from homes to factories — Ganga Electrical & Hardwares is your reliable partner across Bangalore. Whether it's a plumbing emergency, electrical issue, or a water pump installation, we deliver fast, friendly, and affordable service.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      
      {/* Residential */}
      <div className="group bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 flex flex-col items-center shadow-2xl shadow-blue-500/30 transition duration-300 transform hover:scale-[1.03]">
        <div className="w-16 h-16 bg-blue-500/30 rounded-full flex items-center justify-center mb-5 shadow-lg shadow-blue-400/50">
          <span className="text-blue-300 text-3xl">💧</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2 text-blue-200 transition">Residential</h3>
        <p className="text-white/80 text-base text-center leading-relaxed">
          Tailored plumbing and electrical solutions for every home.
        </p>
      </div>

      {/* Commercial */}
      <div className="group bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 flex flex-col items-center shadow-2xl shadow-yellow-500/30 transition duration-300 transform hover:scale-[1.03]">
        <div className="w-16 h-16 bg-yellow-500/30 rounded-full flex items-center justify-center mb-5 shadow-lg shadow-yellow-400/50">
          <span className="text-yellow-200 text-3xl">⚙️</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2 text-yellow-100 transition">Commercial</h3>
        <p className="text-white/80 text-base text-center leading-relaxed">
          Efficient servicing for offices, shops, and business spaces.
        </p>
      </div>

      {/* Industrial */}
      <div className="group bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 flex flex-col items-center shadow-2xl shadow-green-500/30 transition duration-300 transform hover:scale-[1.03]">
        <div className="w-16 h-16 bg-green-500/30 rounded-full flex items-center justify-center mb-5 shadow-lg shadow-green-400/50">
          <span className="text-green-300 text-3xl">🛠️</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-100 transition">Industrial</h3>
        <p className="text-white/80 text-base text-center leading-relaxed">
          Solutions for warehouses and industries.
        </p>
      </div>
    </div>
  </div>
</div>


      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Ganga Electrical & Hardwares",
            "url": "https://gangapumps.com",
            "logo": "/new.avif",
            "sameAs": [
              "https://www.facebook.com/yourpage",
              "https://www.instagram.com/yourpage"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9986082495",
              "contactType": "Customer Service",
              "areaServed": "IN"
            }
          })
        }}
      />
    </div>
  );
};

export default About;
