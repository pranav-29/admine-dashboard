import "./featured.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>

      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>

        <p className="title">Today's Sales</p>
        <p className="amount">$651</p>
        <p className="desc">Last transaction processed, maybe all not included.</p>

        <div className="summary">
            <div className="item">
            <div className="itemTitle">Today</div>
            <div className="itemResult negative">
                <KeyboardArrowDownOutlinedIcon fontSize="small"/>
                <div className="resultAmount">$45k</div>
            </div>
            
            </div>

            <div className="item">
            <div className="itemTitle">Yesterday</div>
            <div className="itemResult positive">
                <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                <div className="resultAmount">$120.25k</div>
            </div>
            </div>
            
            <div className="item">
            <div className="itemTitle">Week</div>
            <div className="itemResult positive">
                <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                <div className="resultAmount">$1553k</div>
            </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Featured;
