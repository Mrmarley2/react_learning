import profile_pic from './images/profile_pic.jpeg';
import './App.css';
import Header from './Header';
import Contact from './Contact';
import Education from './Education';
import Links from './Links';
import Biography from './Biography';
import Skills from './Skills';
import Experience from './Experience';

// researched importing components:
// https://beta.reactjs.org/learn/importing-and-exporting-components
// made seperate files containing components to use

function App() {
  return (
    <div className="App">
      <main className="content-container">
        <div className="profile-container">
          <img src={profile_pic}/>
          <Header />
          <Contact />
          <Links />
        </div>
        <div className="detail-container">
          <Biography />
          <Skills />
          <Experience />
          <Education />
        </div>
      </main>
    </div>
  );
}

export default App;
