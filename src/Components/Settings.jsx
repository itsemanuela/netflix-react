const Settings = () => {
  return (
    <main className="text-dark bg-white pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h1 className="mt-5 pt-5">Account</h1>
            <hr />

            <section className="row pt-3 mt-4">
              <div className="col-md-4">
                <h5 className="text-secondary small fw-bold">
                  MEMBERSHIP & BILLING
                </h5>
                <button className="btn btn-light border shadow-sm mt-2 px-4 py-2 small text-nowrap">
                  Cancel Membership
                </button>
              </div>

              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-8">
                    <p className="fw-bold mb-1">student@strive.school</p>
                    <p className="text-secondary mb-1">Password *********</p>
                    <p className="text-secondary mb-1">331 726 4561</p>
                  </div>
                  <div className="col-md-4 text-md-end">
                    <p className="mb-1">
                      <a href="#" className="text-decoration-none">
                        Change account email
                      </a>
                    </p>
                    <p className="mb-1">
                      <a href="#" className="text-decoration-none">
                        Change password
                      </a>
                    </p>
                    <p className="mb-1">
                      <a href="#" className="text-decoration-none">
                        Change phone number
                      </a>
                    </p>
                  </div>

                  <div className="col-12">
                    <hr className="my-3" />
                  </div>

                  <div className="col-md-8">
                    <p className="fw-bold">
                      <i className="fab fa-paypal me-2"></i> Paypal
                      admin@strive.com
                    </p>
                  </div>
                  <div className="col-md-4 text-md-end">
                    <p className="mb-1">
                      <a href="#" className="text-decoration-none">
                        Update payment info
                      </a>
                    </p>
                    <p className="mb-1">
                      <a href="#" className="text-decoration-none">
                        Billing details
                      </a>
                    </p>
                  </div>

                  <div className="col-12">
                    <hr className="my-3" />
                  </div>

                  <div className="col-12 text-md-end">
                    <p className="mb-1">
                      <a href="#" className="text-decoration-none">
                        Redeem gift card or promo code
                      </a>
                    </p>
                    <p className="mb-0">
                      <a href="#" className="text-decoration-none">
                        Where to buy gift cards
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <hr />

            <section className="row pt-3">
              <div className="col-md-4">
                <h5 className="text-secondary small fw-bold">PLAN DETAILS</h5>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-8">
                    <p className="text-dark fw-bold mb-0">
                      Premium
                      <img
                        src="./Immagini/hd.jpg"
                        alt="hd icon"
                        className="ms-2"
                        style={{ width: "80px", verticalAlign: "middle" }}
                      />
                    </p>
                  </div>
                  <div className="col-md-4 text-md-end">
                    <p className="mb-0">
                      <a className="text-decoration-none" href="#">
                        Change plan
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className="col-12">
              <hr className="my-3" />
            </div>

            <section className="row pt-3">
              <div className="col-md-4">
                <h5 className="text-secondary small fw-bold">SETTINGS</h5>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-8">
                    <ul className="list-unstyled">
                      <li className="mb-1">
                        <a className="text-decoration-none" href="#">
                          Parental controls
                        </a>
                      </li>
                      <li className="mb-1">
                        <a className="text-decoration-none" href="#">
                          Test participation
                        </a>
                      </li>
                      <li className="mb-1">
                        <a className="text-decoration-none" href="#">
                          Manage download devices
                        </a>
                      </li>
                      <li className="mb-1">
                        <a className="text-decoration-none" href="#">
                          Activate a device
                        </a>
                      </li>
                      <li className="mb-1">
                        <a className="text-decoration-none" href="#">
                          Recent device streaming activity
                        </a>
                      </li>
                      <li className="mb-1">
                        <a className="text-decoration-none" href="#">
                          Sign out of all devices
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <div className="col-12">
              <hr className="my-3" />
            </div>

            <section className="row border-top py-3">
              <div className="col-md-4">
                <h5 className="text-secondary small fw-bold">MY PROFILE</h5>
              </div>

              <div className="col-md-8">
                <div className="row align-items-start">
                  <div className="col-6 d-flex align-items-center">
                    <img
                      src="./Immagini/avatar.png"
                      alt="avatar"
                      width="30"
                      className="rounded me-2"
                    />
                    <p className="text-dark fw-bold mb-0">Steve Student</p>
                  </div>

                  <div className="col-6 text-end">
                    <p className="mb-0 small">
                      <a href="#" className="text-decoration-none">
                        Manage profiles
                      </a>
                    </p>
                    <p className="mb-0 small">
                      <a href="#" className="text-decoration-none">
                        Add profile email
                      </a>
                    </p>
                  </div>

                  <div className="col-12 mt-3">
                    <div className="row">
                      <div className="col-md-8">
                        <p className="mb-1">
                          <a className="text-decoration-none" href="#">
                            Language
                          </a>
                        </p>
                        <p className="mb-1">
                          <a className="text-decoration-none" href="#">
                            Playback Settings
                          </a>
                        </p>
                        <p className="mb-1">
                          <a className="text-decoration-none" href="#">
                            Subtitles appearance
                          </a>
                        </p>
                      </div>
                      <div className="col-md-4">
                        <p className="mb-1">
                          <a
                            className="text-decoration-none text-nowrap"
                            href="#"
                          >
                            Viewing activity
                          </a>
                        </p>
                        <p className="mb-1">
                          <a className="text-decoration-none" href="#">
                            Ratings
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Settings;
