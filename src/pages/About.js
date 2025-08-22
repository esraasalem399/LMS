import bacgroundAbout from "../Assets/Images/bacgroundAbout.png";
import imageAbout from "../Assets/Images/imageAbout.png";
function About() {
  return (
    <section
      className="aboutSection py-5 "
      style={{
        backgroundImage: `url(${bacgroundAbout})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" text-center text-dark fade-in-right">
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
          About Us
        </h1>
        <ul
          className="list-inline "
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
            / About Us
          </li>
        </ul>
      </div>

      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center mb-4 mb-md-0 fade-in-left">
            <img
              src={imageAbout}
              alt="Course illustration"
              className="img-fluid rounded shadow"
              style={{ maxWidth: "350px" }}
            />
          </div>

          <div className="contentCourse col-md-6 bg-white p-4 rounded shadow fade-in-right ">
            <h2 className="mb-3">
              Learn new skills to go{" "}
              <u>
                <span>ahead for your</span>
              </u>{" "}
              career.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. From
              blogs to emails to ad copies, auto-generate catchy, original, and
              high-converting content in multiple languages.
            </p>
            <p className="fw-semibold">
              Auto-generate catchy, original, and high-converting content for
              blogs, emails, and ad copies.
            </p>
            <a href="#" className="button">
              Explore More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
