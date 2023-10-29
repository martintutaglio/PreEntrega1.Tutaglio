import './styles.css'
import Button from 'react-bootstrap/Button';
import { Icon } from 'react-bootstrap-icons';
import Cartwidget from '../Cartwidget/Cartwidget';

const Navbar = () => {

    return(
        <div className="navbar-container">
            <div>
                <img src={'./images/logoCars.png'} alt="cars" width={'150px'} />
                
            </div>

            <Button as="Button" variant="primary">
                MENÚ
            </Button>

            <div>
                <ul className="list-container">
                    <li><button className='category-button'> Suzuki</button></li>
                    <li><button className='category-button'> Ford</button></li>
                    <li><button className='category-button'> Mazda</button></li>
                </ul>

               

            </div>

            <Cartwidget/>
        </div>
    )
};

export default Navbar;

