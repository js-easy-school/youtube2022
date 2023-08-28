import { Link } from 'react-router-dom'

const Home = () => {
    const posts = [
        {
            id: 1,
            title: 'Lorem ipsum dolor sit amet consectetur',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nihil atque aut nobis! Perferendis, debitis! Necessitatibus eligendi saepe voluptates eum totam, maiores ea nisi asperiores veniam, a nulla fugiat expedita!',
            img: 'https://pexels.one/upload/pexels-photo-13918935.jpeg'
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor sit amet consectetur',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nihil atque aut nobis! Perferendis, debitis! Necessitatibus eligendi saepe voluptates eum totam, maiores ea nisi asperiores veniam, a nulla fugiat expedita!',
            img: 'https://pexels.one/upload/pexels-photo-14034247.jpeg'
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor sit amet consectetur',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nihil atque aut nobis! Perferendis, debitis! Necessitatibus eligendi saepe voluptates eum totam, maiores ea nisi asperiores veniam, a nulla fugiat expedita!',
            img: 'https://pexels.one/upload/pexels-photo-8343349.jpeg'
        }
        // Add more objects here if needed
    ]

    return (
        <div className='home'>
            <div className='posts'>
                {posts.map((post) => (
                    <div className='post' key={post.id}>
                        <div className='img'>
                            <img src={post.img} alt='' />
                        </div>
                        <div className='content'>
                            <Link className='link' to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{post.desc}</p>
                            <button>Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
