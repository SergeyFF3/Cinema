import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };
  return (
    <div className={styles.wrapper}>
      <Typography fontSize="20px" color="white" textAlign="center">
        Упс, что-то пошло не так{' '}
        <span style={{ whiteSpace: 'nowrap' }}>:(</span>
      </Typography>
      <Button
        sx={{ width: 'max-content', marginTop: '30px' }}
        variant="contained"
        onClick={handleNavigate}
      >
        <Typography>на главную</Typography>
      </Button>
    </div>
  );
};

export default NotFoundPage;
