function openLogin(caller){
	/*$("#minilogin .btn.facebook").attr("onClick","openWindow('"+weddingkumembers + "/fblogin.asp?caller="+window.location.href+"');");
	$("#minilogin .btn.instagram").attr("onClick","openWindow('"+weddingkumembers + "/instalogin.asp?caller="+window.location.href+"');");
	// $('#minilogin #caller').val(caller);
	$('#minilogin #caller').val(window.location.href);
	// if (caller === 'undefined'){
		if (caller.indexOf("login") < 0 ){
			if ($( "#minilogin a#signupcaller" ).length > 0){
				$("#minilogin a#signupcaller").prop("href", weddingkumembers + "/register?caller="+caller);
			}
		}
	// }
	$('#minilogin').modal('show');*/
	window.location.href=weddingkumembers+"/login?caller="+caller
}
function popNotif() {
	$('#popNotif').hide();
}
function openEventPopup(){
	$('#popupevent').modal('show');
	$('html').css('overflow-y','hidden');
}

function setCookieHour(cname,cvalue,exdays) {
	var now = new Date();
	var minutes = 60;
   now.setTime(now.getTime() + (minutes * 60 * 1000));
	document.cookie =
	cname + "=" + cvalue +
	'; expires=' + now.toUTCString() +
	'; path=/';
}

function openWindow(url,name,width,height) {
	var left = (screen.width - width) / 2;
	var top = (screen.height - height) / 4;
	var myFeatures = "toolbar=no,location=no,status=yes,directories=no,menubar=no,scrollbars=yes,resizable=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left;
	var myWindow = window.open(url,name,myFeatures);
}

function alertLogin() {
	$('#alertlogin').modal('show');
}

function loadLazy() {
	$(".lazy").lazyload({
		effect : "fadeIn",
		failure_limit : 120,
		threshold : 400
	});
}

function cetakRate(rate){
	var sisa = 0, overal = 0, text="", starCount=0;
	sisa = (rate*10 % 10);
	//console.log(sisa);
	overal=rate*10-sisa;
	overal=overal/10;
	for (i = 0; i < overal; i++) {
		text += '<i class="fa fa-star"></i>';
		starCount++;
	}
	if (sisa > 1){
		text += '<i class="fa fa-star-half-o"></i>';
		starCount++;
	}
	for (i = 0; i < (5-starCount); i++) {
		text += '<i class="fa fa-star-o"></i>';
	}
	return text;
}

function blockimage(){
	document.oncontextmenu = function(e) {
		e = e || window.event;
		//console.log(e.type+'-'+e.button+'-'+e.which);
		if ((e.type && e.type == "contextmenu") || (e.button && e.button == 2) || (e.which && e.which == 3)) {
			if (/^img$/i.test((e.target || e.srcElement).nodeName)) return false;
		}
	};
	var pixelSource = 'https://images.weddingku.com/images/transparent.gif';
    var useOnAllImages = true;
    // Preload the pixel
    var preload = new Image();
    preload.src = pixelSource;
    $('img.mfp-img').on('mouseenter touchstart', function(e) {
        // Only execute if this is not an overlay or skipped
        var img = $(this);
        if (img.hasClass('protectionOverlay')) return;
        if (!useOnAllImages && !img.hasClass('protectMe')) return;
        // Get the real image's position, add an overlay
        var pos = img.offset();
        var overlay = $('<img class="protectionOverlay" src="' + pixelSource + '" width="' + img.width() + '" height="' + img.height() + '" />').css({position: 'absolute', zIndex: 9999999, left: pos.left, top: pos.top}).appendTo('body').bind('mouseleave', function() {
            setTimeout(function(){ overlay.remove(); }, 0, $(this));
        });
        if ('ontouchstart' in window) $(document).one('touchend', function(){ setTimeout(function(){ overlay.remove(); }, 0, overlay); });
    });
}


Number.prototype.formatMoney = function(c, d, t){
var n = this,
    c = isNaN(c = Math.abs(c)) ? 2 : c,
    d = d == undefined ? "." : d,
    t = t == undefined ? "," : t,
    s = n < 0 ? "-" : "",
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };

function kFormatter(num) {
    return num > 999 ? (num/1000).toFixed(1) + 'k' : num
}

