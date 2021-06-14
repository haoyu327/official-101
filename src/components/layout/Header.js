import React, { Component } from "react"
import Logo101 from "../../img/img-icon/logo_101_512.png"
import { Link } from "react-router-dom"
class Header extends Component {
  render() {


    return (
      <div>
{/* <!-- Loader --> */}

    {/* <div className="loader">
      <div className="page-lines">
        <div className="container">
          <div className="col-line col-xs-4">
            <div className="line"></div>
          </div>
          <div className="col-line col-xs-4">
            <div className="line"></div>
          </div>
          <div className="col-line col-xs-4">
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
      <div className="loader-brand">
        <div className="sk-folding-cube">
          <div className="sk-cube1 sk-cube"></div>
          <div className="sk-cube2 sk-cube"></div>
          <div className="sk-cube4 sk-cube"></div>
          <div className="sk-cube3 sk-cube"></div>
        </div>
      </div>
    </div> */}
        {/* <!-- Header --> */}

        <header id="top" className="header-home">
          <div className="brand-panel">
            <a href="#top" className="brand js-target-scroll">
              <img className="logo" src={Logo101} alt="" />
              101&nbsp;financial<span className="text-primary">.</span>app
            </a>
            <div className="brand-name">101.financial</div>
            {/* <!-- <div className="slide-number">
          <span className="current-number text-primary"
            >0<span className="count">1</span></span
          >
          <sup
            ><span className="delimiter">/</span> 0<span className="total-count"></span
          ></sup>
        </div> --> */}
          </div>

          <div className="vertical-panel"></div>
          <div className="vertical-panel-content">
            <div className="vertical-panel-info">
              <div className="vertical-panel-title">Key to the fortune.</div>
              <div className="line"></div>
            </div>
            {/* <!-- <ul className="social-list">
          <li><a href="" className="fa fa-instagram"></a></li>
          <li><a href="" className="fa fa-twitter"></a></li>
          <li><a href="" className="fa fa-behance"></a></li>
          <li><a href="" className="fa fa-facebook"></a></li>
        </ul> --> */}
          </div>

          {/* <!-- Navigation Desctop -->
      <!-- <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#"
                >Home <span className="sr-only">(current)</span></a
              >
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav> --> */}

          <nav className="navbar-desctop visible-md visible-lg">
            <div className="container">
              <a href="#top" className="brand js-target-scroll">
                <img className="logo-scroll" src={Logo101} alt="" />
              </a>
              <ul className="navbar-desctop-menu">
                <li className="active">
                  <Link to="/"> 首頁</Link>
                </li>
                <li>
                  <Link to="/about">關於</Link>
                </li>
                <li>
                  <Link to="/education">教學</Link>
                </li>
                <li>
                  <Link to="/help">幫助中心</Link>
                </li>

                <li>
                  <Link to="/">登入</Link>
                </li>
                <li role="presentation" className="dropdown">
                  <Link
                    className="dropdown-toggle btn header"
                    data-toggle="dropdown"
                    to="/"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    註冊 <span className="caret"></span>
                  </Link>

                  <ul className="dropdown-menu">
                    <li>
                      <a href="index.html">註冊會員</a>
                    </li>
                    <li>
                      <a href="index.html">模擬交易</a>
                    </li>
                  </ul>
                </li>
                <li role="presentation" className="dropdown">
                  <a
                   
                    data-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    繁體中文 <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="index.html">繁體中文</a>
                    </li>
                    <li>
                      <a href="index.html">English</a>
                    </li>
                    <li>
                      <a href="index.html">ไทย</a>
                    </li>
                    <li>
                      <a href="index.html">Tiếng Việt</a>
                    </li>
                    <li>
                      <a href="index.html">bahasa Indonesia</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>

          {/* <!-- Navigation Mobile --> */}
          <nav className="navbar-mobile">
            <a href="#top" className="brand js-target-scroll">
              <img className="logo-scroll mobile" src={Logo101} />
              {/* <!-- 101<span className="text-primary">.</span>financial --> */}
            </a>

            {/* <!-- Navbar Collapse -->
        <!-- <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-mobile"
          aria-controls="navbar-mobile"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> --> */}

            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar-mobile"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar-mobile">
              <ul className="navbar-nav navbar-nav-mobile">
                <li className="active">
                  <a href="#">首頁</a>
                </li>
                <li>
                  <a href="about.html">關於</a>
                </li>
                <li>
                  <a href="teaching.html">教學</a>
                </li>
                <li>
                  <a href="help.html">幫助中心</a>
                </li>
                <li>
                  <a href="#">登入</a>
                </li>
                <li role="presentation" className="dropdown">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    註冊 <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="index.html">註冊會員</a>
                    </li>
                    <li>
                      <a href="index.html">模擬交易</a>
                    </li>
                  </ul>
                </li>
                <li role="presentation" className="dropdown">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    繁體中文 <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="index.html">繁體中文</a>
                    </li>
                    <li>
                      <a href="index.html">English</a>
                    </li>
                    <li>
                      <a href="index.html">ไทย</a>
                    </li>
                    <li>
                      <a href="index.html">Tiếng Việt</a>
                    </li>
                    <li>
                      <a href="index.html">bahasa Indonesia</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    )
  }
}

export default Header
