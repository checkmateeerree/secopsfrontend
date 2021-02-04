import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from "./components/Header";
import Homescreen from "./screens/Homescreen";
import DocumentScreen from './screens/DocumentScreen'
import RegistrationScreen from './screens/RegistrationScreen'
import DonationScreen from './screens/DonationScreen'
import LoginScreen from './screens/LoginScreen'
import NotFoundPage from './screens/NotFoundPage'
import LoggedInHeader from './LoggedInComponents/LoggedInHeader'
import LoggedInHomescreen from './LoggedInComponents/LoggedInHomescreen'
import LoggedInProfile from './LoggedInComponents/LoggedInProfile'
import AdminDashboard from './LoggedInComponents/AdminDashboard'
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie'

function App() {
    
    const token = Cookies.get('token')
    try {
      const decodedToken = jwt_decode(token)
      const studentID = decodedToken.studentID
      const decodedEmail = decodedToken.email
      const decodedGradYear = decodedToken.gradYear
      const decodedFirstName = decodedToken.firstName
      const decodedLastName = decodedToken.lastName
      const firstNameFormatted = decodedFirstName.replace(decodedFirstName[0], decodedFirstName[0].toUpperCase())
      const lastNameFormatted = decodedLastName.replace(decodedLastName[0], decodedLastName[0].toUpperCase())
      const isAdmin = decodedToken.admin
      const leadershipPosition = decodedToken.leadershipPosition
      const meetingsAttended = decodedToken.meetingsAttended
      const yearsInClub = decodedToken.yearsInClub

      return (
        <Router>
          <LoggedInHeader isAdmin={isAdmin}/>
            <Switch>
                <Route exact path="/" render={() => <LoggedInHomescreen name={firstNameFormatted}/>}/>
                <Route exact path="/profile" render={()=> <LoggedInProfile studentID={studentID} firstName={firstNameFormatted} lastName={lastNameFormatted} email={decodedEmail} gradYear={decodedGradYear} yearsInClub={yearsInClub} leadershipPosition={leadershipPosition} meetingsAttended={meetingsAttended}/> }/>
                <Route exact path="/donate" component={DonationScreen}/>
                <Route exact path="/doc" component={DocumentScreen}/>
                {isAdmin ? <Route exact path="/admindashboard" component={AdminDashboard}/> : ''}
                <Route path="" component={NotFoundPage} />
            </Switch>
          <Footer/>
        </Router>
      )
    }
    catch (error){
      return (
        <Router>
          <Header />
            <Switch>
              <Route exact path="/" component={Homescreen}/>
                <Route exact path="/donate" component={DonationScreen}/>
                <Route exact path="/doc" component={DocumentScreen}/>
                <Route exact path="/registration" component={RegistrationScreen} />
                <Route exact path="/login" component={LoginScreen}/>
                <Route path="" component={NotFoundPage} />
            </Switch>
          <Footer/>
        </Router>
    )
    }
}



export default App;

