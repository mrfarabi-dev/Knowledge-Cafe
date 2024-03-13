import './Header.css'
import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
                    <div className='flex items-center justify-between p-4 mx-4 border-b-2'>
                       <h1 className='text-4xl font-bold drop-shadow-2xl'>Knowledge Cafe</h1>
                       <img src={profile} alt="" />
                    </div>
    );
};

export default Header;