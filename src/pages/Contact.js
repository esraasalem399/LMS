import { useState } from "react";
import { FaMobileAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import bacgroundAbout from "../Assets/Images/bacgroundAbout.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent!");
  };

  return (
    <>
      <section
        className="courseSection py-5 fade-in-left"
        style={{
          backgroundImage: `url(${bacgroundAbout})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container text-center text-dark fade-in-left">
          <h1
            className="mb-3"
            style={{
              marginBottom: "10px",
              fontSize: "50px",
              color: "#1a2d62",
              fontWeight: "700",
              fontFamily: "Mulish, sans-serif",
            }}
          >
            Contact
          </h1>
          <ul
            className="list-inline"
            style={{
              background: "#fff",
              textAlign: "center",
              border: " 2px solid #fff",
              padding: "10px 20px",
              width: "auto",
              borderRadius: "10px",
              marginTop: "20px",
              display: "inline-block",
            }}
          >
            <li className="list-inline-item">
              <a href="/" style={{ textDecoration: "none", color: "#2eca7f" }}>
                Home
              </a>
            </li>
            <li className="list-inline-item" style={{ color: "#1a2d62" }}>
              / Contact
            </li>
          </ul>
        </div>
      </section>

      <div className="container my-5 fade-in-left">
        <div className="row text-center">
          <div className="col-md-4">
            <i className="ti-map"></i>
            <h4 style={{ color: "#1a2d62", fontSize: "40px" }}>Our Location</h4>
            <p style={{ color: "#888", fontSize: "20px" }}>
              <FaMapMarkerAlt style={{ marginRight: "8px" }} />
              3481 Melrose Place, Beverly Hills <br /> CA 90210
            </p>
          </div>
          <div className="col-md-4">
            <i className="ti-mobile"></i>
            <h4 style={{ color: "#1a2d62", fontSize: "40px" }}>Telephone</h4>
            <p style={{ color: "#888", fontSize: "20px" }}>
              <FaMobileAlt style={{ marginRight: "8px" }} />
              (+1) 517 397 7100 <br />
              <FaMobileAlt style={{ marginRight: "8px" }} /> (+1) 411 315 8138
            </p>
          </div>
          <div className="col-md-4">
            <i className="ti-email"></i>
            <h4 style={{ color: "#1a2d62", fontSize: "40px" }}>Send email</h4>
            <p style={{ color: "#888", fontSize: "20px" }}>
              <FaEnvelope style={{ marginRight: "8px" }} />
              Info@example.com <br />{" "}
              <FaEnvelope style={{ marginRight: "8px" }} />
              admin@example.com
            </p>
          </div>
        </div>
      </div>

      <div className="form-control">
        <div className="section-title-two text-center mb-4 fade-in-left">
          <h2 style={{ color: "#1a2d62", fontSize: "40px", fontWeight: "700" }}>
            Send your message.
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-12">
            <label>Your Subject</label>
            <input
              type="text"
              name="subject"
              className="form-control"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-12">
            <label>Your Message</label>
            <textarea
              name="message"
              className="form-control"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="col-12 text-center">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
