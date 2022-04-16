import {Link} from "react-router-dom";
import {Button} from "../Button/Button";

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div>
            {id}--{title}<Button to={id.toString()}>get Details</Button>
        </div>
    );
}

export {Post};