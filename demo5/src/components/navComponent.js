import {Link} from 'react-router-dom';

export function Navigation(){
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/catalog">Catalog</Link></li>
                <li><Link to="/login">Login</Link></li> 
            </ul>
        </nav>
    )
}