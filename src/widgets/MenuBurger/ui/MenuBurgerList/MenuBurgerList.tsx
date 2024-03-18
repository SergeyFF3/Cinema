import { Box, Button, List, ListItem, Typography } from '@mui/material';
import { FC } from 'react';
import { SearchField } from 'src/features/searchField';
import useResize from 'src/shared/hooks/useResize';
import { nvabarListItems } from 'src/widgets/Navbar';
import styles from '../MenuBurger/MenuBurger.module.css';
import { MenuBurgerListItem } from '../MenuBurgerListItem';

export const MenuBurgerList: FC<{ onToggle: () => void }> = ({ onToggle }) => {
  const [width] = useResize();

  return (
    <Box
      sx={{
        width: width > 350 ? '350px' : '250px',
        height: '100%',
        backgroundColor: 'rgb(22, 22, 22)',
      }}
      role="presentation"
    >
      <div className={styles.searchWrapper}>
        <SearchField onClose={onToggle} />
      </div>
      <List>
        {nvabarListItems.map((item) => (
          <ListItem key={item.path} onClick={onToggle}>
            <MenuBurgerListItem {...item} />
          </ListItem>
        ))}
      </List>
      <span className={styles.close}>
        <Button size="large" fullWidth variant="contained" onClick={onToggle}>
          <Typography color="white" fontSize="20px">
            закрыть
          </Typography>
        </Button>
      </span>
    </Box>
  );
};