function intFormatter (value) {
	if (value > 999) {
    var suffixes = ["", "K", "M", "B","T"];
    var suffixNum = Math.floor((""+value).length/3);
    var shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000,suffixNum)) : value).toPrecision(2));
    if (shortValue % 1 != 0) {
        shortValue = shortValue.toFixed(1);
    }
		return shortValue+suffixes[suffixNum];
	} else {
		return value;
	}
}

function formatPrice(value,symbol){
	if(value != undefined){
		value += '';
		x = value.split('.');
		x1 = x[0];
		x2 = x.length > 1 ? '.' + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + '.' + '$2');
		}
		return symbol+' '+x1 + x2;
	}
}

function dtTimeFormat(dtDate) {
	var datetime = new Date(dtDate);

	return "0"+date.getHours().substr(2)+":"+"0"+date.getMinutes().substr(2);
}
function dtTimeDifference(dtDate) {

	var current = Date.now();

	var d = dtDate.replace(/-/g, "/");
	var T = dtDate.replace("T", " ");
	var Z = T.replace("Z", " ");
	var datetime = new Date(Z);

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - datetime;
    if (elapsed < msPerMonth) {
		if(Math.round(elapsed/msPerDay) < 1){
			return 'Today';
		}else{
			return formatDate(datetime);
		}
    }else{
		return formatDate(datetime);
	}
}

function formatDateTZ(d) {
	var d = d.replace(/-/g, "/");
	var T = d.replace("T", " ");
	var Z = T.replace("Z", " ");
	var date = new Date(Z);
	return formatDate(date);
}

function formatDate(date) {
   var monthNames = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct",
    "Nov", "Dec"
  ];
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = String(date.getFullYear());

  if(year > 2000){
	  year = year.substr(year.length - 2);
  }
  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

function formatDateTZnum(d){

	var d = d.replace(/-/g, "/");
	var T = d.replace("T", " ");
	var Z = T.replace("Z", " ");
	var date = new Date(Z)
	var day = date.getDate();
	var monthIndex = (1 + date.getMonth()).toString();
	var year = date.getFullYear();
	// console.log(day + ' ' + monthNames[monthIndex] + ' ' + year);
	return day + '/' + monthIndex + '/' + year;
}

function getFormattedDate(date) {

	var monthNames = [
		"January", "February", "March",
		"April", "May", "June", "July",
		"August", "September", "October",
		"November", "December"
	];
	var year = date.getFullYear();

	var month = (1 + date.getMonth()).toString();
	month = month.length > 1 ? month : '0' + month;

	var day = date.getDate().toString();
	day = day.length > 1 ? day : '0' + day;

	return day + ' ' + monthNames[month] + ' ' + year;
}

