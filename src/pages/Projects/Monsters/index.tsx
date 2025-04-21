import { Spinner } from '@/Shared/Components';
import { Box } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import CardList from './Components/CardList';
import HeaderMonsters from './Components/HeaderMonsters';
import SearchBox from './Components/SearchBox';
import { MonsterI } from './interfaces';

const Monsters = () => {
  const [monsters, setMonsters] = useState<MonsterI[]>([]);
  const [searchedValue, setSearchedValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users: MonsterI[]) => setMonsters(users))
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, []);

  const onSearchMonstersHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const searchedValue = value.toLocaleLowerCase();
    setSearchedValue(searchedValue);
  };

  const filteredMonsters = monsters.filter(x => x.name.toLocaleLowerCase().includes(searchedValue));

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'linear-gradient(#219ebc,#8ecae6)',
        padding: '0 50px',
      }}
    >
      <HeaderMonsters />
      <SearchBox
        onChangeHandler={onSearchMonstersHandler}
        className="search-box"
        placeholder="search monsters"
      />
      {isLoading && <Spinner size="2.3rem" />}
      {!isLoading && <CardList monsters={filteredMonsters} />}
    </Box>
  );
};

export default Monsters;
