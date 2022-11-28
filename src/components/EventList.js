import React from 'react';

class HomeNovel extends React.Component {
    
    render() {
        var div_style = {
            width: "80%",
            height: "10%",
            padding: "15px",
            margin: "15px",
            textAlign: "center",
            backgroundColor: "#e6abff",
            borderRadius: "10px",
            cursor:"pointer",
            display:"flex",
            justifyContent:"space-between",
            marginLeft:"50px"
        };
        var h4_style = {
            marginLeft: "120px",
            fontFamily:"'Aero_03', sans-serif"
        };
        var rating_style = {
            margin: "5px",
            textAlign:"right",
            fontFamily:"'Aero_03', sans-serif"
        };
        return (
            <div className={"rank_novel_card"} style={div_style}>
                <div style={{display:"flex"}}>
                <h4 className={"rank_novel_name"} style={h4_style}>{this.props.event_name}</h4>
                </div>
                <h4 className={"rank_novel_rating"} style={rating_style}>{this.props.start}</h4>
                <h4 className={"rank_novel_rating"} style={rating_style}>{this.props.end}</h4>
            </div>
        );
    }
}
export default HomeNovel;