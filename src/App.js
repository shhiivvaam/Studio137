import { Grid } from '@mui/material';
import './App.css';
import Navbar from "./components/common/Navbar";
import QuestionCard from "./components/core/QuestionCard";

function App() {
  return (
    <div className="App">
      <Grid container item xs={12} className='container'>

        <Grid item xs={12} className='section'>
          <Navbar />
        </Grid>

        <Grid item xs={12} className='section' sx={{ my: 10 }}>
          <QuestionCard />
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
