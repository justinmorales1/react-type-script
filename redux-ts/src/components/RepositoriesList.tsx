import React, { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const {data, error, loading} = useTypedSelector((state) => state.repositories)


  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchRepositories(term)
  }
console.log(data)
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={e => setTerm(e.target.value)}/>
        <button type="submit">Search</button>
      </form>
    </div>
  )
};

export default RepositoriesList;