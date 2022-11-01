import classes from './Navigation.module.css';

const Navigation = () => {
	return (
		<nav className={classes.container}>
	        <div className={classes.content}>
	          <h1 className="title">
	            <a href="" className="title-ref">
	              <i className="fa fa-check-circle" aria-hidden="true"></i>
	              Pomofocus
	            </a>
	          </h1>
	        </div>
	        <div className="menu-right">
	          <button className="menu-btn">
	            <i className="fa fa-bar-chart" aria-hidden="true"></i>
	            <div>Report</div>
	          </button>
	          <button className="menu-btn">
	            <i className="fa fa-sliders" aria-hidden="true"></i>
	            <div>Setting</div>
	          </button>
	          <button className="menu-btn">
	            <i className="fa fa-user" aria-hidden="true"></i>
	            <div>Login</div>
	          </button>
	        </div>
      	</nav>
	)
}

export default Navigation;