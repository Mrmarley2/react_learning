import Nav from './components/Nav';
import Main from './components/Main';
import Example from './components/Example';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Nav />
      <Main />
      <Example />
      <Footer />
      <div class="original-link">
        link to original site: 
        <a href="https://shiny.rstudio.com/" target="_blank" rel="noreferrer"> R Shiny</a>
      </div>
    </div>
  );
}

export default App;
