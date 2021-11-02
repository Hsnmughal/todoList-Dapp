import style from './App.module.css';
import cx from 'classnames';
import { Header } from './components';

function App() {
  return (
    <div className={style.App}>
      <header>
        <Header />
      </header>
      <body>

      </body>
    </div>
  );
}

export default App;
