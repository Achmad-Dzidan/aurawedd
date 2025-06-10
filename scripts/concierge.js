function loadScript() {
}
var startApp = function() {
	gapi.load('auth2', function(){
		auth2 = gapi.auth2.init({
			client_id: '324728480001-5q67ffk5h5oitqg6v23c9j7fqbo18g0h.apps.googleusercontent.com',
			cookiepolicy: 'single_host_origin'
		});
		//attachSignin(document.getElementById('customBtn'));
	});
};
//startApp();
function attachSignin(element) {
	auth2.attachClickHandler(element, {},
	function onSignIn(googleUser) {
		var c = $("#frmMiniLogin #c").val();
		var profile = googleUser.getBasicProfile();
		var id_token = googleUser.getAuthResponse().id_token;
		var f = profile.getName();
		var e = profile.getEmail();
		var p = profile.getId();
		var ph = id_token;
		var r = profile.getImageUrl();

		var url = 'https://members.weddingku.com/ajax/googlesigninpop.asp?p='+p+'&e='+e+'&f='+f+'&ph='+ph+'&r='+r+'&c='+c;
		var form = $('<form action="' + url + '" method="post"> </form>');
		$('body').append(form);
		form.submit();
	});
}

var WDKConcierge = function(options){
    var vars = {
		memberid  : '',
		username  : '',
		partnerid  : '',
		partnername  : '',
        url  : '',
        refid  : '',
        ga  : '',
        status  : '',
        nid  : '',
        ntitle  : '',
        ndescription  : '',
        nlink  : '',
		calln : ''
    };

    var root = this;
	var option 	= $.extend(vars, options);
	var ico_whatsapp = '<svg width="18" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-whatsapp fa-w-14"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" class=""></path></svg>';
	var ico_whatsapp_small = '<svg width="16" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-whatsapp fa-w-14"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" class=""></path></svg>';
	var pop_text = 'Klik tombol Whatsapp Us dibawah ini untuk menanyakan informasi detail tentang price list dan info detail lainnya.';
	var whatapp_text = '[#'+option.memberid+'] Hi Weddingku, Saya *'+option.username+'* telah mengunjungi halaman dengan link: '+option.url+' Apakah bisa mendapatkan info lebih detail?';

	var wilona_open = "https://images.weddingku.com/images/wilona.png";
	var wilona_close = "https://images.weddingku.com/images/wilona-o.png";

    this.open = function(){
		var div_wrapper = $("#concierge_wrapper"),
		div_container = $("#concierge_container"),
		div_notif = $("#concierge_notif"),
        div_btn_msg = $("#ico_msg"),
        div_btn_close = $("#ico_close"),
		div_circle_concierge = $("#circle_concierge");
		var div_form_btn = $("#minilogin_btn"),
		div_form_email = $("#minilogin_email"),
		div_ico_wilona_fest = $(".wilonafest");
		if(div_circle_concierge.is(':visible') ) {

		} else {
			div_circle_concierge.show();
		}
		if(div_container.is(':visible') ) {
        	//console.log("Close");
			div_wrapper.hide();
			div_container.hide();
			div_notif.show();
			div_btn_msg.show();
			div_btn_close.hide();
			div_form_btn.show();
			div_form_email.hide();
			div_ico_wilona_fest.show();
			$("#concierge_wilona").attr("src",wilona_close);
			if ($(window).width() <=576) {
				$('body').css('overflow-y','');
				$('html').css('overflow-y','');
				div_circle_concierge.hide();
			}
			if (option.nid != ''){
				notifcookies(option.nid);
			}
		} else {
        		//console.log("Open");
			if ($("#popNotif").length > 0){
				$("#popNotif").hide();
			}
			div_wrapper.show();
			div_container.show();
			div_notif.hide();
			div_btn_msg.hide();
			div_btn_close.show();
			div_ico_wilona_fest.hide();
			$("#concierge_wilona").attr("src",wilona_open);
			if ($(window).width() <=576) {
				$('body').css('overflow-y','hidden');
				$('html').css('overflow-y','hidden');
				div_circle_concierge.show();
			}
			if (option.memberid == '-1' || option.memberid == '0') {
				if (option.status == "private") {
					loadScript();
				}
			}
		}
    };

	this.openform_email = function(){
		var div_form_btn = $("#minilogin_btn"),
		div_form_email = $("#minilogin_email");
		if(div_form_btn.is(':visible') ) {
			div_form_email.show();
			div_form_btn.hide();
		}
		else {
			div_form_btn.show();
			div_form_email.hide();
		}
	};

	this.showpass = function(){
		if ( $('input#password').attr('type') == 'password' ) {
			$("input#password").attr("type","text");
			$(".showpass").css("color","#333333");
		} else {
			$("input#password").attr("type","password");
			$(".showpass").css("color","#8A8A8A");
		}
	};

	this.addwalog = function(){
		if (option.url){
			setlog(option.refid,option.partnerid,'',44,option.url,option.ga);
		}
		if (option.calln == "prospect") {
			addProspect(option.url,option.partnername);
		}
	}

	this.redirect = function(){
		if (option.nid){
			setlog('','',"'+option.nid+'",42);
			notifcookies(option.nid);
		}
		if (option.nlink){
			window.location.href = option.nlink;
		}
	}

	this.wa_url = function(txt){
		var wa_number = '628119528988';
		var wa_text = encodeURIComponent(txt);
		var wa_param = "";
		return 	"https://wa.me/"+wa_number+"?text="+wa_text;
	}

	this.init = function(){
		var avatar = 'https://images.weddingku.com/images/logo50.png';
		var ico_msg = '<svg aria-hidden="true" id="ico_msg" focusable="false" data-prefix="fal" height="50" width="50" data-icon="comment-dots" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" x="0px" y="0px"><path fill="#fff" d="M128 216c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 384c-28.3 0-56.3-4.3-83.2-12.8l-15.2-4.8-13 9.2c-23 16.3-58.5 35.3-102.6 39.6 12-15.1 29.8-40.4 40.8-69.6l7.1-18.7-13.7-14.6C47.3 313.7 32 277.6 32 240c0-97 100.5-176 224-176s224 79 224 176-100.5 176-224 176z"></path></svg>'
		var ico_close = '<svg version="1.1" id="ico_close" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50" height="50" viewBox="0 0 600 600" style="display: none;" xml:space="preserve"><g id="Close"><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#ffffff;" d="M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312 c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312 l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937 c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z"/></g></svg>';
		var ico_pop_close = '<svg version="1.1" id="close" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="15" height="15" viewBox="0 0 250 250" xml:space="preserve"><g id="Close"><path id="ico_pop_close" d="M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312 c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312 l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937 c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z"/></g></svg>';

		if (option.partnerid != '' && option.partnerid != '0'){
			pop_text = 'Klik tombol Whatsapp Us dibawah ini untuk menanyakan informasi detail tentang price list dan info detail vendor <strong>'+option.partnername+'</strong>';
			whatapp_text = '[#'+option.memberid+'] Hi Weddingku, Saya *'+option.username+'* telah mengunjungi halaman profile *'+option.partnername+'* dengan link: '+option.url+' Apakah bisa mendapatkan info lebih detail?';
		}

		document.write('<div id="concierge_wrapper"></div>');
		document.write('<div id="circle_concierge"><a href="javascript:;" onclick="WDKConcierge.open();"><img id="concierge_wilona" src="'+wilona_close+'"></a></div>');
		document.write('<div id="concierge_container" class="animated fadeInUp" style="display: none;">');
			document.write('<div class="concierge_content">');
				if (option.memberid != '-1' && option.memberid != '0') {
					document.write('<p class="mb-3">Hai <strong>'+option.username+'</strong>!</p>');
				}
				else {
					document.write('<p class="mb-3">Hai <strong>Happy Couple</strong>!</p>');
				}
				if (option.ntitle != '' && option.ndescription != '') {
					document.write('<div class="notif">');
					document.write('<h3>'+option.ntitle+'</h3>');
					document.write('<p>'+option.ndescription+'</p>');
					if (option.nlink != ''){
						document.write('<div class="concierge_link"><a href="javascript:;" onclick="WDKConcierge.redirect()"><svg width="30" height="30" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chevron-circle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-chevron-circle-right fa-w-16 fa-2x"><path fill="currentColor" d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zM256 40c118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216zm86.6 224.5l-115.1 115c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L303 256l-99.5-99.5c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l115.1 115c4.6 4.8 4.6 12.4-.1 17.1z"></path></svg></a></div>');
					}
					document.write('</div><hr>');
				}
				else {

				}
				if (option.memberid != '-1' && option.memberid != '0') {
					document.write('<p class="mb-3">'+pop_text+'</p>');
					document.write('<a href="'+WDKConcierge.wa_url(whatapp_text)+'" target="_blank" onclick="WDKConcierge.addwalog();" class="btn whatsapp">'+ico_whatsapp+' <span>Whatsapp Us</span></a>');
				} else {
					if (option.status == "open") {
						document.write('<p class="mb-3">'+pop_text+'</p>');
						document.write('<a href="'+WDKConcierge.wa_url(whatapp_text)+'" target="_blank" onclick="WDKConcierge.addwalog();" class="btn whatsapp">'+ico_whatsapp+' <span>Whatsapp Us</span></a>');
					}
					else {
						document.write('<p">Untuk memulai <strong>Chat</strong>, <a class="btn whatsapp small">'+ico_whatsapp_small+' <span>Whatsapp Us</span></a></p>');
						document.write('<p class="mb-3">Silahkan <strong>Sign In</strong> terlebih dahulu.</p>');
						document.write('<div id="minilogin" class="text-center">');
						document.write('<form name="frmMiniLogin" id="frmMiniLogin" method="POST" action="'+weddingkuhome +'/ajax/emailsignin.asp">');
								document.write('<div id="minilogin_btn">');
								//document.write('<p class="mb-2 text-center">Sign in with:</p>');
								document.write('<a href="https://members.weddingku.com/login?caller='+option.url+'"><div id="customBtn" class="btn mr-2 google-login"> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 50 50" class="google"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>Google </div></a>');
								document.write('<div class="f mr-2"><a class="btn facebook" href="javascript:;" onClick="openWindow(\''+weddingkumembers+'/fblogin.asp?caller='+option.url+'?refid=43'+'\',\'\',400,200);"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 25" class="fb"><path style="fill:#3B5998;" d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>Facebook</a></div>');
								document.write('<div class="email"><a href="javascript:;" onclick="WDKConcierge.openform_email()" class="btn"><svg enable-background="new 0 0 512 512" width="20" height="25" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m452 48h-392c-33.084 0-60 26.916-60 60v49.495l220.191 163.781c10.709 7.965 23.259 11.948 35.809 11.948s25.1-3.982 35.809-11.948l220.191-163.781v-49.495c0-33.084-26.916-60-60-60zm20 89.396-204.063 151.784c-7.14 5.311-16.734 5.311-23.873 0l-204.064-151.784v-29.396c0-11.028 8.972-20 20-20h392c11.028 0 20 8.972 20 20zm0 99.703 40-29.752v196.653c0 33.084-26.916 60-60 60h-392c-33.084 0-60-26.916-60-60v-196.653l40 29.752v166.901c0 11.028 8.972 20 20 20h392c11.028 0 20-8.972 20-20z"/></svg>Email</a></div>');
								document.write('</div>');
								document.write('<div id="minilogin_email" class="animated fadeIn" style="display: none;">');
									document.write('<div class="form-floating mb-3">');
										document.write('<input type="text" name="e" id="email" required class="form-control" placeholder="name@example.com">');
										document.write('<label for="floatingInput">Email address</label>');
									document.write('</div>');
									document.write('<div class="form-floating mb-3">');
										document.write('<input type="password" name="p" id="password" required class="form-control" placeholder="password">');
										document.write('<label for="floatingInput">Password</label>');
										document.write('<a href="javascript:;" onclick="WDKConcierge.showpass();" class="showpass"><i class="fa fa-eye" aria-hidden="true"></i></a>');
									document.write('</div>');
									document.write('<div class="mb-3 text-end">');
										document.write('<a href="'+weddingkumembers+'/forgetpassword" style="font-size:13px;">Forgot your password?</a>');
									document.write('</div>');
									document.write('<div class="mb-3">');
										document.write('<input class="btn-primary" type="submit" value="Sign In">');
									document.write('</div>');
									document.write('<div class="mb-3 text-center">');
										document.write('Not a member yet? <a class="text-pink" href="'+weddingkumembers+'/register?caller='+option.url+'?refid=43">Sign Up</a>');
									document.write('</div>');
								document.write('</div>');
							document.write('<input type="hidden" name="caller" id="c" value="'+option.url+'?refid=43">');
						document.write('</form>');
						document.write('</div>');
					}
				}
				document.write('<a class="concierge_close" href="javascript:;" onclick="WDKConcierge.open();">'+ico_pop_close+'</a>');
			document.write('</div>');
		document.write('</div>');
	};
};
