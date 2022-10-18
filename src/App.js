import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow justify-content-between">
          <h4 className="my-0 mr-md-auto font-weight-normal">Company name</h4>
          <nav className="my-2 my-md-0 mr-md-3 ">
            <a className="p-2 text-dark" href="#">
              Features
            </a>

            <a className="p-2 text-dark" href="#">
              Enetrprise
            </a>

            <a className="p-2 text-dark" href="#">
              Support
            </a>

            <a className="p-2 text-dark" href="#">
              Pricing
            </a>

            <button className="btn btn-outline-primary">Sign Up</button>
          </nav>
        </div>
      </header>
      <section>
        <div className="text-center pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center container">
          <h1 className="fw-light display-4">Pricing</h1>
          <p className="lead">
            Quickly build an effective pricing table for your potential
            customers with this Bootstrap example. It's built with default
            Bootstrap components and utilities with little customization.
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Free</h4>
                </div>
                <div className="card-body">
                  <h1 class="card-title pricing-card-title">
                    $0
                    <small className="text-muted">/ mo</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>10 users included</li>
                    <li>2 GB of storage</li>
                    <li>Email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button className="btn btn-lg btn-block btn-outline-primary">
                    Sign up for free
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Pro</h4>
                </div>
                <div className="card-body">
                  <h1 class="card-title pricing-card-title">
                    $15
                    <small className="text-muted">/ mo</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>20 users included</li>
                    <li>10 GB of storage</li>
                    <li>Priority email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button className="btn btn-lg btn-block btn btn-primary ">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Enterprise</h4>
                </div>
                <div className="card-body">
                  <h1 class="card-title pricing-card-title">
                    $29
                    <small className="text-muted">/ mo</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>30 users included</li>
                    <li>15 GB of storage</li>
                    <li>phone and email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button className="btn btn-lg btn-block btn btn-primary">
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="container py-5">
        <div className="row py-5 border-top">
          <div className="col">
            <img
              class="mb-2"
              src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
              alt=""
              width="24"
              height="24"
            />
            <p className="fw-light">© 2017-2018</p>
          </div>
          <div className="col">
            <h5>Features</h5>
            <ul className="list-unstyled mt-3 mb-4 ">
              <li>
                <a href="#">Cool stuff</a>
              </li>
              <li>
                <a href="#">Random feature</a>
              </li>
              <li>
                <a href="#">Team feature</a>
              </li>
              <li>
                <a href="#">Stuff for developers</a>
              </li>
              <li>
                <a href="#">Another one</a>
              </li>
              <li>
                <a href="#">Last time</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>Resources</h5>
            <ul className="list-unstyled mt-3 mb-4 ">
              <li>
                <a href="#">Resource</a>
              </li>
              <li>
                <a href="#">Resource name</a>
              </li>
              <li>
                <a href="#">Another resource</a>
              </li>
              <li>
                <a href="#">Final resource</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>About</h5>
            <ul className="list-unstyled mt-3 mb-4 ">
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Locations</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
