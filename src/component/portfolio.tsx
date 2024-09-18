
// /component/portfolio.tsx

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio py-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">My Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="portfolio-item bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-3">Project 1</h3>
          <p className="text-gray-600">Description of project 1.</p>
        </div>
        <div className="portfolio-item bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-3">Project 2</h3>
          <p className="text-gray-600">Description of project 2.</p>
        </div>
        <div className="portfolio-item bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-3">Project 3</h3>
          <p className="text-gray-600">Description of project 3.</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
  