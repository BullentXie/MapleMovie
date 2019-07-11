
class Navbarlight extends React.Component {
    constructor (props) {
        super(props)
        this.clickTurnToTitle = this.clickTurnToTitle.bind(this);
    }

    clickTurnToTitle() {
        console.log(uid);
        var url="./user.html"+"?"+uid;
        window.location.assign(encodeURI(url));
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light navbarLight-exclusive">
                <div className="container">
                    <a href="index.html"><img className="logo" src="./component/navbar/logo.png" /></a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link traingle-hover-color navbarLight-text-color" href="./index.html">枫影</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#">我的画像</a>
                            </li> */}
                        </ul>
                        <ul className='nav justify-content-end'>
                            <li className='nav-item dropdown'>
                                <a className='nav-link dropdown-toggle traingle-hover-color' href='#' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                                    <img width='30px' height='30px' src='./component/navbar/profile.jpg' className='img-fluid rounded-circle' />
                                </a>
                                <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                    <h3 className='dropdown-item dropdown-item-username'>雨霖铃</h3>
                                    <div className='dropdown-divider'></div>
                                    <a className='dropdown-item' href='./user.html'>我的标签</a>
                                    {/* <a className='dropdown-item' href='./history.html'>我的历史</a> */}
                                    <div className='dropdown-divider'></div>
                                    <a className='dropdown-item' href='./setting.html'>设置</a>
                                    <a className='dropdown-item' href='./login.html'>注销</a>
                                </div>
                            </li>
                            {/* <li className='nav-item'>
                                <a className='nav-link' href='message.html' data-toggle='tooltip' data-placement='bottom'><i className='fa fa-bell'></i></a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='idolmanage.html' data-toggle='tooltip' data-placement='bottom'><i className='fa fa-user'></i></a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

}


ReactDOM.render(<Navbarlight />, document.getElementById("navbar-light"));