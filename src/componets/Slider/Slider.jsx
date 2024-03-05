import './Slider.css';

export function Slider() {
    return (
        <section>
            <div className="slider-container">
                <div className='slider-frame'>
                    <ul>
                        <li><img src="./src/assets/images/scarface.jpg" alt="" /></li>
                        <li><img src="./src/assets/images/nwa.jpg" alt="" /></li>
                        <li><img src="./src/assets/images/jordan.jpg" alt="" /></li>
                        <li><img src="./src/assets/images/eminem.jpg" alt="" /></li>
                        <li><img src="./src/assets/images/scarface.jpg" alt="" /></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}