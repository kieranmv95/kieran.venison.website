import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Kieran Venison",
  description: "Welcome to the website of Kieran Venison",
};

const career_list = [
  {
    name: "LITTLE JOURNEY",
    title: "Senior Software Engineer",
    date: "2024 - current",
  },

  {
    name: "BOURNE LEISURE LTD",
    title: "Senior Software Engineer",
    date: "2022 - 2024",
    description:
      "At Bourne Leisure, I contribute to the checkout team, actively involved in conducting a wide range of AB tests to enhance the checkout experience. Our goal is to continually optimize and improve the user journey during the checkout process.",
  },

  {
    name: "GYMSHARK",
    title: "Senior Software Engineer",
    date: "2021 - 2022",
    description:
      "During my time at GymShark, I played a crucial role in maintaining the main website and store. Additionally, I actively collaborated with a feature team, dedicated to consistently enhancing the storefront. Together, we worked tirelessly to deliver an exceptional online shopping experience, ensuring the website was running smoothly and continuously improving its functionality and user interface.",
  },

  {
    name: "LOCALHOST DEVELOPMENT",
    title: "Co-founder",
    date: "2021 - 2022",
    description:
      "In 2021, I co-founded Localhost Development Ltd and embarked on an exciting venture by creating bioshare, a platform aimed at providing effective management and sharing of online profiles. Despite our best efforts, the project concluded in 2022 due to various factors. However, this entrepreneurial journey allowed me to gain invaluable insights, encounter challenges, and make important discoveries. The knowledge and expertise acquired have equipped me for future endeavors and paved the way for continued personal growth and success.",
  },

  {
    name: "MOJO MORTGAGES",
    title: "Senior Software Engineer",
    date: "2021 - 2021",
    description:
      "At Mojo Mortgages, I played a key role in rebuilding the company-facing website and application form. The goal was to enhance UI/UX and improve developer quality of life, ultimately creating a smoother onboarding experience for our customers.",
  },

  {
    name: "AND DIGITAL",
    title: "Consultant Product Developer",
    date: "2019 - 2021",
    description:
      "In this role, I worked with diverse languages in both backend and frontend development, spanning various industries from gambling to healthcare. I successfully implemented the Scrum methodology on client sites, upskilling existing staff and fostering efficient collaboration.",
  },

  {
    name: "SORTED",
    title: "Frontend developer",
    date: "2018 - 2019",
    description:
      "In this role, I leveraged React to develop a dashboard-based product, enabling intuitive and interactive user interfaces. Additionally, I utilized Gatsby to rebuild the company website as a static site, enhancing its performance and scalability.",
  },

  {
    name: "CARFINANCE 247",
    title: "Frontend developer",
    date: "2015 - 2018",
    description:
      "In this role, I handled various responsibilities, including maintaining existing products and developing solutions for internal and customer use. Specifically, I was in charge of the front-end development for the CarFinance247 website, app form, members area, Carcraft website, and internal projects.",
  },

  {
    name: "DIVERSITY TRAVEL",
    title: "Junior Web Developer",
    date: "2014 - 2015",
    description:
      "In this role, I rebuilt the company intranet entirely using the WordPress framework. Additionally, I am currently engaged in an ongoing project to enhance the SEO of the external website. Throughout these responsibilities, I primarily utilized PHP, MySQL, Apache, and WAMP to achieve desired outcomes.",
  },

  {
    name: "WEB APPLICATIONS UK",
    title: "Apprentice",
    date: "2013 - 2014",
    description:
      "At this company, I learned to create and manage web applications using HTML, CSS, ASP, C#, SQL, JavaScript, and JQuery.",
  },
];

export default function About() {
  return (
    <main>
      <div className="skinny-container py-8 space-y-6">
        <h1 className="text-4xl font-bold lg:text-5xl mb-4">ABOUT</h1>

        <p className="max-w-2xl">
          I&apos;m a Manchester-based Developer, crafting digital products for
          businesses and consumers. With confidence and curiosity, I
          continuously improve my skills. Let&apos;s create something remarkable
        </p>

        <h2 className="text-2xl font-bold lg:text-3xl">Skills</h2>

        <p>
          I specialize in JavaScript and React, with a solid grasp of JS
          fundamentals and years of experience building React applications.
          While my core expertise lies in front-end development, I also venture
          into full-stack JavaScript using AWS, Node.js, and TypeScript to
          create robust APIs.
        </p>

        <p>
          In addition, I possess a strong understanding of HTML, CSS, and
          vanilla JavaScript. I have utilized various CSS pre-processors and
          methodologies, particularly SASS and the BEM CSS methodology. This
          versatile skill set enables me to swiftly adapt to different
          technologies and tackle any challenge that comes my way.
        </p>

        <h2 className="text-2xl font-bold lg:text-3xl">Other</h2>

        <p>
          I had the honor of delivering a lightning talk at the UpFront
          conference in 2019. My presentation focused on Node, Express, and the
          common pitfalls that lead to project failures. It served as a
          comprehensive guide to creating your own APIs using front-end
          technologies.
        </p>

        <h2 className="text-2xl font-bold lg:text-3xl">Outside the office</h2>

        <p>
          Beyond work, I am a fitness enthusiast, embracing various fitness
          activities. Currently, I&apos;m deeply invested in CrossFit and
          Olympic lifting, but my interests can swiftly change based on my
          training goals. Presently, I&apos;m preparing for local gym
          competitions and the Hyrox fitness competition.
        </p>
        <p>
          As a new dad, I&apos;m also navigating the joys and challenges of
          parenthood alongside my fitness and coding pursuits.
        </p>
        <p>
          To stay up-to-date, I enjoy working on small development projects,
          constantly expanding my skill set. Whether it&apos;s diving into C# or
          exploring the possibilities of D3, I am always eager to learn and grow
          with diverse technologies.
        </p>

        <h2 className="text-2xl font-bold lg:text-3xl">Career History</h2>

        {career_list.map((career) => (
          <div key={career.name}>
            <h3 className="text-lg font-bold">{career.name}</h3>
            <p className="text-primary">{career.title}</p>
            <p className="text">{career.date}</p>
            {career.description && <p>{career.description}</p>}
          </div>
        ))}
      </div>
    </main>
  );
}
