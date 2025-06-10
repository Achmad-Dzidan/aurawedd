function setScroll(){
    // flicking = new Flicking("#ccateVendor", {
    //     moveType: "freeScroll",
    //     bound: true
    // });

    $('#categoryVendorContainer').slick({
        infinite: false,
        slidesToShow: 12,
        slidesToScroll: 12,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint :480,
                settings:{
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }   
        ]
        
      });
}

function setScroll2(){
    $('#cityVendorContainer').slick({
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        variableWidth: true,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint :480,
                settings:{
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },{
                breakpoint :912,
                settings:{
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    variableWidth: true
                }
            }  
        ]
        
      });
}

function destroyScroll2(){
    //flicking.destroy();
    $('#cityVendorContainer').slick('unslick');
}

function destroyScroll(){
    //flicking.destroy();
    $('#categoryVendorContainer').slick('unslick');
}

function loadCategoryInContainer(id){
    console.log(id);
    $.ajax({
        type	: "POST",
        cache	: false,
        dataType: 'json',
        url		: weddingkuhome+'/ajax/getCategoryVenue.asp?id='+id,
        success: function(data) {
          if (data != null) {
            if (data.responsestatus.code == "00") {
                var venueCount = data.cities[0].venue_string;
                var vendorCount = data.cities[0].vendor_string;
                var itemCategoryVenueHtml = '';
                var itemCategoryVendorHtml = '';
                $('#vendorCount').text(vendorCount+ ' Vendor')
                if (venueCount == 0) {
                    $('#venueCount').text('Wedding Venues')
                }else{
                    $('#venueCount').text(venueCount+ ' Wedding Venues')
                }

                $('#categoryVenueContainer').empty()
                $('#categoryVendorContainer').empty()

                for (var i = 0; i < data.cities[0].categories.length; i++) {

                    console.log(data.cities[0].categories[i].name);
                   

                    if (data.cities[0].categories[i].type == 1){
                        itemCategoryVenueHtml = itemCategoryVenueHtml + '<div class="category-content">';
                        itemCategoryVenueHtml = itemCategoryVenueHtml + '<img src="'+data.cities[0].categories[i].icon_svg.src+'" onclick="venueSelect2(1,\''+data.cities[0].categories[i].url+'\',\''+data.cities[0].categories[i].name+'\')">';
                        itemCategoryVenueHtml = itemCategoryVenueHtml + '<p class="headerVenue">'+data.cities[0].categories[i].name+'</p>';
                        itemCategoryVenueHtml = itemCategoryVenueHtml + '</div>';
                      
                    }else{
                        itemCategoryVendorHtml = itemCategoryVendorHtml + '<div class="category-content">';
                        itemCategoryVendorHtml = itemCategoryVendorHtml + '<img src="'+data.cities[0].categories[i].icon_svg.src+'" onclick="venueSelect2(2,\''+data.cities[0].categories[i].url+'\',\''+data.cities[0].categories[i].name+'\')">';
                        itemCategoryVendorHtml = itemCategoryVendorHtml + '<p class="headerVenue">'+data.cities[0].categories[i].name+'</p>';
                        itemCategoryVendorHtml = itemCategoryVendorHtml + '</div>';
                     
                    }
                }
                $("#categoryVenueContainer").append(itemCategoryVenueHtml);
                $("#categoryVendorContainer").append(itemCategoryVendorHtml);

                setScroll();
            }
          }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert('error')
        }
    });
}

$(document).ready(function(){
    setScroll2();
    var viewportWidth = jQuery(window).width();

    if (viewportWidth < 481) {
       destroyScroll2();
    } else {
        // Do some thing
    }
   //loadTest(1);
});