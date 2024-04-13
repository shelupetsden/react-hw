import SecondLeftBlock from './SecondLeftBlock.js';
import SecondCenterBlock from './SecondCenterBlock.js';
import SecondRightBlock from './SecondRightBlock.js';

const MainSecondBlock = () => {
    return (<div className="main-second-row-block">
        <SecondLeftBlock/>
        <SecondCenterBlock/>
        <SecondRightBlock/>
    </div>)
}

export default MainSecondBlock;