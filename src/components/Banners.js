import React from 'react';
import {ProductContext} from '../context';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import phone1 from './Images/phone1.jpg';
import phone2 from './Images/phone2.jpg';
import phone3 from './Images/phone3.jpg';
import phone4 from './Images/phone4.jpg';
import phone5 from './Images/phone5.jpg';
import phone6 from './Images/phone6.jpg';
import phone7 from './Images/phone7.jpg';
import phone8 from './Images/phone8.jpg';
import phoneFront from './Images/phoneFront.png';
import apple from './Images/apple.png';
import view from './Images/view.png';
import xiaomi from './Images/xiaomi.png';
import Apple12 from './Images/Apple12.png';
import xiaomi10T from './Images/xiaomi10T.png';
import cover4 from './Images/cover4.jpg';
import cover2 from './Images/cover2.jpg';
import cover1 from './Images/cover1.jpg';
import iphone from './Images/iphone.jpg';


export default class Banners extends React.Component {

	static contextType = ProductContext;

	constructor(props) {
	    super(props);
	    this.state = {
	      height: '100',
          width: '100',
          right: '100',
          left: '100',
          left2:'0'
	    }
	}

	_isMounted = false;

	eventHandler = (e) => {
		this.setState({
			width:100 + e.pageX/100 + '%', 
			height:100 + e.pageX/100 + '%', 
	        right:100 + e.pageX/2 + 'px', 
	        left:100 + e.pageX/2.5 + 'px',
	    });
	}

	eventHandler2 = (e) => {
		this.setState({
	        left2:-180 + e.pageX + 'px'
	    });
	}

	componentDidMount() {	   
		this._isMounted = true;

		let parallax = document.getElementById('parallax')
		let imgLayer = document.getElementById('imgLayer')

		if (this._isMounted) {
		    parallax.addEventListener('mousemove', this.eventHandler);
		    imgLayer.addEventListener('mousemove', this.eventHandler2);
        }
	}


	componentWillUnmount() {
		this._isMounted = false;
		if(!this._isMounted){
			document.removeEventListener('mousemove', this.eventHandler)
			document.removeEventListener('mousemove', this.eventHandler2)
		}
	}


