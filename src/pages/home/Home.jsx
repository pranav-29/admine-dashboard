import "./home.scss"
import Sidebar from "../../component/sidebar/Sidebar"
import Navbar from "../../component/navbar/Navbar"
import Widgets from "../../component/widgets/Widgets"
import Featured from "../../component/featured/Featured"
import Chart from "../../component/chart/Chart"

const Home = () => {
    return (
    <div className="home">
        <Sidebar/>
      <div className="homeContainer">
        <Navbar />
      <div className="widgets">
        <Widgets type="user"/>
        <Widgets type="order"/>
        <Widgets type="earning"/>
        <Widgets type="balance"/>
      </div>

      <div className="charts">
        <Featured/>
        <Chart/>
      </div>
    </div>
  </div>
  )
}

export default Home
