import bacgroundAbout from "../Assets/Images/bacgroundAbout.png";

function Courses() {
  const courses = [
    {
      title: "Financial Security Thinking and Principles Theory",
      category: "Business",
      lessons: 6,
      duration: "4 hours",
      rating: 4.5,
      level: "All Levels",
      price: "$265",
      img: "https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-karolina-grabowska-5882683.jpg",
      link: "#",
    },
    {
      title: "Professional Ceramic Moulding for Beginners",
      category: "Finance",
      lessons: 15,
      duration: "4 hours",
      rating: 5.0,
      level: "All Levels",
      price: "$250",
      img: "https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-olia-danilevich-4974912-420x280.jpg",
      link: "#",
    },
    {
      title: "Basic Fundamentals of Interior & Graphics Design",
      category: "UI/UX Design",
      lessons: 16,
      duration: "22 hours 30 min",
      rating: 5.0,
      level: "Intermediate",
      price: "Free",
      img: "https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-tiia-pakk-4350767.jpg",
      link: "#",
    },
    {
      title: "WordPress for Beginners – Master WordPress",
      category: "Digital Program",
      lessons: 15,
      duration: "7 hours 30 min",
      rating: 4.33,
      level: "Beginner",
      price: "Free",
      img: "https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-pixabay-265667.jpg",
      link: "#",
    },
    {
      title: "The Complete Python Course for Beginner 2023",
      category: "Data Science",
      lessons: 14,
      duration: "18 hours 20 min",
      rating: 4.0,
      level: "Intermediate",
      price: "Free",
      img: "https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-eugene-capon-1261823.jpg",
      link: "#",
    },
    {
      title: "Ultimate Photoshop Training: From Beginner",
      category: "UI/UX Design",
      lessons: 14,
      duration: "13 hours 20 min",
      rating: 3.33,
      level: "All Levels",
      price: "Free",
      img: "https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-christina-morillo-1181359.jpg",
      link: "#",
    },
    {
      title: "Basic Fundamentals of Interior & Graphics Design",
      category: "Modern Physics",
      lessons: 16,
      duration: "15 hours 20 min",
      rating: 5.0,
      level: "Beginner",
      price: "$180",
      img: "https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-josh-sorenson-1714202.jpg",
      link: "#",
    },
    {
      title: "Sales Training: Practical Sales Techniques",
      category: "Finance / Modern Physics",
      lessons: 14,
      duration: "2 hours 20 min",
      rating: 4.0,
      level: "Expert",
      price: "Free",
      img: "https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-mikael-blomkvist-6476595.jpg",
      link: "#",
    },
    {
      title: "Advanced UI/UX Design Course",
      category: "UI/UX Design",
      lessons: 12,
      duration: "10 hours",
      rating: 4.8,
      level: "Advanced",
      price: "$300",
      img: "https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-eugene-capon-1261823.jpg",
      link: "#",
    },
  ];

  return (
    <>
      <section
        className="courseSection py-5 fade-in-left"
        style={{
          backgroundImage: `url(${bacgroundAbout})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="container text-center  fade-in-right">
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
            Courses
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
              <a
                href="/"
                className=" text-decoration-underline "
                style={{ textDecoration: "none", color: "#2eca7f" }}
              >
                Home
              </a>
            </li>
            <li className="list-inline-item" style={{ color: "#1a2d62" }}>
              / Courses
            </li>
          </ul>
        </div>
      </section>

      <div className="tutor-container fade-in-left">
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div className="tutor-card" key={index}>
              <div className="course-img-wrapper">
                <img
                  src={course.img}
                  alt={course.title}
                  className="course-img"
                />
                <a href={course.link} className="view-btn">
                  View Course
                </a>
                <span className="course-price">{course.price}</span>
              </div>
              <div className="course-content">
                <div className="course-category">
                  {course.category.split("/").map((cat, i) => (
                    <span key={i} className="category-badge">
                      {cat.trim()}
                    </span>
                  ))}
                </div>
                <h3 className="course-title">{course.title}</h3>
                <div className="course-meta">
                  <span>{course.lessons} Lessons</span> |{" "}
                  <span>{course.duration}</span> |{" "}
                  <span>{course.rating} ★</span> | <span>{course.level}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Courses;
