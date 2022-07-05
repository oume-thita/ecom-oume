import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer/footer";

const HomepageLayout: React.FC<any> = ({children, currentUser}, props) => {
    return (
        <div className='fullHeight'>
          <Header {...props} currentUser={currentUser}/>
          {children}
          <Footer />
        </div>
    )
  }

export default HomepageLayout