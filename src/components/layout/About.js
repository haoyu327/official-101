import React, { Component } from "react"

export default class about extends Component {
  render() {
    const tag = {
      margin: "0 1em 0 0",
    }
    const top = {
      margin: "1em 0 0 0",
    }
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
                <h1>關於 101</h1>
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
            {/* <!-- Content --> */}
            <section className="section">
              <div className="container">
                <div className="tab-container">
                  {/* <!-- Side tab --> */}
                  <ul className="nav-pills nav-stacked" role="tablist">
                    {/* <!-- 公司介紹 --> */}
                    <li role="presentation" className="active">
                      <a
                        href="#companyintro"
                        aria-controls="companyintro"
                        role="tab"
                        data-toggle="tab"
                      >
                        公司介紹
                      </a>
                    </li>
                    {/* <!-- 券商資質 --> */}
                    <li role="presentation">
                      <a
                        href="#broker"
                        aria-controls="broker"
                        role="tab"
                        data-toggle="tab"
                      >
                        券商資質
                      </a>
                    </li>
                  </ul>
                  {/* <!-- Tab panes --> */}
                  <div className="tab-content" style={tag}>
                    {/* <!-- 公司介紹 --> */}
                    <div
                      role="tabpanel"
                      className="tab-pane active"
                      id="companyintro"
                    >
                      <h3>背景</h3>
                      <hr size="1px" width="100%" />
                      <p>
                        101
                        始於大約兩年前的一個交易廳，期望開發能為所有年輕人提供進入金融市場的產品。101
                        是一家利用技術來鼓勵所有年輕人參與我們的金融體系的公司。
                      </p>
                      <h3 style={top}>願景</h3>
                      <hr size="1px" width="100%" />
                      <p>
                        ．方便簡單
                        <br />
                        101
                        目標是讓普通使用者能方便的進行網上交易和投資，並且在交易過程方便快速，
                        因此 101 推出 9 種支付渠道，多種選擇，方便交易
                      </p>
                      <p>
                        ．創新
                        <br />
                        101 推出創新的直播系統，讓使用者可以邊看直播邊下單，
                        享受先進的金融科技產品
                      </p>
                    </div>
                    {/* <!-- 券商資質 --> */}
                    <div role="tabpanel" className="tab-pane" id="broker">
                      <h3>公司牌照位於哪裡？</h3>
                      <hr size="1px" width="100%" />
                      <p>目前公司牌照在賽席爾國家獲得牌照</p>
                      <h3 style={top}>公司受那些國家監管？</h3>
                      {/* <!-- Nav tabs --> */}
                      <ul className="nav nav-tabs" role="tablist">
                        <li role="presentation" className="active">
                          <a
                            href="#seychel"
                            aria-controls="seychel"
                            role="tab"
                            data-toggle="tab"
                          >
                            賽席爾
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            href="#england"
                            aria-controls="england"
                            role="tab"
                            data-toggle="tab"
                          >
                            英國
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            href="#cyprus"
                            aria-controls="cyprus"
                            role="tab"
                            data-toggle="tab"
                          >
                            賽普勒斯
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            href="#dubai"
                            aria-controls="dubai"
                            role="tab"
                            data-toggle="tab"
                          >
                            杜拜
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            href="#uae"
                            aria-controls="uae"
                            role="tab"
                            data-toggle="tab"
                          >
                            阿聯酋
                          </a>
                        </li>
                      </ul>

                      {/* <!-- Tab panes --> */}
                      <div className="tab-content">
                        <div
                          role="tabpanel"
                          className="tab-pane active"
                          id="seychel"
                        >
                          <p style={top}>
                            監管單位：塞席爾金融服務管理局 (FSA) <br />
                            牌照種類：CSL(Company special License)
                            <br />
                            牌照編號：#SR334
                            <br />
                            券商査詢服務：FINRA 的券商校驗
                          </p>
                        </div>
                        <div role="tabpanel" className="tab-pane" id="england">
                          123
                        </div>
                        <div role="tabpanel" className="tab-pane" id="cyprus">
                          ...
                        </div>
                        <div role="tabpanel" className="tab-pane" id="dubai">
                          ...
                        </div>
                        <div role="tabpanel" className="tab-pane" id="uae">
                          ...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 
        <!-- Lines --> */}

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
