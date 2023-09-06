import React, { useState } from 'react'
import '../css/natiq.css'
export default function Natiq() {
  const [text, setText] = useState('');
  const [audioURL, setAudioURL] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [audioReady, setAudioReady] = useState(false);
  
  function urlSafeBase64Decode(input) {
    
    input = input.replace(/-/g, '+').replace(/_/g, '/'); 
    while (input.length % 4 !== 0) {
      input += '=';
    } 
    return atob(input);
  }
  
  const callNatiq = () => {

    setAudioURL('');
    setError(null);
    setAudioReady(false);
    setLoading(true);
    
    const textData = text;

    const words = textData.split(' ');
    const lastWord = words[words.length - 1];
    const echoedText = textData + ' ' + lastWord + ' ' + lastWord + ' ' + lastWord;
    
    const arabicPattern = /[\u0600-\u06FF\s]+/;
    if (!arabicPattern.test(textData)) {
      setError('Please enter text in Arabic only.');
      setLoading(false);
      return;
    }

    const formdata = { text: echoedText  };
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(formdata),
      redirect: 'follow',
    };

    fetch('https://echo-6sdzv54itq-uc.a.run.app/natiq', requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((result) => {
        if (result.wave) {
          const decodedAudioData = urlSafeBase64Decode(result.wave);
          setAudioURL(`data:audio/wav;base64,${decodedAudioData}`);
          setAudioReady(true);
        } else {
          setError('No audio data received from the service');
        }
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className='text-center mt-5'>
    {loading && (
      <div className="loading-overlay">
        <div className="loader"></div>
      </div>
    )}
    <div className='textarea-style'>

    <textarea
      placeholder="اكتب النص باللغة العربية..."
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
    </div>
    <div className='mt-5'>
    <button onClick={callNatiq} disabled={loading}>
      Echo
    </button>
    </div>
    {audioReady && (
      <div className='mt-5'>
        <audio controls autoPlay>
          <source src={audioURL} type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
      </div>
    )}
    {error && <div className="text-danger">{error}</div>}
  </div>
  )
}
