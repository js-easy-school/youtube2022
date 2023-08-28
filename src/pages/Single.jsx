import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from './../components/Menu';

const Single = () => {
    return (
        <div className='single'>
            <div className='content'>
                <img src='https://pexels.one/upload/pexels-photo-10610441.jpeg' alt='' />
                <div className='user'>
                    <img src='https://pexels.one/upload/pexels-photo-13850240.jpeg' alt='' />
                    <div className='info'>
                        <span>John</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className='edit'>
                        <Link to={`/write?edit=2`}>
                            <img src={Edit} alt='' />
                        </Link>
                        <img src={Delete} alt='' />
                    </div>
                </div>
                <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos vitae neque impedit aut earum aperiam quos, facilis maiores praesentium libero itaque pariatur voluptate, dolorem mollitia tempore repudiandae dolore illum saepe.<br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos vitae neque impedit aut earum aperiam quos, facilis maiores praesentium libero itaque pariatur voluptate, dolorem mollitia tempore repudiandae dolore illum saepe.</p>
            </div>
            <Menu />
        </div>
    )
}

export default Single
