"use client";
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import {
  FaUpload,
  FaChartBar,
  FaMoneyBillAlt,
  // FaPhoneAlt,
  FaLock,
  FaDollarSign,
  FaTools
} from 'react-icons/fa';
import '../styles/style.css';

export default function Page() {
  const [darkMode, setDarkMode] = useState(false);
  const [quoteDropdownOpen, setQuoteDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleDropdown = () => setQuoteDropdownOpen(!quoteDropdownOpen);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setQuoteDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <Head>
        <title>SoftSell - Resell Your Unused Software Licenses</title>
        <meta
          name="description"
          content="Unlock value from your unused software licenses quickly and securely with SoftSell."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}>
        <header className="hero position-relative">
          <h1>SoftSell - Resell Your Unused Software Licenses</h1>
          <p>Unlock value from your unused software licenses easily and quickly.</p>
          
          {/* Row layout for buttons */}
          <div className="button-group d-flex justify-content-center mt-3">
            <div className="quote-dropdown-container position-relative" ref={dropdownRef}>
              <button
                className="btn btn-primary px-4 py-2 fw-semibold rounded-pill shadow-sm"
                onClick={toggleDropdown}
              >
                Get a Quote
              </button>

              {quoteDropdownOpen && (
                <div
                  className="quote-dropdown mt-2 position-absolute bg-white rounded-4 shadow-lg p-3"
                  style={{ zIndex: 1000, minWidth: '250px' }}
                >
                  <h6 className="fw-bold mb-2">Get Your Quote Now</h6>
                  <p className="quote-info mb-2">Choose one of the options below:</p>
                  <button className="quote-option w-100 text-start">💡 Quick Estimate</button>
                  <button className="quote-option w-100 text-start">📊 Detailed Valuation</button>
                  <button className="quote-option w-100 text-start">📞 Schedule a Call</button>
                </div>
              )}
            </div>

            {/* Dark mode toggle button */}
            <button
              className="btn btn-secondary ms-3 px-4 py-2 fw-semibold rounded-pill shadow-sm"
              onClick={toggleDarkMode}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </header>

        {/* Content sections */}
        <section className="container py-5">
          <h2 className="section-title text-center">How It Works</h2>
          <div className="section-content">
            <div>
              <FaUpload size={100} color="#007bff" />
              <h5>Upload License</h5>
              <p>Submit your software license for evaluation.</p>
            </div>
            <div>
              <FaChartBar size={100} color="#007bff" />
              <h5>Get Valuation</h5>
              <p>Receive a fair market valuation for your license.</p>
            </div>
            <div>
              <FaMoneyBillAlt size={100} color="#007bff" />
              <h5>Get Paid</h5>
              <p>Receive payment directly to your account.</p>
            </div>
          </div>
        </section>

        <section className="container py-5">
          <h2 className="section-title text-center">Why Choose Us</h2>
          <div className="section-content">
            <div>
              <FaLock size={100} color="#007bff" />
              <h5>Secure Transactions</h5>
              <p>Your data and transactions are fully encrypted and secure.</p>
            </div>
            <div>
              <FaDollarSign size={100} color="#007bff" />
              <h5>Fast Payments</h5>
              <p>Get paid within 48 hours after the deal is closed.</p>
            </div>
            <div>
              <FaTools size={100} color="#007bff" />
              <h5>24/7 Support</h5>
              <p>Our team is available to assist you at every step.</p>
            </div>
          </div>
        </section>

        <section className="container py-5">
          <h2 className="section-title text-center">Customer Testimonials</h2>
          <div className="row">
            <div className="col-12 col-md-6 mb-4">
              <blockquote className="blockquote">
                SoftSell made it incredibly easy to resell our unused licenses. Quick and secure!
                <footer className="blockquote-footer">
                  <strong>chethan, CEO, TechCorp</strong>
                </footer>
              </blockquote>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <blockquote className="blockquote">
                I received a fair valuation and fast payment. Highly recommend SoftSell!
                <footer className="blockquote-footer">
                  <strong>varun, IT Manager, SoftWorld</strong>
                </footer>
              </blockquote>
            </div>
            {/* Additional Testimonials */}
            <div className="col-12 col-md-6 mb-4">
              <blockquote className="blockquote">
                Amazing experience! The process was smooth and fast, and we got great value for our licenses.
                <footer className="blockquote-footer">
                  <strong>Sharath, Operations Manager, Innovatech</strong>
                </footer>
              </blockquote>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <blockquote className="blockquote">
                We were able to sell our unused licenses quickly and received the payment on time. Excellent service!
                <footer className="blockquote-footer">
                  <strong>Manjunath, CFO, BusinessPro</strong>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="container py-5">
          <h2 className="section-title text-center">Contact Us</h2>
          <form className="row g-3">
            <div className="col-12 col-md-6">
              <input type="text" className="form-control" placeholder="Name" required />
            </div>
            <div className="col-12 col-md-6">
              <input type="email" className="form-control" placeholder="Email" required />
            </div>
            <div className="col-12 col-md-6">
              <input type="text" className="form-control" placeholder="Company" />
            </div>
            <div className="col-12 col-md-6">
              <select className="form-select" required>
                <option value="">License Type</option>
                <option value="software">Software</option>
                <option value="hardware">Hardware</option>
              </select>
            </div>
            <div className="col-12">
              <textarea className="form-control" placeholder="Message" rows="4" required></textarea>
            </div>
            <div className="col-12 text-center mt-3">
              <button type="submit" className="btn-primary">Submit</button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