	render() {
		return (
			<>
				<Parallax2>
					<div className='parallax-body' id = 'parallax'>
						<section>						
							<img src={apple} alt='phone' width='500px' height='450px' style={{right: this.state.right}} className='phone'/>
							<img src={iphone} alt='bg'  style={{height: this.state.height, width: this.state.width}} className='bg'/>	
							<div className='content' style={{left: this.state.left}}>
								<h2><br/><span>iPhone 12 Pro</span></h2>
								<p>5G goes Pro. A14 Bionic rockets past every other smartphone chip. 
								The Pro camera system takes low-light photography to the next level — with an even bigger jump on iPhone 12 Pro Max. 
								And Ceramic Shield delivers four times better drop performance. Let’s see what this thing can do.
								</p>
								<Link to={'/product/5fa4b800bef91d2f103a23be'}> 
						   	        <button className='btn btn-primary' onClick={() =>this.context.setID3()}>
										Buy Now
									</button>
								</Link>
							</div>
							<div className='textBlocks'>
								<div className='block'>
									<h3>Kicks glass</h3>
									<p className='pb-5'>Ceramic Shield, tougher than any smartphone glass</p>
								</div>
								<div className='block'>
									<h3>Blows other phones out of the water</h3>
									<p className='pb-5'>Industry‑leading IP68 water resistance</p>
								</div>
							</div>
						</section>			
					</div>
				</Parallax2>

				<div className='banner-wawe container-fluid'>				
					<div className='row'>
						<div className='col'>
							<ImgHover>
								<div className='container-360'>														   	   
									<Link to={'/product/64bad3a35bf8b231e4a6aeb8'}> 						
										<button className='btn btn-primary' onClick={() =>this.context.setID1()}>
											Shop
										</button>
									</Link>		
									<img src={view} alt='360deg' width='80px' height='80px' className='view'/>

									<div className='card'>						
										<span style={{"--i":0}}></span>
										<img src={phone1} alt='phone'/>
										<span style={{"--i":1}}></span>
										<img src={phone2} alt='phone'/>
										<span style={{"--i":2}}></span>
										<img src={phone3} alt='phone'/>
										<span style={{"--i":3}}></span>
										<img src={phone5} alt='phone'/>
										<span style={{"--i":4}}></span>
										<img src={phone4} alt='phone'/>
										<span style={{"--i":5}}></span>						
										<img src={phone6} alt='phone'/>
										<span style={{"--i":6}}></span>
										<img src={phone7} alt='phone'/>
										<span style={{"--i":7}}></span>
										<img src={phone8} alt='phone'/>
										<span style={{"--i":8}}></span>
										<img src={phone1} alt='phone'/>
									</div>
								</div>
							</ImgHover>
						</div>		
								
						<div className='col'>
							<Wawe>				
								<div className='section'>
									<div className='content'>
										<h1>Samsung Galaxy S21</h1>
										<h2>The toughest Gorilla Glass yet!</h2>
										<h5>Designed to scratch less and protect both front and back, this is the toughest Gorilla Glass in a smartphone.</h5>
									</div>
									
									<ImgLayer2>
										<div className='layer-body'>
											<div className='box'>
												<div className='glass'></div>
												<div className='glass'></div>
											</div>
										</div>
									</ImgLayer2>

									<svg className='wawe' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
									  <path fill="#fff" fillOpacity="1" d="M0,96L26.7,85.3C53.3,75,107,53,160,42.7C213.3,32,267,32,320,53.3C373.3,75,427,117,480,154.7C533.3,192,587,224,640,202.7C693.3,181,747,107,800,101.3C853.3,96,907,160,960,176C1013.3,192,1067,160,1120,165.3C1173.3,171,1227,213,1280,197.3C1333.3,181,1387,107,1413,69.3L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
									</svg>
								</div>
							</Wawe>
						</div>											
					</div>				
				</div>

				<ImgBackground3 className='d-flex align-items-center justify-content-center' id = 'imgLayer'>
					<div className='container1'>
						<h1 className='text-center'>Xiaomi Mi 10T</h1>
						<h2 className='text-left'>Flagship Camera, Display and Speed</h2>
						<h2 className='text-right'>Sophisticated Design, Luxury Feel</h2>
						<Link to={'/product/64bf0fe47a3521502856209b'}> 						
							<button className='btn btn-primary' onClick={() =>this.context.setID4()}>
								Shop
							</button>
						</Link>	
						<img src={xiaomi} alt='phone' className='phone'/>
						<div className='slide slide1'></div>
						<div className='slide slide2 text-center' style={{left: this.state.left2}}></div>
					</div>
				</ImgBackground3>

				<Card2>
					<div className='padding container-fluid'>
						<div className='top'>
							<h1 >Top products of the month</h1>
						</div>
						<div className='card2-body'>					
							<div className='container'>						
								<div className='card2'>
									<div className='imgBx'>
										<img src={phoneFront} alt='phone' width='120px' height='250px'/>
									</div>	
									<div className='contentBx'>
										<h3>Samsung Galaxy S21</h3>
										<h4>$ 890</h4>
										<Link to={'/product/5fa4b7b441db29365c43fd87'}> 						
											<button className='btn btn-primary' onClick={() =>this.context.setID1()}>
												Buy Now
											</button>
										</Link>		
									</div>					
								</div>
								<div className='card2'>
									<div className='imgBx'>
										<img src={xiaomi10T} alt='phone' width='120px' height='250px'/>
									</div>	
									<div className='contentBx'>
										<h3>Xiaomi Mi 10T Pro</h3>
										<h4>$ 545</h4>
										<Link to={'/product/5fa4b7ffbef91d2f103a23bd'}> 						
											<button className='btn btn-primary' onClick={() =>this.context.setID4()}>
												Buy Now
											</button>
										</Link>	
									</div>					
								</div>
								<div className='card2'>
									<div className='imgBx'>
										<img src={Apple12} alt='phone' width='120px' height='250px'/>
									</div>	
									<div className='contentBx'>
										<h3>Apple iPhone 12</h3>
										<h4>$ 899</h4>
										<Link to={'/product/5fa4b800bef91d2f103a23be'}> 
								   	        <button className='btn btn-primary' onClick={() =>this.context.setID3()}>
												Buy Now
											</button>
										</Link>
									</div>					
								</div>
							</div>
						</div>
					</div>
				</Card2>
			</>
		)
	}
}


