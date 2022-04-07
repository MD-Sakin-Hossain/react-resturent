import React, { useState } from 'react'
import './style.css'
import Menu from './menuApi'

const Resturent = () => {
    const [menuItem, setMenuItem] = useState(Menu);
    const filterItem = (category) => {
        const updatedList = Menu.filter((curElement) => {
            return curElement.category === category;
        })
        setMenuItem(updatedList);
    }
    return (
        <>
            <nav className='navbar'>
                <div className='btn-group'>
                    <button className='btn-group__item' onClick={() => filterItem("Breakfast")}>Breakfast</button>
                    <button className='btn-group__item' onClick={() => filterItem("lunch")}>Lunch</button>
                    <button className='btn-group__item' onClick={() => filterItem("dinner")}>Dinner</button>
                    <button className='btn-group__item' onClick={() => filterItem("other")}>Other</button>
                    <button className='btn-group__item' onClick={() => setMenuItem(Menu)}>All</button>
                </div>
            </nav>
            <section className='main-card--cointainer'>
                {menuItem.map((curElement) => {
                    return (
                        <>
                            <div className='card-container' key={curElement.id}>
                                <div className='card'>
                                    <div className='card-body'>
                                        <span className='card-number card-circle subtle'>
                                            {curElement.id}
                                        </span>
                                        <span className='card-author subtle'>
                                            {curElement.category}
                                        </span>
                                        <h2 className='card-title'>{curElement.name}</h2>
                                        <span className='card-description subtle'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Debitis cum ipsa corrupti ad numquam distinctio, veritatis
                                            facilis obcaecati exercitationem placeat.
                                        </span>
                                        <div className='card-read'>read</div>
                                        <img className='img' src={curElement.image} alt="" />
                                        <span className='card-media subtle'> Order Now</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </section>
        </>
    )

}

export default Resturent