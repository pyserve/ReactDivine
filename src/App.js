import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layouts/navbar';
import Home from './components/home';
import Contact from './components/contact';
import Blog from './components/blog';
import Login from './components/auth/login';
import Register from './components/auth/register';
import JoinTeam from './components/joinTeam';
import Footer from './components/layouts/footer';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/career" exact component={JoinTeam} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