const Wawe = styled.div`
	.section{
		position: relative;
		width: 150%;
		height: 100vh;
		right: 50%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		background: linear-gradient(180deg, #008aff, #ff137d), url(${cover4});
		background-blend-mode: screen;
		@media (max-width: 1500px){
			display: none;
		}
	}

	.section .content{
		position: relative;
		bottom: 17%;
		left: 15%;
		max-width: 700px;
		@media (max-width: 2200px){
			bottom: 27%;
		}
	}

	.section .content h1{
		font-size: 4.5em;
		color: var(--lightBlue);
		font-weight: 800;
		line-height: 2em;
		text-transform: capitalize;
		margin-bottom: 4rem;
		@media (max-width: 1150px){
			font-size: 3em;
			margin-bottom: 2rem;
		}
	}

	.section .content h2{
		font-size: 3em;
		color: black;
		font-weight: 400;
		text-transform: capitalize;
		@media (max-width: 1150px){
			font-size: 2.2em;
		}
	}

	.section .content h5{
		font-size: 1.5em;
		color: black;
		@media (max-width: 1150px){
			font-size: 1.3em;
		}
	}

	.section img{
		position: relative;
		max-width: 350px;
		z-index: 10;
	}

	.wawe{
		position: absolute;
		bottom: 0;
		left: 0;
	}
`;

const ImgBackground3 = styled.div`
	.container1{
		position: relative;
		width: 75%;
		height: 50vh;
		overflow: hidden;
		padding-top: 5rem;
		padding-bottom: 5rem;
		@media (max-width: 750px){
			display: none;
			padding: 0;
		}
		@media (max-width: 1200px){
			margin-top: 3rem;
		}
	}

	.container1 h1{
		position: relative;
		top: 0;
		left: 0;
		font-size: 4.5em;
		font-weight: 800;
		line-height: 2em;
		color: #EE7F60;
		text-shadow: 2px 2px black;
		z-index: 10;
	}

	.container1 .text-right{
		position: relative;
		top: 10%;
		right: 8%;
		font-weight: 800;
		color: #EE7F60;
		text-shadow: 2px 2px black;
		z-index: 10;
		@media (max-width: 2100px){
			color: transparent;
			text-shadow: none;
		}
	}

	.container1 .text-left{
		position: relative;
		top: 22%;
		left: 8%;
		font-weight: 800;
		color: #EE7F60;
		text-shadow: 2px 2px black;
		z-index: 10;
		@media (max-width: 2100px){
			color: transparent;
			text-shadow: none;
		}
	}

	.container1 .btn {
	  position: absolute;
	  bottom: 5%;
	  left: 50%;
	  transform: translate(-50%, -50%);
	  -ms-transform: translate(-50%, -50%);
	  background-color: #343a40;
	  color: white;
	  font-size: 16px;
	  padding: 12px 24px;
	  border: none;
	  cursor: pointer;
	  border-radius: 5px;
	  z-index: 15;
	}

    .container1 .btn:hover {
	  background-color: black;
	  color: var(--lightBlue);
	}

	.container1 .phone{
		position: relative;
		display: flex;
		top: 50%;
		left: 50%;
		width: 550px;
		height: auto;
		transform: translate(-50%, -50%);
	  	-ms-transform: translate(-50%, -50%);
		z-index: 10;
		@media (max-width: 1500px){
			top: 54%;
		}
	}

	.container1 .slide{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.container1 .slide.slide1{
		background: url(${cover1});
		background-attachment: fixed;
		background-position: center;
	}

	.container1 .slide.slide2{
		background: url(${cover2});
		background-attachment: fixed;
		background-position: center;
		left: 0;
		width: 150%;
	}
`;

