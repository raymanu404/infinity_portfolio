import { theme } from '@/theme';

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: theme.custom.specialPalette?.variant[400],
        height: '40px',
      }}
    ></header>
  );
};

export default Header;
