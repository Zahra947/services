import React from "react";

export default function Services() {
  return (
    <div className="container-fluid">
      <div className="img-fluid d-flex align-items-sm-center justify-content-sm-center hfonts services-1 p-5">
        Find your&nbsp;<span className="services-11">services</span>&nbsp;here
      </div>
      <div className="row d-flex serv-part1">
        <div className="col-6 d-flex align-items-sm-center justify-content-sm-center ">
          <a href="#online" title="Online Services">
            <img
              src="https://images.pexels.com/photos/6446676/pexels-photo-6446676.jpeg?cs=srgb&dl=pexels-karina-zhukovskaya-6446676.jpg&fm=jpg"
              alt="online services"
              className="img-fluid p-3"
            />
          </a>
        </div>
        <div className="col-6 d-flex align-items-sm-center justify-content-sm-center">
          <a href="#in-person" title="In-Person Services">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?cs=srgb&dl=pexels-fauxels-3184465.jpg&fm=jpg"
              alt="in-person services"
              className="img-fluid p-3"
            />
          </a>
        </div>
      </div>
      <div
        className="online-services p-5 m-5 d-flex align-items-sm-start justify-content-sm-start"
        id="online"
      >
        <ul className="liststyle-1">
          <li>
            <a href="" title="Service 1">
              Service 1
            </a>
          </li>
          <li>
            <a href="" title="Service 2">
              Service 2
            </a>
          </li>
          <li>
            <a href="" title="Service 3">
              Service 3
            </a>
          </li>
        </ul>
      </div>
      <div className="row d-flex serv-part1">
        <div className="col-6 d-flex align-items-sm-center justify-content-sm-center texts p-5">
          We care about details.
        </div>
        <div className="col-6 d-flex align-items-sm-center justify-content-sm-center">
          <img
            src="https://images.pexels.com/photos/247781/pexels-photo-247781.jpeg?cs=srgb&dl=pexels-pixabay-247781.jpg&fm=jpg"
            alt="office team"
            className="img-fluid p-4"
          />
        </div>
      </div>
      <div
        className="in-person p-5 m-5 d-flex align-items-sm-start justify-content-sm-start"
        id="in-person"
      >
        <ul className="liststyle-1">
          <li>
            <a href="" title="Service 1">
              Service 1
            </a>
          </li>
          <li>
            <a href="" title="Service 2">
              Service 2
            </a>
          </li>
          <li>
            <a href="" title="Service 3">
              Service 3
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