const Parallax2 = styled.div`
	.parallax-body{
		background: #000;
		@media (max-width: 1200px){
			display: none;
		}
	}

	section{
		position: relative;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 100px;
	}

	.bg{
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		background-position: center;
	}

	.phone{
		position: absolute;
		bottom: 0;
		right: 100px;
		max-height: 80%;
		z-index: 10;
	}

	.content{
		position: absolute;
		top: 5%;
		max-width: 600px;
		z-index: 1;
	}

	.content h2{
		font-size: 3.5em;
		color: var(--lightBlue);
		text-shadow: 4px 4px black;
		font-weight: 400;
		line-height: 2em;
		@media (max-width: 1550px){
			font-size: 2em;
		}
	}

	.content h2 span{
		color: #fff;
		font-weight: 800;
		font-size: 3.5em;
		letter-spacing: 5px;
	}

	.content h2 span:hover{
		color: var(--lightBlue);
	}

	.content p{
		color: #fff;
		font-size: 1.2em;
		overflow: hidden;
	}

	.content .btn{
		display: inline-block;
		padding: 10px 20px;
		background: #fff;
		color: #000;
		text-transform: uppercase;
		text-decoration: none;
		margin-top: 20px;
		font-weight: 600;
		letter-spacing: 2px;
	}

	.content .btn:hover{
		background: var(--lightBlue);
		color: white;
		transform: scale(1.1); 
	}

	.textBlocks{
		position: absolute;
		bottom: 0;
		display: flex;
		@media (max-width: 1550px){
			display: none;
		}
	}

	.textBlocks .block{
		position: relative;
		padding: 20px;
		margin-right: 40px;
		max-width: 500px;
		background: #044879;
	}

	.textBlocks .block h3{
		font-weight: 600;
		letter-spacing: 1px;
		color: #fff;
	}

	.textBlocks .block p{
		color: #fff;
	}
`;

const Card2 = styled.div`
	.padding{
		padding-top: 3rem;
		padding-bottom: 3rem;
		@media (max-width: 740px){
	    	padding-top: 0;
	  	}
	}

	@media (max-width: 550px){
	   	.padding{
	   		display: none;
	   	}
	}

	.top{
		position: relative;
		top: 20%;
		height: 6rem;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #09161d;
		z-index: 10;
	}

	.top h1{
		padding-top: 2rem;
		font-size: 3.5em;
		color: white;
		@media (max-width: 650px){
			font-size: 1.5em;
		}
	}

	.card2-body{
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 60vh;
		background: #09161d;
	}

	.container{
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		@media (max-width: 992px){
			display: grid;
		}
	}

	.container .card2{
		position: relative;
		width: 320px;
		height: 450px;
		background: #232323;
		border-radius: 20px;
		overflow: hidden;
		margin: 2rem;
		@media (max-width: 992px){
			display: grid;
			width: 250px;
			height: 400px;
		}		
	}

	.container .card2:before{
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: var(--lightBlue);
		clip-path: circle(150px at 80% 20%);
		transition: 0.5s ease-in-out;
	}

	.container .card2:hover:before{
		clip-path: circle(300px at 80% -20%);
	}

	.container .card2 .imgBx{
		position: absolute;
		left: 30%;
		top: 10%;
		z-index: 100;
		width: 100%;
		height: 220px;
		transition: 0.5s;
		@media (max-width: 992px){
			left: 27%;
			top: 8%;
		}	
	}

	.container .card2:hover .imgBx{
		transform: translateY(-15%);
		@media (max-width: 992px){
			transform: translateY(-10%);
		}	
	}

	.container .card2 .contentBx{
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 100px;
		text-align: center;
		transition: 0.5s;
		z-index: 10;
	}

	.container .card2:hover .contentBx{
		height: 160px;
		@media (max-width: 992px){
			height: 130px;
		}
	}

	.container .card2 .contentBx h3{
		position: relative;
		letter-spacing: 1px;
		color: #fff;
		padding-bottom: 5px;
		@media (max-width: 992px){
			font-size: 1.2rem;
		}	
	}

	.container .card2 .contentBx h4{
		position: relative;
		letter-spacing: 1px;
		color: #fff;
		@media (max-width: 992px){
			font-size: 1rem;
		}	
	}

	.container .card2 .contentBx .btn{
		display: inline-box;
		padding: 10px 20px;
		background: var(--lightBlue);
		border-radius: 4px;
		margin-top: 15px;
		text-decoration: none;
		font-weight: 600;
		color: #111;
		opacity: 0;
		transform: translateY(50px);
		transition: 0.5s;
		@media (max-width: 992px){
			margin-top: 10px;
			padding: 8px 16px;
		}	
	}

	.container .card2:hover .contentBx .btn{
		opacity: 1;
		transform: translateY(0px);
		transition-delay: 0.5s;
		cursor: pointer;
	}
`;

