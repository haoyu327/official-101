import React, { Component } from "react"
import Slider1 from "../../img/slider/slide1.jpg"
import About from "../../img/380x370-2.jpg"
import Project1 from "../../img/projects/1.jpg"
import Project2 from "../../img/projects/2.jpg"
import Project3 from "../../img/projects/3.jpg"
import Project4 from "../../img/projects/4.jpg"
import Client1 from "../../img/clients/1.png"
import Client2 from "../../img/clients/2.png"
import Client3 from "../../img/clients/3.png"
import Payment1 from "../../img/payment/1.png"
import Payment2 from "../../img/payment/2.png"
import Payment3 from "../../img/payment/3.png"
import Payment4 from "../../img/payment/4.png"
import Payment5 from "../../img/payment/5.png"
import Payment6 from "../../img/payment/6.png"
import Payment7 from "../../img/payment/7.png"
import Payment8 from "../../img/payment/8.png"
import Payment9 from "../../img/payment/9.png"
import Background from "../../img/bg/text-1.jpg"
// import $ from "jquery"

export default class home extends Component {
  componentDidMount() {
    // require("https://code.jquery.com/jquery-3.6.0.js")
    // require("../../js/rev-slider/jquery.themepunch.revolution.min.js")
    // require("../../js/interface.js")

    console.log("A")
    // console.log($("#rev_slider"))
  }
  render() {
    const tag = {
      margin: "0 1px 0 0",
    }

    const clientList = {
      margin: "16px 0 0 0",
    }

    const column = {
      display: "flex",
    }

    return (
      <div>
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
                      src={Slider1}
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
                      data-x="['right','right','right','right']"
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
                      data-x="['right','right','right','right']"
                      data-hoffset="['0']"
                      data-y="['middle','middle','middle','middle']"
                      data-voffset="['75','105']"
                      data-fontsize="['24','24','24']"
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

                    {/* <!-- Layer 3 --> */}

                    <div
                      className="tp-caption"
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
                    >
                      <a
                        href="#index.html"
                        className="btn-text js-target-scroll"
                        style={tag}
                      >
                        模擬交易
                      </a>
                      <a href="#index.html" className="btn js-target-scroll">
                        立即註冊<i className="icon-next"></i>
                      </a>
                    </div>
                  </li>
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
                        Key to the fortune
                        <span className="text-primary">.</span>
                      </h3>
                      <div className="col-about-info">
                        <p>
                          <span className="text-primary">101</span>
                          始於大約兩年前的一個交易廳，Johnny、Ben
                          和老營業員們聊起了過去的輝煌，交易大廳比劃呼喊，交易員忙著接聽手邊響不停的電話。
                          1980年到1990前半期，是「台灣錢淹腳目」的年代，在國際熱錢大量湧入下，台股從
                          1986 年的 1,000 點，在短短不到四年內衝破一萬點。
                          <br />
                          <br />
                          相對如今卻如此冷清，進而發現手機交易的比例頻頻高升，但年輕人的開戶數比例卻直線下滑！
                          他們開始想為什麼呢？
                        </p>
                      </div>
                    </div>
                    <div className="col-base col-about-spec col-sm-6 col-md-4">
                      <p>
                        憑藉他們在金融領域的新發現，
                        <span className="text-primary">
                          他們意識到年輕人不知如何入手？也不知要相信誰？更不知要買什麼？還有個致命的問題
                          ，錢不夠。
                        </span>
                        他們很快認為，開發能夠為所有年輕人（尤其是 19～29
                        歲的人）提供進入金融市場的產品更為重要。
                        <br />
                        <br />
                        他們創建立了 101，從最基本開始，
                        一步一步邁向財富之路，這是一家利用技術來鼓勵所有年輕人參與我們的金融體系的公司。
                      </p>
                    </div>
                    <div className="clearfix visible-sm"></div>
                    <div className="col-base col-about-img col-sm-6 col-md-4">
                      <img alt="" className="img-responsive" src={About} />
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
                  style={column}
                >
                  <div className="project project-light">
                    {/* <!-- <a href="img/projects/1.jpg" title="project 1"> --> */}
                    <figure>
                      <img alt="" src={Project1} />
                      <figcaption></figcaption>
                    </figure>
                    {/* <!-- </a> --> */}
                  </div>
                  <div className="project project-light2">
                    {/* <!-- <a href="img/projects/2-480x880.jpg" title="project 2"> --> */}
                    <figure>
                      <img alt="" src={Project2} />
                      <figcaption>
                        {/* <!-- <h3 className="project-title">
                        推薦抽送 Apple 股票，<br />
                        統統有獎，<br />
                        介紹越多機會越多
                      </h3> --> */}
                        <h4 className="project-category">101 financial</h4>
                        {/* <!-- <div className="project-zoom"></div> --> */}
                      </figcaption>
                    </figure>
                    {/* <!-- </a> --> */}
                  </div>
                  <div className="project">
                    {/* <!-- <a href="img/projects/3-480x880.jpg" title="project 3"> --> */}
                    <figure>
                      <img alt="" src={Project3} />
                      <figcaption>
                        {/* <!-- <h3 className="project-title">Modern hotel<br />in London</h3>
                      <h4 className="project-category">
                        101 financial
                      </h4> -->
                    <!-- <div className="project-zoom"></div> --> */}
                      </figcaption>
                    </figure>
                    {/* <!-- </a> --> */}
                  </div>
                  <div className="project">
                    {/* <!-- <a href="img/projects/4-480x880.jpg" title="project 4"> --> */}
                    <figure>
                      <img alt="" src={Project4} />
                      <figcaption>
                        {/* <!-- <h3 className="project-title">Modern hotel<br />in London</h3> --> */}
                        <h4 className="project-category">101 financial</h4>
                        {/* <!-- <div className="project-zoom"></div> --> */}
                      </figcaption>
                    </figure>
                    {/* <!-- </a> --> */}
                  </div>
                </div>
              </div>
            </section>
            {/* end 產品優勢 section */}
            {/* <!-- Clients  --> */}

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
                      <img alt="" src={Client1} />
                    </li>
                    <li className="client">
                      <img alt="" src={Client2} />
                    </li>
                    <li className="client">
                      <img alt="" src={Client3} />
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            {/* client section end */}
            {/* <!-- payment --> */}

            <section className="experience section">
              <div className="container">
                <div
                  className="text-parallax"
                  data-stellar-background-ratio="0.85"
                  style={{ backgroundImage: `url('${Background}')` }}
                >
                  <div className="text-parallax-content">9</div>
                </div>
                <h4 className="experience-info wow fadeInRight">
                  種支付&nbsp;<span className="text-primary">渠道</span>
                </h4>
                <strong className="fade-title-right">Payment</strong>
                <ul className="clients-list" style={clientList}>
                  <li className="client">
                    <img alt="" src={Payment1} />
                  </li>
                  <li className="client">
                    <img alt="" src={Payment2} />
                  </li>
                  <li className="client">
                    <img alt="" src={Payment3} />
                  </li>
                  <li className="client">
                    <img alt="" src={Payment4} />
                  </li>
                </ul>
                <ul className="clients-list" style={clientList}>
                  <li className="client">
                    <img alt="" src={Payment5} />
                  </li>
                  <li className="client">
                    <img alt="" src={Payment6} />
                  </li>
                  <li className="client">
                    <img alt="" src={Payment7} />
                  </li>
                  <li className="client">
                    <img alt="" src={Payment8} />
                  </li>
                  <li className="client">
                    <img alt="" src={Payment9} />
                  </li>
                </ul>
              </div>
            </section>

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
    )
  }
}
