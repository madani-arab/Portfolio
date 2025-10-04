import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);

  const updateActiveBox = (el) => {
    if (!el || !activeBox.current) return;
    activeBox.current.style.top = el.offsetTop + "px";
    activeBox.current.style.left = el.offsetLeft + "px";
    activeBox.current.style.width = el.offsetWidth + "px";
    activeBox.current.style.height = el.offsetHeight + "px";
  };

  const initActiveBox = () => {
    if (lastActiveLink.current) {
      updateActiveBox(lastActiveLink.current);
    }
  };

  useEffect(() => {
  
    lastActiveLink.current = document.querySelector(".nav-link.active");
    initActiveBox();

    window.addEventListener("resize", initActiveBox);
    return () => window.removeEventListener("resize", initActiveBox);
  }, []);

  const activeCurrentLink = (event) => {
    if (lastActiveLink.current) {
      lastActiveLink.current.classList.remove("active");
    }
    event.target.classList.add("active");
    lastActiveLink.current = event.target;
    updateActiveBox(event.target);
  };

  const navItems = [
    { label: "Home", link: "#home", className: "nav-link active" },
    { label: "About", link: "#about", className: "nav-link" },
    { label: "Work", link: "#work", className: "nav-link" },
    { label: "Reviews", link: "#reviews", className: "nav-link" },
    { label: "Contact", link: "#contact", className: "nav-link md:hidden" },
  ];

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          key={key}
          className={className}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}

      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
