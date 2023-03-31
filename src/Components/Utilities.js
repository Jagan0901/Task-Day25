import { TopBar } from "./TopBar";
import { Footer } from "./Footer";

export function Utilities() {
  return (
    <>
      <div id="content">
        <TopBar />
        <div className="container-fluid">
          <h1 className="h3 mb-1 text-gray-800">Color Utilities</h1>
          <p className="mb-4">
            Bootstrap's default utility classNamees can be found on the official{" "}
            <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a>{" "}
            page. The custom utilities below were created to extend this theme
            past the default utility classNamees built into Bootstrap's framework.
          </p>

          <div className="row">
            <div className="col-lg-4">
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Custom Text Color Utilities
                  </h6>
                </div>
                <div className="card-body">
                  <p className="text-gray-100 p-3 bg-dark m-0">.text-gray-100</p>
                  <p className="text-gray-200 p-3 bg-dark m-0">.text-gray-200</p>
                  <p className="text-gray-300 p-3 bg-dark m-0">.text-gray-300</p>
                  <p className="text-gray-400 p-3 bg-dark m-0">.text-gray-400</p>
                  <p className="text-gray-500 p-3 m-0">.text-gray-500</p>
                  <p className="text-gray-600 p-3 m-0">.text-gray-600</p>
                  <p className="text-gray-700 p-3 m-0">.text-gray-700</p>
                  <p className="text-gray-800 p-3 m-0">.text-gray-800</p>
                  <p className="text-gray-900 p-3 m-0">.text-gray-900</p>
                </div>
              </div>

              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Custom Font Size Utilities
                  </h6>
                </div>
                <div className="card-body">
                  <p className="text-xs">.text-xs</p>
                  <p className="text-lg mb-0">.text-lg</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Custom Background Gradient Utilities
                  </h6>
                </div>
                <div className="card-body">
                  <div className="px-3 py-5 bg-gradient-primary text-white">
                    .bg-gradient-primary
                  </div>
                  <div className="px-3 py-5 bg-gradient-secondary text-white">
                    .bg-gradient-secondary
                  </div>
                  <div className="px-3 py-5 bg-gradient-success text-white">
                    .bg-gradient-success
                  </div>
                  <div className="px-3 py-5 bg-gradient-info text-white">
                    .bg-gradient-info
                  </div>
                  <div className="px-3 py-5 bg-gradient-warning text-white">
                    .bg-gradient-warning
                  </div>
                  <div className="px-3 py-5 bg-gradient-danger text-white">
                    .bg-gradient-danger
                  </div>
                  <div className="px-3 py-5 bg-gradient-light text-white">
                    .bg-gradient-light
                  </div>
                  <div className="px-3 py-5 bg-gradient-dark text-white">
                    .bg-gradient-dark
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Custom Grayscale Background Utilities
                  </h6>
                </div>
                <div className="card-body">
                  <div className="p-3 bg-gray-100">.bg-gray-100</div>
                  <div className="p-3 bg-gray-200">.bg-gray-200</div>
                  <div className="p-3 bg-gray-300">.bg-gray-300</div>
                  <div className="p-3 bg-gray-400">.bg-gray-400</div>
                  <div className="p-3 bg-gray-500 text-white">.bg-gray-500</div>
                  <div className="p-3 bg-gray-600 text-white">.bg-gray-600</div>
                  <div className="p-3 bg-gray-700 text-white">.bg-gray-700</div>
                  <div className="p-3 bg-gray-800 text-white">.bg-gray-800</div>
                  <div className="p-3 bg-gray-900 text-white">.bg-gray-900</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <h1 className="h3 mb-1 text-gray-800">Border Utilities</h1>
          <p className="mb-4">
            Bootstrap's default utility classNamees can be found on the official{" "}
            <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a>{" "}
            page. The custom utilities below were created to extend this theme
            past the default utility classNamees built into Bootstrap's framework.
          </p>

          <div className="row">
            <div className="col-lg-6">
              <div className="card mb-4 py-3 border-left-primary">
                <div className="card-body">.border-left-primary</div>
              </div>

              <div className="card mb-4 py-3 border-left-secondary">
                <div className="card-body">.border-left-secondary</div>
              </div>

              <div className="card mb-4 py-3 border-left-success">
                <div className="card-body">.border-left-success</div>
              </div>

              <div className="card mb-4 py-3 border-left-info">
                <div className="card-body">.border-left-info</div>
              </div>

              <div className="card mb-4 py-3 border-left-warning">
                <div className="card-body">.border-left-warning</div>
              </div>

              <div className="card mb-4 py-3 border-left-danger">
                <div className="card-body">.border-left-danger</div>
              </div>

              <div className="card mb-4 py-3 border-left-dark">
                <div className="card-body">.border-left-dark</div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card mb-4 py-3 border-bottom-primary">
                <div className="card-body">.border-bottom-primary</div>
              </div>

              <div className="card mb-4 py-3 border-bottom-secondary">
                <div className="card-body">.border-bottom-secondary</div>
              </div>

              <div className="card mb-4 py-3 border-bottom-success">
                <div className="card-body">.border-bottom-success</div>
              </div>

              <div className="card mb-4 py-3 border-bottom-info">
                <div className="card-body">.border-bottom-info</div>
              </div>

              <div className="card mb-4 py-3 border-bottom-warning">
                <div className="card-body">.border-bottom-warning</div>
              </div>

              <div className="card mb-4 py-3 border-bottom-danger">
                <div className="card-body">.border-bottom-danger</div>
              </div>

              <div className="card mb-4 py-3 border-bottom-dark">
                <div className="card-body">.border-bottom-dark</div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <h1 className="h3 mb-1 text-gray-800">Animation Utilities</h1>
          <p className="mb-4">
            Bootstrap's default utility classNamees can be found on the official{" "}
            <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a>{" "}
            page. The custom utilities below were created to extend this theme
            past the default utility classNamees built into Bootstrap's framework.
          </p>

          <div className="row">
            <div className="col-lg-6">
              <div className="card position-relative">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Grow In Animation Utilty
                  </h6>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <code>.animated--grow-in</code>
                  </div>
                  <div className="small mb-1">Navbar Dropdown Example:</div>
                  <nav className="navbar navbar-expand navbar-light bg-light mb-4">
                    <a className="navbar-brand" href="javascript(void)">
                      Navbar
                    </a>
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="javascript(void)"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Dropdown
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-right animated--grow-in"
                          aria-labelledby="navbarDropdown"
                        >
                          <a className="dropdown-item" href="javascript(void)">
                            Action
                          </a>
                          <a className="dropdown-item" href="javascript(void)">
                            Another action
                          </a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="javascript(void)">
                            Something else here
                          </a>
                        </div>
                      </li>
                    </ul>
                  </nav>
                  <p className="mb-0 small">
                    Note: This utility animates the CSS transform property,
                    meaning it will override any existing transforms on an
                    element being animated! In this theme, the grow in animation
                    is only being used on dropdowns within the navbar.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card position-relative">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Fade In Animation Utilty
                  </h6>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <code>.animated--fade-in</code>
                  </div>
                  <div className="small mb-1">Navbar Dropdown Example:</div>
                  <nav className="navbar navbar-expand navbar-light bg-light mb-4">
                    <a className="navbar-brand" href="javascript(void)">
                      Navbar
                    </a>
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="javascript(void)"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Dropdown
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-right animated--fade-in"
                          aria-labelledby="navbarDropdown"
                        >
                          <a className="dropdown-item" href="javascript(void)">
                            Action
                          </a>
                          <a className="dropdown-item" href="javascript(void)">
                            Another action
                          </a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="javascript(void)">
                            Something else here
                          </a>
                        </div>
                      </li>
                    </ul>
                  </nav>
                  <div className="small mb-1">Dropdown Button Example:</div>
                  <div className="dropdown mb-4">
                    <button
                      className="btn btn-primary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Dropdown
                    </button>
                    <div
                      className="dropdown-menu animated--fade-in"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="javascript(void)">
                        Action
                      </a>
                      <a className="dropdown-item" href="javascript(void)">
                        Another action
                      </a>
                      <a className="dropdown-item" href="javascript(void)">
                        Something else here
                      </a>
                    </div>
                  </div>
                  <p className="mb-0 small">
                    Note: This utility animates the CSS opacity property,
                    meaning it will override any existing opacity on an element
                    being animated!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <h1 className="h3 mb-1 text-gray-800">Other Utilities</h1>
          <p className="mb-4">
            Bootstrap's default utility classNamees can be found on the official{" "}
            <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a>{" "}
            page. The custom utilities below were created to extend this theme
            past the default utility classNamees built into Bootstrap's framework.
          </p>

          <div className="row">
            <div className="col-lg-6">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Overflow Hidden Utilty
                  </h6>
                </div>
                <div className="card-body">
                  Use <code>.o-hidden</code> to set the overflow property of any
                  element to hidden.
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Progress Small Utility
                  </h6>
                </div>
                <div className="card-body">
                  <div className="mb-1 small">Normal Progress Bar</div>
                  <div className="progress mb-4">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{"width": "75%"}}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="mb-1 small">Small Progress Bar</div>
                  <div className="progress progress-sm mb-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{"width": "75%"}}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  Use the <code>.progress-sm</code> className along with{" "}
                  <code>.progress</code>
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Dropdown - No Arrow
                  </h6>
                </div>
                <div className="card-body">
                  <div className="dropdown no-arrow mb-4">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Dropdown (no arrow)
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="javascript(void)">
                        Action
                      </a>
                      <a className="dropdown-item" href="javascript(void)">
                        Another action
                      </a>
                      <a className="dropdown-item" href="javascript(void)">
                        Something else here
                      </a>
                    </div>
                  </div>
                  Add the <code>.no-arrow</code> className alongside the{" "}
                  <code>.dropdown</code>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Rotation Utilities
                  </h6>
                </div>
                <div className="card-body text-center">
                  <div className="bg-primary text-white p-3 rotate-15 d-inline-block my-4">
                    .rotate-15
                  </div>
                  <hr />
                  <div className="bg-primary text-white p-3 rotate-n-15 d-inline-block my-4">
                    .rotate-n-15
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
