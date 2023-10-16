"use client";

import React, {useState} from 'react'; 
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import styles from './ScrollToTop.module.css';

const ScrollButton = () =>{ 

const [visible, setVisible] = useState(false) 

const toggleVisible = () => { 
	const scrolled = document.documentElement.scrollTop; 
	if (scrolled > 300){ 
	setVisible(true) 
	} 
	else if (scrolled <= 300){ 
	setVisible(false) 
	} 
}; 

const scrollToTop = () =>{ 
	window.scrollTo({ 
	top: 0, 
	behavior: 'smooth'
	/* you can also use 'auto' behaviour 
		in place of 'smooth' */
	}); 
}; 

window.addEventListener('scroll', toggleVisible); 

return ( 
	<div> 
	<button className= {styles.button} onClick={scrollToTop} 
	style={{display: visible ? 'inline' : 'none'}} > 
      <span>
       Back To Top
      </span>      
      <ArrowUpwardIcon/>
    </button>
	</div> 
); 
} 

export default ScrollButton; 
