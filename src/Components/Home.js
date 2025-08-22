import BackgroundHome from "../Assets/Images/backgroundHome.png";
import ExploreButton from "../SheredComponent/Explore Button";
import GirlHomeImage from "../Assets/Images/GirlHomeImage.png";
import QualityEducation from "../SheredComponent/Quality Education";
import ExperiencedTeachers from "../SheredComponent/Experienced Teachers";
import DeliciousFood from "../SheredComponent/Delicious Food";
import AboutImage from "../Assets/Images/about1.png";

function Home() {
  return (
    <>
      <section
        id="home"
        className="homeLarge fade-in-left"
        style={{
          backgroundImage: `url(${BackgroundHome})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          height: "100vh",
          width: "100%",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div
                className="homeContent fade-in-right"
                style={{ paddingTop: "250px", position: "relative" }}
              >
                <h1
                  style={{
                    color: "#1a2d62 ",
                    fontSize: "60px",
                    lineHeight: "70px",
                  }}
                >
                  Better{" "}
                  <span
                    style={{
                      color: "#2eca7f ",
                      fontSize: "48px",
                    }}
                  >
                    Learning Future
                  </span>{" "}
                  Starts With Edusion
                </h1>
                <p
                  style={{
                    color: "#888888 ",
                    marginBottom: "40px",
                    fontSize: "18px",
                  }}
                >
                  It is a long established fact that reader will be distracted
                  readable content of a page when.
                </p>
              </div>
              <ExploreButton />
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <div className="homeMeImg fade-in-left">
                <img
                  decoding="async"
                  src={GirlHomeImage}
                  className="img-fluid"
                  alt="Better Learning Future Starts With Edusion"
                  style={{
                    position: "relative",
                  }}
                />
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
      <div className="homeSection">
        <div className="aboutImage">
          <div className="aboutImageInner aboutImageInner-con-full aboutImageInner-flex  ">
            <div className="aboutImageInnerLeft">
              <div className="aboutImageContainer fade-in-left">
                <img
                  fetchPriority="high"
                  decoding="async"
                  width="640"
                  height="632"
                  src={AboutImage}
                  className="attachment-full size-full wp-image-63"
                  alt=""
                />
              </div>
            </div>
            <div className="content">
              <div className="subContent">
                <div className="contentSkill">
                  <div className="subContentSkill fade-in-right">
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
                          ahead for your{" "}
                        </span>
                      </u>{" "}
                      career.
                    </h2>
                    <p
                      style={{
                        color: "#888888 ",
                        marginBottom: "30px",
                        fontSize: "18px",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur notted adipisicing
                      elit sed do eiusmod tempor incididunt ut labore et simply.
                    </p>
                  </div>
                </div>
              </div>

              <div className="cardContainer">
                <div className="col-md-6 bg-white p-4 rounded shadow fade-in-right">
                  <h4
                    style={{
                      color: "#1a2d62 ",
                      fontSize: "24px",
                    }}
                  >
                    Our Mission
                  </h4>
                  <p
                    style={{
                      color: "#888888 ",
                      marginBottom: "30px",
                      fontSize: "18px",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                    do eiusmod tempor ut labore.
                  </p>
                </div>

                <div className="col-md-6 bg-white p-4 rounded shadow fade-in-right">
                  <h4
                    style={{
                      color: "#1a2d62 ",
                      fontSize: "24px",
                    }}
                  >
                    Our Vision
                  </h4>
                  <p
                    style={{
                      color: "#888888 ",
                      marginBottom: "30px",
                      fontSize: "18px",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                    do eiusmod tempor ut labore.
                  </p>
                </div>
              </div>

              <div className="Button">
                <div className="Button">
                  <a href="#" className="btn btn-success px-4 py-2 mt-2">
                    <span>Discover More </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
