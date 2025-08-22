import bacgroundAbout from "../Assets/Images/bacgroundAbout.png";
import QualityEducation from "../SheredComponent/Quality Education";
import ExperiencedTeachers from "../SheredComponent/Experienced Teachers";
import DeliciousFood from "../SheredComponent/Delicious Food";

function OnHome() {
  return (
    <>
      <section
        id="home"
        className="homeBackground fade-in-left"
        style={{
          backgroundImage: `url(${bacgroundAbout})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          height: "100vh",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12 text-center">
              <div
                className="homeContent fade-in-right"
                style={{ paddingTop: "150px", position: "relative" }}
              >
                <h1
                  style={{
                    color: "#1a2d62",
                    fontSize: "60px",
                    fontWeight: "700",
                    fontFamily: "'Mulish', sans-serif",
                  }}
                >
                  Get Smart{" "}
                  <span>
                    <u style={{ color: "#2eca7f" }}>opportunity for</u>
                  </span>{" "}
                  your best future
                </h1>
                <p
                  style={{
                    color: "#888",
                    marginBottom: "40px",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                >
                  It is a long established fact that reader will be distracted
                  readable content of a page when.
                </p>
              </div>

              <div className="homeSearch fade-in-right">
                <form className="bannerSubs">
                  <input
                    type="text"
                    className="form-control homeSearchInput"
                    name="s"
                    placeholder="Search your course here"
                    required
                  />
                  <input type="hidden" name="post_type" value="courses" />
                  <button type="submit" className="btn ">
                    Search
                  </button>
                </form>
              </div>

              <div className="homeTag fade-in-right">
                <span style={{ color: "#888" }}>Popular Topic:</span>
                <a
                  href="https://wpdemothemes.com/edusion/course-category/business/?tutor-course-filter-category=64"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Business
                </a>
                <span className="popularTopics">,</span>
                <a
                  href="https://wpdemothemes.com/edusion/course-category/data-science/?tutor-course-filter-category=65"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Data Science
                </a>
                <span className="popularTopics">,</span>
                <a
                  href="https://wpdemothemes.com/edusion/course-category/digital-program/?tutor-course-filter-category=61"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Digital Program
                </a>
                <span className="popularTopics">,</span>
                <a
                  href="https://wpdemothemes.com/edusion/course-category/finance/?tutor-course-filter-category=62"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Finance
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="qualitySection">
        <QualityEducation />
      </div>
      <div className="experiencedSection">
        <ExperiencedTeachers />
      </div>
      <div className="deliciousSection">
        <DeliciousFood />
      </div>

      <section className="learningSection fade-in-right">
        <div className="container">
          <div className="sectionTitle">
            <h2 style={{ color: "#2eca7f" }}>Start Learning</h2>
            <p
              style={{
                color: "#1a2d62 ",
                fontSize: "48px",
                fontWeight: "bold",
              }}
            >
              Popular{" "}
              <span>
                <u
                  style={{
                    color: "#2eca7f ",
                    fontSize: "48px",
                    fontWeight: "bold",
                  }}
                >
                  Topics To Learn
                </u>
              </span>{" "}
              From Today.
            </p>
          </div>
          <div className="row fade-in-left">
            {[
              {
                title: "Business",
                img: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/ct5.svg",
                courses: "1 Courses",
                link: "https://wpdemothemes.com/edusion/course-category/business/?tutor-course-filter-category=64",
              },
              {
                title: "Data Science",
                img: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/ct6.svg",
                courses: "1 Courses",
                link: "https://wpdemothemes.com/edusion/course-category/data-science/?tutor-course-filter-category=65",
              },
              {
                title: "Digital Program",
                img: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/ct2.svg",
                courses: "2 Courses",
                link: "https://wpdemothemes.com/edusion/course-category/digital-program/?tutor-course-filter-category=61",
              },
              {
                title: "Finance",
                img: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/ct3.svg",
                courses: "2 Courses",
                link: "https://wpdemothemes.com/edusion/course-category/finance/?tutor-course-filter-category=62",
              },
              {
                title: "Modern Physics",
                img: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/ct4.svg",
                courses: "3 Courses",
                link: "https://wpdemothemes.com/edusion/course-category/modern-physics/?tutor-course-filter-category=63",
              },
              {
                title: "UI/UX Design",
                img: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/ct1.svg",
                courses: "3 Courses",
                link: "https://wpdemothemes.com/edusion/course-category/ui-ux-design/?tutor-course-filter-category=43",
              },
            ].map((topic, idx) => (
              <div className="col-lg-4 col-sm-6 col-xs-12" key={idx}>
                <div className="singleTopic">
                  <img src={topic.img} alt={topic.title} />
                  <h2>
                    <a href={topic.link}>{topic.title}</a>
                  </h2>
                  <span>{topic.courses}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="careerSection ">
        <div className="careerSectionInner row">
          <div className="col-lg-6 fade-in-left">
            <img
              src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/free-course-967x1024.png"
              alt="Free Course"
              width="640"
              height="678"
            />
          </div>
          <div className="col-lg-6">
            <div className="sectionContent fade-in-right">
              <h2
                style={{
                  color: "#1a2d62 ",
                  fontSize: "48px",
                }}
              >
                Learn new skills to go{" "}
                <u>
                  <span
                    style={{
                      color: "#2eca7f ",
                      fontSize: "48px",
                    }}
                  >
                    ahead for your
                  </span>
                </u>{" "}
                career.
              </h2>
              <p
                style={{
                  color: "#888 ",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur notted adipisicing elit
                sed do eiusmod tempor incididunt ut labore et simply. From blogs
                to emails to ad copies, auto-generate catchy, original, and
                high-converting copies in popular tones languages.
              </p>
              <p>
                <strong
                  style={{
                    color: "#888 ",
                    fontWeight: "bold",
                  }}
                >
                  Auto-generate catchy original and high-converting copies in
                  popular tones languages. From blogs to emails to ad copies
                  auto-generate catchy
                </strong>
              </p>

              <div className="Button">
                <a href="#%" className="btn btn-success px-4 py-2 mt-2">
                  <span>Explore More </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OnHome;
