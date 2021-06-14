import React, { Component } from "react"

export default class Help extends Component {
  render() {
    return (
      <div>
        <div className="layout">
          {/* <!-- Home --> */}

          <main
            className="main main-inner bg-about"
            data-stellar-background-ratio="0.6"
          >
            <div className="container">
              <header className="main-header">
                <h1>幫助中心</h1>
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
                    <div className="col-base col-service col-sm-6 col-md-3 wow fadeInUp">
                      <div className="service-item">
                        <h3>帳戶操作</h3>
                        <div className="items">
                          <a href="help-operate.html"> 操作流程</a>
                        </div>
                        <div className="items">
                          <a href="help-account.html"> 如何開戶</a>
                        </div>
                        <div className="items">
                          <a href="help-problem.html"> 常見問題</a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-base col-service col-sm-6 col-md-3 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <div className="service-item">
                        <h3>出入金操作</h3>
                        <div className="items">
                          <a href="help-deposit.html"> 入金流程</a>
                        </div>
                        <div className="items">
                          <a href="help-withdrawal.html"> 出金流程</a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-base col-service col-sm-6 col-md-3 wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <div className="service-item">
                        <h3>隱私安全</h3>
                        <div className="items">
                          <a href="help-policy.html"> 隱私政策</a>
                        </div>
                        <div className="items">
                          <a href="index.html"> 資金安全</a>
                        </div>
                        <div className="items">
                          <a href="index.html"> 註銷帳戶</a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-base col-service col-sm-6 col-md-3 wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      <div className="service-item">
                        <h3>模擬交易</h3>
                        <div className="items">
                          <a href="index.html"> 模擬交易步驟</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row-services margin-top row-base row">
                    <div className="col-base col-service col-sm-6 col-md-3 wow fadeInUp">
                      <div className="service-item">
                        <h3>直播下單教學</h3>
                        <div className="items">
                          <a href="index.html"> 直播下單步驟</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-base col-service col-sm-6 col-md-3 wow fadeInUp">
                      <div className="service-item">
                        <h3>常見問題</h3>
                        <div className="items">
                          <a href="help-campaign.html">活動</a>
                        </div>
                        <div className="items">
                          <a href="help-changepass.html">更改帳號/密碼</a>
                        </div>
                        <div className="items">
                          <a href="help-changephone.html">更改手機號碼</a>
                        </div>
                        <div className="items">
                          <a href="help-news.html">觀看新聞操作</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row-services margin-top row-base row">
                    <div className="col-base col-service col-sm-6 col-md-3 wow fadeInUp">
                      <div className="service-item">
                        <h3>美股指南</h3>
                        <div className="items">
                          <a href="help2-usrule.html"> 交易規則</a>
                        </div>
                        <div className="items">
                          <a href="help2-usmarket.html"> 主要市場</a>
                        </div>
                        <div className="items">
                          <a href="help2-ustype.html"> 訂單類型</a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-base col-service col-sm-6 col-md-3 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <div className="service-item">
                        <h3>港股指南</h3>
                        <div className="items">
                          <a href="index.html"> 交易規則</a>
                        </div>
                        <div className="items">
                          <a href="index.html"> 常見問題</a>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix visible-sm"></div>
                    <div
                      className="col-base col-service col-sm-6 col-md-3 wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <div className="service-item">
                        <h3>新加坡股指南</h3>
                        <div className="items">
                          <a href="index.html"> 交易規則</a>
                        </div>
                        <div className="items">
                          <a href="index.html"> 主要市場</a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-base col-service col-sm-6 col-md-3 wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      <div className="service-item">
                        <h3>期貨指南</h3>
                        <div className="items">
                          <a href="help2-futuresrule.html"> 交易規則</a>
                        </div>
                        <div className="items">
                          <a href="help2-futuresintro.html"> 商品介紹</a>
                        </div>
                        <div className="items">
                          <a href="help2-futurestype.html">訂單類型</a>
                        </div>
                        <div className="items">
                          <a href="help2-futuresmarket.html">交易市場</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row-services margin-top row-base row">
                    <div className="col-base col-service col-sm-6 col-md-3 wow fadeInUp">
                      <div className="service-item">
                        <h3>外匯指南</h3>
                        <div className="items">
                          <a href="index.html"> 交易規則</a>
                        </div>
                        <div className="items">
                          <a href="index.html"> 主要市場</a>
                        </div>
                        <div className="items">
                          <a href="index.html"> 訂單類型</a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-base col-service col-sm-6 col-md-3 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <div className="service-item">
                        <h3>虛擬貨幣指南</h3>
                        <div className="items">
                          <a href="index.html">交易規則</a>
                        </div>
                        <div className="items">
                          <a href="index.html">常見問題</a>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix visible-sm"></div>
                    <div
                      className="col-base col-service col-sm-6 col-md-3 wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <div className="service-item">
                        <h3>基本面分析學堂</h3>
                        <div className="items">
                          <a href="index.html"> 市場分析</a>
                        </div>
                        <div className="items">
                          <a href="index.html"> 公司分析</a>
                        </div>
                        <div className="items">
                          <a href="index.html"> 財務分析</a>
                        </div>
                        <div className="items">
                          <a href="index.html"> 心理分析</a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-base col-service col-sm-6 col-md-3 wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      <div className="service-item">
                        <h3>技術面分析學堂</h3>
                        <div className="items">
                          <a href="index.html"> 量價理論</a>
                        </div>
                        <div className="items">
                          <a href="index.html"> 形態學</a>
                        </div>
                        <div className="items">
                          <a href="index.html"> 指標分析</a>
                        </div>
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
      </div>
    )
  }
}
