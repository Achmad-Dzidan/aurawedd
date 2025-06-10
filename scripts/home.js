// JavaScript Document
$(document).ready(function(){
	$("#mainslick").slick({
		autoplay: true,
		dots: true,
		infinite: true,
		centerMode: true,
		variableWidth: true,
		arrows: true,
		slidesToScroll: 1, centerPadding: '0px',
		rows: 0,
		prevArrow: '<button class="slide-arrow prev-arrow hidden"><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="angle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="svg-inline--fa fa-angle-left fa-w-6 fa-3x"><path fill="currentColor" d="M25.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L64.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L25 264.5c-4.6-4.7-4.6-12.3.1-17z" class=""></path></svg></button>',
		nextArrow: '<button class="slide-arrow next-arrow"><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="svg-inline--fa fa-angle-right fa-w-6 fa-3x"><path fill="currentColor" d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z" class=""></path></svg></button>',
		responsive: [
			{breakpoint: 576,settings: {slidesToShow: 1,slidesToScroll: 1,dots: true,arrows: true,centerMode: false, variableWidth: false}}
		]
	}).on('setPosition', function (event, slick) {
		$('#mainslick .prev-arrow').removeClass('hidden');
		$('#mainslick .next-arrow').removeClass('hidden');
		if ( $(window).width() <= 768) {
		} else {
			var slickWidth = $('#mainslick').width();
			var slickLeft = (slickWidth - 600)/2 - 15;
			$("#mainimg .prev-arrow").css('left', slickLeft);
			$("#mainimg .next-arrow").css('right', slickLeft);
			$('#mainslick .slick-slide').css('width', slick.$slides.width() + 'px');
			$('#mainslick .slick-slide').css('min-width', '600px');
		}
	});
	$("#mainslick a").each(function(){
		var blogid = $(this).data("id");
		var href = $(this).attr("href");
		setTrack(refid,refurl,blogid,81,ga_id);
		$(this).click(function() {
			var blogid = $(this).data("id");
			setTrack(refid,'',blogid,85,ga_id);
		});
	});
	$(".slick4").slick({
		autoplay: false,
		dots: false,
		infinite: false,
		arrows: true,
		slidesToShow: 4,
		slidesToScroll: 4, centerPadding: '40px',
		rows: 0,
		prevArrow: '<button class="slide-arrow prev-arrow hidden"><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="angle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="svg-inline--fa fa-angle-left fa-w-6 fa-3x"><path fill="currentColor" d="M25.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L64.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L25 264.5c-4.6-4.7-4.6-12.3.1-17z" class=""></path></svg></button>',
		nextArrow: '<button class="slide-arrow next-arrow"><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="svg-inline--fa fa-angle-right fa-w-6 fa-3x"><path fill="currentColor" d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z" class=""></path></svg></button>',
		responsive: [
			{breakpoint: 576,settings: {slidesToShow: 1,slidesToScroll: 1,dots: false,arrows: true}},
			{breakpoint: 980,settings: {slidesToShow: 3,slidesToScroll: 1,dots: false,arrows: true}}
		]
	}).on('setPosition', function (event, slick) {
		var divID = this.id;
		var itemHeight=0;
		if (divID == "home-venue"){
			//console.log("pos"+slick.$slides.width());
			slick.$slides.css('width', slick.$slides.width() + 'px');
			slick.$slides.css('height', slick.$slides.width() + 'px');
		} else if (divID == "home-honeymoon") {
			$("#"+divID+" .product").each(function(){
				if($(this).outerHeight()>itemHeight) itemHeight=$(this).outerHeight();
			});
			if(itemHeight>0) {
				$("#"+divID+" .product.transparant").css("height",itemHeight+"px")
			}
		}
	});
	$(".slick4").each(function(){
		var itemHeight = 0,itemWidth = 0;
		var divID = this.id;
		$("#"+divID+" .item").each(function(){
			if($(this).outerWidth()>itemWidth) itemWidth=$(this).outerWidth();
		});
		//console.log("each"+itemWidth);
		if(itemWidth>0) {
			$("#"+divID+" .item").css("width",itemWidth+"px");
			$("#"+divID+" .item").css("height",itemWidth+"px");
		}
	});
	$(".slick3").slick({
		autoplay: false,
		dots: false,
		infinite: false,
		arrows: true,
		slidesToShow: 4,
		slidesToScroll: 4, centerPadding: '5px',
		rows: 0,
		prevArrow: '<button class="slide-arrow prev-arrow hidden"><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="angle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="svg-inline--fa fa-angle-left fa-w-6 fa-3x"><path fill="currentColor" d="M25.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L64.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L25 264.5c-4.6-4.7-4.6-12.3.1-17z" class=""></path></svg></button>',
		nextArrow: '<button class="slide-arrow next-arrow"><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="svg-inline--fa fa-angle-right fa-w-6 fa-3x"><path fill="currentColor" d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z" class=""></path></svg></button>',
		responsive: [
			{breakpoint: 1080,settings: {slidesToShow: 3,slidesToScroll: 3,dots: false,arrows: true}},
			{breakpoint: 576,settings: {slidesToShow: 1,slidesToScroll: 1,dots: false,arrows: true}}
		]
	}).on('setPosition', function (event, slick) {
		var divID = this.id;
		var itemHeight=0;
		if (divID == "home-hashtag"){
			var sWidth = slick.$slides.width();
			var sHeight = sWidth * 2/3;
			slick.$slides.css('width', slick.$slides.width() + 'px');
			slick.$slides.css('height', sHeight + 'px');
			$("#"+divID+" .img.landscape").css("height",sHeight+"px")
		}
	});
	$(".slick").slick({
		autoplay: false,
		dots: false,
		infinite: false,
		arrows: true,
		slidesToShow: 5,
		slidesToScroll: 5, centerPadding: '40px',
		rows: 0,
		prevArrow: '<button class="slide-arrow prev-arrow hidden"><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="angle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="svg-inline--fa fa-angle-left fa-w-6 fa-3x"><path fill="currentColor" d="M25.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L64.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L25 264.5c-4.6-4.7-4.6-12.3.1-17z" class=""></path></svg></button>',
		nextArrow: '<button class="slide-arrow next-arrow"><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="svg-inline--fa fa-angle-right fa-w-6 fa-3x"><path fill="currentColor" d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z" class=""></path></svg></button>',
		responsive: [
			{breakpoint: 576,settings: {slidesToShow: 2,slidesToScroll: 2,dots: false,arrows: true}}
		]
	}).on('setPosition', function (event, slick) {
		var divID = this.id;
		var itemHeight=0
		if (divID == "home-realwedding"){
			if ( $(window).width() <= 768) {
				slick.$slides.css("height","250px")
				$("#"+divID+">div:last-child").css("height", "250px")
			} else {
				slick.$slides.css('height', '350px');
				$("#"+divID+">div:last-child").css("height", "350px")
			}
		} else if (divID == "storepromo") {
			$("#"+divID+" .product").each(function(){
				if($(this).outerHeight()>itemHeight) itemHeight=$(this).outerHeight();
			});
			if(itemHeight>0) {
				$("#"+divID+" .product.rounded.border").css("height",itemHeight+"px")
			}
		} else {
			$("#"+divID+" .item").each(function(){
				if($(this).outerHeight()>itemHeight) itemHeight=$(this).outerHeight();
			});
			if(itemHeight>0) {
				$("#"+divID+" .item").css("height",itemHeight+"px")
			}
		}
	});
	$('.slick').slick("refresh");
	$(".top-package").slick({
		autoplay: false,
		dots: false,
		infinite: false,
		arrows: true,
		slidesToShow: 5,
		slidesToScroll: 5, centerPadding: '40px',
		rows: 0,
		prevArrow: '<button class="slide-arrow prev-arrow hidden"><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="angle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="svg-inline--fa fa-angle-left fa-w-6 fa-3x"><path fill="currentColor" d="M25.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L64.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L25 264.5c-4.6-4.7-4.6-12.3.1-17z" class=""></path></svg></button>',
		nextArrow: '<button class="slide-arrow next-arrow"><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="svg-inline--fa fa-angle-right fa-w-6 fa-3x"><path fill="currentColor" d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z" class=""></path></svg></button>',
		responsive: [
			{breakpoint: 576,settings: {slidesToShow: 2,slidesToScroll: 2,dots: false,arrows: true}}
		]
	});
    var itemHeight=0
	$(".top-package .product.item").each(function(){
		if($(this).outerHeight()>itemHeight) itemHeight=$(this).outerHeight();
	});
	if(itemHeight>0) $(".top-package .product.item").css("height",itemHeight+"px")

	if ( $(window).width() <= 768) {
		$("#blog").slick({
			autoplay: false,
			dots: false,
			infinite: false,
			arrows: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			centerPadding: '20px',
			rows: 0,
			prevArrow: '<button class="slide-arrow prev-arrow hidden"><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="angle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="svg-inline--fa fa-angle-left fa-w-6 fa-3x"><path fill="currentColor" d="M25.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L64.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L25 264.5c-4.6-4.7-4.6-12.3.1-17z" class=""></path></svg></button>',
			nextArrow: '<button class="slide-arrow next-arrow"><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="svg-inline--fa fa-angle-right fa-w-6 fa-3x"><path fill="currentColor" d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z" class=""></path></svg></button>',
			responsive: [
				{breakpoint: 576,settings: {slidesToShow: 1,slidesToScroll: 1,dots: false,arrows: true}},
				{breakpoint: 980,settings: {slidesToShow: 3,slidesToScroll: 1,dots: false,arrows: true}}
			]
		});
		var itemWidth=0;
		$("#blog .article").each(function(){
			if($(this).outerWidth()>itemWidth) itemWidth=$(this).outerWidth();
		});
		if(itemWidth>0) $("#blog .img.landscape").css("height",itemWidth*2/3+"px");

		var itemHeight=0;
		$("#blog .article").each(function(){
			if($(this).outerHeight()>itemHeight) itemHeight=$(this).outerHeight();
		});
		if(itemHeight>0) $("#blog .article,#blog .viewall").css("height",itemHeight+"px");
	} else {
		$("#blog").slick({
			autoplay: false,
			dots: false,
			infinite: false,
			arrows: true,
			slidesToShow: 4,
			slidesToScroll: 4,
			centerPadding: '20px',
			rows: 0,
			prevArrow: '<button class="slide-arrow prev-arrow hidden"><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="angle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="svg-inline--fa fa-angle-left fa-w-6 fa-3x"><path fill="currentColor" d="M25.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L64.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L25 264.5c-4.6-4.7-4.6-12.3.1-17z" class=""></path></svg></button>',
			nextArrow: '<button class="slide-arrow next-arrow"><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="svg-inline--fa fa-angle-right fa-w-6 fa-3x"><path fill="currentColor" d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z" class=""></path></svg></button>'
		});
		var itemWidth=0;
		$("#blog .article").each(function(){
			if($(this).outerWidth()>itemWidth) itemWidth=$(this).outerWidth();
		});
		if(itemWidth>0) $("#blog .img.landscape").css("height",itemWidth*2/3+"px");

		var itemHeight=0;
		$("#blog .article").each(function(){
			if($(this).outerHeight()>itemHeight) itemHeight=$(this).outerHeight();
		});
		if(itemHeight>0) $("#blog .article,#blog .viewall").css("height",itemHeight+"px");
	}
});
$('.slick,.slick3,.slick4,.top-package,#blog').on('afterChange', function (event, slick, currentSlide,slideCount) {
	var divID = this.id;
	var itemShow = $('.slick').slick('slickGetOption', 'slidesToShow');
	var totalPage = 2;
	var cSlide = currentSlide;
	if ( $(window).width() <= 768) {
		totalPage = 10;
		if (divID != "blog" && divID != "home-honeymoon") {
			cSlide = cSlide+2;
		} else {
			cSlide = cSlide+1;
			totalPage = 8;
		}
		if (divID == "home-honeymoon") {totalPage = 6}
	}
	if((cSlide) >= Math.ceil(totalPage)) {
		$("#"+divID+' .next-arrow').addClass('hidden');
	}
	else {
		$("#"+divID+' .next-arrow').removeClass('hidden');
	}
	if(currentSlide === 0) {
		$("#"+divID+' .prev-arrow').addClass('hidden');
	}
	else {
		$("#"+divID+' .prev-arrow').removeClass('hidden');
	}
});

function setTrack(refid,refurl,id,tipe,ga){
	$.ajax({
		type	: "POST",
		cache	: false,
		url		: weddingkuhome+"/ajax/track.asp",
		data	: "pid=0&ga="+ga_id+"&id="+id+"&refid="+refid+'&typ='+tipe+'&ca='+refurl,
		success	: function(response) {
			if(response.responsestatus != null){
				if(response.responsestatus.code == "00"){
					if(response.log_id != null){
						var logID = response.log_id;

					}
				}
			}
		}
	});
}

$(document).ready(function(){
	loadLazy();
	$('a[rel="homenav"]').click(function(){
	    $('html, body').animate({
	        scrollTop: ($( $.attr(this, 'href') ).offset().top) - 90
	    }, 2500);
	    return false;
	});
	$("#mainimg input, #formfilter input, #formfilter button").click(function() {
		$("#header-formsearch #q").focus();
		formsearchopen();
	});
});
