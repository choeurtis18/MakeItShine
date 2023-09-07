import { Link } from "react-router-dom";

const Logo = (props) => {
    if(props.dark) {
        return (
            <Link to="/" className="logo dark">MAKE IT <span> SHINE</span></Link>
        );
    }
    return (
        <Link to="/" className="logo">MAKE IT <span> SHINE</span></Link>
    );
}

export default Logo;