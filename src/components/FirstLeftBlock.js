import Post from './Post';
import {useState} from "react";
import {Link} from "react-router-dom";

const MAX_POSTS_NUMBER = 100;

const FirstRightBlock = () => {
    const [postNumber, setPostNumber] = useState(1)

    const increment = () => {
        setPostNumber((prevPostNumber) => {
            if (prevPostNumber === MAX_POSTS_NUMBER) {
                return 1;
            }
            return prevPostNumber + 1;
        })
    }

    const decrement = () => {
        setPostNumber((prevPostNumber) => {
            if (prevPostNumber === 1) {
                return MAX_POSTS_NUMBER;
            }
            return postNumber - 1;
        })
    }

    return (<div className="inner-first-right-block">
        <Post postNumber={postNumber}/>
        <div className="show-now">
            <Link to="/shop">shop now</Link>
            <Link to="/shop">
                <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                        fill="#000" fillRule="nonzero"/>
                </svg>
            </Link>


        </div>

        <div className="arrows">
            <button onClick={decrement} className="button-left"/>
            <button onClick={increment} className="button-right"/>
        </div>
    </div>)

}
export default FirstRightBlock;