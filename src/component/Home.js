import { Link } from "react-router-dom";

 export default function Home(){
    return(

        <div className="home_box">
            <h1>Quiz App</h1>
             <h2>choose a subject you want to revise today 👩‍🎓👨‍🎓</h2>
             <div className="subject_box">
                <Link to="/maths"><button>Maths</button></Link>
                {/* <Link to="/french"><button>French</button></Link> */}
                <Link to="/science"><button>Science</button></Link>
                <Link to="/agriculture"><button>Agriculture</button></Link>
             </div>
        </div>
    )
 }