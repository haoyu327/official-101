import React, { Component } from 'react';
import Facebook from "../../img/facebook 1.png"
import Instagram from "../../img/instagram.png"
class Footer extends Component {
 render() {

  const ft1 ={
      textAlign:"left"
    };
    const ft3 ={
      border:"0px"
    };
        const ft2 ={
      marginTop:"20em"
    };
  return (
 
<div>
      <footer id="footer" className="footer">
          <div className="container">
            <div className="row-base row">
              <div className="col-base text-left-md col-md-4">
                <h2 className="section-title white left">
                  魚與熊掌兼得
                </h2>
                <h2 className="section-title left" style={ft1}>
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
          <div className="container" style={ft2}>
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
                  <img className="social-icon" alt="" src={Facebook}/>
                  <img className="social-icon" alt="" src={Instagram} />
                </div>
              </div>
              <div className="col-base col-md-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.2202218218476!2d121.53536131439546!3d25.06052398395991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abe20d2b3043%3A0x45ed2e9a21edf66e!2zMTA0OTHlj7DljJfluILkuK3lsbHljYDlu7rlnIvljJfot6_kuozmrrUxMzUtMTM36JmfMTI!5e0!3m2!1szh-TW!2stw!4v1622021299898!5m2!1szh-TW!2stw"
                  width="100%"
                  height="100%"
                  style={ft3}
                  allowFullScreen=""
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
</div>
  );
 }
}

export default Footer;