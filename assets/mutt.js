$(document).ready(function() { 
    


    // var myElement = document.getElementById('myCarousel');
    // var mc = new Hammer(myElement);
    
    // $("#myCarousel").on( "swipeleft", function( event ) 
    // {
    //   $(this).carousel('prev');
    //   console.log("Here");
    // } );

    // $("#myCarousel").on( "swiperight", function( event ) 
    // {
    //   $(this).carousel('next');
    //   console.log("Here")
    // } );

    //  $(".carousel-control-prev-icon").on( "click", function( event ) 
    // {
    //   $("#myCarousel").carousel('prev');
    //   console.log("prev")
    // } );

    // $(".carousel-control-next-icon").on( "click", function( event ) 
    // {
    //   $("#myCarousel").carousel('next');
    //   console.log("next")
    // } );

    
    // $('#myCarousel').hammer().on('swipeleft', function(){
    //       $(this).carousel('next'); 
    //   })
    //   $('#myCarousel').hammer().on('swiperight', function(){
    //       $(this).carousel('prev'); 
    //   })

    // Hammer(myElement).on("swipeleft", function(){
    //     $(this).carousel('next');
    //     console.log("Swiped");
    //     })

    //var hammer = new Hammer();

    // hammer($(myElement)).on('swiperight', function(){
    //           $(this).carousel('next'); 
    //     //   })
    // });



    // var petUrl = "http://api.petfinder.com/pet.find";
    // var petApiKey = "aaf7ea34460505b8e7841f0512aae7a4"
    // $.ajax({
    //     url: petUrl,
    //     jsonp: "callback",
    //     dataType: "jsonp",
    //     data: {
    //         key: petApiKey,
    //         animal: "dog",
    //         "location": "32812",
    //         output: "basic",
    //         format: "json"
    //     }
    // }).then(response=> {
    //     var apiKey = "aaf7ea34460505b8e7841f0512aae7a4"
    //     $.ajax({
    //         url: petUrl,
    //         jsonp: "callback",
    //         dataType: "jsonp",
    //         data: {
    //             key: petApiKey,
    //             animal: "dog",
    //             "location": "32812",
    //             output: "basic",
    //             format: "json"
    //         }
    //     }).then(response=> {
    //         console.log(response);
    //         var dogName = response.petfinder.pets.pet[1].name.$t;
    //         var dogAge = response.petfinder.pets.pet[1].age.$t;
    //         var dogSex = response.petfinder.pets.pet[1].sex.$t;
    //         var dogSize = response.petfinder.pets.pet[1].size.$t;
    //         var dogDescription = response.petfinder.pets.pet[1].description.$t;
    //         var largePic = response.petfinder.pets.pet[1].media.photos.photo[2].$t;
    //         var photoGallery = response.petfinder.pets.pet[1].media.photos.photo;
    //         // $("#dogModalPic").attr("src", largePic);
    //         console.log(response.petfinder.pets.pet[1].media.photos.photo)
    //         photoGallery.forEach(function(i){
    //             // console.log(i);
    //             if (i["@size"] == "x"){
    //                 console.log(i.$t)
    //             }
    //         })
    //         $("#dogModalPic").addClass("img-responsive");
    //         $("#modalTitle").text(dogName);
    //         $("#description").html(dogDescription);
    //         $("#details").append($("<p>").addClass("col-md-4").text("Age: " + dogAge));
    //         $("#details").append($("<p>").addClass("col-md-4").text("Size: " + dogSize));
    //         $("#details").append($("<p>").addClass("col-md-4").text("Sex: " + dogSex));
    //     });
    // });
    
    // var searchstring = "medium dog toys";
    // var ebayURL = "http://svcs.ebay.com/services/search/FindingService/v1";
    //   ebayURL += "?OPERATION-NAME=findCompletedItems";
    //   ebayURL += "&SERVICE-VERSION=1.13.0";
    //   ebayURL += "&SERVICE-NAME=FindingService";
    //   ebayURL += "&SECURITY-APPNAME=TimothyB-MuttMatc-PRD-8ed499e41-2cbab10d";
    //   ebayURL += "&GLOBAL-ID=EBAY-US";
    //   ebayURL += "&RESPONSE-DATA-FORMAT=JSON";
    //   ebayURL += "&REST-PAYLOAD";
    //   ebayURL += "&paginationInput.pageNumber=1";
    //   ebayURL += "&paginationInput.entriesPerPage=10";
    //   ebayURL += "&keywords=" + searchstring;
    //   ebayURL += "&sortOrder=StartTimeNewest";
    
    //   $.ajax({
    //     type: "GET",
    //     url: ebayURL,
    //     dataType: "jsonp",
    //     // success: function(res){
    //     //   console.log(res);
          
    //     // }
    //   }).then(response => {
    //       console.log(response)
    //       for (i = 0; i < 3; i++){
    //         ebayItemImg = response.findCompletedItemsResponse[0].searchResult[0].item[i].galleryURL[0];
    //         ebayItemLink = response.findCompletedItemsResponse[0].searchResult[0].item[i].viewItemURL[0];
    //         var productLink = $("<a>");
    //         var productImg = $("<img>");
    //         productLink.attr("href", ebayItemLink)
    //         productImg.attr("src", ebayItemImg);
    //         productLink.html(productImg);
    
    //         $("#products").append(productLink)
    //     }
    //   });
    //   ebayURL += "&sortOrder=StartTimeNewest";
        // var myElement = document.getElementById(‘myCarousel’);
        // var mc = new Hammer(myElement);
        
    // $("#dog").on("click", function(){
    //     $(this).attr("src", "assets/Dog2.jpeg");
    // });      

    //  var flkty = new Flickity('.carousel-cell');

    // flkty.on( 'staticClick', function( event, pointer) {
    //   if ( !cellElement ) {
    //     return;
    //   }
    //   flkty.classList.toggle('is-expanded');
    //   flkty.reposition();
    // });
    // var array = [5, 6, 7, 8, 9];
    //  var petUrl = "http://api.petfinder.com/pet.find";
    //  var petApiKey = "aaf7ea34460505b8e7841f0512aae7a4"
    // $.ajax({
    //     url: petUrl,
    //         jsonp: "callback",
    //         dataType: "jsonp",
    //         data: {
    //             key: petApiKey,
    //             animal: "dog",
    //             "location": "32812",
    //             output: "basic",
    //             format: "json"
    //         }
    // }).then(response => {
    //     array.push(11, 12, 13);
    //     return array;
    // }).then(value => {
    //     console.log(value);
    // })
    // $('.button-group').on( 'click', '.button', function() {
    //     var index = $(this).index();
    //     $('.carousel').flickity( 'select', index );
    //   });
// $("carousel-cell ").on("move", function (){
//     var index = $(this).index();
//     $(this).toggleClass('is-expanded');
// })


// $('.carousel').flickity().on( 'dragEnd.flickity', function() {
//     $('.is-selected').toggleClass('is-expanded');
//   });


//   $('.carousel').flickity().on('settle', function(){
//     $('.is-selected').toggleClass('is')
//   });


// $('#myCarousel').on( 'settle', function( event, pointer, cellElement, cellIndex ) {
//     console.log("Here");
//     if ( !cellElement ) {
//       return;
//     }
//     $( cellElement ).toggleClass('is-expanded');
//     console.log('HERE');
//     $carousel.flickity('reposition');
//   });
  



// $('.carousel').on( 'settle.flickity', function( event, index, cellElement, cellIndex) {
    
//     console.log( 'Flickity settled at ' + index );
//     //console.log(cellElement);
//     if( !cellElement) {
//         return ;
//     }
//     //console.log(cellElement);
//     $(cellElement).toggleClass('is-expanded');
//     ('.carousel').flickity('reposition');

//   });


  // external js: flickity.pkgd.js

// var $carousel = $('.carousel').flickity();

// $carousel.on( 'settle', function( event, pointer, cellElement, cellIndex ) {
//   console.log(cellElement);
//     if ( !cellElement ) {
//     return;
//   }
//   $( cellElement ).toggleClass('is-expanded');
//   $carousel.flickity('reposition');
// });


$('.carousel').on( 'settle.flickity', function( event, index ) {
    //console.log(event);
    console.log(index);
    
    //if is selected expand
    //otherwise not-expand class

    
    //$(".carousel-cell").addClass('active');
    // console.log($(this).siblings());
    // $('.carousel-cell').toggleClass('not-expand');
    //$("#" + index).toggleClass('is-expanded');
    // var newIndex = index - 1;
    // $("#"+ index).toggleClass('is-expanded');
    // console.log( 'Flickity settled at ' + index );
    // $("#"+ newIndex).toggleClass('not-expand');
    // $('.carousel').flickity('reposition');
    // console.log(index-1);
    // $("#" + index - 1 ).toggleClass('not-expand');
  });




  

// if($('.carousel-cell').attr("aria-selected") == true){
//     console.log("here");
// }
// console.log($('.is-selected'));

// $('.is-selected').toggleClass('is-expanded');
console.log($('.carousel-cell').attr("aria-selected"));
// $(".is-selected").toggleClass('is-expanded');

    // $(".carousel-cell").on("dragEnd", function(){
    //     $(this).toggleClass('is-expanded');
    // })
    
    //if on the current element
    //expand (this) cell


    
    
}); 