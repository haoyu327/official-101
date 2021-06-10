import React, { Component } from 'react';

class Header extends Component {
 render() {
  return (
   <div>
      {/* <!-- Loader --> */}

    <div classNameName="loader">
      <div classNameName="page-lines">
        <div classNameName="container">
          <div classNameName="col-line col-xs-4">
            <div classNameName="line"></div>
          </div>
          <div classNameName="col-line col-xs-4">
            <div classNameName="line"></div>
          </div>
          <div classNameName="col-line col-xs-4">
            <div classNameName="line"></div>
            <div classNameName="line"></div>
          </div>
        </div>
      </div>
      <div classNameName="loader-brand">
        <div classNameName="sk-folding-cube">
          <div classNameName="sk-cube1 sk-cube"></div>
          <div classNameName="sk-cube2 sk-cube"></div>
          <div classNameName="sk-cube4 sk-cube"></div>
          <div classNameName="sk-cube3 sk-cube"></div>
        </div>
      </div>
    </div>

    {/* <!-- Header --> */}

    <header id="top" classNameName="header-home">
      <div classNameName="brand-panel">
        <a href="#top" classNameName="brand js-target-scroll">
          <img classNameName="logo" src="img/img-icon/logo_101_512.png" />
          101&nbsp;financial<span classNameName="text-primary">.</span>app
        </a>
        <div classNameName="brand-name">101.financial</div>
        {/* <!-- <div classNameName="slide-number">
          <span classNameName="current-number text-primary"
            >0<span classNameName="count">1</span></span
          >
          <sup
            ><span classNameName="delimiter">/</span> 0<span classNameName="total-count"></span
          ></sup>
        </div> --> */}
      </div>

      <div classNameName="vertical-panel"></div>
      <div classNameName="vertical-panel-content">
        <div classNameName="vertical-panel-info">
          <div classNameName="vertical-panel-title">Key to the fortune.</div>
          <div classNameName="line"></div>
        </div>
        {/* <!-- <ul classNameName="social-list">
          <li><a href="" classNameName="fa fa-instagram"></a></li>
          <li><a href="" classNameName="fa fa-twitter"></a></li>
          <li><a href="" classNameName="fa fa-behance"></a></li>
          <li><a href="" classNameName="fa fa-facebook"></a></li>
        </ul> --> */}
      </div>

      {/* <!-- Navigation Desctop -->
      <!-- <nav classNameName="navbar navbar-expand-lg navbar-light bg-light">
        <a classNameName="navbar-brand" href="#">Navbar</a>
        <button
          classNameName="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span classNameName="navbar-toggler-icon"></span>
        </button>

        <div classNameName="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul classNameName="navbar-nav mr-auto mt-2 mt-lg-0">
            <li classNameName="nav-item active">
              <a classNameName="nav-link" href="#"
                >Home <span classNameName="sr-only">(current)</span></a
              >
            </li>
            <li classNameName="nav-item">
              <a classNameName="nav-link" href="#">Link</a>
            </li>
            <li classNameName="nav-item">
              <a classNameName="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          <form classNameName="form-inline my-2 my-lg-0">
            <input
              classNameName="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            />
            <button classNameName="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav> --> */}

      <nav classNameName="navbar-desctop d-none d-md-block d-lg-block">
        <div classNameName="container">
          <a href="#top" classNameName="brand js-target-scroll">
            <img classNameName="logo-scroll" src="img/img-icon/logo_101_512.png" />
          </a>
          <ul classNameName="navbar-desctop-menu">
            <li classNameName="active">
              <a href="index.html"> 首頁</a>
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
              <a href="blog.html">登入</a>
            </li>
            <li>
              <a href="contacts.html">註冊</a>
              <ul>
                <li><a href="index.html">註冊會員</a></li>
                <li><a href="index.html">模擬交易</a></li>
              </ul>
            </li>
            <li>
              <a href="index.html">繁體中文</a>
              <ul>
                <li><a href="index.html">繁體中文</a></li>
                <li><a href="index.html">English</a></li>
                <li><a href="index.html">ไทย</a></li>
                <li><a href="index.html">Tiếng Việt</a></li>
                <li><a href="index.html">bahasa Indonesia</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      {/* <!-- Navigation Mobile --> */}
      <nav classNameName="navbar-mobile navbar">
        <a href="#top" classNameName="brand js-target-scroll">
          <img classNameName="logo-scroll mobile" src="img/img-icon/logo_101_512.png" />
          {/* <!-- 101<span classNameName="text-primary">.</span>financial --> */}
        </a>

        {/* <!-- Navbar Collapse --> */}
        <button
          classNameName="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-mobile"
          aria-controls="navbar-mobile"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span classNameName="navbar-toggler-icon"></span>
        </button>

        {/* <!-- <button
          type="button"
          classNameName="navbar-toggler collapsed"
          data-toggle="collapse"
          data-target="#navbar-mobile"
        >
          <span classNameName="sr-only">Toggle navigation</span>
          <span classNameName="icon-bar"></span>
          <span classNameName="icon-bar"></span>
          <span classNameName="icon-bar"></span>
        </button> --> */}

        <div classNameName="collapse navbar-collapse" id="navbar-mobile">
          <ul classNameName="navbar-nav navbar-nav-mobile">
            <li classNameName="active">
              <a href="#">商品</a>
            </li>
            <li>
              <a href="about.html">教學</a>
            </li>
            <li>
              <a href="#">登入</a>
            </li>
            <li>
              <a href="contacts.html">註冊</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>

   {/* <!-- Layout --> */}
    <div className="layout">
      {/* <!-- Home --> */}
      <main className="main">
        {/* <!-- <div className="arrow-left"></div>
        <div className="arrow-right"></div> --> */}

        {/* <!-- Start revolution slider --> */}

        <div className="rev_slider_wrapper">
          <div id="rev_slider" className="rev_slider fullscreenbanner">
            <ul>
              {/* <!-- Slide 1 --> */}

              <li
                data-transition="slotzoom-horizontal"
                data-slotamount="7"
                data-masterspeed="1000"
                data-fsmasterspeed="1000"
              >
                {/* <!-- Main image--> */}

                <img
                  src="img/slider/slide1.jpg"
                  alt=""
                  data-bgposition="center center"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                  className="rev-slidebg"
                />

                {/* <!-- Layer 1 --> */}

                <div
                  className="slide-title tp-caption tp-resizeme"
                  data-left="400px"
                  data-x="['right,'right','right','right']"
                  data-hoffset="['-18','-18','-18','-18']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['-35','-35', '-25']"
                  data-fontsize="['50','45', '55']"
                  data-lineheight="['80','75', '80']"
                  data-width="['1100','700','550']"
                  data-height="none"
                  data-whitespace="normal"
                  data-transform_idle="o:1;"
                  data-transform_in="x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power2.easeInOut;"
                  data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                  data-mask_in="x:50px;y:0px;s:inherit;e:inherit;"
                  data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                  data-start="500"
                  data-splitin="chars"
                  data-splitout="none"
                  data-responsive_offset="on"
                  data-elementdelay="0.05"
                >
                  簡單上手交易
                </div>

                {/* <!-- Layer 2 --> */}

                <div
                  className="slide-subtitle tp-caption tp-resizeme"
                  data-x="['right,'right','right','right']"
                  data-hoffset="['0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['75','105']"
                  data-fontsize="['24','24','16']"
                  data-whitespace="nowrap"
                  data-transform_idle="o:1;"
                  data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1200;e:Power1.easeInOut;"
                  data-transform_out="opacity:0;s:1000;s:1000;"
                  data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                  data-start="1500"
                  data-splitin="none"
                  data-splitout="none"
                >
                  股票&nbsp;&nbsp;&nbsp;&nbsp;期貨&nbsp;&nbsp;&nbsp;&nbsp;CFD&nbsp;&nbsp;&nbsp;&nbsp;權證
                </div>
{/* 
                <!-- Layer 3 --> */}

                <div
                  className="tp-caption"
                  data-x="['right,'right','right','right']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['195','215']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-transform_idle="o:1;"
                  data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power1.easeInOut;"
                  data-style_hover="c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);"
                  data-transform_in="y:50px;opacity:0;s:1500;e:Power4.easeInOut;"
                  data-transform_out="y:[175%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                  data-mask_out="x:inherit;y:inherit;"
                  data-start="1500"
                  data-splitin="none"
                  data-splitout="none"
                  data-responsive_offset="on"
                >
                  <a
                    href="#"
                    className="btn-text js-target-scroll"
                    style="margin-right: 1em;"
                    >模擬交易</a
                  >
                  <a href="#" className="btn js-target-scroll"
                    >立即註冊<i className="icon-next"></i
                  ></a>
                </div>
              </li>

              {/* <!-- Slide 2 --> */}

              {/* <!-- <li
                data-transition="slotzoom-horizontal"
                data-slotamount="7"
                data-easein="Power3.easeInOut"
                data-easeout="Power3.easeInOut"
                data-masterspeed="1000"
              > --> */}
              {/* <!-- Main image --> */}

              {/* <!-- <img
                  src="img/slider/slide2.jpg"
                  alt=""
                  data-bgposition="center center"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                  className="rev-slidebg"
                /> --> */}

              {/* <!-- Layer 1 --> */}

              {/* <!-- <div
                  className="slide-title tp-caption tp-resizeme"
                  data-x="['right','right','right','right']"
                  data-hoffset="['-18','-18','-18','-18']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['-35','-35', '-55']"
                  data-fontsize="['50','45', '35']"
                  data-lineheight="['80','75','65']"
                  data-width="['1100','700','500']"
                  data-height="none"
                  data-whitespace="normal"
                  data-transform_idle="o:1;"
                  data-transform_in="x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power2.easeInOut;"
                  data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                  data-mask_in="x:50px;y:0px;s:inherit;e:inherit;"
                  data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                  data-start="500"
                  data-splitin="chars"
                  data-splitout="none"
                  data-responsive_offset="on"
                  data-elementdelay="0.05"
                >
                  Exhibition center in boston
                </div> --> */}

              {/* <!-- Layer 2 --> */}

              {/* <!-- <div
                  className="slide-subtitle tp-caption tp-resizeme"
                  data-x="['right','right','right','right']"
                  data-hoffset="['0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['75','105']"
                  data-fontsize="['18']"
                  data-whitespace="nowrap"
                  data-transform_idle="o:1;"
                  data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1200;e:Power1.easeInOut;"
                  data-transform_out="opacity:0;s:1000;s:1000;"
                  data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                  data-start="1500"
                  data-splitin="none"
                  data-splitout="none"
                >
                  Modern Hotel is the architecture of a new generation, a
                  building<br />
                  that exists not only in the dimension of space,<br />
                  but also in the dimension of time and communication.
                </div> --> */}

              {/* <!-- Layer 3 --> */}

              {/* <!-- <div
                  className="tp-caption tp-resizeme"
                  data-x="['right','right','right','right']"
                  data-hoffset="['0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['195','210']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-transform_idle="o:1;"
                  data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power1.easeInOut;"
                  data-style_hover="c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);"
                  data-transform_in="y:50px;opacity:0;s:1500;e:Power4.easeInOut;"
                  data-transform_out="y:[175%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                  data-mask_out="x:inherit;y:inherit;"
                  data-start="1500"
                  data-splitin="none"
                  data-splitout="none"
                  data-responsive_offset="on"
                  style="z-index: 8;"
                >
                  <a href="#about" className="btn js-target-scroll"
                    >Look more <i className="icon-next"></i
                  ></a>
                </div>
              </li> --> */}

              {/* <!-- Slide 3 --> */}

              {/* <!-- <li
                data-transition="slotzoom-horizontal"
                data-slotamount="7"
                data-easein="Power3.easeInOut"
                data-easeout="Power3.easeInOut"
                data-masterspeed="1000"
              > --> */}
              {/* <!-- Main image--> */}

              {/* <!-- <img
                  src="img/slider/slide3.jpg"
                  alt=""
                  data-bgposition="center center"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                  className="rev-slidebg"
                /> --> */}

              {/* <!-- Layer 1 --> */}

              {/* <!-- <div
                  className="slide-title tp-caption tp-resizeme"
                  data-x="['right','right','right','right']"
                  data-hoffset="['-18','-18','-18','-18']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['-35','-35', '-25']"
                  data-fontsize="['50','45', '35']"
                  data-lineheight="['80','75', '65']"
                  data-width="['1000','700','550']"
                  data-height="none"
                  data-whitespace="normal"
                  data-transform_idle="o:1;"
                  data-transform_in="x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power2.easeInOut;"
                  data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                  data-mask_in="x:50px;y:0px;s:inherit;e:inherit;"
                  data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                  data-start="500"
                  data-splitin="chars"
                  data-splitout="none"
                  data-responsive_offset="on"
                  data-elementdelay="0.05"
                >
                  Modern hotel in london
                </div> --> */}

              {/* <!-- Layer 2 --> */}

              {/* <!-- <div
                  className="slide-subtitle tp-caption tp-resizeme"
                  data-x="['right','right','right','right']"
                  data-hoffset="['0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['75','105']"
                  data-fontsize="['18']"
                  data-whitespace="nowrap"
                  data-transform_idle="o:1;"
                  data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1200;e:Power1.easeInOut;"
                  data-transform_out="opacity:0;s:1000;s:1000;"
                  data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                  data-start="1500"
                  data-splitin="none"
                  data-splitout="none"
                >
                  Exhibition Center is the architecture of a new generation,<br />
                  a building that exists not only in the dimension of space,<br />
                  but also in the dimension of time and communication.
                </div> --> */}

              {/* <!-- Layer 3 --> */}

              {/* <!-- <div
                  className="tp-caption tp-resizeme"
                  data-x="['right','right','right','right']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['195','215']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-transform_idle="o:1;"
                  data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power1.easeInOut;"
                  data-style_hover="c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);"
                  data-transform_in="y:50px;opacity:0;s:1500;e:Power4.easeInOut;"
                  data-transform_out="y:[175%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                  data-mask_out="x:inherit;y:inherit;"
                  data-start="1500"
                  data-splitin="none"
                  data-splitout="none"
                  data-responsive_offset="on"
                  style="z-index: 8;"
                >
                  <a href="#about" className="btn js-target-scroll"
                    >Look more <i className="icon-next"></i
                  ></a>
                </div> --> */}
              {/* <!-- </li> --> */}
            </ul>
          </div>
        </div>
      </main>

      <div className="content">
        {/* <!-- About  --> */}

        <section id="about" className="about section">
          <div className="container">
            <header className="section-header">
              <h2 className="section-title">
                品牌 <span className="text-primary">故事</span>
              </h2>
              <strong className="fade-title-left">About</strong>
            </header>
            <div className="section-content">
              <div className="row-base row">
                <div className="col-base col-sm-6 col-md-4">
                  <h3 className="col-about-title">
                    Key to the fortune<span className="text-primary">.</span>
                  </h3>
                  <div className="col-about-info">
                    <p>
                      <span className="text-primary">101</span>
                      始於大約兩年前的一個交易廳，Johnny、Ben
                      和老營業員們聊起了過去的輝煌，交易大廳比劃呼喊，交易員忙著接聽手邊響不停的電話。
                      1980年到1990前半期，是「台灣錢淹腳目」的年代，在國際熱錢大量湧入下，台股從
                      1986 年的 1,000 點，在短短不到四年內衝破一萬點。<br /><br />
                      相對如今卻如此冷清，進而發現手機交易的比例頻頻高升，但年輕人的開戶數比例卻直線下滑！
                      他們開始想為什麼呢？
                    </p>
                  </div>
                </div>
                <div className="col-base col-about-spec col-sm-6 col-md-4">
                  <p>
                    憑藉他們在金融領域的新發現，<span className="text-primary"
                      >他們意識到年輕人不知如何入手？也不知要相信誰？更不知要買什麼？還有個致命的問題
                      ，錢不夠。</span
                    >
                    他們很快認為，開發能夠為所有年輕人（尤其是 19～29
                    歲的人）提供進入金融市場的產品更為重要。<br /><br />
                    他們創建立了 101，從最基本開始，
                    一步一步邁向財富之路，這是一家利用技術來鼓勵所有年輕人參與我們的金融體系的公司。
                  </p>
                </div>
                <div className="clearfix visible-sm"></div>
                <div className="col-base col-about-img col-sm-6 col-md-4">
                  <img alt="" className="img-responsive" src="img/380x370-2.jpg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Projects --> */}

        <section className="projects section">
          <div className="container">
            <h2 className="section-title">
              產品 <span className="text-primary">優勢</span>
            </h2>
          </div>
          <div className="section-content">
            <div
              className="projects-carousel js-projects-carousel js-projects-gallery"
            >
              <div className="project project-light">
                {/* <!-- <a href="img/projects/1.jpg" title="project 1"> --> */}
                <figure>
                  <img alt="" src="img/projects/1.jpg" />
                  <figcaption>
                    {/* <!-- <h3 className="project-title">
                      你相信嗎？<br />
                      終身免手續費，<br />
                      沒有任何隱藏成本
                    </h3> --> */}
                    {/* <!-- <h4 className="project-category">
                      101 financial
                    </h4> -->
                    <!-- <div className="project-zoom"></div> --> */}
                  </figcaption>
                </figure>
                {/* <!-- </a> --> */}
              </div>
              <div className="project project-light2">
                {/* <!-- <a href="img/projects/2-480x880.jpg" title="project 2"> --> */}
                <figure>
                  <img alt="" src="img/projects/2.jpg" />
                  <figcaption>
                    {/* <!-- <h3 className="project-title">
                        推薦抽送 Apple 股票，<br />
                        統統有獎，<br />
                        介紹越多機會越多
                      </h3> --> */}
                    <h4 className="project-category">
                      101 financial
                    </h4>
                    {/* <!-- <div className="project-zoom"></div> --> */}
                  </figcaption>
                </figure>
                {/* <!-- </a> --> */}
              </div>
              <div className="project">
                {/* <!-- <a href="img/projects/3-480x880.jpg" title="project 3"> --> */}
                <figure>
                  <img alt="" src="img/projects/3.jpg" />
                  <figcaption>
                    {/* <!-- <h3 className="project-title">Modern hotel<br />in London</h3>
                      <h4 className="project-category">
                        101 financial
                      </h4> --> */}
                    {/* <!-- <div className="project-zoom"></div> --> */}
                  </figcaption>
                </figure>
                {/* <!-- </a> --> */}
              </div>
              <div className="project">
                {/* <!-- <a href="img/projects/4-480x880.jpg" title="project 4"> --> */}
                <figure>
                  <img alt="" src="img/projects/4.jpg" />
                  <figcaption>
                    {/* <!-- <h3 className="project-title">Modern hotel<br />in London</h3> --> */}
                    <h4 className="project-category">
                      101 financial
                    </h4>
                    {/* <!-- <div className="project-zoom"></div> --> */}
                  </figcaption>
                </figure>
                {/* <!-- </a> --> */}
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Experience -->

        <!-- Clients  --> */}

        <section className="clients section">
          <div className="container">
            <header className="section-header">
              <h2 className="section-title">
                我們的 <span className="text-primary">肯定</span>
              </h2>
              <strong className="fade-title-left">Awards</strong>
            </header>
            <div className="section-content">
              <ul className="clients-list">
                <li className="client">
                  <img alt="" src="img/clients/1.png" />
                </li>
                <li className="client">
                  <img alt="" src="img/clients/2.png" />
                </li>
                <li className="client">
                  <img alt="" src="img/clients/3.png" />
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- payment --> */}

