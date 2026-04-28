import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Angel Custom Cabinets</title>
          <meta property="og:title" content="Angel Custom Cabinets" />
          <link
            rel="canonical"
            href="https://sweltering-scratchy-wallaby-gswxs0.teleporthq.site/"
          />
          <meta
            property="og:url"
            content="https://sweltering-scratchy-wallaby-gswxs0.teleporthq.site/"
          />
        </Head>
        <Navigation></Navigation>
        <section className="editorial-hero">
          <div className="editorial-hero-container">
            <div className="editorial-hero-content">
              <div className="editorial-hero-trust-row">
                <span className="editorial-hero-metric">Crafted by Angel</span>
                <div className="editorial-hero-divider"></div>
                <span className="editorial-hero-metric">
                  Arizona&apos;s Premier Custom Studio
                </span>
              </div>
              <h1 className="hero-title">
                Bespoke Craftsmanship Tailored to You.
              </h1>
              <p className="hero-subtitle">
                Elevating architectural spaces through pure bespoke artistry. No
                templates, no shortcuts—just 100% custom excellence designed for
                the individual client.
              </p>
              <div className="editorial-hero-actions">
                <button id="hero-book-btn" className="btn-lg btn-primary btn">
                  Book Consult
                </button>
                <a href="tel:6024659425">
                  <div className="editorial-hero-phone">
                    <div className="editorial-hero-icon-wrapper">
                      <svg
                        fill="none"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <span>(602) 465-9425</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="featured-project">
          <div className="featured-project-marquee">
            <div className="marquee-content">
              <span>CUSTOM CABINETS</span>
              <span className="marquee-dot"></span>
              <span>GRANITE</span>
              <span className="marquee-dot"></span>
              <span>QUARTZ</span>
              <span className="marquee-dot"></span>
              <span>BATHROOM VANITIES</span>
              <span className="marquee-dot"></span>
              <span>ARTIFICIAL ROCK SLABS</span>
              <span className="marquee-dot"></span>
              <span>CUSTOM CABINETS</span>
              <span className="marquee-dot"></span>
              <span>GRANITE</span>
              <span className="marquee-dot"></span>
              <span>QUARTZ</span>
              <span className="marquee-dot"></span>
              <span>BATHROOM VANITIES</span>
              <span className="marquee-dot"></span>
              <span>ARTIFICIAL ROCK SLABS</span>
              <span className="marquee-dot"></span>
            </div>
          </div>
          <div className="featured-project-container">
            <div className="featured-project-media">
              <img
                alt="Luxury modern kitchen with custom dark cabinetry"
                src="https://images.pexels.com/photos/6264414/pexels-photo-6264414.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="featured-project-image"
              />
              <div className="featured-project-glass-card">
                <span className="section-subtitle">Featured Project</span>
                <h2 className="section-title">The Obsidian Suite</h2>
                <div className="featured-project-details">
                  <div className="detail-item">
                    <span className="detail-label">Materials</span>
                    <span className="detail-value">
                      Quartz &amp; Custom Oak
                    </span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Location</span>
                    <span className="detail-value">Scottsdale, AZ</span>
                  </div>
                </div>
                <button className="btn-outline btn-sm btn">
                  View Case Study
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="editorial-spread">
          <div className="editorial-spread-container">
            <div className="editorial-spread-header">
              <h2 className="section-title">The Editorial Spread</h2>
              <p className="section-content">
                A curated portfolio of bespoke solutions for the modern home.
              </p>
            </div>
            <div className="editorial-spread-grid">
              <div className="spread-item">
                <div className="spread-image-wrapper">
                  <img
                    alt="Custom Cabinets Detail"
                    src="https://images.pexels.com/photos/6264408/pexels-photo-6264408.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="spread-image"
                  />
                </div>
                <div className="spread-glass-panel">
                  <h3 className="section-subtitle">Custom Cabinets</h3>
                  <p className="section-content">
                    Tailored, built-to-order precision that redefines functional
                    art. We specialize in seamless integration and unique
                    finishes.
                  </p>
                </div>
              </div>
              <div className="spread-item">
                <div className="spread-image-wrapper">
                  <img
                    alt="Luxury Countertops"
                    src="https://images.pexels.com/photos/11701162/pexels-photo-11701162.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="spread-image"
                  />
                </div>
                <div className="spread-glass-panel">
                  <h3 className="section-subtitle">Countertops</h3>
                  <p className="section-content">
                    Exquisite Granite, Quartz, and Artificial Rock Slabs. Each
                    piece is hand-selected and cut to perfection for your space.
                  </p>
                </div>
              </div>
              <div className="spread-item">
                <div className="spread-image-wrapper">
                  <img
                    alt="Custom Bathroom Vanity"
                    src="https://images.pexels.com/photos/11701111/pexels-photo-11701111.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="spread-image"
                  />
                </div>
                <div className="spread-glass-panel">
                  <h3 className="section-subtitle">Bathroom Vanities</h3>
                  <p className="section-content">
                    Bespoke luxury for your most personal spaces. From floating
                    minimalist designs to grand double-sink masterpieces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="portfolio-grid">
          <div className="portfolio-grid-container">
            <div className="portfolio-header">
              <h2 className="section-title">
                Masterpieces in Stone &amp; Wood
              </h2>
            </div>
            <div className="portfolio-masonry">
              <div className="portfolio-item">
                <img
                  alt="Project Alpha"
                  src="https://images.pexels.com/photos/32277993/pexels-photo-32277993.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="portfolio-image"
                />
                <div className="portfolio-hover-card">
                  <h4 className="portfolio-item-title">The Nordic Bath</h4>
                  <p className="portfolio-item-meta">
                    Phoenix • Artificial Rock
                  </p>
                </div>
              </div>
              <div className="portfolio-item">
                <img
                  alt="Project Beta"
                  src="https://images.pexels.com/photos/11701125/pexels-photo-11701125.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="portfolio-image"
                />
                <div className="portfolio-hover-card">
                  <h4 className="portfolio-item-title">Azure Kitchen</h4>
                  <p className="portfolio-item-meta">Mesa • Custom Oak</p>
                </div>
              </div>
              <div className="portfolio-item">
                <img
                  alt="Project Gamma"
                  src="https://images.pexels.com/photos/6636303/pexels-photo-6636303.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="portfolio-image"
                />
                <div className="portfolio-hover-card">
                  <h4 className="portfolio-item-title">Minimalist Loft</h4>
                  <p className="portfolio-item-meta">Tempe • White Quartz</p>
                </div>
              </div>
              <div className="portfolio-item">
                <img
                  alt="Project Delta"
                  src="https://images.pexels.com/photos/15743384/pexels-photo-15743384.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="portfolio-image"
                />
                <div className="portfolio-hover-card">
                  <h4 className="portfolio-item-title">Gilded Vanity</h4>
                  <p className="portfolio-item-meta">
                    Paradise Valley • Granite
                  </p>
                </div>
              </div>
              <div className="portfolio-item">
                <img
                  alt="Project Epsilon"
                  src="https://images.pexels.com/photos/5252536/pexels-photo-5252536.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="portfolio-image"
                />
                <div className="portfolio-hover-card">
                  <h4 className="portfolio-item-title">Monolith Island</h4>
                  <p className="portfolio-item-meta">Chandler • Dark Quartz</p>
                </div>
              </div>
              <div className="portfolio-item">
                <img
                  alt="Project Zeta"
                  src="https://images.pexels.com/photos/34081555/pexels-photo-34081555.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="portfolio-image"
                />
                <div className="portfolio-hover-card">
                  <h4 className="portfolio-item-title">Classic Estate</h4>
                  <p className="portfolio-item-meta">Gilbert • Custom Walnut</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials">
          <div className="testimonials-container">
            <div className="testimonials-header">
              <h2 className="section-title">Client Perspectives</h2>
            </div>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-stars">
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <p className="section-content">
                  &quot;Angel&apos;s attention to detail is unmatched. Our
                  custom kitchen island is the focal point of our entire home.
                  Pure craftsmanship.&quot;
                </p>
                <div className="testimonial-author">
                  <span className="author-name">Julianna Vance</span>
                  <span className="author-location">Paradise Valley</span>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-stars">
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <p className="section-content">
                  &quot;Finally, a contractor who understands modern luxury. No
                  templates, just beautiful bespoke work tailored to our
                  lifestyle.&quot;
                </p>
                <div className="testimonial-author">
                  <span className="author-name">Marcus Chen</span>
                  <span className="author-location">Scottsdale</span>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-stars">
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <p className="section-content">
                  &quot;The granite selection and installation were flawless.
                  Angel is a true artist when it comes to stone work.&quot;
                </p>
                <div className="testimonial-author">
                  <span className="author-name">Sarah Miller</span>
                  <span className="author-location">Phoenix</span>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-stars">
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <p className="section-content">
                  &quot;From the first sketch to the final install, the process
                  was seamless. Our bathroom vanity is a piece of furniture
                  art.&quot;
                </p>
                <div className="testimonial-author">
                  <span className="author-name">David L.</span>
                  <span className="author-location">Gilbert</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="lead-gen">
          <div className="lead-gen-container">
            <div className="lead-gen-split">
              <div className="lead-gen-info">
                <h2 className="section-title">Start Your Bespoke Journey</h2>
                <p className="section-content">
                  Every masterpiece begins with a conversation. Let&apos;s
                  discuss your vision for a space that is uniquely yours.
                </p>
                <div className="lead-gen-direct">
                  <span className="direct-label">
                    Talk to Angel directly at
                  </span>
                  <a href="tel:6024659425">
                    <div className="direct-phone">
                      <span>(602) 465-9425</span>
                    </div>
                  </a>
                </div>
                <div className="lead-gen-features">
                  <div className="lead-feature">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="var(--color-accent)"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>No Templates</span>
                  </div>
                  <div className="lead-feature">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="var(--color-accent)"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Hand-Selected Materials</span>
                  </div>
                  <div className="lead-feature">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="var(--color-accent)"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Bespoke Design</span>
                  </div>
                </div>
              </div>
              <div className="lead-gen-form-wrapper">
                <form
                  id="consult-form"
                  action="/submit"
                  method="POST"
                  data-form-id="ecd80247-95de-40e3-9ca6-5e0971b7c392"
                  className="wizard-form"
                >
                  <div data-step="1" className="active wizard-step">
                    <h3 className="section-subtitle">What are we building?</h3>
                    <div className="form-options-grid">
                      <label className="option-card">
                        <input
                          type="radio"
                          id="thq_project_type_kWYC"
                          name="project_type"
                          value="cabinets"
                          required="true"
                          data-form-field-id="thq_project_type_kWYC"
                        />
                        <span className="home-thq-option-content-elm1">
                          Custom Cabinets
                        </span>
                      </label>
                      <label className="option-card">
                        <input
                          type="radio"
                          id="thq_project_type_AbNj"
                          name="project_type"
                          value="countertops"
                          data-form-field-id="thq_project_type_AbNj"
                        />
                        <span className="home-thq-option-content-elm2">
                          Countertops
                        </span>
                      </label>
                      <label className="option-card">
                        <input
                          type="radio"
                          id="thq_project_type_0ASv"
                          name="project_type"
                          value="vanities"
                          data-form-field-id="thq_project_type_0ASv"
                        />
                        <span className="home-thq-option-content-elm3">
                          Bathroom Vanities
                        </span>
                      </label>
                    </div>
                    <button
                      id="thq_button_xo4F"
                      name="button"
                      type="button"
                      data-form-field-id="thq_button_xo4F"
                      className="btn-full next-step btn-primary btn"
                    >
                      Next Step
                    </button>
                  </div>
                  <div data-step="2" className="wizard-step">
                    <h3 className="section-subtitle">Preferred Materials</h3>
                    <div className="form-options-grid">
                      <label className="option-card">
                        <input
                          type="checkbox"
                          id="thq_materials_7YRt"
                          name="materials"
                          value="quartz"
                          data-form-field-id="thq_materials_7YRt"
                        />
                        <span className="home-thq-option-content-elm4">
                          Quartz
                        </span>
                      </label>
                      <label className="option-card">
                        <input
                          type="checkbox"
                          id="thq_materials_ncYZ"
                          name="materials"
                          value="granite"
                          data-form-field-id="thq_materials_ncYZ"
                        />
                        <span className="home-thq-option-content-elm5">
                          Granite
                        </span>
                      </label>
                      <label className="option-card">
                        <input
                          type="checkbox"
                          id="thq_materials_MmNL"
                          name="materials"
                          value="rock"
                          data-form-field-id="thq_materials_MmNL"
                        />
                        <span className="home-thq-option-content-elm6">
                          Artificial Rock
                        </span>
                      </label>
                    </div>
                    <div className="wizard-actions">
                      <button
                        id="thq_button_a337"
                        name="button"
                        type="button"
                        data-form-field-id="thq_button_a337"
                        className="prev-step btn-outline btn"
                      >
                        Back
                      </button>
                      <button
                        id="thq_button_efwB"
                        name="button"
                        type="button"
                        data-form-field-id="thq_button_efwB"
                        className="next-step btn-primary btn"
                      >
                        Next Step
                      </button>
                    </div>
                  </div>
                  <div data-step="3" className="wizard-step">
                    <h3 className="section-subtitle">Contact Details</h3>
                    <div className="form-group">
                      <input
                        type="text"
                        id="thq_true_Yxtl"
                        name="true"
                        required="true"
                        placeholder="Full Name"
                        data-form-field-id="thq_true_Yxtl"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        id="thq_email_gBKq"
                        name="email"
                        required="true"
                        placeholder="Email Address"
                        data-form-field-id="thq_email_gBKq"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="tel"
                        id="thq_phone_Ns4Q"
                        name="phone"
                        required="true"
                        placeholder="Phone Number"
                        data-form-field-id="thq_phone_Ns4Q"
                        className="form-input"
                      />
                    </div>
                    <div className="wizard-actions">
                      <button
                        id="thq_button_28eQ"
                        name="button"
                        type="button"
                        data-form-field-id="thq_button_28eQ"
                        className="prev-step btn-outline btn"
                      >
                        Back
                      </button>
                      <button
                        id="thq_button_q5Qb"
                        name="button"
                        type="submit"
                        data-form-field-id="thq_button_q5Qb"
                        className="btn-accent btn"
                      >
                        Request Consultation
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="quick-cta-strip">
          <div className="cta-strip-container">
            <div className="cta-strip-glass">
              <div className="cta-strip-content">
                <h2 className="section-subtitle">
                  Ready to transform your space?
                </h2>
                <div className="cta-strip-actions">
                  <a href="tel:6024659425">
                    <div className="cta-strip-phone">
                      <svg
                        fill="none"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <span>(602) 465-9425</span>
                    </div>
                  </a>
                  <button className="btn-primary btn">Book Consult</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<style>
        @keyframes marquee {0% {transform: translateX(0);}
100% {transform: translateX(-50%);}}@keyframes fadeIn {from {opacity: 0;
transform: translateY(20px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes slideIn {from {opacity: 0;
transform: translateX(20px);}
to {opacity: 1;
transform: translateX(0);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="home-container4">
          <div className="home-container5">
            <Script
              html={`<script defer data-name="wizard-form-logic">
(function(){
  const wizardForm = document.getElementById("consult-form")
  const steps = wizardForm.querySelectorAll(".wizard-step")
  const nextBtns = wizardForm.querySelectorAll(".next-step")
  const prevBtns = wizardForm.querySelectorAll(".prev-step")

  nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const currentStep = btn.closest(".wizard-step")
      const stepIndex = parseInt(currentStep.dataset.step)

      // Basic validation for current step
      const inputs = currentStep.querySelectorAll("input[required]")
      let isValid = true
      inputs.forEach((input) => {
        if (input.type === "radio") {
          const name = input.name
          if (!wizardForm.querySelector(\`input[name="\${name}"]:checked\`)) {
            isValid = false
          }
        } else if (!input.value) {
          isValid = false
        }
      })

      if (isValid) {
        currentStep.classList.remove("active")
        const nextStep = wizardForm.querySelector(\`.wizard-step[data-step="\${stepIndex + 1}"]\`)
        if (nextStep) nextStep.classList.add("active")
      } else {
        alert("Please complete the required fields.")
      }
    })
  })

  prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const currentStep = btn.closest(".wizard-step")
      const stepIndex = parseInt(currentStep.dataset.step)

      currentStep.classList.remove("active")
      const prevStep = wizardForm.querySelector(\`.wizard-step[data-step="\${stepIndex - 1}"]\`)
      if (prevStep) prevStep.classList.add("active")
    })
  })

  // Parallax effect for featured image
  window.addEventListener("scroll", () => {
    const featuredImg = document.querySelector(".featured-project-image")
    if (featuredImg) {
      const rect = featuredImg.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const speed = 0.15
        const offset = (window.innerHeight - rect.top) * speed
        featuredImg.style.transform = \`scale(1.1) translateY(\${offset - 50}px)\`
      }
    }
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .home-thq-option-content-elm1 {
            border: 1px solid rgba(255, 255, 255, 0.1);
            display: block;
            padding: var(--spacing-lg);
            font-size: var(--font-size-sm);
            text-align: center;
            transition: all 0.3s ease;
            border-radius: var(--border-radius-md);
          }
          .home-thq-option-content-elm2 {
            border: 1px solid rgba(255, 255, 255, 0.1);
            display: block;
            padding: var(--spacing-lg);
            font-size: var(--font-size-sm);
            text-align: center;
            transition: all 0.3s ease;
            border-radius: var(--border-radius-md);
          }
          .home-thq-option-content-elm3 {
            border: 1px solid rgba(255, 255, 255, 0.1);
            display: block;
            padding: var(--spacing-lg);
            font-size: var(--font-size-sm);
            text-align: center;
            transition: all 0.3s ease;
            border-radius: var(--border-radius-md);
          }
          .home-thq-option-content-elm4 {
            border: 1px solid rgba(255, 255, 255, 0.1);
            display: block;
            padding: var(--spacing-lg);
            font-size: var(--font-size-sm);
            text-align: center;
            transition: all 0.3s ease;
            border-radius: var(--border-radius-md);
          }
          .home-thq-option-content-elm5 {
            border: 1px solid rgba(255, 255, 255, 0.1);
            display: block;
            padding: var(--spacing-lg);
            font-size: var(--font-size-sm);
            text-align: center;
            transition: all 0.3s ease;
            border-radius: var(--border-radius-md);
          }
          .home-thq-option-content-elm6 {
            border: 1px solid rgba(255, 255, 255, 0.1);
            display: block;
            padding: var(--spacing-lg);
            font-size: var(--font-size-sm);
            text-align: center;
            transition: all 0.3s ease;
            border-radius: var(--border-radius-md);
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Home
