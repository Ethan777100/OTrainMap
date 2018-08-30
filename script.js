let map;


const trilliumLineOutline = [
    {lng: -75.6591967, lat: 45.3597146},
    {lng: -75.659709, lat: 45.3605909},
    {lng: -75.6603152, lat: 45.3616407},
    {lng: -75.6611735, lat: 45.3631351},
    {lng: -75.662072, lat: 45.3646917},
    {lng: -75.6626675, lat: 45.3657301},
    {lng: -75.6628177, lat: 45.365977},
    {lng: -75.6629464, lat: 45.366156},
    {lng: -75.6630993, lat: 45.3663463},
    {lng: -75.6633461, lat: 45.3666139},
    {lng: -75.6636357, lat: 45.3669022},
    {lng: -75.6638825, lat: 45.367134},
    {lng: -75.6650975, lat: 45.3681535},
    {lng: -75.6656367, lat: 45.3685812},
    {lng: -75.6660149, lat: 45.3688827},
    {lng: -75.6665567, lat: 45.3692728},
    {lng: -75.6669107, lat: 45.3694876},
    {lng: -75.6674471, lat: 45.3697928},
    {lng: -75.6678683, lat: 45.3700114},
    {lng: -75.6684288, lat: 45.3702658},
    {lng: -75.6709018, lat: 45.3712607},
    {lng: -75.6740776, lat: 45.3725345},
    {lng: -75.6772748, lat: 45.373812},
    {lng: -75.6803861, lat: 45.3750668},
    {lng: -75.6841841, lat: 45.3765779},
    {lng: -75.6863031, lat: 45.3774257},
    {lng: -75.6885079, lat: 45.3783112},
    {lng: -75.6915495, lat: 45.3795321},
    {lng: -75.692558, lat: 45.3799353},
    {lng: -75.6929442, lat: 45.3800973},
    {lng: -75.6933197, lat: 45.3802876},
    {lng: -75.6936041, lat: 45.3804628},
    {lng: -75.6938803, lat: 45.3806606},
    {lng: -75.6941164, lat: 45.3808678},
    {lng: -75.6943899, lat: 45.3811542},
    {lng: -75.6945938, lat: 45.3814293},
    {lng: -75.6951544, lat: 45.3822733},
    {lng: -75.6954923, lat: 45.3827593},
    {lng: -75.6956452, lat: 45.38304},
    {lng: -75.6958115, lat: 45.3833923},
    {lng: -75.6959161, lat: 45.3837521},
    {lng: -75.6959805, lat: 45.3842231},
    {lng: -75.6959805, lat: 45.3845622},
    {lng: -75.6959376, lat: 45.385295},
    {lng: -75.6958571, lat: 45.3862086},
    {lng: -75.6958249, lat: 45.3865477},
    {lng: -75.6958544, lat: 45.3868736},
    {lng: -75.6959295, lat: 45.3872729},
    {lng: -75.696018, lat: 45.3876158},
    {lng: -75.6962165, lat: 45.3880961},
    {lng: -75.6963962, lat: 45.3884653},
    {lng: -75.6965974, lat: 45.388795},
    {lng: -75.6967637, lat: 45.3890229},
    {lng: -75.6969595, lat: 45.3892565},
    {lng: -75.6972814, lat: 45.3896182},
    {lng: -75.6976354, lat: 45.3899139},
    {lng: -75.6981182, lat: 45.390268},
    {lng: -75.6986707, lat: 45.390592},
    {lng: -75.6990623, lat: 45.3907822},
    {lng: -75.699572, lat: 45.39098},
    {lng: -75.7011464, lat: 45.3915206},
    {lng: -75.7017472, lat: 45.3917278},
    {lng: -75.7024124, lat: 45.3919557},
    {lng: -75.7033083, lat: 45.3922722},
    {lng: -75.7035846, lat: 45.3924003},
    {lng: -75.7044509, lat: 45.3928165},
    {lng: -75.7057518, lat: 45.3934343},
    {lng: -75.706028, lat: 45.3936095},
    {lng: -75.7065189, lat: 45.3939297},
    {lng: -75.7068273, lat: 45.3941557},
    {lng: -75.7071009, lat: 45.3943723},
    {lng: -75.7073423, lat: 45.3945757},
    {lng: -75.7075918, lat: 45.394798},
    {lng: -75.7078788, lat: 45.3950786},
    {lng: -75.7080907, lat: 45.3953084},
    {lng: -75.7082838, lat: 45.3955307},
    {lng: -75.7084447, lat: 45.3957397},
    {lng: -75.7086164, lat: 45.3959752},
    {lng: -75.7088417, lat: 45.396301},
    {lng: -75.7091448, lat: 45.3968152},
    {lng: -75.709523, lat: 45.3974009},
    {lng: -75.7102177, lat: 45.398578},
    {lng: -75.7107809, lat: 45.3995009},
    {lng: -75.7110545, lat: 45.3999548},
    {lng: -75.7115936, lat: 45.4008531},
    {lng: -75.7121301, lat: 45.4017439},
    {lng: -75.7123232, lat: 45.4020396},
    {lng: -75.7127041, lat: 45.4025424},
    {lng: -75.7130876, lat: 45.402936},
    {lng: -75.7135034, lat: 45.403339},
    {lng: -75.7138467, lat: 45.4036271},
    {lng: -75.7143778, lat: 45.4040339},
    {lng: -75.7149544, lat: 45.4044426},
    {lng: -75.7161453, lat: 45.4053088},
    {lng: -75.7173362, lat: 45.4060715},
    {lng: -75.7181033, lat: 45.4065498},
    {lng: -75.7184869, lat: 45.4068172},
    {lng: -75.7190529, lat: 45.4072333},
    {lng: -75.7195598, lat: 45.407642},
    {lng: -75.7199863, lat: 45.407996},
    {lng: -75.7202384, lat: 45.4081805},
    {lng: -75.7206756, lat: 45.4084178},
    {lng: -75.7209653, lat: 45.4085741},
    {lng: -75.7212281, lat: 45.408736},
    {lng: -75.7216331, lat: 45.4090166}
];

