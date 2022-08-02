import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { auth, handleUserProfile } from './firebase/utils';
import { setCurrentUser } from './redux/User/action';
import { MainLayout, HomepageLayout } from './layouts';
import { HomePage, Registration, Login } from './pages';
import { onSnapshot} from "firebase/firestore"
import { connect } from 'react-redux';
// interface UserState {
//   currentUser: any
// }

// const initialState = {
//   currentUser: null
// }

class App extends Component<any> {

  authListener = () => {};

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef:any =  await handleUserProfile(userAuth)

        onSnapshot(userRef, (snapshot:any) => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          })
        })
      }
      // this.setState({
      //   ...initialState
      // })
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.authListener()
  }
  render() {
    const { currentUser } = this.props
    // console.log(currentUser)
    return (
      <Router>
            <div className="App"> 
              <Routes>
                <Route path='/' element = {<HomepageLayout><HomePage /></HomepageLayout>} />
                {/* <Route path='/' element={<MainLayout><Registration /></MainLayout>} /> */}
                <Route path='/login' element={ currentUser? <Navigate replace to='/'/> : (<MainLayout currentUser={currentUser}><Login /></MainLayout>)} />
              </Routes>
            </div>
      </Router>      
    );
  }
  
}

const mapStateToProps = ({user}:any) => ({
  currentUser: user.currentUser
});
console.log(mapStateToProps)

const mapDispatchToProps = (dispatch:any) => ({
  setCurrentUser: (user:any) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);