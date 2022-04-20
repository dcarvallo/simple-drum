import './App.css';
import {useState, useEffect} from 'react';
const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];
function App() {
  const [audio,setAudio] = useState('')
  const [style,setStyle] = useState('')
  
  useEffect(() => {
    function handleKeyDown(e) {
      const obj = bankTwo.filter(el => e.keyCode == el.keyCode)
      
      if (e.keyCode === obj[0].keyCode) {
        setStyle('touched')
        setAudio(obj[0])
        const sound = document.getElementById(obj[0].keyTrigger);
        sound.paused ? sound.play() : sound.currentTime = 0
        setTimeout(() => {
          setStyle('')
        },300)
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    // Don't forget to clean up
    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, []);
  
  function handleClick(keynote){
    setStyle('touched')
    setAudio(keynote)
    const sound = document.getElementById(keynote.keyTrigger);
    sound.paused ? sound.play() : sound.currentTime = 0
    setTimeout(() => {
      setStyle('')
    },300)
  }

  return (
    <div className="App">
     <div id="box">
      <div id='drum-box'>
        <h4 className='title'>Drum </h4>
        <div id='keys-box'> 
          {bankTwo.map(el => (
            <>
              <button className={style && audio.keyTrigger == el.keyTrigger ? style : 'drum-btn'} key={el.keyTrigger} onClick={ () => handleClick(el)} >{el.keyTrigger}</button>
            <audio
              key={el.keyTrigger}
              className='clip'
              id={el.keyTrigger}
              src={el.url}
            ></audio>
              </>
          ))}
        </div>
        
      </div>
    </div> 
    </div>
  );
}

export default App;