function formatDateTZEvent(StartDate,EndDate) {
	var Startd = StartDate.replace(/-/g, "/");
	var StartT = Startd.replace("T", " ");
	var StartZ = StartT.replace("Z", " ");
	var Startdate = new Date(StartZ);

	var Endd = EndDate.replace(/-/g, "/");
	var EndT = Endd.replace("T", " ");
	var EndZ = EndT.replace("Z", " ");
	var Enddate = new Date(EndZ);
	return WriteEventDate(Startdate,Enddate);
}
function WriteEventDate(StartDate,EndDate){
	var StartDay,StartMonth,StartYear,EndDay,EndMonth,EndYear,sEventDate2;

	var monthNames = [
	"Jan", "Feb", "Mar",
	"Apr", "May", "Jun", "Jul",
	"Aug", "Sep", "Oct",
	"Nov", "Dec"
	];

	if (StartDate != null || StartDate != "") {
		StartMonthNames = monthNames[StartDate.getMonth()];
		StartDay = StartDate.getDate();
		StartYear = String(StartDate.getFullYear());
	}

	if (EndDate != null || EndDate != "") {
		EndMonthNames = monthNames[EndDate.getMonth()];
		EndDay = EndDate.getDate();
		EndYear = String(EndDate.getFullYear());
	}

	var strStart, strEnd, StartMonth, StartDay, EndMonth, EndDay;
	if (StartDate.getMonth().length > 1) {
		Startmonth = "0"+StartDate.getMonth();
	} else {
		StartMonth = StartDate.getMonth();
	}

	if (StartDate.getDate().length > 1) {
		StartDay = "0"+StartDate.getDate();
	} else {
		StartDay = StartDate.getDate();
	}

	if (EndDate.getMonth().length > 1) {
		EndMonth = "0"+EndDate.getMonth();
	} else {
		EndMonth = EndDate.getMonth();
	}

	if (EndDate.getDate().length > 1) {
		EndDay = "0"+EndDate.getDate();
	} else {
		EndDay = EndDate.getDate();
	}

	strStart = String(StartDate.getFullYear()) + "-" + StartMonth + "-" + StartDay
	strEnd = String(EndDate.getFullYear()) + "-" + EndMonth + "-" + EndDay
	if (StartDay === EndDay && StartMonth === EndMonth && StartYear === EndYear) {
		sEventDate2= '<time itemprop="startDate" datetime="' + strStart +  '">' + StartDay + '</time>' + StartMonthNames + " " + StartYear
	} else if (StartMonth === EndMonth && StartYear === EndYear) {
		sEventDate2= '<time itemprop="startDate" datetime="' + strStart +  '">' + StartDay + "</time>" + '-<time itemprop="endDate" datetime="' + strEnd +  '">' + EndDay + "</time> " + StartMonthNames + " " + StartYear
	} else if (StartMonth === EndMonth && StartYear != EndYear) {
		sEventDate2= '<time itemprop="startDate" datetime="' + strStart +  '">' + StartDay + "</time> " + StartMonthNames + " " + StartYear + '-<time itemprop="endDate" datetime="' + strEnd +  '">' + EndDay + "</time> " + EndMonthNames + " " + EndYear
	} else if (StartMonth != EndMonth && StartYear == EndYear) {
		sEventDate2= '<time itemprop="startDate" datetime="' + strStart +  '">' + StartDay + "</time> " + StartMonthNames + '-<time itemprop="endDate" datetime="' + strEnd +  '">' + EndDay + "</time> " + EndMonthNames + " " + StartYear
	} else if (StartMonth != EndMonth && StartYear != EndYear) {
		sEventDate2= '<time itemprop="startDate" datetime="' + strStart +  '">' + StartDay + " " + StartMonthNames + " " + StartYear + "</time>" + '-<time itemprop="endDate" datetime="' + strEnd +  '">' + EndDay + " " + EndMonthNames + " " + EndYear + "</time>"
	} else {
		sEventDate2= '<time itemprop="startDate" datetime="' + strStart +  '">' + strStart + "</time>" + '-<time itemprop="endDate" datetime="' + strEnd +  '">' + strEnd + "</time>"
	}

	return sEventDate2
}

function nl2br (str, is_xhtml) {
    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}

function vLove(id,tipe){
	$.ajax({
		type:'GET',
		url: weddingkuhome+'/ajax/love-vendors.asp',
		data:'i='+id,
		success:function(response){
			if (response.code == "01"){
				openLogin(window.location.href);
			}
			else {
				var response=$.parseJSON(response);
				Result=response.description;
				var iLove = parseInt($("#love"+id+" span.num").html());
				if (response.code == "01"){
					openLogin(window.location.href);
				}
				else if (Result == "Successfull love"){
					$(".ico-love"+id).addClass('loved');
					$("#love #"+id).addClass('loved');
					$("#love"+id+" span.num").html(iLove+1);

					console.log("loved");
				}
				else {
					$(".ico-love"+id).removeClass('loved');
					$("#love #"+id).removeClass('loved');
					$("#love"+id+" span.num").html(iLove-1);
					console.log("love");
				}
			}
		}
	});
}
function cLove(id,tipe){
	$.ajax({
		type:'GET',
		url: weddingkuhome+'/ajax/love-collections.asp',
		data:'i='+id,
		success:function(response){
			// console.log(response)
			if (response == "-1"){
				openLogin(window.location.href);
			}
			else {
				var response=$.parseJSON(response);
				Result=response.code;
				Love=response.description;
				if (Result == "01"){
					openLogin(window.location.href);
				}
				else if (Result == "00"){
					if (Love == "Successfull love") {
						// $("#"+id).addClass('loved');
						$(".loveicon"+id).addClass('loved');
						if (tipe== '1')
							$("#love"+id).html(kFormatter(Love));
					}
					else{
						// $("#"+id).removeClass('loved');
						$(".loveicon"+id).removeClass('loved');
						if (tipe== '1')
							$("#love"+id).html(kFormatter(Love));
					}
				}
				else {
					// $("#"+id).removeClass('loved');
					$(".loveicon"+id).removeClass('loved');
					if (tipe== '1')
						$("#love"+id).html(kFormatter(Love));
				}
			}
		}
	});
}


