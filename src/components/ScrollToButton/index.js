import "./button.css"

function ScrollToButton (){
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <button className="buttontotop" onClick={handleClick}>
            &#9650;
        </button>
    );
}

export default ScrollToButton;