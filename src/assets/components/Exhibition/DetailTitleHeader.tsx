import './DetailTitleHeader.css'; 


interface TitleHeaderProps {
    categoryLabel: string; 
    title: string;
    time: string;
    location?: string; 
}

function DetailTitleHeader({ categoryLabel, title, time, location }: TitleHeaderProps) {
    return (
        <div className="DetailTitleHeaderContainer">
            
            
            <div className="CategoryLabelBlock">
                <span className="CategoryLabelText">{categoryLabel}</span>
                <div className="VerticalDividerLine"></div>
            </div>

            
            <div className="InfoBlock">
                <h1>{title}</h1>
                <p>時間:{time}</p>
                {location && <p>地點:{location}</p>}
                <div className="HorizontalDividerLine"></div>
            </div>
        </div>
    );
}

export default DetailTitleHeader;