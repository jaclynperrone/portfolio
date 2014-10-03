//picturefill
/*! Picturefill - Responsive Images that work today. (and mimic the proposed Picture element with divs). Author: Scott Jehl, Filament Group, 2012 | License: MIT/GPLv2 */

(function( w ){
	
	// Enable strict mode
	"use strict";

	w.picturefill = function() {
		var ps = w.document.getElementsByTagName( "div" );
		
		// Loop the pictures
		for( var i = 0, il = ps.length; i < il; i++ ){
			if( ps[ i ].getAttribute( "data-picture" ) !== null ){

				var sources = ps[ i ].getElementsByTagName( "div" ),
					matches = [];
			
				// See if which sources match
				for( var j = 0, jl = sources.length; j < jl; j++ ){
					var media = sources[ j ].getAttribute( "data-media" );
					// if there's no media specified, OR w.matchMedia is supported 
					if( !media || ( w.matchMedia && w.matchMedia( media ).matches ) ){
						matches.push( sources[ j ] );
					}
				}

			// Find any existing img element in the picture element
			var picImg = ps[ i ].getElementsByTagName( "img" )[ 0 ];

			if( matches.length ){			
				if( !picImg ){
					picImg = w.document.createElement( "img" );
					picImg.alt = ps[ i ].getAttribute( "data-alt" );
					ps[ i ].appendChild( picImg );
				}
				
				picImg.src =  matches.pop().getAttribute( "data-src" );
			}
			else if( picImg ){
				ps[ i ].removeChild( picImg );
			}
		}
		}
	};
	
	// Run on resize and domready (w.load as a fallback)
	if( w.addEventListener ){
		w.addEventListener( "resize", w.picturefill, false );
		w.addEventListener( "DOMContentLoaded", function(){
			w.picturefill();
			// Run once only
			w.removeEventListener( "load", w.picturefill, false );
		}, false );
		w.addEventListener( "load", w.picturefill, false );
	}
	else if( w.attachEvent ){
		w.attachEvent( "onload", w.picturefill );
	}
	
}( this ));


$(document).ready(function() {	
	var winW = window.innerWidth;
	//set section height		
	function unifyHeights() {
		var maxHeight = 0;
		$('.content').each(function() {
			var height = $(this).outerHeight();
			// alert(height);
			if (height > maxHeight) {
				maxHeight = height; 
			}
			$(this).parent().css('height', maxHeight);
			maxHeight = 0;
		});
	}
	$(window).load(unifyHeights);
	$(window).resize(unifyHeights);
	
	//nav	
	$('.nav-wrapper .n1').click(function(){
		$(this).toggleClass('active');
		$('.nav-dropdown').toggle();
	});
	
	$('.mobile-menu .n1').click(function(){
		$(this).addClass('active');
		$('body').animate({left:'81.25%'},400);		
	});

	$('.mobile-menu .n1').click(function(){
		$(this).addClass('active');
		$('.close').css('display','block');
		$('body').animate({left:'81%'},400);

	});
	$('.mobile-menu .n3').click(function(){
		$(this).toggleClass('active');
		$('.search-bar').slideToggle();

	});

	$('.close').click(function(){
		$('body').animate({left:'0%'},400);
		$('.close').css('display','none');
		$('.mobile-menu .n1').removeClass('active');
	});
	
	//country finder
	function detectProductInfo(){
		// var winW = window.innerWidth;
		$('#show-all').click(function(){
			$(this).css('display','none');
			$('#show-less').css('display','block');
			if (winW <= 600) {
			$('.product-info').css('height','520px');	
			}else {
				$('.product-info').css('height','390px');	
			}		
			$('.hide').fadeIn();
			if (winW <= 600) {
				$('.hide-600').fadeIn();
			}
		});
		$('#show-less').click(function(){
			$(this).css('display','none');
			$('#show-all').css('display','block');
			$('.hide, .hide-600').fadeOut('fast',function(){
				$('.product-info').css('height','293px');
			});		
		});
	}
	
	$('#specs-h4').click(function(){
		$(this).toggleClass('active');
		$('#specs').slideToggle();
	});
	$('#info-h4').click(function(){
		$(this).toggleClass('active');
		$('#info').slideToggle();
	});
	
	//This timeout is in place because of the iframes.  
	//The content/viewport information doesn't come into the iframe quick enough, causing the readMore function to fail
	setTimeout(function(){ detectProductInfo(); }, 1000);
	
	
	$('.country-map').click(function(){
		$(this).hide();
		$('.country-list').show();
		
	});
	$('.back-to-map').click(function(){
		$('.country-list').hide();
		$('.country-map').show();
	});
	$('#close, .list-container span a').click(function(){
		$('#image-lightbox').hide();
		$('.country-list').hide();
	});
	$('.language').click(function(){
		$('#image-lightbox').fadeIn('fast');
			$('.country-map').show();
	});
	

	
	function removeOverlay(){
		$('.overlay').fadeOut('fast');
	}
	$(window).resize(function(){
		removeOverlay();
	});
	
	setTimeout(function(){ 
		removeOverlay();
	}, 3000);
	
	$('body').click(function(){
		removeOverlay();
	});
	
	var newLeft = (winW - 340)/2;
	$('.pop-up').css('left',newLeft);
});