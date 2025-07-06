import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Kieran Venison",
  description:
    "Learn more about Kieran Venison - Senior Developer with over 10 years of experience building digital products",
};

const career_list = [
  {
    name: "LITTLE JOURNEY",
    title: "Senior Software Engineer",
    date: "2024 - Current",
  },

  {
    name: "BOURNE LEISURE LTD",
    title: "Senior Software Engineer",
    date: "2022 - 2024",
    description:
      "Led experimentation and optimisation efforts across the checkout domain of major UK holiday brands (Haven, Butlins). Orchestrated large-scale A/B testing programs and embedded data-informed decision-making across squads, significantly improving conversion and revenue metrics.",
  },

  {
    name: "GYMSHARK",
    title: "Senior Software Engineer",
    date: "2021 - 2022",
    description:
      "Engineered scalable, high-performance features on a global ecommerce platform during peak growth periods. Worked closely with product, design, and performance teams to deliver rapid iterations across the storefront, improving page performance, user experience, and commercial KPIs.",
  },

  {
    name: "LOCALHOST DEVELOPMENT",
    title: "Co-founder",
    date: "2021 - Current",
    description:
      "Bootstrapped a digital product and consulting company, initially as a freelance vehicle but now encompassing multiple ventures. Built and validated SaaS concepts, managed contractors, and operated across technical, product, and business strategy.",
  },

  {
    name: "MOJO MORTGAGES",
    title: "Senior Software Engineer",
    date: "2021",
    description:
      "Redesigned and rebuilt core customer-facing experiences to streamline the mortgage application process. Focused on performance, accessibility, and modern UI patterns while also improving engineering velocity through better tooling and architecture.",
  },

  {
    name: "AND DIGITAL",
    title: "Consultant Product Developer",
    date: "2019 - 2021",
    description:
      "Delivered product-focused software solutions for high-profile clients across fintech, healthcare, and leisure sectors. Introduced agile frameworks, coached in-house teams, and consistently turned around underperforming projects through a blend of engineering rigour and product empathy.",
  },

  {
    name: "SORTED",
    title: "Frontend Developer",
    date: "2018 - 2019",
    description:
      "Developed data-rich logistics dashboards using React, driving operational insights for B2B clients. Replatformed the public-facing website to a performant, statically generated stack using Gatsby, significantly improving load times and SEO outcomes.",
  },

  {
    name: "CARFINANCE 247",
    title: "Frontend Developer",
    date: "2015 - 2018",
    description:
      "Owned and evolved a wide portfolio of digital products including websites, customer portals, and internal tooling. Delivered features across acquisition, onboarding, and servicing journeys, driving direct impact on lead conversion and customer retention.",
  },

  {
    name: "DIVERSITY TRAVEL",
    title: "Junior Web Developer",
    date: "2014 - 2015",
    description:
      "Rebuilt the company intranet using custom WordPress solutions. Took ownership of SEO performance for external websites, applying technical optimisations that led to improved rankings and traffic. Stack included PHP, MySQL, Apache, and legacy systems.",
  },

  {
    name: "WEB APPLICATIONS UK",
    title: "Apprentice Developer",
    date: "2013 - 2014",
    description:
      "Completed a full-stack apprenticeship, developing production-grade software in ASP.NET, C#, SQL, and JavaScript. Gained foundational skills in enterprise-grade software delivery and team collaboration.",
  },
];

const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "React Native",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML/CSS",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "REST APIs", "GraphQL"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "CI/CD", "Git"],
  },
  {
    category: "Tools & Methods",
    items: [
      "Agile",
      "Scrum",
      "TDD",
      "Performance Optimization",
      "SEO",
      "Figma",
    ],
  },
];

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="generic-container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm a Manchester-based developer with over{" "}
              {new Date().getFullYear() - 2013} years of experience building
              digital products that drive business growth and user satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-50 dark:bg-gray-900/50 py-16 md:py-24">
        <div className="generic-container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Technical Expertise
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                JavaScript/TypeScript specialist with deep experience across the
                full development stack, Heres a few of the highlights.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {skills.map((skillGroup) => (
                <div
                  key={skillGroup.category}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
                >
                  <h3 className="font-semibold text-lg mb-4 text-primary">
                    {skillGroup.category}
                  </h3>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <div key={skill} className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        <span className="text-sm text-gray-700 dark:text-gray-200">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm">
              <h3 className="font-semibold text-xl mb-4">Beyond the Code</h3>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
                I pride myself on being a{" "}
                <strong>strong communicator and analytical thinker</strong>.
                Whether it's translating business goals into technical solutions
                or collaborating with teams and clients, I bring clarity,
                curiosity, and problem-solving to every project.
              </p>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                Recently, I've expanded into mobile technologies, bringing the
                same principles of clean, maintainable code and great UX to new
                platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking & Recognition */}
      <section className="generic-container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Speaking & Recognition
            </h2>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-blue-600/10 p-8 rounded-xl border border-primary/20">
            <h3 className="font-semibold text-xl mb-4">
              UpFront Conference 2019
            </h3>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              Delivered a lightning talk on building robust APIs using Node.js
              and Express. The presentation explored common pitfalls in project
              architecture and development workflow, providing practical
              guidance for front-end developers extending their skills into
              backend development.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Life */}
      <section className="bg-gray-50 dark:bg-gray-900/50 py-16 md:py-24">
        <div className="generic-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Outside the Office
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-lg mb-3 flex items-center">
                    <span className="text-primary mr-2">🏋️</span>
                    Fitness & Competition
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
                    Passionate about <strong>CrossFit</strong> and{" "}
                    <strong>Olympic lifting</strong>. Currently preparing for
                    local gym competitions and the{" "}
                    <strong>Hyrox fitness challenge</strong>.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-lg mb-3 flex items-center">
                    <span className="text-primary mr-2">👨‍👩‍👧‍👦</span>
                    Family Life
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
                    Proud <strong>dad of two</strong>, balancing the joys and
                    challenges of parenthood with my dedication to fitness and
                    software development.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <span className="text-primary mr-2">🚀</span>
                  Continuous Learning
                </h3>
                <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed mb-4">
                  Regularly work on small dev projects, always exploring new
                  tools and languages. Whether it's diving into{" "}
                  <strong>C#</strong>, experimenting with <strong>D3.js</strong>
                  , or testing new frameworks, I stay curious and committed to
                  lifelong learning.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs">
                    C#
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs">
                    D3.js
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs">
                    Mobile Dev
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs">
                    New Frameworks
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career History */}
      <section className="generic-container py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Career History
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A journey of continuous growth and impactful contributions across
              diverse industries
            </p>
          </div>

          <div className="space-y-6">
            {career_list.map((career, index) => (
              <div
                key={career.name}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {career.name}
                    </h3>
                    <p className="text-primary font-medium">{career.title}</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                    {career.date}
                  </span>
                </div>
                {career.description && (
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-sm">
                    {career.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