        <section className="experience section">
          <div className="container">
            <div
              className="text-parallax"
              data-stellar-background-ratio="0.85"
              style="background-image: url('img/bg/text-1.jpg');"
            >
              <div className="text-parallax-content">9</div>
            </div>
            <h4 className="experience-info wow fadeInRight">
              種支付&nbsp;<span className="text-primary">渠道</span>
            </h4>
            <strong className="fade-title-right">Payment</strong>
            <ul className="clients-list" style="margin-top: 16px;">
              <li className="client">
                <img alt="" src="img/payment/1.png" />
              </li>
              <li className="client">
                <img alt="" src="img/payment/2.png" />
              </li>
              <li className="client">
                <img alt="" src="img/payment/3.png" />
              </li>
              <li className="client">
                <img alt="" src="img/payment/4.png" />
              </li>
            </ul>
            <ul className="clients-list" style="margin-top: 16px;">
              <li className="client">
                <img alt="" src="img/payment/5.png" />
              </li>
              <li className="client">
                <img alt="" src="img/payment/6.png" />
              </li>
              <li className="client">
                <img alt="" src="img/payment/7.png" />
              </li>
              <li className="client">
                <img alt="" src="img/payment/8.png" />
              </li>
              <li className="client">
                <img alt="" src="img/payment/9.png" />
              </li>
            </ul>
          </div>
        </section>

