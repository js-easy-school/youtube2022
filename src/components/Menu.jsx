const Menu = () => {
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
        <div className='menu'>
            <h1>Other posts you may like</h1>
            {posts.map(post=>(
                <div className='post' key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))}
        </div>
    )
}

export default Menu
