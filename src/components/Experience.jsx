import React from "react";
import { motion } from "framer-motion";
import CursorGlowCard from "./CursorGlowCard";

const cardClass =
  "rounded-2xl bg-white p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_16px_48px_rgba(0,0,0,0.09)]";

const Experience = () => {
  return (
    <article
      className="experience active relative overflow-hidden rounded-2xl bg-gradient-to-b from-[hsl(0,0%,100%)] to-[hsl(210,20%,98%)]"
      data-page="experience"
    >
      <header className="mb-10 sm:mb-12">
        <motion.span
          className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(173,58%,39%)] mb-2"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Work history
        </motion.span>
        <motion.h2
          className="h2 article-title text-[hsl(222,47%,8%)] font-bold tracking-tight"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
        >
          Experience
        </motion.h2>
        
      </header>

      <section className="skill experience">

        <ol className="timeline-list">
          <motion.li
            className="timeline-item group/card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0 }}
          >
            <CursorGlowCard className={cardClass}>
              <div className="border-l-2 border-[hsl(173,58%,39%)] pl-4 sm:pl-5 -ml-1">
                <h4 className="h4 timeline-item-title text-[hsl(222,47%,8%)] font-semibold mb-1">
                  Software Development Engineer at Nrolled Inc.
                </h4>
                <p className="text-sm font-medium text-[hsl(173,58%,35%)] timeline-text mb-1">
                  Nrolled Inc. · Full-Time · December, 2025 — Present
                </p>
                <p className="timeline-text text-[hsl(222,25%,32%)] mb-3">
                  Mississauga, Ontario, Canada · Remote
                </p>
                <div className="mt-3 space-y-2">
                  <div className="timeline-text flex items-start gap-2">
                    <span className="text-[hsl(173,58%,39%)] mt-0.5">▫</span>
                    <p className="text-[hsl(222,25%,32%)] leading-relaxed">
<strong>Nrolled Project:</strong> Designing and implementing a multi-role job marketplace platform, supporting Admin (Web App), Worker (Mobile App), and Customer (Job Poster) modules; Developed 15+ feature-rich modules including Job Posting & Approval, Candidate Applications, Profile & Resume Management, Skill Matching, Notifications, and Role-Based Access Control; Built scalable RESTful APIs to enable real-time job updates, application tracking, and cross-platform data synchronization; Implemented secure authentication, authorization, stripe payment gateway and workflow automation, enhancing hiring efficiency and reducing manual intervention by 45%+.
                    </p>
                  </div>
                  <div className="timeline-text flex items-start gap-2">
                    <span className="text-[hsl(173,58%,39%)] mt-0.5">▫</span>
                    <p className="text-[hsl(222,25%,32%)] leading-relaxed">
                      <strong>Tech Stack Implementation:</strong> React.js, Typescript, .Net, Supabase, Axios, Node.js, Supabase, Firebase, Tailwind CSS, Stripe, Postman, Git-GitHub & Bitbucket
                    </p>
                  </div>
                </div>
              </div>
            </CursorGlowCard>
          </motion.li>

          <motion.li
            className="timeline-item group/card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <CursorGlowCard className={cardClass}>
              <div className="border-l-2 border-[hsl(173,58%,39%)] pl-4 sm:pl-5 -ml-1">
                <h4 className="h4 timeline-item-title text-[hsl(222,47%,8%)] font-semibold mb-1">
                  Software Development Engineer at NZ Solutions
                </h4>
                <p className="text-sm font-medium text-[hsl(173,58%,35%)] timeline-text mb-1">
                  NZ Solutions · Full-Time · September, 2025 — December, 2025
                </p>
                <p className="timeline-text text-[hsl(222,25%,32%)] mb-3">
                  Pune, Maharastra · On-site
                </p>
                <div className="mt-3 space-y-2">
                  <div className="timeline-text flex items-start gap-2">
                    <span className="text-[hsl(173,58%,39%)] mt-0.5">▫</span>
                    <p className="text-[hsl(222,25%,32%)] leading-relaxed">
                 <strong> Event Registration System:</strong> Built a full-stack registration and admin platform for Tata Communications Leaders’ Meet 2025, enabling 2K+ 
secure email-verified registrations with flight selection and real-time tracking; developed 15+ React components and 25+ Node.js–MongoDB 
APIs with JWT-based authentication and role-based access, enhancing efficiency and data accuracy by 60%. 
                </p>
              </div>
              
                  <div className="timeline-text flex items-start gap-2">
                    <span className="text-[hsl(173,58%,39%)] mt-0.5">▫</span>
                    <p className="text-[hsl(222,25%,32%)] leading-relaxed">
                      <strong>HRMS Development:</strong> Designed and implemented a full-scale Human Resource Management System managing 1K+ employee records, automating onboarding-to-offboarding workflows; Developed 10+ dynamic frontend modules including Document Verification, Payroll, Salary Template, and Employee Management for HR, plus Company Registration, Expenses, Invoice, Plan Subscription, and Role Management for Super Admin; Integrated 27+ RESTful APIs for real-time data synchronization, improving operational efficiency by 40%.
                    </p>
                  </div>
                  <div className="timeline-text flex items-start gap-2">
                    <span className="text-[hsl(173,58%,39%)] mt-0.5">▫</span>
                    <p className="text-[hsl(222,25%,32%)] leading-relaxed">
                      <strong>Tech Stack Implementation:</strong> React.js, Typescript, Redux, Axios, Node.js, MongoDB, Postman, Git/GitHub, Tailwind CSS.
                    </p>
                  </div>
                </div>
              </div>
            </CursorGlowCard>
          </motion.li>

          <motion.li
            className="timeline-item group/card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.16 }}
          >
            <CursorGlowCard className={cardClass}>
              <div className="border-l-2 border-[hsl(173,58%,39%)] pl-4 sm:pl-5 -ml-1">
                <h4 className="h4 timeline-item-title text-[hsl(222,47%,8%)] font-semibold mb-1">
                  Software Development Engineer at StudentsBoat Inc.
                </h4>
                <p className="text-sm font-medium text-[hsl(173,58%,35%)] timeline-text mb-1">
                  StudentsBoat Inc. · Full-Time · Nov 2024 — September, 2025
                </p>
                <p className="timeline-text text-[hsl(222,25%,32%)] mb-3">
                  Portland, Oregon, United States · Remote
                </p>
                <div className="mt-3 space-y-2">
                  <div className="timeline-text flex items-start gap-2">
                    <span className="text-[hsl(173,58%,39%)] mt-0.5">▫</span>
                    <p className="text-[hsl(222,25%,32%)] leading-relaxed">
                      <strong>Enhanced UI/UX:</strong> Designed and built a responsive, reusable component library using React.js and scalable styling, ensuring a seamless user experience across applications serving a 100+ thousands user base.
                    </p>
                  </div>
                  <div className="timeline-text flex items-start gap-2">
                    <span className="text-[hsl(173,58%,39%)] mt-0.5">▫</span>
                    <p className="text-[hsl(222,25%,32%)] leading-relaxed">
                      <strong>Comprehensive Solutions:</strong> Architected and deployed robust Product Listing and Detail pages, including Landlord & Host Family property listing operations, advanced filtering across 30+ categories, secure payment gateway integration, and progressive data loading—delivering scalability, security, and low latency.
                    </p>
                  </div>
                  <div className="timeline-text flex items-start gap-2">
                    <span className="text-[hsl(173,58%,39%)] mt-0.5">▫</span>
                    <p className="text-[hsl(222,25%,32%)] leading-relaxed">
                      <strong>Backend Functionality:</strong> Built backend services with email OTP-based registration, personalized user profiles, schema design aligned with business requirements, and full property lifecycle operations enabling management of 5K+ property listings.
                    </p>
                  </div>
                  <div className="timeline-text flex items-start gap-2">
                    <span className="text-[hsl(173,58%,39%)] mt-0.5">▫</span>
                    <p className="text-[hsl(222,25%,32%)] leading-relaxed">
                      <strong>API Development & Integration:</strong> Implemented REST APIs (CRUD) with Swagger documentation, optimized endpoints for performance, and seamlessly integrated them into frontend applications using Axios to ensure smooth data flow.
                    </p>
                  </div>
                  <div className="timeline-text flex items-start gap-2">
                    <span className="text-[hsl(173,58%,39%)] mt-0.5">▫</span>
                    <p className="text-[hsl(222,25%,32%)] leading-relaxed">
                      <strong>Collaboration:</strong> Collaborated with cross-functional teams to solve complex challenges, optimize performance, and ensure seamless integration of features. Conducted code reviews and peer programming sessions to maintain high code quality and foster a collaborative development environment.
                    </p>
                  </div>
                  <div className="timeline-text flex items-start gap-2">
                    <span className="text-[hsl(173,58%,39%)] mt-0.5">▫</span>
                    <p className="text-[hsl(222,25%,32%)] leading-relaxed">
                      <strong>Modern Tech Stack Implementation:</strong> Utilized React.js, Redux, Axios, Node.js, Prisma, PostgreSQL, Toastify, Swagger, Stripe, Postman, Git/GitHub, Azure, Tailwind, SCSS, to build scalable, maintainable, and visually appealing components for the application.
                    </p>
                  </div>
                </div>
              </div>
            </CursorGlowCard>
          </motion.li>
        </ol>
      </section>
    </article>
  );
};

export default Experience;
