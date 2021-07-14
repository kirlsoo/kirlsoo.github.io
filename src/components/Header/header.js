import { init } from 'ityped';
import '../../css/header.css';
import React, { useEffect,useRef } from 'react';
 

const Header = () => {

	const textRef= useRef();
	useEffect(()=>{
		init(textRef.current, {
			showCursor:true,
			backDelay:1500,
			strings:["Web Apps", "Mobile Apps", "Games"],
		});
	},[])
	return(
		<div className="header" id="header">
			<div className="left">
				<div className="wrapper">
					<h2>Yow wazzup</h2>
					<h1>I'm Kristen</h1>
					<h3>Software Developer <span ref={textRef}></span></h3>
				</div>
			</div>


			<div className="right">
				<div className="imgContainer">
					<img className="kirlPhoto" alt="Kristen's Photo"/>
				</div>
			</div>




			
		</div>
	);
}

export default Header;

/*<div className ="title">
				<h1>Kristen</h1>
				<h1>Luciano</h1>
			</div>
			<div className="sub-title">
				Software Developer
			</div> */