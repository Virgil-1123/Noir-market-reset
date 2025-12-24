import "./Location.css";

function Location() {
  return (
    <div className="LocationBlock">
      <div className="MapBox">
        <div className="AspectRatioBox">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.2490359444096!2d121.22244777482966!3d24.95764034136309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346823ea50c732a5%3A0x1b5e6ee66e9fec49!2z57ev6IKyVGliYU1l6ZmE6Kit5Lit5aOi6IG36KiT5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1759246567028!5m2!1szh-TW!2stw"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p>地址:320桃園市中壢區復興路46號9樓</p>
        <p>電話:034258183</p>
        <p>E-mail:Noir1997@gmail.com</p>
      </div>
    </div>
  );
}

export default Location;
