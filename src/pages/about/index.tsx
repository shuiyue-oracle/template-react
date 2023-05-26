import React from 'react';

const About = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState<string[]>([]);
  const [isPending, startTransition] = React.useTransition();
  
  const handleChange = (e: any) => {
    setInputValue(e.target.value);
    startTransition(() => setSearchQuery(Array(20000).fill(e.target.value)));
    
  };
  
  return (
    <div>
      <input onChange={handleChange} />
      {isPending ? <p>loading....</p> : searchQuery.map((item, index) => (<p key={index}>{item}</p>))}
    </div>
  );
};

export default About;