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
                <p className="text-sm font-medium flex justify-between items-center text-[hsl(173,58%,35%)] timeline-text mb-1">
                  <span>Nrolled Inc.</span> <span>September, 2025 — Present</span>
                </p>
                <p className="timeline-text text-[hsl(222,25%,32%)] mb-3">
                  Ontario, Canada · Remote
                </p>
                <div className="mt-3 space-y-2">
                  <div className="timeline-text flex items-start gap-2">
                    <span className="text-[hsl(173,58%,39%)] mt-0.5">▫</span>
                    <p className="text-[hsl(222,25%,32%)] leading-relaxed">
                      Implemented secure authentication, authorization, and Role-Based Access Control (RBAC) for Admin, Worker, and Customer modules, enhancing data security and access management across 3 user roles. 

                    </p>
                  </div>
                  <div className="timeline-text flex items-start gap-2">
                    <span className="text-[hsl(173,58%,39%)] mt-0.5">▫</span>
                    <p className="text-[hsl(222,25%,32%)] leading-relaxed">
                     Developed and optimized the complete job lifecycle workflow, from customer job posting and approval to worker assignment and job placement, supporting 1,000+ job transactions. 
                    </p>
                  </div>
                   <div className="timeline-text flex items-start gap-2">
                    <span className="text-[hsl(173,58%,39%)] mt-0.5">▫</span>
                    <p className="text-[hsl(222,25%,32%)] leading-relaxed">
                    Managed the end-to-end Push Notification (PN) system, including 20+ APIs, dashboard features, and real-time job tracking notifications, improving worker engagement and response rates.
                    </p>
                  </div>
                   <div className="timeline-text flex items-start gap-2">
                    <span className="text-[hsl(173,58%,39%)] mt-0.5">▫</span>
                    <p className="text-[hsl(222,25%,32%)] leading-relaxed">
                    Enhanced application security by implementing Row-Level Security (RLS) policies across 30+ database tables, ensuring role-based data access for Admins, Workers, and Customers.
                    </p>
                  </div>
                   <div className="timeline-text flex items-start gap-2">
                    <span className="text-[hsl(173,58%,39%)] mt-0.5">▫</span>
                    <p className="text-[hsl(222,25%,32%)] leading-relaxed">
                    Contributed to UAT and Production deployments, including code merging, pull request reviews, support, and environment configuration management, helping maintain smooth and reliable releases. 
                    </p>
                  </div>
                   <div className="timeline-text flex items-start gap-2">
                    <span className="text-[hsl(173,58%,39%)] mt-0.5">▫</span>
                    <p className="text-[hsl(222,25%,32%)] leading-relaxed">
                    Delivered worker profile review and resume screening workflows, automated eligibility-based approvals, profile tracking, and email reminder systems, reducing manual review efforts by 40%+.  
                    </p>
                  </div>
                   <div className="timeline-text flex items-start gap-2">
                    <span className="text-[hsl(173,58%,39%)] mt-0.5">▫</span>
                    <p className="text-[hsl(222,25%,32%)] leading-relaxed">
                    Established job scheduling conflict validation to detect and prevent overlapping job assignments during worker job acceptance, improving scheduling accuracy and workforce allocation.  
                    </p>
                  </div>
                   <div className="timeline-text flex items-start gap-2">
                    <span className="text-[hsl(173,58%,39%)] mt-0.5">▫</span>
                    <p className="text-[hsl(222,25%,32%)] leading-relaxed">
                    Built and integrated Stripe payment features, including bulk payments, worker payouts, refunds, and automated post-job payment processing, reducing manual payment operations by 45%+.
                    </p>
                  </div>
                  <div className="timeline-text flex items-start gap-2">
                    <span className="text-[hsl(173,58%,39%)] mt-0.5">▫</span>
                    <p className="text-[hsl(222,25%,32%)] leading-relaxed">
                      <strong>Tech Stack:</strong> React.js, Typescript, .Net, Supabase, Axios, Node.js, Supabase, Firebase, Tailwind CSS, Stripe, Postman, Git-GitHub & Bitbucket
                    </p>
                  </div>

                  
                </div>
              </div>
            </CursorGlowCard>
          </motion.li>

          {/* <motion.li
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
                  NZ Solutions · September, 2025 — December, 2025
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
          </motion.li> */}

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
                <p className="text-sm font-medium flex justify-between items-center text-[hsl(173,58%,35%)] timeline-text mb-1">
                   
                    <span>StudentsBoat Inc.</span> <span>Nov 2024 — September, 2025</span>
                </p>
                <p className="timeline-text text-[hsl(222,25%,32%)] mb-3">
                  Oregon, United States · Remote
                </p>
                <div className="mt-3 space-y-2">
                  <div className="timeline-text flex items-start gap-2">
                    <span className="text-[hsl(173,58%,39%)] mt-0.5">▫</span>
                    <p className="text-[hsl(222,25%,32%)] leading-relaxed">
                      Designed and Created key platform features, including room and property listing pages with 15+ advanced filters, property detail pages with amenities and availability tracking, and student profile pages, Stripe payment feature, improving the student housing search experience. 
                    </p>
                  </div>
                  <div className="timeline-text flex items-start gap-2">
                    <span className="text-[hsl(173,58%,39%)] mt-0.5">▫</span>
                    <p className="text-[hsl(222,25%,32%)] leading-relaxed">
                     Engineered end-to-end background verification workflows for both students and hosts, including university verification, government ID validation, property ownership checks, and legal compliance verification, enhancing platform trust and security by 80%.
                    </p>
                  </div>
                  
                  <div className="timeline-text flex items-start gap-2">
                    <span className="text-[hsl(173,58%,39%)] mt-0.5">▫</span>
                    <p className="text-[hsl(222,25%,32%)] leading-relaxed">
                      <strong>Tech Stack:</strong>React.js, Redux, Axios, Node.js, Prisma, PostgreSQL, Toastify, Swagger, Stripe, Postman, Git/GitHub, Azure, Tailwind, SCSS.
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
