import React from 'react'

export default function About() {
  return (
    <div>
        <div className="container p-4 lh-4  text-center">
            <h1 className='text-center'>Our Product: <strong className='text-primary'>Natiq</strong> </h1>
            <p className='fs-5' ><strong className='text-primary'>Natiq</strong> is an innovative and user-friendly solution designed to facilitate the seamless transformation of Arabic text into expressive and dynamic audio content. This project combines cutting-edge text-to-speech technology with a unique echo effect, providing users with a versatile tool for various applications.</p>
            <div className='mt-5 border border-1 p-3'>
              <h3  >Key Features and Functionalities:</h3>
              <ol className='fs-5'>
                <li className='mb-3'>Text-to-Speech Conversion: Our project empowers users to effortlessly convert written Arabic text into spoken language. With just a click of a button, your text comes to life with a synthesized electronic voice</li>
                <li className='mb-3'>Electronic Voice: Experience the future of voice synthesis with our advanced electronic voice technology. This feature ensures that the audio output is engaging, clear, and captivating.</li>
                <li className='mb-3'>Echo Effect: The standout feature of our project is the ability to create an echo effect. Users can choose to have the last word of their text repeated three times, generating a unique and attention-grabbing auditory experience.</li>
                <li className='mb-3'>Customization: Tailor the audio output to your specific needs. Adjust parameters such as speech speed, pitch, and volume to achieve the desired sound and tone.</li>
              </ol>
            </div>
            <div className='mt-5 border border-1 p-3' >
              <h3>How to Use:</h3>
              <p >
              Input your desired Arabic text into the provided text field.
              Press the "Convert to Audio" button to instantly generate synthesized speech.
            </p>
            </div>
           

        </div>
    </div>
  )
}