var isMobile = false; //initiate as false
// device detection
function devDetect() {
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
		|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
		isMobile = true;
	}
}

$(window).resize(function() {
	devDetect();
 });
$(document).ready(function(){
	devDetect();

	$('section[data-type="background"]').each(function(){
		var $bgobj = $(this); // assigning the object

		$(window).scroll(function() {
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			var bgSrc =  $bgobj.data('src');
			var coords = '50% '+ yPos + 'px';
			$bgobj.css("background", "url('"+bgSrc+"') fixed");
			$bgobj.css({ backgroundPosition: coords,
						 '-webkit-background-size': 'cover',
						 '-moz-background-size': 'cover',
						 '-o-background-size': 'cover',
						 'background-size': 'cover' });
		});
	});

	$('#nav-me a').click(function(e){
		if($(this).hasClass('active')){
			$('.wrapper').remove();
			$(".mobile_menu").hide();
			$(".mobile_menu").removeClass('active');
			$(this).removeClass('active');
			$('body').css('overflow-y','');
			$('html').css('overflow-y','');
		}
		else {
			$('body').prepend('<div class="wrapper"></div>');
			$(".mobile_menu").show();
			$(".mobile_menu").addClass('active');
			$(this).addClass('active');
			$('body').css('overflow-y','hidden');
			$('html').css('overflow-y','hidden');
		}
	});

	$('#mobile_menu-close').click(function(e){
		$('.wrapper').remove();
		$(".mobile_menu").hide();
		$(".mobile_menu").removeClass('active');
		$('.active').removeClass('active');
		$('body').css('overflow-y','');
		$('html').css('overflow-y','');
	});

	$('.dropdown a').click(function(e){
		//console.log("click"+$(this).parent().parent().parent().attr('id'));
		if ($(this).parent().parent().parent().attr('id') == "category-bar" || $(this).parent().parent().parent().parent().parent().attr('id') == "category-bar"){
			if($(this).parent().hasClass('active')){
				$(this).parent().children('.sub-menu').slideUp();
				$(this).parent().removeClass('active');
			}
			else {
				//console.log("click4"+$(this).attr('class'));
				$(this).parent().children('.sub-menu').slideDown();
				$(this).parent().addClass('active');
			}
		}
		else {
			//console.log("click2"+$(this).attr('class'));
			$('.navbar-m .subnav-m').slideUp(350);
			$('.navbar-m .subnav-m').removeClass('active');
			$('.sub-menu .dropdown .sub-menu').hide();
			$('.sub-menu .dropdown .sub-menu').parent().removeClass('active');
			if ($(this).parent().parent().parent().attr('id') == "nav-bottom"){
				$('body .wrapper').remove();
				$('body').css('overflow-y','');
				$('html').css('overflow-y','');
				//console.log("click");
			}
			//console.log("click6-"+$(this).parent().hasClass('dropdown'));

			if($(this).parent().hasClass('dropdown')){
				if($(this).parent().hasClass('active')){
					$(this).parent().children('.sub-menu').hide();
					$(this).parent().removeClass('active');
				}
				else {
					$(this).parent().children('.sub-menu').show();
					$(this).parent().addClass('active');
					if ($(this).parent().parent().parent().attr('id') == "nav-bottom" && $(this).attr('id') == "more"){
						$('body').prepend('<div class="wrapper"></div>');
						$('body').css('overflow-y','hidden');
						$('html').css('overflow-y','hidden');
					}
				}
			}
		}
	});

	$(document).mouseup(function (e)
	{
		var container = $(".active");
		if (!container.is(e.target) // if the target of the click isn't the container...
			&& container.has(e.target).length === 0) // ... nor a descendant of the container
		{
			$('.dropdown>.sub-menu').hide();
			$('.dropdown>.sub-menu').parent().removeClass('active');
			$('.navbar .subnav').hide();
			$('.active').removeClass('active');
			$('.wrapper').remove();
			$(".mobile_menu").hide();
		}
	});


	//Click event to scroll to top
	$('#gototop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	$('#nav-me>a').click(function(){
		$('#nav-me .sub-menu').toggle();
		return false;
	});

	$('.navbar a').click(function(e){
		if ($(this).parent().parent('ul.navbar').hasClass('active')){
			$('.navbar .subnav').hide();
			$('.navbar').removeClass('active');
		}
		else{
			$('.navbar .subnav').show();
			$('.navbar').addClass('active');
		}
	});

	$(".navbar-m > li.slideDown > a").on("click", function(e){
		if($(this).parent().has("ul")) {
		  e.preventDefault();
		}

		if(!$(this).hasClass("active")) {
		  // hide any open menus and remove all other classes
		  $(".navbar-m li.slideDown ul.subnav-m").slideUp(350);
		  $(".navbar-m li.slideDown a").removeClass("active");

		  // open our new menu and add the open class
		  $(this).next("ul.subnav-m").slideDown(350);
		  $(this).addClass("active");
		}

		else if($(this).hasClass("active")) {
		  $(this).removeClass("active");
		  $(this).next("ul.subnav-m").slideUp(350);
		}
	});

	$('#header-formsearch').submit(function(e) {
		e.preventDefault();
		var data = $("#header-formsearch :input").serializeArray();
		strURL = weddingkuhome;
		$.each(data, function(i, field){
			if (field.name == "q" && field.value != "")
				strURL += "/search?q="+encodeURIComponent(field.value).replace(/%20/g,'+');
			else
				strURL += "/wedding-vendors/bridal-house-boutique/jakarta";
		});
		window.location.href = strURL;
	});

	$('.input-with-animated-label').bind('blur', function () {
		if ($('#'+this.id).val() == "") {
			$('#'+this.id).removeClass("data-has-value");
		}else{}
	}).bind('focus', function () {
		$('#'+this.id).addClass("data-has-value");
	});
});

