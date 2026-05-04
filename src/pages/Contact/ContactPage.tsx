import React, { useState, type FC } from "react";
import './ContactPage.css';

interface ContactPageProps {}

const ContactPage: FC<ContactPageProps> = () => {
  const initialFormState = {
    userName: "",
    email: "",
    phone: "",
    productName: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // 💡 這裡是我們討論的重點：手機號碼的特殊處理
    if (name === "phone") {
      const onlyNums = value.replace(/[^0-9]/g, ""); // 只允許數字
      if (onlyNums.length > 10) return; // 限制最多 10 碼
      setFormData((prevData) => ({
        ...prevData,
        [name]: onlyNums,
      }));
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="ContactContainer">
      <h2 className="FormTitle">聯絡我們</h2>
      
      <form className="FormWrapper" onSubmit={(e) => e.preventDefault()}>
        
        {/* 姓名欄位 */}
        <div className="InputGroup">
          <label className="InputLabel">姓名 / Name</label>
          <input
            className="FormInput"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            placeholder="您的姓名"
          />
        </div>

        {/* 電子郵件 */}
        <div className="InputGroup">
          <label className="InputLabel">電子郵件 / Email</label>
          <input
            className="FormInput"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@mail.com"
          />
        </div>

        {/* 連絡電話 - 實現你的即時提示功能 */}
        <div className="InputGroup">
          <label className="InputLabel">連絡電話 / Phone</label>
          <input
            className="FormInput"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="0912345678"
          />
          {/* 💡 這裡是顯示邏輯：當有輸入但不足 10 碼時跳出紅字 */}
          {formData.phone.length > 0 && formData.phone.length < 10 && (
            <p className="ErrorMessage">電話長度不正確 (目前：{formData.phone.length} 碼)</p>
          )}
        </div>

        {/* 商品名稱 */}
        <div className="InputGroup">
          <label className="InputLabel">商品名稱 / Product</label>
          <input
            className="FormInput"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            placeholder="欲諮詢的商品"
          />
        </div>

        {/* 訊息內容 */}
        <div className="InputGroup">
          <label className="InputLabel">訊息內容 / Message</label>
          <textarea
            className="FormTextArea"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="請輸入您的問題..."
          />
        </div>

        <button 
          className="SubmitButton"
          disabled={formData.phone.length !== 10 && formData.phone.length > 0}
        >
          確認送出
        </button>
      </form>
    </div>
  );
};

export default ContactPage;