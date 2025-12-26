import './Login.css';

const AccountPage = () => {
  return (
    <div className="AccountWrapper">
      <div className="AccountMainContainer">
        
        <div className="AccountSide InfoSection">
          <div className="BrandDescription">
            <h1 className="BrandLogo">Noir.</h1>
          </div>
        </div>

        <div className="AccountSide FormSection">
          <div className="LoginContainer">
            <div className="InputGroup">
              <label htmlFor="email" className="SrOnly">電子郵件</label>
              <input type="email" id="email" className="LoginInput" placeholder="電子郵件輸入" />
            </div>

            <div className="InputGroup">
              <label htmlFor="password" className="SrOnly">密碼</label>
              <input type="password" id="password" className="LoginInput" placeholder="密碼" />
            </div>

            <div className="LoginLinks">
              <a href="#" className="RegisterLink">註冊</a>
              <a href="#" className="ForgotPasswordLink">忘記密碼?</a>
            </div>

            <div className="LoginBtnBox">
              <button className="LoginBtn">登入</button>
            </div>

            <div className="OtherLoginBox">
              {/* Line 登入 (保留你的 SVG 結構) */}
              <a href="#" aria-label="Line登入" className="SocialIcon">
                <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32.8008 20.7563V29.3309..." fill="black"/>
                </svg>
              </a>
              {/* Instagram 登入 (保留你的 SVG 結構) */}
              <a href="#" aria-label="IG登入" className="SocialIcon">
                <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M41.3438 0H12.6562..." fill="black"/>
                </svg>
              </a>
              {/* Google 登入 (保留你的 SVG 結構) */}
              <a href="#" aria-label="Google登入" className="SocialIcon">
                <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M49.0624 22.5934..." fill="black"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AccountPage;