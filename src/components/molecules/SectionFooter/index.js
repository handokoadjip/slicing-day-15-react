import { Img1, Img2, Img3, Img4, Img5, Img6 } from "assets/source/image";
import { Article } from "components/atoms";
import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  const posts = [
    {
      title: "Step into the Work",
      date: "April 2, 2018",
      href: "#",
    },
    {
      title: "See more Do more",
      date: "April 2, 2018",
      href: "#",
    },
    {
      title: "Work & Design",
      date: "April 2, 2018",
      href: "#",
    },
  ];

  const accounts = [
    {
      image: Img1,
      name: "#",
      href: "#",
    },
    {
      image: Img2,
      name: "#",
      href: "#",
    },
    {
      image: Img3,
      name: "#",
      href: "#",
    },
    {
      image: Img4,
      name: "#",
      href: "#",
    },
    {
      image: Img5,
      name: "#",
      href: "#",
    },
    {
      image: Img6,
      href: "#",
    },
  ];

  return (
    <section className="p-5 bg-black-2">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row w-100 pt-5">
          <div className="col-lg-3 mb-5 mb-lg-0">
            <div className="wrapper text-center text-lg-start">
              <h3 className="fs-6 mb-4 text-uppercase fw-bold">
                this is dorian theme
              </h3>
              <p className="text-fade-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                magni unde, reprehenderit quos corrupti voluptas error mollitia
                quae facilis commodi dolorem ipsa asperiores reiciendis
                aspernatur minima ullam possimus molestias tempora.
              </p>
              <div className="mb-5 mb-lg-0">
                <Link className="text-decoration-none mx-2 text-fade-1" to="#">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link className="text-decoration-none mx-2 text-fade-1" to="#">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link className="text-decoration-none mx-2 text-fade-1" to="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link className="text-decoration-none mx-2 text-fade-1" to="#">
                  <i className="fab fa-pinterest"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-5 mb-lg-0">
            <div className="wrapper text-center text-lg-start">
              <h3 className="fs-6 mb-4 text-uppercase fw-bold">latest post</h3>
              <div>
                {posts ? (
                  posts.map((post, index) => {
                    return (
                      <Article
                        title={post.title}
                        date={post.date}
                        href={post.href}
                        key={`post-${index}`}
                      />
                    );
                  })
                ) : (
                  <span className="text-fade-1 fw-bold">
                    No List in this section
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-5 mb-lg-0">
            <div className="wrapper text-center text-lg-start">
              <h3 className="fs-6 mb-4 text-uppercase fw-bold">
                some widget here
              </h3>
              <nav>
                <Link
                  className="text-decoration-none mb-1 d-block text-fade-1 text-capitalize"
                  to="#"
                >
                  find ot more about us
                </Link>
                <Link
                  className="text-decoration-none mb-1 d-block text-fade-1 text-capitalize"
                  to="#"
                >
                  read our awesome publications
                </Link>
                <Link
                  className="text-decoration-none mb-1 d-block text-fade-1 text-capitalize"
                  to="#"
                >
                  apply now and join the team
                </Link>
                <Link
                  className="text-decoration-none mb-1 d-block text-fade-1 text-capitalize"
                  to="#"
                >
                  check out our awarded projects
                </Link>
                <Link
                  className="text-decoration-none mb-1 d-block text-fade-1 text-capitalize"
                  to="#"
                >
                  drop us & introduce yourself
                </Link>
              </nav>
            </div>
          </div>
          <div className="col-lg-3 mb-5 mb-lg-0">
            <div className="wrapper text-center text-lg-start position-relative">
              <h3 className="fs-6 mb-4 text-uppercase fw-bold">follow us</h3>
              <div className="row mb-3">
                <div className="col-lg-12">
                  <div className="mb-1 mb-lg-3">
                    {accounts ? (
                      accounts.map((account, index) => {
                        return (
                          <Link to={account.href} key={`account-${index}`}>
                            <img
                              className="img-fluid wh-image-50px o-8 mb-3 me-0 me-lg-3"
                              src={account.image}
                              alt={account.name}
                            />
                          </Link>
                        );
                      })
                    ) : (
                      <span className="text-fade-1 fw-bold">
                        No List in this section
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
