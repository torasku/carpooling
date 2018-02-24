var marker;
var marker2;

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: {lat: 59.188161, lng: 9.612769}
    });

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {lat: 58.344702, lng: 8.594867}
    });
    marker2 = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {lat: 59.913869, lng: 10.752245}
    });
    marker3 = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {lat: 58.969976, lng: 5.733107}
    });

    //marker.addListener('click', toggleBounce);
    marker.addListener('click', function(){
        browseModal.style.display = "block";
    });
    marker2.addListener('click', function(){
        browseModal.style.display = "block";
    });
    marker3.addListener('click', function(){
        browseModal.style.display = "block";
    });
}

/*function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}*/



