import style from './App.module.css';
import { Header } from './components';

function App() {
  return (
    <div className={style.App}>
      <header>
        <Header />
      </header>
      <div className={style.body}>

      </div>
    </div>
  );
}

export default App;
