import React from 'react';
import './App.css';
import PersonInformation from './components/PersonInformation';
import PetInformation from './components/PetInformation';

function App() {
  return (
    <div className="App">
      <PetInformation name="Panda" breed="dog">
        <img src="https://source.unsplash.com/random" />
      </PetInformation>
      <PetInformation name="Zoe" breed="cat" />
      <PersonInformation
        name="José Carneiro"
        location="Portugal"
        color="Gold"
        birthdate={new Date(1993, 4, 13)}
        pets={3}
        hasDyedHair={false}
      />
      <PersonInformation
        name="Aline"
        location="Brasil"
        color="Pink"
        birthdate={new Date(3, 4, 1991)}
        pets={2}
        hasDyedHair={true}
      />
      <PersonInformation
        name="Santi"
        location="Germany"
        color="Limegreen  "
        birthdate={new Date(31, 2, 1990)}
        pets={5}
        hasDyedHair={true}
      />
      {/* <div>
        <h3>José Carneiro</h3>
        <p>Location: Lisbon</p>
        <strong>Favorite color: Blue</strong>
        <br />
        <small>Date of Birth: 13/5/1993</small>
      </div>
      <div>
        <h3>Aline</h3>
        <p>Location: Lisbon</p>
        <h3>Favorite color: Pink</h3>
        <h3>Date of Birth: 3/5/1991</h3>
      </div>
      <div>
        <h3>Santi</h3>
        <p>Location: Lisbon</p>
        <strong>Favorite color: Green</strong>
        <br />
        <small>Date of Birth: 31/3/1990</small>
      </div> */}
    </div>
  );
}

export default App;
