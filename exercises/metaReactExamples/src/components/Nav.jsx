

function Nav(){
    const clickHandler = ()=> {
        console.log ('You clicked me!');
    }

    return (
        <nav className="main-nav">
        <ul>
            <li>Home</li>
            <li>Articles</li>
            <li>About</li>
            <li>Contacts </li>
            <li><button onClick ={clickHandler}>Learn More</button></li>
        </ul>

        </nav>
    );
};

export default Nav;