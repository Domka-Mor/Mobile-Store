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
import phoneBack from './Images/phoneBack.png';
import cover4 from './Images/cover4.jpg';
import cover2 from './Images/cover2.jpg';


export default class ImageChanger extends React.Component {


	static contextType = ProductContext;


	constructor(props) {
	    super(props);
	    this.state = {
	      height: '100',
          width: '100',
          right: '100',
          left: '100',
          left2:'0',
	      currentImage1: 0,
	      currentImage2: 0
	    }
	}


	componentDidMount() {
	    setInterval(this.switchImage1, 3000);
	    setInterval(this.switchImage2, 3000);

	    document.addEventListener('mousemove', (e) => {
            this.setState({width:100 + e.pageX/100 + '%', height:100 + e.pageX/100 + '%', 
            	right:100 + e.pageX/2 + 'px', left:100 + e.pageX/2.5 + 'px', left2:e.pageX + 'px'});
        });
	}


	switchImage1 = () => {
	    if (this.state.currentImage1 < this.context.images1.length - 1) {
	      this.setState({
	        currentImage1: this.state.currentImage1 + 1
	      });
	    } else {
	      this.setState({
	        currentImage1: 0
	      });
	    }
	    return this.currentImage1;
	}


	switchImage2 = () => {
	    if (this.state.currentImage2 < this.context.images2.length - 1) {
	      this.setState({
	        currentImage2: this.state.currentImage2 + 1
	      });
	    } else {
	      this.setState({
	        currentImage2: 0
	      });
	    }
	    return this.currentImage2;
	}


	render() {
		return (
			<>
			<Wawe>				
				<section>
					<div className='content'>
						<h2>wawe shape banner</h2>
						<p>La lalala lalala lalal lalala lalal lalalla lalala lalalal lala laala alalla</p>
					</div>
					<img src={phoneFront} alt='phone' width='120px' height='250px'/>
					<svg className='wawe' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					  <path fill="#fff" fill-opacity="1" d="M0,96L26.7,85.3C53.3,75,107,53,160,42.7C213.3,32,267,32,320,53.3C373.3,75,427,117,480,154.7C533.3,192,587,224,640,202.7C693.3,181,747,107,800,101.3C853.3,96,907,160,960,176C1013.3,192,1067,160,1120,165.3C1173.3,171,1227,213,1280,197.3C1333.3,181,1387,107,1413,69.3L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
					</svg>
				</section>
			</Wawe>

			<Cyrcle>
				<div className='body-cyrcle'>
					<div className='cyrcle'><h1>DM</h1></div>
					<div className='cyrcle'></div>
					<svg>
						<filter id='wawy'>
							<feTurbulence x='0' y='0' baseFrequency='0.009' numOctaves='5' seed='2'>
								<animate attributeName='baseFrequency' dur='60s' values='0.02;0.005;0.02' repeatCount='indefinite'/>
							</feTurbulence>
							<feDisplacementMap in='SourceGraphic' scale='30'>
							</feDisplacementMap>
						</filter>
					</svg>
				</div>
			</Cyrcle>

			<ImgBackground2 className='d-flex align-items-center justify-content-center'>
				<div className='container'>
					<div className='slide slide1'></div>
					<div className='slide slide2' style={{left: this.state.left2}}></div>
				</div>
			</ImgBackground2>

			<Parallax>
				<div className='parallax-body'>
					<section>
						<img src={phoneFront} alt='phone' width='120px' height='250px' style={{right: this.state.right}} className='phone'/>
						<img src={cover4} alt='bg'  style={{height: this.state.height, width: this.state.width}} className='bg'/>					
						<div className='content' style={{left: this.state.left}}>
							<h3>Samsung Galaxy</h3>
							<h2 className='price'>$ 40.<small>99</small></h2>
							<p className='buy'>Buy Now</p>
						</div>
					</section>						
				</div>
			</Parallax>

			<Card1>
				<div className='card1-body'>
					<div className='card1'>
						<div className='imgBx'>
							<img src={phoneFront} alt='phone' width='120px' height='250px'/>
						</div>
						<div className='content'>
							<h3>Samsung Galaxy</h3>
							<h2 className='price'>$ 40.<small>99</small></h2>
							<p className='buy'>Buy Now</p>
						</div>
					</div>
				</div>
			</Card1>

			<Card2>
				<div className='card2-body'>
					<div className='container'>
						<div className='card2'>
							<div className='imgBx'>
								<img src={phoneFront} alt='phone' width='120px' height='250px'/>
							</div>	
							<div className='contentBx'>
								<h3>Samsung Galaxy</h3>
								<h2 className='price'>$ 40.<small>99</small></h2>
								<p className='buy'>Buy Now</p>
							</div>					
						</div>
					</div>
				</div>
			</Card2>

			<ImgLayer>
				<div className='layer-body'>
					<div className='box'>
						<div className='glass'></div>
						<div className='glass'></div>
					</div>
				</div>
			</ImgLayer>

			<ImgBackground className='d-flex align-items-center justify-content-center'>
				<section>
					<h1 className='text-center'>Dominika</h1>
					<img src={phoneBack} alt='phone' className='phone'/>
					<img src={phoneFront} alt='phone' className='phone'/>
				</section>
			</ImgBackground>

			<ImgHover>
				<div className='container-360'>	
					<button className='btn btn-primary'>
						Shop
					</button>	
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

			<div className='container-fluid my-5 d-none d-lg-block'>
				<div className='row'>
					<div className='col'>
						<ImgWrapper >						
							<div className='container'>		
						       	<img
					   	       	 	src={`https://shop-mobile-full-stack.herokuapp.com/${this.context.images1[this.state.currentImage1]}`} 
					   	        	alt="cleaning images"
					   	        />	
					   	        <Link to={'/product/5fa4b7b441db29365c43fd87'} onClick={() =>this.context.setID1()}> 
					   	        <button className='btn btn-primary' >
									Shop
								</button>
								</Link>
							</div>						
						</ImgWrapper>
					</div>

					<div className='col'>
						<ImgWrapper >						
							<div className='container'>		
						       	<img
					   	       	 	src={`https://shop-mobile-full-stack.herokuapp.com/${this.context.images2[this.state.currentImage2]}`} 
					   	        	alt="cleaning images"
					   	        />	
					   	        <Link to={'/product/5fa4b7ffbef91d2f103a23bd'}> 
					   	        <button className='btn btn-primary' onClick={() =>this.context.setID2()}>
									Shop
								</button>
								</Link>
							</div>						
						</ImgWrapper>
					</div>
				</div>
			</div>
			</>
		)
	}
}


