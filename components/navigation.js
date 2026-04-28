import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container1">
        <nav className="navigation-root">
          <div className="navigation-container">
            <Link href="/">
              <a>
                <div className="navigation-logo-link">
                  <span className="navigation-brand-name">
                    Angel Custom Cabinets &amp; Granite
                  </span>
                </div>
              </a>
            </Link>
            <div className="navigation-desktop-menu">
              <ul className="navigation-links-list">
                <li className="navigation-link-item">
                  <Link href="/">
                    <a>
                      <div className="navigation-link">
                        <span>Work</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li className="navigation-link-item">
                  <Link href="/">
                    <a>
                      <div className="navigation-link">
                        <span>Services</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li className="navigation-link-item">
                  <Link href="/">
                    <a>
                      <div className="navigation-link">
                        <span>Materials</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li className="navigation-link-item">
                  <Link href="/">
                    <a>
                      <div className="navigation-link">
                        <span>Contact</span>
                      </div>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="navigation-actions">
              <a href="tel:602-465-9425">
                <div className="navigation-phone-link">
                  <div className="navigation-icon-wrapper">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <span className="navigation-phone-text">602-465-9425</span>
                </div>
              </a>
              <Link href="/">
                <a>
                  <div className="navigation-cta btn-primary btn-sm btn">
                    <span>Book Consult</span>
                  </div>
                </a>
              </Link>
              <button
                id="navigation-mobile-toggle"
                aria-label="Toggle Menu"
                aria-expanded="false"
                className="navigation-mobile-toggle"
              >
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <div
          id="navigation-mobile-overlay"
          className="navigation-mobile-overlay"
        >
          <div className="navigation-overlay-header">
            <span className="navigation-brand-name">Angel Custom</span>
            <button
              id="navigation-mobile-close"
              aria-label="Close Menu"
              className="navigation-mobile-close"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" rx="2" width="18" height="18"></rect>
                  <path d="M9 16l3-3l3 3"></path>
                </g>
              </svg>
            </button>
          </div>
          <div className="navigation-overlay-content">
            <ul className="navigation-overlay-links">
              <li className="navigation-overlay-item">
                <Link href="/">
                  <a>
                    <div className="navigation-overlay-link">
                      <span>Work</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li className="navigation-overlay-item">
                <Link href="/">
                  <a>
                    <div className="navigation-overlay-link">
                      <span>Services</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li className="navigation-overlay-item">
                <Link href="/">
                  <a>
                    <div className="navigation-overlay-link">
                      <span>Materials</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li className="navigation-overlay-item">
                <Link href="/">
                  <a>
                    <div className="navigation-overlay-link">
                      <span>Contact</span>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
            <div className="navigation-overlay-footer">
              <a href="tel:602-465-9425">
                <div className="navigation-overlay-phone">
                  <span>602-465-9425</span>
                </div>
              </a>
              <Link href="/">
                <a>
                  <div className="btn-lg btn-primary btn">
                    <span>Book Consult</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<script defer data-name="navigation-logic">
(function(){
  const mobileToggle = document.getElementById("navigation-mobile-toggle")
  const mobileClose = document.getElementById("navigation-mobile-close")
  const mobileOverlay = document.getElementById("navigation-mobile-overlay")
  const overlayLinks = document.querySelectorAll(".navigation-overlay-link")

  const toggleMenu = (show) => {
    if (show) {
      mobileOverlay.style.display = "flex"
      document.body.style.overflow = "hidden"
      mobileToggle.setAttribute("aria-expanded", "true")

      const items = mobileOverlay.querySelectorAll(".navigation-overlay-item")
      items.forEach((item, index) => {
        item.style.opacity = "0"
        item.style.transform = "translateY(20px)"
        setTimeout(() => {
          item.style.transition = "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
          item.style.opacity = "1"
          item.style.transform = "translateY(0)"
        }, 100 + index * 80)
      })
    } else {
      mobileOverlay.style.display = "none"
      document.body.style.overflow = ""
      mobileToggle.setAttribute("aria-expanded", "false")
    }
  }

  mobileToggle.addEventListener("click", () => toggleMenu(true))
  mobileClose.addEventListener("click", () => toggleMenu(false))

  overlayLinks.forEach((link) => {
    link.addEventListener("click", () => toggleMenu(false))
  })

  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navigation-root")
    if (window.scrollY > 50) {
      nav.style.padding = "var(--spacing-xs) 0"
    } else {
      nav.style.padding = "var(--spacing-md) 0"
    }
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Navigation
