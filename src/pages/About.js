import React from "react";

export default function About() {
  return (
    <div className="container-fluid">
      <div className="img-fluid d-flex align-items-sm-center justify-content-sm-center hfonts about-1 p-5">
        We are a team
      </div>
      <div className="row d-flex ">
        <div className="col d-flex align-items-sm-center justify-content-sm-center texts p-5 m-5 about-11">
          We have started our company since 2010. We provide online and
          in-person services for you. We work in different &nbsp; teams . Each
          team has its own responsibilitis to meet your needs in a perfect way.
        </div>
      </div>

      <div className="row d-flex ">
        <div className="col d-flex align-items-sm-center justify-content-sm-center">
          <img
            src="https://images.pexels.com/photos/2467506/pexels-photo-2467506.jpeg?cs=srgb&dl=pexels-matheus-bertelli-2467506.jpg&fm=jpg"
            alt="team members"
            className="img-fluid p-4"
          />
        </div>
      </div>
      <div className="row d-flex align-items-sm-center justify-content-sm-center texts about-11">
        <div className="col d-flex align-items-sm-center justify-content-sm-center texts about-11">
          Our People:
        </div>
        <div className="table-responsive">
          <table className="table table-sm texts about-11">
            <thead>
              <tr>
                <th scope="col">Team 1</th>
                <th scope="col">Team 2</th>
                <th scope="col">Team 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Person 1</th>
                <td>Person 1</td>
                <td>Person 1</td>
              </tr>
              <tr>
                <th scope="row">Person 2</th>
                <td>Person 2</td>
                <td>Person 2</td>
              </tr>
              <tr>
                <th scope="row">Person 3</th>
                <td>Person 3</td>
                <td colspan="2">Person 3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
