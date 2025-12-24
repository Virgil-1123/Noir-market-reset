import { Card } from "react-bootstrap";
import GradientLine from "../common/GradientLine";
import "./AboutContentBlock.css";

function AboutContentBlock() {
  return (
    <div className="AboutContentBlock">
      <div className="AboutTopBoard">
        <div className="AboutTopPic">
          <img src="/images/AboutUs/counter.jpg" alt="店內圖" />
        </div>

        <div className="AboutRightBoard">
          <div className="AboutText">
            <Card className="AboutTextCard">
              <Card.Body>
                <Card.Title>About Us</Card.Title>
                <GradientLine width={300} startColor="black" endColor="black" />
                <Card.Text>
                  我們致力於為這些曾被遺忘的時裝與古著尋找新的歸宿，
                  讓它們在您的穿搭中再次綻放光彩。
                  這是一場關於風格的探索，也是一場關於地球的承諾。
                </Card.Text>
                <Card.Link href="#">More &rarr;</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="AboutTextPic">
            <img src="/images/AboutUs/store.jpg" alt="店內圖" />
          </div>
        </div>
      </div>

      <div className="AboutLocationPic">
        <img src="/images/AboutUs/location.jpg" alt="地址" />
      </div>
    </div>
  );
}

export default AboutContentBlock;
