import React, { useState, useEffect } from 'react'
import Menu from '../../components/menu'
import Story from '../../components/story'
import FeedItem from '../../components/feed-item'

import './style.css'


const MOCK_POSTS = [
    {
        id: 1,
        story_img_url: "img/profiles/black-panther/black-panther-1.jpg",
        story_isNew: false,
        post_profile_image_url: "img/profiles/black-panther/black-panther-profile.jpg",
        post_user_name: "Black Panther",
        post_image_url: "img/profiles/black-panther/black-panther-2.jpg",
        post_hastag: ["nature", "beauty"]
    },
    {
        id: 2,
        story_img_url: "img/profiles/bruce/bruce-3.jpg",
        story_isNew: true,
        post_profile_image_url: "img/profiles/bruce/bruce-profile.jpg",
        post_user_name: "Bruce Wayne",
        post_image_url: "img/profiles/bruce/bruce-1.jpg",
        post_hastag: ["work", "photography"]
    },
    {
        id: 3,
        story_img_url: "img/profiles/carol/carol-3.jpg",
        story_isNew: false,
        post_profile_image_url: "img/profiles/carol/carol-profile.jpg",
        post_user_name: "Capitã Marvel",
        post_image_url: "img/profiles/carol/carol-1.jpg",
        post_hastag: ["fly"]
    },
    {
        id: 4,
        story_img_url: "img/profiles/domino/domino-3.jpg",
        story_isNew: false,
        post_profile_image_url: "img/profiles/domino/domino-profile.jpg",
        post_user_name: "Domino",
        post_image_url: "img/profiles/domino/domino-1.jpg",
        post_hastag: ["beauty"]
    },
    {
        id: 5,
        story_img_url: "img/profiles/carol/carol-6.jpg",
        story_isNew: false,
        post_profile_image_url: "img/profiles/carol/carol-profile.jpg",
        post_user_name: "Capitã Marvel",
        post_image_url: "img/profiles/carol/carol-5.jpg",
        post_hastag: ["fly"]
    },
    {
        id: 6,
        story_img_url: "img/profiles/gamora/gamora-1.jpg",
        story_isNew: false,
        post_profile_image_url: "img/profiles/gamora/gamora-profile.jpg",
        post_user_name: "Gamora",
        post_image_url: "img/profiles/gamora/gamora-3.jpg",
        post_hastag: ["girls", "Focus"]
    },
    {
        id: 7,
        story_img_url: "img/profiles/black-panther/black-panther-4.jpg",
        story_isNew: false,
        post_profile_image_url: "img/profiles/black-panther/black-panther-profile.jpg",
        post_user_name: "Black Panther",
        post_image_url: "img/profiles/black-panther/black-panther-6.jpg",
        post_hastag: ["nature", "beauty"]
    },
    {
        id: 8,
        story_img_url: "img/profiles/domino/domino-2.jpg",
        story_isNew: false,
        post_profile_image_url: "img/profiles/domino/domino-profile.jpg",
        post_user_name: "Domino",
        post_image_url: "img/profiles/domino/domino-2.jpg",
        post_hastag: ["beauty"]
    },

]

const MOCK_USER = {
    name: "Baby Yoda",
    user_img_url: "img/profiles/yoda/yoda-profile.jpg"
}

export default function Feed() {

    const [posts, setPosts] = useState([])

    const [user, setUser] = useState({})

    useEffect(() => {
        setPosts(MOCK_POSTS)
        setUser(MOCK_USER)
    }, [])


    return (
        <div className="container">
            <Menu />
            <Story stories={posts} />
            <FeedItem posts={posts} user={user} />
        </div>
    )
}
