import style from './App.module.css';
import { Header, InputSection } from './components';

function App() {
  return (
    <div className={style.App}>
      <Header />
      <div className={style.rest}>
        <InputSection />
      </div>
    </div>
  );
}

export default App;
