const servicesData = {
  residential: {
    title: "Residential Vastu",
    content: `
      <p>Residential Vastu aims to create a peaceful and prosperous living space by aligning your home with natural energies.</p>
      <h3>Key Areas We Focus On:</h3>
      <ul>
        <li>Main entrance direction</li>
        <li>Bedroom and kitchen placements</li>
        <li>Energy flow and ventilation</li>
        <li>Color therapy and elemental balance</li>
      </ul>
      <h3>Benefits:</h3>
      <ul>
        <li>Improved family relationships</li>
        <li>Better health and vitality</li>
        <li>Enhanced mental peace and sleep</li>
      </ul>
    `,
  },
  commercial: {
    title: "Commercial Vastu",
    content: `
      <p>Maximize your business success by optimizing your office or commercial space with Vastu principles.</p>
      <h3>What We Analyze:</h3>
      <ul>
        <li>Office entrance and reception layout</li>
        <li>Employee seating arrangements</li>
        <li>Placement of lockers, machines, and workstations</li>
      </ul>
      <h3>Why It Works:</h3>
      <ol>
        <li>Boosts productivity and focus</li>
        <li>Improves financial flow and stability</li>
        <li>Reduces internal conflicts and stress</li>
      </ol>
    `,
  },
  remedies: {
    title: "Vastu Remedies",
    content: `
      <p>Simple, non-destructive solutions to correct Vastu defects without demolition.</p>
      <h3>Common Remedies We Use:</h3>
      <ul>
        <li>Mirrors to redirect energy</li>
        <li>Pyramids for energetic balance</li>
        <li>Color adjustments based on direction</li>
        <li>Use of crystals, metals, and yantras</li>
      </ul>
      <h3>Advantages:</h3>
      <ul>
        <li>No structural changes needed</li>
        <li>Immediate energetic results</li>
        <li>Budget-friendly corrections</li>
      </ul>
    `,
  },
  consultation: {
    title: "Vastu Consultation",
    content: `
      <p>Expert guidance for new constructions, renovations, or energy corrections.</p>
      <h3>Consultation Includes:</h3>
      <ul>
        <li>On-site or remote analysis</li>
        <li>Detailed Vastu report</li>
        <li>Customized action plan</li>
        <li>Support during implementation</li>
      </ul>
      <h3>Recommended For:</h3>
      <ol>
        <li>New homeowners</li>
        <li>Renovating or shifting properties</li>
        <li>Business owners setting up new space</li>
      </ol>
    `,
  },
  fengshui: {
    title: "Feng Shui Integration",
    content: `
      <p>Combining Vastu with Feng Shui to harmonize energy on both Indian and Chinese principles.</p>
      <h3>We Integrate:</h3>
      <ul>
        <li>Bagua map overlays with Vastu zones</li>
        <li>Use of five elements (Wood, Fire, Earth, Metal, Water)</li>
        <li>Yin-Yang balancing in space layout</li>
      </ul>
      <h3>Special Tools:</h3>
      <ul>
        <li>Lucky bamboo, wind chimes, money frog</li>
        <li>Water fountains and mirrors</li>
        <li>Directional cures using color and placement</li>
      </ul>
    `,
  },
  education: {
    title: "Vastu Education",
    content: `
      <p>We offer practical and theoretical training to empower future Vastu consultants and enthusiasts.</p>
      <h3>Courses Offered:</h3>
      <ul>
        <li>Basic Vastu Foundation Course</li>
        <li>Advanced Scientific Vastu</li>
        <li>Vastu for Architects and Interior Designers</li>
      </ul>
      <h3>Learning Benefits:</h3>
      <ol>
        <li>Certified training with practical examples</li>
        <li>Opportunity to consult clients professionally</li>
        <li>Insights into both traditional and modern techniques</li>
      </ol>
    `,
  },
};

// Get URL parameter
function getServiceFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("service");
}

// Load content
function loadServiceContent() {
  const serviceKey = getServiceFromURL();
  const service = servicesData[serviceKey];

  if (!service) {
    document.getElementById("service-title").textContent = "Service Not Found";
    document.getElementById("service-content").innerHTML = "<p>Please go back and select a valid service.</p>";
    return;
  }

  document.getElementById("service-title").textContent = service.title;
  document.getElementById("service-content").innerHTML = service.content;
}

document.addEventListener("DOMContentLoaded", loadServiceContent);
