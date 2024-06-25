// components/NavigationPanel.js
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';

const NavigationPanel = () => {
  return (
    <AppBar position="static" color="primary" className="mb-8">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          FlexiGym
        </Typography>
        <Link href="/" passHref>
          <Button color="inherit">
            Home
          </Button>
        </Link>
        <Link href="/faq" passHref>
          <Button color="inherit">
            FAQ
          </Button>
        </Link>
        <Link href="/contact" passHref>
          <Button color="inherit">
            Contact us
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationPanel;
