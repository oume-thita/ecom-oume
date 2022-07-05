import React from "react";
import Footer from "../components/Footer/footer";
import Header from "../components/Header";

const MainLayout: React.FC<any> = ({children, currentUser}, props) => {
    // console.log(currentUser)
    return (
        <div>
          <Header {...props} currentUser={currentUser}/>
            <div className="main">
                {children}
            </div>
          <Footer />
        </div>
    )
  }

export default MainLayout