function banner(){
	$('#bannerbar-fixed-bottom').hide();
	$('#m-btn-filter .float').css({'bottom': '30px'});
	$('#gototop a').attr('style', 'bottom: 50px !important');
}

function closeBanner() {
	$('#bannerbar-fixed-bottom').hide();
	$('#left-content #vendor-name #profile-contact').css({'bottom': '0px'});
	$('#m-btn-filter .float ').css({'bottom': '30px'});
	$('.qcw-trigger-btn.svelte-noomlu.svelte-noomlu').addClass('bc');
	$('#gototop').addClass('bc');
}

var ellipsisText = function (e, etc) {
	var wordArray = e.innerHTML.split(" ");
	while (e.scrollHeight > e.offsetHeight) {
		wordArray.pop();
		e.innerHTML = wordArray.join(" ") + (etc || "...");
	}
};
[].forEach.call(document.querySelectorAll(".line-clamp-ff"), function(elem) {
	ellipsisText(elem);
});

if (typeof(Storage) !== "undefined") {
	var weddingkudt = localStorage.getItem("weddingkudt");
	var weddingkupageopen = localStorage.getItem("weddingkupageopen");
	var idwfpopup = localStorage.getItem("idwfpopup");
	var idwfpopupvisited = localStorage.getItem("idwfpopupvisited");
	var set_ga = localStorage.getItem("set_ga");
	if (set_ga == "" || set_ga === null) {
	  localStorage.setItem("set_ga",0);
	}
	if (weddingkupageopen == "" || weddingkupageopen === null) {
	  weddingkupageopen = 0;
	  weddingkudt = Date.now();
	}weddingkupageopen++;
	localStorage.setItem("weddingkupageopen", weddingkupageopen);
	localStorage.setItem("weddingkudt",weddingkudt);
}

function setlog(refid,pid,id,tipe,url,ga){
	$.ajax({
		type	: "POST",
		cache	: false,
		url		: weddingkuhome+"/ajax/addlog.asp",
		data	: "pid="+pid+"&ga="+ga+"&id="+id+"&refid="+refid+'&typ='+tipe+'&ca='+url,
		success	: function(data) {

		}
	});
}

function notifcookies(id){
	$.ajax({
		type	: "POST",
		cache	: false,
		url		: weddingkuhome+"/ajax/addnoticookies.asp",
		data	: "id="+id,
		success	: function(data) {

		}
	});
}

function addEventGA(sCat,sLabel){
	gtag('event', 'click', {
	  'event_category': sCat,
	  'event_label': sLabel
	});
}
