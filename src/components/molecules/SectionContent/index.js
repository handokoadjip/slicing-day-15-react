import { Img1, Img2, Img3, Img4, Img5, Img6, Img7 } from "assets/source/image";
import { Button } from "components/atoms";
import React from "react";

const index = () => {
  return (
    <section>
      <div className="container my-0 my-lg-4">
        <div className="row">
          <div className="col-lg-6">
            <div className="wrapper position-relative mb-3 mb-lg-0 image-overlay">
              <img
                className="img-fluid w-100 h-image-500px o-8"
                src={Img1}
                alt="image-1"
              />
              <div className="position-absolute top-50 start-50 translate-middle p-4 text-white z-999 text-center w-100">
                <p className="mp-0 ff-playfair">Easy Import</p>
                <h2 className="fs-1 mb-3 text-uppercase">one-page websites</h2>
                <p className="mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  deleniti esse ea fuga porro odio!
                </p>
                <Button href="#">view more</Button>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="wrapper position-relative mb-3 mb-lg-0 image-overlay">
              <img
                className="img-fluid w-100 h-image-500px o-8"
                src={Img2}
                alt="image-2"
              />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="row">
              <div className="col-lg-12 mb-0 mb-lg-3">
                <div className="wrapper position-relative mb-3 mb-lg-0">
                  <div className="w-100 h-image-242px bg-black-2"></div>
                  <div className="position-absolute top-50 start-50 translate-middle p-4 text-white z-999 w-100">
                    <p className="mp-0 ff-playfair text-fade-1">Read More</p>
                    <h2 className="fs-2 mp-0 text-uppercase">about us</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="wrapper position-relative mb-3 mb-lg-0 image-overlay">
                  <img
                    className="img-fluid w-100 h-image-242px o-8"
                    src={Img3}
                    alt="image-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="wrapper position-relative mb-3 mb-lg-0 image-overlay">
              <img
                className="img-fluid w-100 h-image-500px o-8"
                src={Img4}
                alt="image-4"
              />
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-4 mb-0 mb-lg-3">
                <div className="wrapper position-relative mb-3 mb-lg-0 image-overlay">
                  <div className="w-100 h-image-242px bg-black-2"></div>
                  <div className="position-absolute top-50 start-50 translate-middle p-4 text-white z-999 w-100">
                    <p className="mp-0 ff-playfair text-fade-1">View Our</p>
                    <h2 className="fs-2 mp-0 text-uppercase">
                      latest portofolio
                    </h2>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 mb-0 mb-lg-3">
                <div className="wrapper position-relative mb-3 mb-lg-0 image-overlay">
                  <img
                    className="img-fluid w-100 h-image-242px o-8"
                    src={Img5}
                    alt="image-5"
                  />
                </div>
              </div>

              <div className="col-lg-8 mb-0 mb-lg-3">
                <div className="wrapper position-relative mb-3 mb-lg-0 image-overlay">
                  <img
                    className="img-fluid w-100 h-image-242px o-8"
                    src={Img6}
                    alt="image-6"
                  />
                </div>
              </div>

              <div className="col-lg-4 mb-3">
                <div className="wrapper position-relative mb-3 mb-lg-0 image-overlay">
                  <img
                    className="img-fluid w-100 h-image-242px o-8"
                    src={Img7}
                    alt="image-7"
                  />
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
