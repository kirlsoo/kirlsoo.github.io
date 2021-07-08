import React from 'react';
import '../css/footer.css';

const Footer = () => {
	return(
		<div className='footer-container' id="footer">
			<section className = "social">
				<h1>Socials</h1>
				<i class="fab fa-twitter"></i>
				<i class="fab fa-instagram"></i>
				<i class="fab fa-youtube-square"></i>
				<i class="fab fa-facebook-f"></i>
			</section>
			<div className="copyright">
				Copyright &copy; 2021. Kristen Luciano
			</div>
		</div>
	);
}

export default Footer;