const ImgLayer2 = styled.div`
	.layer-body{
		margin: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100%;
		@media (max-width: 1500px){
			display: none;
		}
	}

	.box{
		position: relative;
		right: 20rem;
		width: 230px;
		height: 500px;
		background: url(${phoneFront});
		transform: rotate(-45deg) skewY(25deg);
		box-shadow: -25px 40px 4px rgba(0,0,0,.2);
		transition: .5s;
		@media (max-width: 2200px){
			top: 8rem;
		}
 	}

 	.box:hover{
 		transform: rotate(-45deg) skewY(25deg) translate(20px, -20px);
		box-shadow: -60px 100px 60px rgba(0,0,0,.5);
 	}

 	.box:before{
 		content: '';
 		position: absolute;
 		top: 0;
 		left: -20px;
 		height: 100%;
 		width: 20px;
 		background: #e4e4e4;
 		box-sizing: border-box;
 		transform-origin: right;
 		transform: skewY(-58deg);
 	}

 	.box:after{
 		content: '';
 		position: absolute;
 		bottom: -32px;
 		left: 0;
 		height: 32px;
 		width: 100%;
 		background: #919191;
 		box-sizing: border-box;
 		transform-origin: top;
 		transform: skewX(-32deg);
 	}

 	.box .glass{
 		position: absolute;
 		top: 0;
 		left: 0;
 		height: 100%;
 		width: 100%;
 		background: rgba(255,255,255,0.001);
 		box-shadow: 0 0 10px rgba(0,0,0,0);
 		transition: 0.5s;
 		overflow: hidden;
 	}

 	.box:hover .glass{
 		top: -40px;
 		left: 30px;
 		background: rgba(255,255,255,0.05);
 		box-shadow: -2px 2px 10px rgba(0,0,0,.2);
 	}

 	.box:hover .glass:nth-child(2){
 		top: -80px;
 		left: 60px;
 		background: rgba(255,255,255,0.05);
 		box-shadow: -2px 2px 10px rgba(0,0,0,.2);
 	}

 	// .box .glass:before{
 	// 	content: '';
 	// 	position: absolute;
 	// 	top: 0;
 	// 	left: -50pz;
 	// 	width: 100%;
 	// 	height: 100%;
 	// 	background: rgba(255,255,255,0.05);
 	// 	transform: skewX(-5deg);
 	// }
`;

const ImgHover = styled.div`
	.container-360{
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100%;
		padding-right: 50%;
		background: white;
		@media (max-width: 1500px){
			display: none;
		}
	}

	.container-360 .btn {
	  position: absolute;
	  top: 43%;
	  left: 25%;
	  transform: translate(-50%, -50%);
	  -ms-transform: translate(-50%, -50%);
	  background-color: #343a40;
	  color: white;
	  font-size: 16px;
	  padding: 12px 24px;
	  border: none;
	  cursor: pointer;
	  border-radius: 5px;
	  z-index: 10;
	}

	.btn:hover {
	  background-color: black;
	  color: var(--lightBlue);
	}

	.container-360 .view {
	  position: absolute;
	  bottom: 15%;
	  left: 25%;
	  transform: translate(-50%, -50%);
	  -ms-transform: translate(-50%, -50%);
	  z-index: 10;
	}

	.card{
		position: relative;
		width: 700px;
		height: 890px;
		display: flex;
		flex-direction: column;
	}

	.card span{
		display: flex;
		position: absolute;
		top: 0;
		left: calc(100% / 8 * var(--i));
		width: calc(100% / 8 * var(--i));
		height: 100%;
	}

	.card img{
		display: flex;
		position: absolute;
		top: 20%;
		left: 0;
		width: 100%;
		height: 50%;
		object-fit: cover;
		opacity: 0;
		pointer-events: none;
	}

	.card img:nth-child(2),
	.card span:hover + img{
		opacity: 1;
	}
`;