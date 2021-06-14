import React, { Component } from 'react'

export default class Education extends Component {
 render() {
  return (
<body>
   {/* <!-- Layout --> */}

    <div className="layout">
      {/* <!-- Home --> */}

      <main
        className="main main-inner bg-about"
        data-stellar-background-ratio="0.6"
      >
        <div className="container">
          <header className="main-header">
            <h1>教學</h1>
          </header>
        </div>

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
      </main>

      <div className="content">
        {/* <!-- Services --> */}

        <section id="services" className="services section">
          <div className="container">
            {/* <!-- <header className="section-header">
              <h2 className="section-title">
                <span className="text-primary">Our</span> Services
              </h2>
            </header> --> */}
            <div className="section-content margin-top-0">
              <div className="row-services row-base row">
                <div
                  className="col-base col-service col-sm-6 col-md-3 wow fadeInUp"
                >
                  <div className="service-item">
                    <h3><a href="teaching-operate.html">帳戶操作</a></h3>
                    <div className="items">
                      <a href="teaching-operate.html"> 操作流程</a>
                    </div>
                    <div className="items">
                      <a href="teaching-account.html"> 如何開戶</a>
                    </div>
                    <div className="items">
                      <a href="teaching-problem.html"> 常見問題</a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-base col-service col-sm-6 col-md-3 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="service-item">
                    <h3><a href="teaching-deposit.html">出入金操作</a></h3>
                    <div className="items">
                      <a href="teaching-deposit.html"> 入金流程</a>
                    </div>
                    <div className="items">
                      <a href="teaching-withdrawal.html"> 出金流程</a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-base col-service col-sm-6 col-md-3 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="service-item">
                    <h3>客服系統</h3>
                    <div className="items"><a href="index.html"> 在線客服</a></div>
                    <div className="items"><a href="index.html"> 電話客服</a></div>
                    <div className="items">
                      <a href="index.html"> 投訴與建議</a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-base col-service col-sm-6 col-md-3 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="service-item">
                    <h3><a href="teaching-policy.html">隱私安全</a></h3>
                    <div className="items">
                      <a href="teaching-policy.html"> 隱私政策</a>
                    </div>
                    <div className="items"><a href="index.html"> 資金安全</a></div>
                    <div className="items"><a href="index.html"> 註銷帳戶</a></div>
                  </div>
                </div>
              </div>
            </div>
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

    {/* <!-- SCRIPTS --> */}

    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/smoothscroll.js"></script>
    <script src="js/jquery.validate.min.js"></script>
    <script src="js/wow.min.js"></script>
    <script src="js/jquery.stellar.min.js"></script>
    <script src="js/jquery.magnific-popup.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/interface.js"></script>
</body>
  )
 }
}
