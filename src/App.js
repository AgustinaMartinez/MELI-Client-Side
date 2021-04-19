import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './templates/Layout';
import { Home, Detail, SearchResults } from './pages';
import { AppProvider } from './context';
import './App.scss';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Route exact path="/" component={Home}/>
          <Route exact path="/items" component={SearchResults}/>
          <Route exact path="/items/:id" component={Detail}/>
        </Layout>
      </Router>
    </AppProvider>
  );
}

export default App;
