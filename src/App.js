import './scss/styles.scss';
import MainSecondBlock from './components/MainSecondBlock';
import MainFirstBlock from './components/MainFirstBlock';

function App() {
    return (
        <div className="main-container">
            <MainFirstBlock/>
            <MainSecondBlock/>
        </div>
    );
}

export default App;
