import { Footer } from "./Footer";
import { TopBar } from "./TopBar";


export function CustomComponents() {
  return (
    <>
    <div id="content">
        <TopBar/>
    <div className="container-fluid">

{/* <!-- Page Heading --> */}
<h1 className="h3 mb-4 text-gray-800">Buttons</h1>

<div className="row">

    <div className="col-lg-6">

        {/* <!-- Circle Buttons --> */}
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Circle Buttons</h6>
            </div>
            <div className="card-body">
                <p>Use Font Awesome Icons (included with this theme package) along with the circle
                    buttons as shown in the examples below!</p>
                {/* <!-- Circle Buttons (Default) --> */}
                <div className="mb-2">
                    <code>.btn-circle</code>
                </div>
                <a href="javascript(void)" className="btn btn-primary btn-circle">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="javascript(void)" className="btn btn-success btn-circle">
                    <i className="fas fa-check"></i>
                </a>
                <a href="javascript(void)" className="btn btn-info btn-circle">
                    <i className="fas fa-info-circle"></i>
                </a>
                <a href="javascript(void)" className="btn btn-warning btn-circle">
                    <i className="fas fa-exclamation-triangle"></i>
                </a>
                <a href="javascript(void)" className="btn btn-danger btn-circle">
                    <i className="fas fa-trash"></i>
                </a>
                {/* <!-- Circle Buttons (Small) --> */}
                <div className="mt-4 mb-2">
                    <code>.btn-circle .btn-sm</code>
                </div>
                <a href="javascript(void)" className="btn btn-primary btn-circle btn-sm">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="javascript(void)" className="btn btn-success btn-circle btn-sm">
                    <i className="fas fa-check"></i>
                </a>
                <a href="javascript(void)" className="btn btn-info btn-circle btn-sm">
                    <i className="fas fa-info-circle"></i>
                </a>
                <a href="javascript(void)" className="btn btn-warning btn-circle btn-sm">
                    <i className="fas fa-exclamation-triangle"></i>
                </a>
                <a href="javascript(void)" className="btn btn-danger btn-circle btn-sm">
                    <i className="fas fa-trash"></i>
                </a>
                {/* <!-- Circle Buttons (Large) --> */}
                <div className="mt-4 mb-2">
                    <code>.btn-circle .btn-lg</code>
                </div>
                <a href="javascript(void)" className="btn btn-primary btn-circle btn-lg">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="javascript(void)" className="btn btn-success btn-circle btn-lg">
                    <i className="fas fa-check"></i>
                </a>
                <a href="javascript(void)" className="btn btn-info btn-circle btn-lg">
                    <i className="fas fa-info-circle"></i>
                </a>
                <a href="javascript(void)" className="btn btn-warning btn-circle btn-lg">
                    <i className="fas fa-exclamation-triangle"></i>
                </a>
                <a href="javascript(void)" className="btn btn-danger btn-circle btn-lg">
                    <i className="fas fa-trash"></i>
                </a>
            </div>
        </div>

        {/* <!-- Brand Buttons --> */}
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Brand Buttons</h6>
            </div>
            <div className="card-body">
                <p>Google and Facebook buttons are available featuring each company's respective
                    brand color. They are used on the user login and registration pages.</p>
                <p>You can create more custom buttons by adding a new color variable in the
                    <code>_variables.scss</code> file and then using the Bootstrap button variant
                    mixin to create a new style, as demonstrated in the <code>_buttons.scss</code>
                    file.</p>
                <a href="javascript(void)" className="btn btn-google btn-block"><i className="fab fa-google fa-fw"></i>
                    .btn-google</a>
                <a href="javascript(void)" className="btn btn-facebook btn-block"><i
                        className="fab fa-facebook-f fa-fw"></i> .btn-facebook</a>

            </div>
        </div>

    </div>

    <div className="col-lg-6">

        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Split Buttons with Icon</h6>
            </div>
            <div className="card-body">
                <p>Works with any button colors, just use the <code>.btn-icon-split</code> className and
                    the markup in the examples below. The examples below also use the
                    <code>.text-white-50</code> helper className on the icons for additional styling,
                    but it is not required.</p>
                <a href="javascript(void)" className="btn btn-primary btn-icon-split">
                    <span className="icon text-white-50">
                        <i className="fas fa-flag"></i>
                    </span>
                    <span className="text">Split Button Primary</span>
                </a>
                <div className="my-2"></div>
                <a href="javascript(void)" className="btn btn-success btn-icon-split">
                    <span className="icon text-white-50">
                        <i className="fas fa-check"></i>
                    </span>
                    <span className="text">Split Button Success</span>
                </a>
                <div className="my-2"></div>
                <a href="javascript(void)" className="btn btn-info btn-icon-split">
                    <span className="icon text-white-50">
                        <i className="fas fa-info-circle"></i>
                    </span>
                    <span className="text">Split Button Info</span>
                </a>
                <div className="my-2"></div>
                <a href="javascript(void)" className="btn btn-warning btn-icon-split">
                    <span className="icon text-white-50">
                        <i className="fas fa-exclamation-triangle"></i>
                    </span>
                    <span className="text">Split Button Warning</span>
                </a>
                <div className="my-2"></div>
                <a href="javascript(void)" className="btn btn-danger btn-icon-split">
                    <span className="icon text-white-50">
                        <i className="fas fa-trash"></i>
                    </span>
                    <span className="text">Split Button Danger</span>
                </a>
                <div className="my-2"></div>
                <a href="javascript(void)" className="btn btn-secondary btn-icon-split">
                    <span className="icon text-white-50">
                        <i className="fas fa-arrow-right"></i>
                    </span>
                    <span className="text">Split Button Secondary</span>
                </a>
                <div className="my-2"></div>
                <a href="javascript(void)" className="btn btn-light btn-icon-split">
                    <span className="icon text-gray-600">
                        <i className="fas fa-arrow-right"></i>
                    </span>
                    <span className="text">Split Button Light</span>
                </a>
                <div className="mb-4"></div>
                <p>Also works with small and large button classNamees!</p>
                <a href="javascript(void)" className="btn btn-primary btn-icon-split btn-sm">
                    <span className="icon text-white-50">
                        <i className="fas fa-flag"></i>
                    </span>
                    <span className="text">Split Button Small</span>
                </a>
                <div className="my-2"></div>
                <a href="javascript(void)" className="btn btn-primary btn-icon-split btn-lg">
                    <span className="icon text-white-50">
                        <i className="fas fa-flag"></i>
                    </span>
                    <span className="text">Split Button Large</span>
                </a>
            </div>
        </div>

    </div>

</div>

</div>
 
<div className="container-fluid">

{/* <!-- Page Heading --> */}
<div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 className="h3 mb-0 text-gray-800">Cards</h1>
</div>

<div className="row">

    {/* <!-- Earnings (Monthly) Card Example --> */}
    <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            Earnings (Monthly)</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                    </div>
                    <div className="col-auto">
                        <i className="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Earnings (Annual) Card Example --> */}
    <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                            Earnings (Annual)</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                    </div>
                    <div className="col-auto">
                        <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Tasks Card Example --> */}
    <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                        </div>
                        <div className="row no-gutters align-items-center">
                            <div className="col-auto">
                                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                            </div>
                            <div className="col">
                                <div className="progress progress-sm mr-2">
                                    <div className="progress-bar bg-info" role="progressbar"
                                        style={{"width": "50%"}} aria-valuenow="50" aria-valuemin="0"
                                        aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Pending Requests Card Example --> */}
    <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                            Pending Requests</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                    </div>
                    <div className="col-auto">
                        <i className="fas fa-comments fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="row">

    <div className="col-lg-6">

        {/* <!-- Default Card Example --> */}
        <div className="card mb-4">
            <div className="card-header">
                Default Card Example
            </div>
            <div className="card-body">
                This card uses Bootstrap's default styling with no utility classNamees added. Global
                styles are the only things modifying the look and feel of this default card example.
            </div>
        </div>

        {/* <!-- Basic Card Example --> */}
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Basic Card Example</h6>
            </div>
            <div className="card-body">
                The styling for this basic card example is created by using default Bootstrap
                utility classNamees. By using utility classNamees, the style of the card component can be
                easily modified with no need for any custom CSS!
            </div>
        </div>

    </div>

    <div className="col-lg-6">

        {/* <!-- Dropdown Card Example --> */}
        <div className="card shadow mb-4">
            {/* <!-- Card Header - Dropdown --> */}
            <div
                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">Dropdown Card Example</h6>
                <div className="dropdown no-arrow">
                    <a className="dropdown-toggle" href="javascript(void)" role="button" id="dropdownMenuLink"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                        aria-labelledby="dropdownMenuLink">
                        <div className="dropdown-header">Dropdown Header:</div>
                        <a className="dropdown-item" href="javascript(void)">Action</a>
                        <a className="dropdown-item" href="javascript(void)">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="javascript(void)">Something else here</a>
                    </div>
                </div>
            </div>
            {/* <!-- Card Body --> */}
            <div className="card-body">
                Dropdown menus can be placed in the card header in order to extend the functionality
                of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis
                icon in the card header can be clicked on in order to toggle a dropdown menu.
            </div>
        </div>

        {/* <!-- Collapsable Card Example --> */}
        <div className="card shadow mb-4">
            {/* <!-- Card Header - Accordion --> */}
            <a href="#collapseCardExample" className="d-block card-header py-3" data-toggle="collapse"
                role="button" aria-expanded="true" aria-controls="collapseCardExample">
                <h6 className="m-0 font-weight-bold text-primary">Collapsable Card Example</h6>
            </a>
            {/* <!-- Card Content - Collapse --> */}
            <div className="collapse show" id="collapseCardExample">
                <div className="card-body">
                    This is a collapsable card example using Bootstrap's built in collapse
                    functionality. <strong>Click on the card header</strong> to see the card body
                    collapse and expand!
                </div>
            </div>
        </div>

    </div>

</div>

</div>

<Footer/>
    
</div>
    </>
  )
}
