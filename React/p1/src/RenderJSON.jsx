import React from 'react';

function Joke({ setup, punchline }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px', textAlign: 'left', maxWidth: '400px', marginLeft: 'auto', marginRight: 'auto' }}>
      <p><strong>{setup}</strong></p>
      <p>{punchline}</p>
    </div>
  );
}

function RenderJSON() {

  const jokes = [
    {
      id: 1,
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit.",
    },
    {
      id: 2,
      setup: "Why do programmers wear glasses?",
      punchline: "Because they need to C#.",
    },
  ];
  
  return (
    <div >
      <h1>Chistes para Programadores</h1>
      {jokes.map((joke) => (
        <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />
      ))}
    </div>
  );
}

export default RenderJSON;