/**
 * Converts a polyline path to a polygon
 * @param path
 * @param width
 * @returns {*[]}
 */
function convertLineToPolygon(path, width) {
    const polygonRightPoints = [];
    const polygonLeftPoints = [];

    for (let i = 0; i < trilliumLineOutline.length; i++) {
        const firstCenter = new google.maps.LatLng(path[i]);
        const secondCenter = new google.maps.LatLng(path[i + 1]);

        const segmentHeading = google.maps.geometry.spherical.computeHeading(firstCenter, secondCenter);

        const leftPoint = google.maps.geometry.spherical.computeOffset(firstCenter, width, segmentHeading + 90);
        const rightPoint = google.maps.geometry.spherical.computeOffset(firstCenter, width, segmentHeading - 90);

        polygonLeftPoints.push(leftPoint);
        polygonRightPoints.push(rightPoint);
    }

    return polygonLeftPoints.concat(polygonRightPoints.reverse());
}

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 45.416667, lng: -75.683333},
        zoom: 15
    });

    const trilliumLinePolygon = new google.maps.Polygon({
        paths: convertLineToPolygon(trilliumLineOutline, 18),
        geodesic: true,
        strokeColor: '#76BE43',
        fillColor: '#76BE43',
        strokeOpacity: 1.0,
        fillOpacity: 1.0,
        strokeWeight: 0
    });
    trilliumLinePolygon.setMap(map);

    const trilliumLinePolyline = new google.maps.Polyline({
        path: trilliumLineOutline,
        geodesic: true,
        strokeColor: '#76BE43',
        strokeWeight: 10
    });
    trilliumLinePolyline.setMap(map);

    map.addListener('zoom_changed', function () {
        console.log("Zoom: " + map.getZoom());

        if (map.getZoom() > 15) {
            trilliumLinePolyline.setMap(null);
            trilliumLinePolygon.setMap(map);
        } else {
            trilliumLinePolyline.setMap(map);
            trilliumLinePolygon.setMap(null);
        }
    });
}