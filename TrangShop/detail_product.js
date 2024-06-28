// document.getElementById("click_review").addEventListener("click", function(){
//     document.getElementById("reviews-product").style.display = "block";
//     document.getElementById('description-content').style.display = "none"; 
//     document.getElementById("description2").style.visibility = "visible"; 
//     document.getElementById("description").style.visibility = "hidden";
// })

// document.getElementById('click_description').addEventListener("click", function(){
//     document.getElementById("reviews-product").style.display = "none";
//     document.getElementById('description-content').style.display = "block"; 
//     document.getElementById("description").style.visibility = "visible";
//     document.getElementById("description2").style.visibility = "hidden";
// })

$(document).ready(function() {
    $('#click_description').click(function() {
        $('#description-content').css('display', 'block');

        $('#reviews-product').css('display', 'none');
        $('#description').css('display', 'block');

        $('#description2').css('display', 'none');
    });
    $('#click_review').click(function(){
        $('#reviews-product').css('display', 'block'); 
        $('#description-content').css('display', 'none');

        $('#description2').css('display', 'block');
        $('#description').css('display', 'none');
    });
});


$(document).ready(function() {
    $('#zoom-button').click(function() {
        var activeImageSrc = $('#carousel-simple .carousel-item.active img').attr('src');
        $('#zoomedImage').attr('src', activeImageSrc);
        $('#imageModal').modal('show');
    });
    $('#prev1').click(function(){
        var activeImageSrc = $('#carousel-simple .carousel-item.active img').attr('src');
        $('#zoomedImage').attr('src', activeImageSrc);
        $('#imageModal').modal('show');
    })
});


$(document).ready(function() {
    var totalImages = $('.zoom-image').length; // Get total number of images
    var currentIndex = 0; // Current index of the displayed image
    
    // Function to update modal content based on clicked image
    $('.zoom-image').on('click', function() {
        currentIndex = $(this).index('.zoom-image'); // Get index of clicked image
        updateModalContent(currentIndex); // Update modal content
        $('#imageModal').modal('show'); // Show modal
    });

    // Function to update modal content based on index
    function updateModalContent(index) {
        var imgSrc = $('.zoom-image').eq(index).attr('src'); // Get image source
        var imgCaption = $('.zoom-image').eq(index).data('caption'); // Get image caption
        $('#zoomedImage').attr('src', imgSrc); // Set modal image source
        $('#imageModalLabel').text(imgCaption); // Set modal title/caption
        updateImageCounter(); // Update image counter
    }

    // Function to update image counter
    function updateImageCounter() {
        var text = (currentIndex + 1) + ' / ' + totalImages; // Display current index and total images
        $('#imageCounter').text(text);
    }

    // Handle next image button click
    $('#nextImage').click(function() {
        currentIndex = (currentIndex + 1) % totalImages; // Increment index (loop back if at end)
        updateModalContent(currentIndex); // Update modal content
    });

    // Handle previous image button click
    $('#prevImage').click(function() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Decrement index (loop back if at start)
        updateModalContent(currentIndex); // Update modal content
    });
});