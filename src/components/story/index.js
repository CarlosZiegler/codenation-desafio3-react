import React from 'react'

import './style.css'

export default function Story({ stories }) {
    return (
        <section className="story">

            {stories.map((item) => {
                if (item.story_isNew === false) {
                    return (
                        <div className="story__item" key={item.id}>
                            <a href="/"><img className="story__img" src={item.story_img_url} alt="image_post" /></a>
                        </div>
                    )
                }

                return (
                    <div className="story__item" key={item.id} >
                        <a href="/"><img className="story__img story__img--new" src={item.story_img_url} alt="image_post" /></a>
                    </div>
                )
            }

            )}




        </section>
    )
}
