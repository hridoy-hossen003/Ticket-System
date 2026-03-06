import React from 'react';

const Footer = () => {
    return (
      <div>
        <footer className="md:mt-32 md:px-32 bg-neutral text-neutral-content p-10 px-4">
          <div className="grid md:grid-cols-10 gap-10">
            <nav className="md:col-span-3">
              <h1 className="text-2xl font-bold mb-2">CS-Ticket System</h1>
              <p className="text-gray-300">
                CS Ticket System is designed to help support teams manage
                customer requests smoothly. It allows users to track issues,
                update task status, and resolve tickets efficiently for a better
                support experience.
              </p>
            </nav>
            <nav className="col-span-1">
              <h6 className="footer-title">Company</h6>
              <ul className="flex md:gap-2 gap-4 md:flex-col">
                {["About Us", "Our Mission", "Contact Saled"].map((item, i) => (
                  <li key={i}>
                    <a className="text-gray-300 link link-hover">{item}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav className="md:col-span-2 md:ps-4">
              <h6 className="footer-title">Services</h6>
              <ul className="flex gap-2 md:flex-col">
                {[
                  "Products & Services",
                  "Customer Stories",
                  "Download Apps",
                ].map((item, i) => (
                  <li key={i}>
                    <a className="text-gray-300 link link-hover">{item}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav className="md:col-span-2">
              <h6 className="footer-title">Information</h6>
              <ul className="flex md:gap-2 gap-3 md:flex-col">
                {["Privacy Policy", "Terms & Conditions", "Join Us"].map(
                  (item, i) => (
                    <li key={i}>
                      <a className="text-gray-300 link link-hover">{item}</a>
                    </li>
                  ),
                )}
              </ul>
            </nav>
            <nav className="md:col-span-2">
              <h6 className="footer-title">Social Links</h6>
              <ul className="flex md:gap-2 gap-3 flex-col">
                {[
                  <i class="fa-brands text-lg rounded-2xl fa-square-x-twitter"></i>,
                  <i class="fa-brands fa-linkedin"></i>,
                  <i class="fa-brands fa-facebook"></i>,
                ].map((item, i) => (
                  <li className="text-lg" key={i}>
                    <a className="text-gray-300 link link-hover">
                      {item} @CS — Ticket System
                    </a>
                  </li>
                ))}
                <li className="text-lg">
                  <a className="text-gray-300 link link-hover">
                    <i class="fa-solid fa-envelope"></i> @CS — Ticket System
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="divider divider-primary mt-14"></div>

          <aside className="text-center mt-10 flex mx-10 justify-center">
            <p>
              © {new Date().getFullYear()} CS — Ticket System. All rights
              reserved.
            </p>
          </aside>
        </footer>
      </div>
    );
};

export default Footer;