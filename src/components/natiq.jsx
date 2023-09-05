import React, { useState } from 'react'
import '../css/natiq.css'
export default function Natiq() {
  const [text, setText] = useState('');
  const [audioURL, setAudioURL] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [audioReady, setAudioReady] = useState(false);

  function urlSafeBase64Decode(input) {
    // Replace '-' with '+' and '_' with '/'
    input = input.replace(/-/g, '+').replace(/_/g, '/'); 
    // Pad the string with '=' characters if needed
    while (input.length % 4 !== 0) {
      input += '=';
    } 
    // Decode the base64 data
    return atob(input);
  }
  

  const callNatiq = () => {
    // Reset states
    setAudioURL('');
    setError(null);
    setAudioReady(false);
    setLoading(true);

    const textData = text;
    const formdata = { text: textData };
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(formdata),
      redirect: 'follow',
    };

    fetch('https://echo-6sdzv54itq-uc.a.run.app/natiq', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const decodedAudioData = urlSafeBase64Decode(result.wave);
        setAudioURL(`data:audio/wav;base64,${decodedAudioData}`);
        setAudioReady(true);
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
      <div>
        <audio controls autoPlay>
          <source src={audioURL} type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
      </div>
    )}
    {error && <div className="error-message">{error}</div>}
  </div>
  )
}
