import React from 'react'

import './style.css'

export default function Feed_Item({ user, posts }) {

    return (
        <section className="feed">

            {posts.length > 0 && posts.map((post) => (

                <div className="feed__item" key={post.id + Math.random()}>

                    <div className="feed__header">
                        <a href="/">
                            <div className="feed__user">
                                <img className="feed__imguser" src={post.post_profile_image_url} alt="imguser" />
                                <p className="feed__nameuser">{post.post_user_name}</p>
                            </div>
                        </a>
                        <a href="/"><img className="feed__more" src="img/more.svg" alt="more" /></a>
                    </div>

                    <img className="feed__img" src={post.post_image_url} alt="" />

                    <div className="feed__interactions">
                        <div className="feed__">
                            <a href="/"><img className="feed__love icon__img" src="img/heart.svg" alt="like" /></a>
                            <a href="/"><img className="feed__message icon__img" src="img/comment.svg" alt="Logo_message" /></a>
                            <a href="/"><img className="feed__share icon__img" src="img/send.svg" alt="send" /></a>
                        </div>
                        <a href="/"><img className="feed__share icon__img" src="img/collect.svg" alt="share" /></a>

                    </div>
                    <div className="feed__details">
                        <p className="feed__nameuser">{post.post_user_name}</p>
                        {post.post_hastag.map((item, index) => (
                            <span className="feed__hashtag" key={index} >#{item}</span>
                        ))}


                    </div>
                    <div className="feed__comments">
                        <img className="feed__imguser" src={user.user_img_url} alt="user_img" />
                        <input className="feed_addcomment" placeholder="Add a comment" />
                    </div>
                    <span className="feed__time">2 hours ago</span>

                </div>

            ))}

        </section>
    )
}
