var currentload=false;
var loadingbars='<div class="loadingspin"><div class="spin"><ul><li><i class="fa fa-spinner fa-pulse"></i>&nbsp;Loading...</li></ul></div></div>';

function getStoreSubCategory(catid){
  $('#popup-filter-storesubcategory').load(weddingkuhome+'/ajax/popup-storecategory.asp?catid=/wedding-package'+catid,function(){
      $('#popup-filter-storesubcategory').select2('destroy');
      $('#popup-filter-storesubcategory').select2({minimumResultsForSearch: 10});
			$('.singleSelectGrouped').on('select2:open',function(){$('.filter-location .sub-menu').hide()});
  });
}
function getHoneymoonPOI(catid){
  $('#popup-filter-honeymoonpoi').load(weddingkuhome+'/ajax/popup-honeymoonpoi.asp?id='+catid,function(){
      $('#popup-filter-honeymoonpoi').select2('destroy');
      $('#popup-filter-honeymoonpoi').select2({minimumResultsForSearch: 10});
			$('.singleSelectGrouped').on('select2:open',function(){$('.filter-location .sub-menu').hide()});
  });
}
function openSearchMore(id){
	if (id == "home"){
		$('#header-searchresult #search-more').hide();
		$('#header-searchresult #search-home').show();
	} else {
		$('#header-searchresult #search-home').hide();
		$.ajax({
			type:'POST',
			url:  weddingkuhome + '/ajax/popupsearch.asp',
			data: 'term='+encodeURIComponent(id),
			success:function(response){
				$('#header-searchresult #search-more').html(response);
				$('.singleSelectGrouped').select2();
				$('.search-back-arrow a').click(function(){
					openSearchMore('home');
				});
				if (id == "vendor"){
					$('#frm-filter-popup-vendor').submit(function(e) {
						e.preventDefault();
						vURL = "",strCat="",strCity = "";
						var data = $("#frm-filter-popup-vendor select").serializeArray();
						$.each(data, function(i, field){
							if (field.name == "popup-filter-vendorcity" && field.value != "" && field.value != "0"){
								strCity = field.value;
							}
							if (field.name == "popup-filter-vendorcategory" && field.value != "" && field.value != "0"){
								strCat = field.value;
							}
							if (field.name == "popup-filter-subcategory" && field.value != "" && field.value != "0"){
								strCat = field.value;
							}
						});
						if (strCat!="" && strCat!="0")
							vURL+='/'+strCat;
						if (strCity!="" && strCity!="0")
							vURL+='/'+strCity;
						window.location.href = weddingkuhome+'/wedding-vendors'+vURL;
					});
				} else if (id == "store"){
					$('#frm-filter-popup-store').submit(function(e) {
						e.preventDefault();
						var strCat="",strCity = "";
						var data = $("#frm-filter-popup-store select").serializeArray();
						$.each(data, function(i, field){
							if (field.name == "popup-filter-storezona" && field.value != "" && field.value != "0"){
								strCity = field.value;
							}
							if (field.name == "popup-filter-storecategory" && field.value != "" && field.value != "0"){
								strCat = field.value;
							}
							if (field.name == "popup-filter-storesubcategory" && field.value != "" && field.value != "0"){
								strCat = field.value.replace('https://store.weddingku.com/wedding-package','');
							}
						});
						window.location.href = weddingkustore+'/wedding-package'+strCat+'?zonaid='+strCity;
					});
				} else if (id == "honeymoon"){
					$('#frm-filter-popup-honeymoon').submit(function(e) {
						e.preventDefault();
						var strCat="",strCity = "";
						var data = $("#frm-filter-popup-honeymoon select").serializeArray();
						$.each(data, function(i, field){
							if (field.name == "popup-filter-honeymoonzona" && field.value != "" && field.value != "0"){
								strCity = field.value;
							}
							if (field.name == "popup-filter-honeymoonpoi" && field.value != "" && field.value != "0"){
								strCat = field.value;
							}
						});
						window.location.href = weddingkuhoneymoon+strCat;
					});
				}
			}
		});
		$('#header-searchresult #search-more').show();
	}
}
function loadSearchData(term){
	if(term.length < 3){
		currentload=true;
	}else{
		currentload=false;
	}
	if(!currentload){
		currentload=true;
		$('#search-result').html(loadingbars);
    var httphost=weddingkuhome;
    if(window.location.host=="weddingku.com")
      httphost=window.location.protocol + "//" + window.location.host;
		$.ajax({
			type:'GET',
			url: httphost + '/ajax/searchlist.asp',
			data: 'term='+encodeURIComponent(term),
			success:function(response){
				if(response != ""){
					newItemHtml = '<h4 class="mb-4">Hasil Pencarianmu</h4>';
					newItemHtml += response;
					$('#search-result').html(newItemHtml);
					$('#header-searchresult').show();
				}else{
					newItemHtml = '<ul>';
					newItemHtml += '<li class="empty">No search results for "'+term+'"</li>';
					newItemHtml += '</ul><hr>';
					$('#search-result').html(newItemHtml);
					$('#header-searchresult').show();
				}
				currentload=false;
				loadLazy();
				$('#loading').html('');
				$('#loading').hide();
			}
		});
	}
}
function makeDelay(ms) {
    var timer = 0;
    return function(callback){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
};
$.fn.delayKeyup = function(callback, ms){
     var timer = 0;
     var el = $(this);
     $(this).keyup(function(){
         clearTimeout (timer);
         timer = setTimeout(function(){
             callback(el)
                 }, ms);
     });
     return $(this);
 };

function scrollSearch(){
	$window = $(window);
	if ($window.width() <= 768){
		if ($window.scrollTop() > 50) {
			$("#header-left").hide();
			$("#header-center").show();
		} else {
			$("#header-left").show();
			$("#header-center").hide();
		}
	} else {
		$("#header-left").show();
	}
}

function opensearch(){
	$("#header-left").hide();
	$("#header-center").show();
	$("#header-formsearch #q").focus();
}
/*function submitsearch(){
	var strKey = $("#header-formsearch #q").val();
	if (strKey == "" || strKey.length < 3) {
		$("#header-formsearch #q").focus();
	} else {
		window.location.href = weddingkuhome+"/search?q="+strKey
	}
}*/

function formsearchopen(){
	$("#header-searchresult").show();
	$('#header-searchresult').css('min-height', wHeight+'px');
	$('#header-searchresult #search-home').show();
	$('#header-searchresult #search-more').hide();
	$('#header-formsearch-close').show();
	$('#header-formsearch-open').hide();
}
function formsearchclose(){
	$("#header-searchresult").hide();
	$('#header-formsearch-close').hide();
	$('#header-formsearch-open').show();
}


$(document).ready(function(){
	devDetect();
	$window = $(window);
	var sHeight = $window.height();
	if ($window.width() <= 768){
		wHeight = $window.height()-40;
		$window.bind('scroll', scrollSearch);
	} else {
		if (sHeight > 550)
			wHeight = 550;
		else
			wHeight = $window.height()-130;
	}
	$('#header-searchresult #search-close a').click(function(){
		$('#header-searchresult').toggle();
		if ( $("#header-searchresult").is(':visible'))
			$("#header-searchresult").hide();
	});
	$("#header-formsearch #q").focus(function() {
	 	formsearchopen();
	});

	$("#header-formsearch-open, #header-formsearch-open-slide").click(function() {
		$("#header-formsearch #q").focus();
	});
	$("#header-formsearch-close").click(function() {
		formsearchclose();
	});

	$('#header-formsearch #q').delayKeyup(function(el){
		term=el.val();
		if(term.length < 3){
			$('#search-result').html('');
		}else {
			loadSearchData(term);
		}
	},1000);
	$("#header-m-search a").click(function() {
		 opensearch();
	});
});
