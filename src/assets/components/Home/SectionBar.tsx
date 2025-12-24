import LineDots from "../common/LineDots";

interface SectionBarProps {
  title: string;
  lineColor1: string;
  lineColor2: string;
  dotColor: string;
  titleColor: string;
}

function SectionBar({
  title,
  lineColor1,
  lineColor2,
  dotColor,
  titleColor,
}: SectionBarProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "30px",
      }}
    >
      <LineDots
        direction="right-to-left"
        color1={lineColor1}
        color2={lineColor2}
        dotColor={dotColor}
      />
      <h1
        style={{
          fontSize: "26px",
          textAlign: "center",
          whiteSpace: "nowrap",
          color: titleColor,
          fontFamily: '"Hina Mincho", serif',
          margin: "0",
          letterSpacing:"2px",
        }}
      >
        {title}
      </h1>
      <LineDots
        direction="left-to-right"
        color1={lineColor1}
        color2={lineColor2}
        dotColor={dotColor}
      />
    </div>
  );
}

export default SectionBar;
