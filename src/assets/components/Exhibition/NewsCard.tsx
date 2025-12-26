import { Card, CardSubtitle } from "react-bootstrap";
import type { LatestNews } from "../../constants/LatestNews";
import "./NewsCard.css";
// import { Link } from "react-router-dom";
import MoreLink from "../common/MoreLink";

interface NewsCardProps {
  newsData: LatestNews;
}

function NewsCard({ newsData }: NewsCardProps) {
  // const detailPath = `/latest-news/${newsData.id}`;

  return (
    <Card className="NewsCards d-flex flex-row">
      <Card.Img
        className="NewsCardImage"
        src={newsData.img}
        alt={newsData.title}
      ></Card.Img>

      <Card.Body>
        <Card.Title>{newsData.title}</Card.Title>
        <CardSubtitle>{newsData.subtitle}</CardSubtitle>
        <Card.Text className="time">{newsData.time}</Card.Text>
        <Card.Text className="content">{newsData.content}</Card.Text>
        <MoreLink linkUrl={`/latest-news/${newsData.id}`} color="black" />
      </Card.Body>
    </Card>
  );
}

export default NewsCard;
