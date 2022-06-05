import React from "react";
import { Link } from "react-router-dom";
import Timetables from "./Timetables";
const Footer = () => {
  return (
    <footer className="text-dark text-center text-lg-start bg-light">
      <div className="container  ">
        <div className="container p-4">
          <div className="row mt-4">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0 ">
              <Link to="/">
                <img
                  src="image/Logo.png"
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                />
              </Link>
              <h5 className="text-uppercase mb-4">About Us</h5>
              <p>
                We provide team-based, comprehensive dental care for children
                and adults, including patients of all ages
              </p>
              <div className="container mx-5 p-4 pb-0">
                <section className="mb-5">
                  {/* Facebook */}
                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: "#3b5998" }}
                    role="button"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  {/* Twitter */}
                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: "#55acee" }}
                    role="button"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  {/* Google */}
                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: "#dd4b39" }}
                    role="button"
                  >
                    <i className="fab fa-google" />
                  </a>
                  {/* Instagram */}
                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: "#ac2bac" }}
                    role="button"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  {/* Linkedin */}
                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: "#0082ca" }}
                    role="button"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  {/* Github */}
                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: "#333333" }}
                    role="button"
                  >
                    <i className="fab fa-github" />
                  </a>
                </section>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
              <Timetables />
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-center p-3"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          color: "black",
          fontWeight: "bold",
        }}
      >
        © {new Date().getFullYear()} Copyright
      </div>
    </footer>
  );
};

export default Footer;
