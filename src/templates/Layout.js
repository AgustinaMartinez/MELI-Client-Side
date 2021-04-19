import Navbar from '../components/Navbar/Navbar.component';
import Search from '../components/icons/search';
import './_layout.scss';

const Layout = ({ children }) => (
  <div className="layout">
    <Navbar link="/" icon={<Search/>}/>
    <div className="layout__children">
      {children}
    </div>
  </div>
);

export default Layout;
