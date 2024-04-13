import FirstRightBlock from "./FirstLeftBlock";
import FirstLeftBlock from "./FirstRightBlock";

const MainFirstBlock = ({type}) => {
    return (
        <div className={`main-first-row-block ${type}`}>
            <FirstLeftBlock/>
            <FirstRightBlock/>
        </div>)
}
export default MainFirstBlock;