        {/* <!-- Footer --> */}

        <footer id="footer" className="footer">
          <div className="container">
            <div className="row-base row">
              <div className="col-base text-left-md col-md-4">
                <h2 className="section-title white left">
                  魚與熊掌兼得
                </h2>
                <h2 className="section-title left" style="text-align: left;">
                  <span className="text-primary">站在巨人肩膀輕鬆賺</span>
                </h2>
              </div>
              <div className="text-center-md col-base col-md-4">
                <a href="#" className="btn js-target-scroll"
                  >立即註冊<i className="icon-next"></i
                ></a>
              </div>
            </div>
          </div>
          <div className="container" style="margin-top: 20em;">
            <div className="row-base row">
              <div className="col-base text-left-md col-md-2">
                <h3 className="section-title white left">
                  隱私條款
                </h3>
                <div className="items"><a href="help-1.1.html">隱私政策</a></div>
                <div className="items">
                  <a href="help-1.1.html">網站使用條款</a>
                </div>
                <div className="items"><a href="help-1.1.html">資金安全</a></div>
                <div className="items"><a href="help-1.1.html">免責聲明</a></div>
              </div>
              <div className="text-left-md col-base col-md-2">
                <h3 className="section-title white left">
                  聯絡方式
                </h3>
                <div className="items"><a href="help-1.1.html">*email</a></div>
                <div className="items"><a href="help-1.1.html">客服諮詢</a></div>
                <div className="items"><a href="help-1.1.html">投訴和建議</a></div>
                <div className="items">
                  <img className="social-icon" alt="" src="facebook 1.png" />
                  <img className="social-icon" alt="" src="instagram.png" />
                </div>
              </div>
              <div className="col-base col-md-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.2202218218476!2d121.53536131439546!3d25.06052398395991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abe20d2b3043%3A0x45ed2e9a21edf66e!2zMTA0OTHlj7DljJfluILkuK3lsbHljYDlu7rlnIvljJfot6_kuozmrrUxMzUtMTM36JmfMTI!5e0!3m2!1szh-TW!2stw!4v1622021299898!5m2!1szh-TW!2stw"
                  width="100%"
                  height="100%"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row-base row">
              <div className="text-left-md col-base col-md-12">
                © 101 financial.app 2021. All Rights Reserved.
              </div>
            </div>
          </div>
        </footer>

        {/* <!-- Lines --> */}

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
      </div>
    </div>     



   </div>
  );
 }
}

export default Header;