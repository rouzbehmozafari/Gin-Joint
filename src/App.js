import './App.css';
import Nav from './Nav/Nav';
import Hero from './Components/Hero/Hero';
import Story from './Story/Story';
import Events from './Components/Events/Events';
import  bar2 from './images/bar2 1.png'
import  story2 from './images/story2.png'

function App() {
  return (
    <div className="App">
      <header><Nav/></header>
      <main>
        <Hero/>
        <Story first={'About'} head={'THE STORY OF BATHUB GIN'} desc={'Gin was the predominant drink in the United States during the Prohibition-Era 1920 &quots and many variations were created. &quot Bathtub gin &quot was developed in response to the poor-quality of alcohol that was available at the time.'} src={bar2}/>
        <Events/>
        <Story first={'Cocktail & Food Menus'} head={'HAND CRAFTED COCKTAILS & DAMN GOOD EATS'} desc={'We mix our gin and other spirits with the finest and freshest fruits, juices, syrups and infusions in cocktails inspired by original recipes.'} src={story2}/>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