const Wawe = styled.div`
	section{
		position: relative;
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 100px;
		box-sizing: border-box;
		background: linear-gradient(180deg, #008aff, #ff137d), url(${cover4});
		background-blend-mode: screen;
	}

	section .content{
		max-width: 700px;
	}

	section .content h2{
		font-size: 3em;
		color: #fff;
		text-transform: capitalize;
	}

	section .content p{
		font-size: 1.2em;
		color: #fff;
		text-transform: capitalize;
	}

	section img{
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

const Cyrcle = styled.div`
	.body-cyrcle{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		min-height: 100vh;
		background: #000;
	}
	.cyrcle{
		position: relative;
		width: 600px;
		height: 600px;
		filter: url(#wawy) blur(1px);
	}

	.cyrcle:before{
		content: '';
		position: absolute;
		top: 100px;
		left: 100px;
		right: 100px;
		bottom: 100px;
		border: 20px solid #fff;
		border-radius: 50%;
		box-shadow: 0 0 50px #0f0, inset 0 0 50px #0f0;
		-webkit-box-reflect: below 10px linear-gradient(transparent, transparent,#0002);
		animation: animate 5s linear infinite;
	}

	.cyrcle:after{
		content: '';
		position: absolute;
		top: 100px;
		left: 100px;
		right: 100px;
		bottom: 100px;
		border: 20px solid #fff;
		border-radius: 50%;
		box-shadow: 0 0 10px #fff, inset 0 0 20px #fff;
	}

	.cyrcle:nth-child(2):before{
		animation-delay: -2.5s;
	}

	@keyframes animate{
		0% {box-shadow: 0 0 50px #0f0, inset 0 0 50px #0f0; filter: hue-rotate(0deg);}
		20% {box-shadow: 0 0 60px #0f0, inset 0 0 60px #0f0;}
		40% {box-shadow: 0 0 40px #0f0, inset 0 0 40px #0f0;}
		60% {box-shadow: 0 0 80px #0f0, inset 0 0 80px #0f0;}
		80% {box-shadow: 0 0 100px #0f0, inset 0 0 100px #0f0;}
		100% {box-shadow: 0 0 50px #0f0, inset 0 0 50px #0f0; filter: hue-rotate(360deg);}
	}

	svg{
		width: 0;
		height: 0;
	}

	.cyrcle h1{
		position: relative;
		top: 45%;
		left: 45%;
		color: white;
	}
`;

const ImgBackground2 = styled.div`
	.container{
		position: relative;
		width: 100%;
		height: 100vh;
		overflow: hidden;
	}

	.container .slide{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.container .slide.slide1{
		background: url(${cover4});
		background-attachment: fixed;
		background-position: center;
	}

	.container .slide.slide2{
		background: url(${cover2});
		background-attachment: fixed;
		background-position: center;
		left: 0;
	}
`;

const Parallax = styled.div`
	.parallax-body{
		background: #000;
	}

	section{
		position: relative;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 100px 150px;
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
		left: 100px;
		max-width: 600px;
		z-index: 10;
	}

	.content h3{
		font-size: 3.5em;
		color: #fff;
		font-weight: 400;
		line-height: 2em;
	}

	.content h2{
		color: #fff;
		margin-top: -15px;
	}

	.content p{
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
`;

const Card2 = styled.div`
	.card2-body{
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		background: #131313;
	}

	.container{
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.container .card2{
		position: relative;
		width: 320px;
		height: 450px;
		background: #232323;
		border-radius: 20px;
		overflow: hidden;		
	}

	.container .card2:before{
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #9bdc28;
		clip-path: circle(150px at 80% 20%);
		transition: 0.5s ease-in-out;
	}

	.container .card2:hover:before{
		clip-path: circle(300px at 80% -20%);
	}

	.container .card2 .imgBx{
		position: absolute;
		left: 30%;
		top: 30%;
		transform: translateY(-30%);
		z-index: 100;
		width: 100%;
		height: 220px;
		transition: 0.5s;
	}

	.container .card2:hover .imgBx{
		top: 0%;
		transform: translateY(0%);
	}

	.container .card2 .contentBx{
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 100px;
		text-align: center;
		transition: 0.8s;
		z-index: 10;
	}

	.container .card2:hover .contentBx{
		height: 180px;
	}

	.container .card2 .contentBx h3,h2{
		position: relative;
		font-weight: 600;
		letter-spacing: 1px;
		color: #fff;
	}

	.container .card2 .contentBx p{
		display: inline-box;
		padding: 10px 20px;
		background: #fff;
		border-radius: 4px;
		margin-top: 15px;
		text-decoration: none;
		font-weight: 600;
		color: #111;
		opacity: 0;
		transform: translateY(50px);
		transition: 0.8s;
	}

	.container .card2:hover .contentBx p{
		opacity: 1;
		transform: translateY(0px);
		transition-delay: 0.5s;
	}

`;

const Card1 = styled.div`
	.card1-body{
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		background: #09161d;
	}

	.card1{
		position: relative;
		width: 320px;
		height: 420px;
		background: #122936;
		border-radius: 20px;
		overflow: hidden;
	}

	.card1::before{
		content: '';
		position: absolute;
		top: -50%;
		width: 100%;
		height: 100%;
		background: #2196f3;
		transform: skewY(345deg);
		transition: 0.5s;
	}

	.card1:hover::before{
		top: -70%;
		transform: skewY(390deg);
	}

	.card1 .imgBx{
		position: relative;
		height: 60%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 20px;
		z-index: 1;
	}

	.card1 .imgBx img{
		max-width: 80%;
		max-height: 100%;
		transition: 0.5s;
	}

	.card1:hover .imgBx img{
		transform: scale(0.9);
	}

	.card1 .content{
		position: relative;
		padding: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		z-index: 1;
	}

	.card1 .content h3{
		font-size: 18px;
		color: #fff;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.card1 .content .price{
		font-size: 24px;
		color: #fff;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.card1 .content .buy{
		position: relative;
		top: 200px;
		opacity: 0;
		padding: 10px 30px;
		margin-top: 15px;
		color: #fff;
		text-decoration: none;
		background: #2196f3;
		border-radius: 30px;
		text-transform: uppercase;
		letter-spacing: 1px;
		transition: 0.5s;
	}

	.card1:hover .content .buy{
		top: 0;
		opacity: 1;
	}
`;

const ImgLayer = styled.div`
	.layer-body{
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		background: #36363c;
	}

	.box{
		position: relative;
		width: 230px;
		height: 510px;
		background: url(${phoneFront});
		transform: rotate(-45deg) skewY(25deg);
		box-shadow: -25px 40px 4px rgba(0,0,0,.2);
		transition: .5s;
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

const ImgBackground = styled.div`
	section{
		position: relative;
		width: 50%;
		height: 70vh;
		background: url(${cover4});
		background-attachment: fixed;
	}

	section:before{
		content: '';
		position: absolute;
		width: 100%;
		height: 70vh;
		background: url(${cover2});
		color: black;
		background-attachment: fixed;
		transition: 3s;
		pointer-events: none;
	}


	section:hover:before{
		width: 0;
		// filter: blur(5px);
	}

	.phone{
		position: absolute;
		top: 50%;
	  	left: 50%;
	  	transform: translate(-50%, -50%);
		z-index: 1;
	}
`;


const ImgHover = styled.div`
	.container-360{
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
	}

	.card{
		position: relative;
		width: 300px;
		height: 450px;
		display: flex;
		flex-direction: column;
	}

	.card span{
		position: absolute;
		top: 0;
		left: calc(100% / 6 * var(--i));
		width: calc(100% / 6 * var(--i));
		height: 100%;
	}

	.card img{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0;
		pointer-events: none;
	}

	.card img:nth-child(2),
	.card span:hover + img{
		opacity: 1;
	}
`;

const ImgWrapper = styled.div`
    .container {
	  position: relative;
	  width: 100%;
	}

    .container img {
	  width: 100%;
	  height: auto;
	}
 
    .container .btn {
	  position: absolute;
	  top: 50%;
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
	}

    .container .btn:hover {
	  background-color: black;
	  color: var(--lightBlue);
	}
`;