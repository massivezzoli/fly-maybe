var sv,
ScriptsVari = {
	//settings
	settings: {
		$body: $("body"),
		$html: $("html")
	},

	//init
	init: function() {

		//settings
		sv = this.settings;

		//UI actions
		this.bindUIActions();
		//onLoad actions
		this.onLoadActions();
		//scroll actions
		this.scrollActions();
		//resize actions
		this.resizeActions();

	},

	onLoadActions: function() {
		// Loading screen
		$(window).load(function() {

	    });
	},

	bindUIActions: function() {

		var maxDate = $('#datetimepicker1').find("input").data("limit");
		//console.log(maxDate);

		//datepicker
		$('#datetimepicker1').datetimepicker({
			format: "YYYY-MM-DD HH:mm:ss",
			stepping: 10,
			maxDate: maxDate
		});

		if ($("#map").length > 0) {
			ScriptsVari.initMap();

			ScriptsVari.initMap2();
		}
	},

	scrollActions: function() {
		//terminare animazione quando raggiunto il bottom della pagina
		$(window).scroll(function() {

		});

	},

	resizeActions: function() {
		//azioni al resize
		$(window).resize(function(){


		}).resize();
	},

	initMap: function() {
		var map;
    	var $info = $('#info');
    	var $map = $('#map');
    	var resize = function () {
    	    $map.height($map.parent(".map-wrapper").outerHeight());

    	    if (map) {
    	        map.invalidateSize();
    	    }
    	};

    	$(window).on('resize', function () {
    	    resize();
    	});

    	resize();

    	map = L.map('map').setView([44.715514, -112.148438], 4);

    	// Add the Stamen toner tiles as a base layer
    	var baseLayer = new L.StamenTileLayer('toner', {
    	    detectRetina: true
    	}).addTo(map);

    	// Add a layer control
    	var layerControl = L.control.layers().addTo(map);

    	// Add a legend control
    	var legendControl = L.control.legend({
    	    autoAdd: false
    	}).addTo(map);

    	// Create a lookup of airports by code.  NOTE:  this is easy, but non-optimal, particularly with a large dataset
    	// Ideally, the lookup would have already been created on the server or created and imported directly
    	var airportsLookup = L.GeometryUtils.arrayToMap(airports, 'code');

    	console.log(airportsLookup);

    	// Sort flight data in descending order by the number of flights.  This will ensure that thicker lines get displayed
    	// below thinner lines
    	flights = _.sortBy(flights, function (value) {
    	    return -1 * value.Counts;
    	});

    	console.log(flights);

    	// Group flight data by UniqueCarrier code
    	var UniqueCarrierLookup = _.groupBy(flights, function (value) {
    	    return value.UniqueCarrier;
    	});

    	console.log(UniqueCarrierLookup);

    	var maxCountAll = Number(flights[0].Counts);

    	console.log("max count all:"+maxCountAll);

    	// Get the top count of flights
    	flights = _.filter(flights, function (value) {
    	    return value.UniqueCarrier !== 'all';
    	});

    	console.log(flights);

    	var maxCount = Number(flights[0].Counts);

    	console.log("max count:"+maxCount)

    	var count = 0;

    	// Get an airport location.  This function looks up an airport from a provided airport code
    	var getLocation = function (context, locationField, fieldValues, callback) {
    	    var key = fieldValues[0];
    	    var airport = airportsLookup[key];
    	    var location;

    	    if (airport) {
    	        var latlng = new L.LatLng(Number(airport.lat), Number(airport.lon));

    	        location = {
    	            location: latlng,
    	            text: key,
    	            center: latlng
    	        };
    	    }

    	    return location;
    	};


    	var sizeFunction = new L.LinearFunction([1, 16], [253, 48]);

		//console.log(sizeFunction);

    	var options = {
    	    recordsField: null,
    	    locationMode: L.LocationModes.CUSTOM,
    	    fromField: 'Origin',
    	    toField: 'Dest',
    	    codeField: null,
    	    getLocation: getLocation,
    	    getEdge: L.Graph.EDGESTYLE.ARC,
    	    includeLayer: function (record) {
    	        return false;
    	    },
    	    getIndexKey: function (location, record) {
    	        return record.Origin + '_' + record.Dest;
    	    },
    	    setHighlight: function (style) {
    	        style.opacity = 1.0;
    	        return style;
    	    },
    	    unsetHighlight: function (style) {
    	        style.opacity = 0.5;

    	        return style;
    	    },
    	    layerOptions: {
    	        fill: false,
    	        opacity: 0.8,
    	        weight: 0.4,
    	        fillOpacity: 1.0,
    	        distanceToHeight: new L.LinearFunction([0, 20], [1000, 300]),

    	        //The starting and ending percentages (0 - 1) along the line at which to position control points
    	        //controlPointOffsets: new L.Point(0.2, 0.2),

    	        // Q or C for quadratic or cubic bezier
    	        mode: 'C',
    	        markers: {
    	            end: true
    	        },
    	        /*
    	        animatePath: {
    	            property: 'stroke-dashoffset',
    	            duration: '1.5s',
    	            timingFunction: 'ease-in-out'
    	        }
    	        */
    	    },
    	    legendOptions: {
    	        width: 100,
    	        numSegments: 5,
    	        className: 'legend-line'
    	    },
    	    tooltipOptions: {
    	        iconSize: new L.Point(80, 64),
    	        iconAnchor: new L.Point(-5, 64),
    	        className: 'leaflet-div-icon line-legend'
    	    },
    	    displayOptions: {
    	        //
    	        Counts: {
    	            weight: new L.LinearFunction([0, 1], [maxCount, 14]),
    	            color: new L.HSLHueFunction([0, 100], [maxCount, 0], {
    	                outputSaturation: '80%',
    	                outputLuminosity: '50%'
    	            }),
    	            displayName: 'Flights Out of Origin'
    	        }
    	    },
    	    onEachRecord: function (layer, record, location) {
    	        layer.bindPopup($(L.HTMLUtils.buildTable(record)).wrap('<div/>').parent().html());

    	        location.location.animateLine({
    	            duration: Math.random() * 5000 + 500,
    	            easing: L.AnimationUtils.easingFunctions.easeOut
    	        });
    	    }
    	};

    	//console.log(options);

    	var allLayer = new L.Graph(flights, options);

    	console.log(allLayer);

    	map.addLayer(allLayer);

    	var airportsLayer = new L.MarkerDataLayer(airportsLookup, {
    	    recordsField: null,
    	    locationMode: L.LocationModes.LATLNG,
    	    latitudeField: 'lat',
    	    longitudeField: 'lon',
    	    displayOptions: {
    	        'direct_flights': {
    	            color: new L.HSLHueFunction([0, 200], [253, 330], {
    	                outputLuminosity: '60%'
    	            })
    	        },
    	        'code': {
    	            title: function (value) {
    	                return value;
    	            }
    	        }
    	    },
    	    layerOptions: {
    	        fill: false,
    	        stroke: false,
    	        weight: 0,
    	        color: '#A0A0A0'
    	    },
    	    filter: function (record) {
    	        return Number(record.carriers) > 3;
    	    },
    	    setIcon: function (record, options) {
    	        var html = '<div><i class="fa fa-circle-thin"></i><span class="code">' + record.code + '</span></div>';
    	        var $html = $(html);
    	        var $i = $html.find('i');

    	        L.StyleConverter.applySVGStyle($i.get(0), options);

    	        var directFlights = L.Util.getFieldValue(record, 'direct_flights');
    	        var size = sizeFunction.evaluate(directFlights);

    	        $i.width(size);
    	        $i.height(size);
    	        $i.css('font-size', size + 'px');
    	        $i.css('line-height', size + 'px');

    	        var $code = $html.find('.code');

    	        $code.width(size);
    	        $code.height(size);
    	        $code.css('line-height', size + 'px');
    	        $code.css('font-size', size / 3 + 'px');
    	        $code.css('margin-top', -size / 2 + 'px');

    	        var icon = new L.DivIcon({
    	            iconSize: new L.Point(size, size),
    	            iconAnchor: new L.Point(size / 2, size / 2),
    	            className: 'airport-icon',
    	            html: $html.wrap('<div/>').parent().html()
    	        });

    	        return icon;
    	    },
    	    onEachRecord: function (layer, record) {
    	        layer.on('mouseover', function () {
    	            //$info.empty();
    	            //$info.append($(L.HTMLUtils.buildTable(record)).wrap('<div/>').parent().html());

    	            console.log(record);

    	            allLayer.options.includeLayer = function (newRecord) {
    	               return newRecord.Origin === record.code;
    	            };

    	            allLayer.reloadData();
    	        });
    	    }
    	});

    	map.addLayer(airportsLayer);

    	layerControl.addOverlay(airportsLayer, 'Airports');

    	// Iterate through the keys in the UniqueCarrierLookup object.  Each key is an UniqueCarrier code
    	for (var key in UniqueCarrierLookup) {

    	    if (key !== 'all') {
    	        // Create a graph layer that draws lines from the location in the fromField to the location in the toField.
    	        // In this case, we'll use a custom locationMode and implement the getLocation function to lookup the airport
    	        // location from the airport data we have available.
    	        var airportOptions = L.extend(options, {
    	            includeLayer: function (record) {
    	                return record.UniqueCarrier === key;
    	            }
    	        })

    	        var flightLayer = new L.Graph(flights, airportOptions);

    	        layerControl.addOverlay(flightLayer, key);

    	        if (count === 0) {
    	            // Add the layers we want to display to the legend
    	            // Since all group lines use the same weight and color scales, just add the first layer to the legend
    	            legendControl.addLayer(flightLayer);

    	            // Add each layer to the map
    	            //map.addLayer(flightLayer);
    	        }
    	        count++;
    	    }
    	}
	},

	initMap2: function() {
		var map;
        var $info = $('#info-2');
        var $map = $('#map-2');
        var resize = function () {
            $map.height($map.parent(".map-wrapper").outerHeight());

            if (map) {
                map.invalidateSize();
            }
        };

        $(window).on('resize', function () {
            resize();
        });

        resize();

        map = L.map('map-2').setView([44.715514, -112.148438], 4);

        // Add the Stamen toner tiles as a base layer
        var baseLayer = new L.StamenTileLayer('toner', {
            detectRetina: true
        }).addTo(map);

        // Add a layer control
        var layerControl = L.control.layers().addTo(map);

        // Add a legend control
        var legendControl = L.control.legend({
            autoAdd: false
        }).addTo(map);

        // Create a lookup of airports by code.  NOTE:  this is easy, but non-optimal, particularly with a large dataset
        // Ideally, the lookup would have already been created on the server or created and imported directly
        var airportsLookup = L.GeometryUtils.arrayToMap(airports, 'code');

        console.log(airportsLookup);

        // Sort flight data in descending order by the number of flights.  This will ensure that thicker lines get displayed
        // below thinner lines
        flight_delays = _.sortBy(flight_delays, function (value) {
            return -1 * value.ratio;
        });

        console.log(flight_delays);

        // Group flight data by UniqueCarrier code
        var UniqueCarrierLookup = _.groupBy(flight_delays, function (value) {
            return value.UniqueCarrier;
        });

        console.log(UniqueCarrierLookup);

        var maxCountAll = Number(flight_delays[0].ratio);

        console.log("max count all:"+maxCountAll);

        // Get the top count of flights
        flight_delays = _.filter(flight_delays, function (value) {
            return value.UniqueCarrier !== 'all';
        });

        console.log(flight_delays);

        var maxCount = Number(flight_delays[0].ratio);

        console.log("max count:"+maxCount)

        var count = 0;

        // Get an airport location.  This function looks up an airport from a provided airport code
        var getLocation = function (context, locationField, fieldValues, callback) {
            var key = fieldValues[0];
            var airport = airportsLookup[key];
            var location;

            if (airport) {
                var latlng = new L.LatLng(Number(airport.lat), Number(airport.lon));

                location = {
                    location: latlng,
                    text: key,
                    center: latlng
                };
            }

            return location;
        };


        var sizeFunction = new L.LinearFunction([1, 16], [253, 48]);

       // console.log(sizeFunction);

        var options = {
            recordsField: null,
            locationMode: L.LocationModes.CUSTOM,
            fromField: 'Origin',
            toField: 'Dest',
            codeField: null,
            getLocation: getLocation,
            getEdge: L.Graph.EDGESTYLE.ARC,
            includeLayer: function (record) {
                return false;
            },
            getIndexKey: function (location, record) {
                return record.Origin + '_' + record.Dest;
            },
            setHighlight: function (style) {
                style.opacity = 1.0;
                return style;
            },
            unsetHighlight: function (style) {
                style.opacity = 0.5;

                return style;
            },
            layerOptions: {
                fill: false,
                opacity: 0.8,
                weight: 0.4,
                fillOpacity: 1.0,
                distanceToHeight: new L.LinearFunction([0, 20], [1000, 300]),

                //The starting and ending percentages (0 - 1) along the line at which to position control points
                //controlPointOffsets: new L.Point(0.2, 0.2),

                // Q or C for quadratic or cubic bezier
                mode: 'C',
                markers: {
                    end: true
                },
                /*
                animatePath: {
                    property: 'stroke-dashoffset',
                    duration: '1.5s',
                    timingFunction: 'ease-in-out'
                }
                */
            },
            legendOptions: {
                width: 100,
                numSegments: 5,
                className: 'legend-line'
            },
            tooltipOptions: {
                iconSize: new L.Point(80, 64),
                iconAnchor: new L.Point(-5, 64),
                className: 'leaflet-div-icon line-legend'
            },
            displayOptions: {
                //
                ratio: {
                    weight: new L.LinearFunction([0, 1], [0.5, 14]),
                    color: new L.HSLHueFunction([0, 100], [0.5, 0], {
                        outputSaturation: '80%',
                        outputLuminosity: '50%'
                    }),
                    displayName: 'Ratio of delayed flights'
                }
            },
            onEachRecord: function (layer, record, location) {
                layer.bindPopup($(L.HTMLUtils.buildTable(record)).wrap('<div/>').parent().html());

                location.location.animateLine({
                    duration: Math.random() * 5000 + 500,
                    easing: L.AnimationUtils.easingFunctions.easeOut
                });
            }
        };

        //console.log(options);

        var allLayer = new L.Graph(flight_delays, options);

        console.log(allLayer);

        map.addLayer(allLayer);

        var airportsLayer = new L.MarkerDataLayer(airportsLookup, {
            recordsField: null,
            locationMode: L.LocationModes.LATLNG,
            latitudeField: 'lat',
            longitudeField: 'lon',
            displayOptions: {
                'direct_flights': {
                    color: new L.HSLHueFunction([0, 200], [253, 330], {
                        outputLuminosity: '60%'
                    })
                },
                'code': {
                    title: function (value) {
                        return value;
                    }
                }
            },
            layerOptions: {
                fill: false,
                stroke: false,
                weight: 0,
                color: '#A0A0A0'
            },
            filter: function (record) {
                return Number(record.carriers) > 3;
            },
            setIcon: function (record, options) {
                var html = '<div><i class="fa fa-circle-thin"></i><span class="code">' + record.code + '</span></div>';
                var $html = $(html);
                var $i = $html.find('i');

                L.StyleConverter.applySVGStyle($i.get(0), options);

                var directFlights = L.Util.getFieldValue(record, 'direct_flights');
                var size = sizeFunction.evaluate(directFlights);

                $i.width(size);
                $i.height(size);
                $i.css('font-size', size + 'px');
                $i.css('line-height', size + 'px');

                var $code = $html.find('.code');

                $code.width(size);
                $code.height(size);
                $code.css('line-height', size + 'px');
                $code.css('font-size', size / 3 + 'px');
                $code.css('margin-top', -size / 2 + 'px');

                var icon = new L.DivIcon({
                    iconSize: new L.Point(size, size),
                    iconAnchor: new L.Point(size / 2, size / 2),
                    className: 'airport-icon',
                    html: $html.wrap('<div/>').parent().html()
                });

                return icon;
            },
            onEachRecord: function (layer, record) {
                layer.on('mouseover', function () {
                    //$info.empty();
                    //$info.append($(L.HTMLUtils.buildTable(record)).wrap('<div/>').parent().html());

                    console.log(record);

                    allLayer.options.includeLayer = function (newRecord) {
                       return newRecord.Origin === record.code;
                    };

                    allLayer.reloadData();
                });
            }
        });

        map.addLayer(airportsLayer);

        layerControl.addOverlay(airportsLayer, 'Airports');

        // Iterate through the keys in the UniqueCarrierLookup object.  Each key is an UniqueCarrier code
        for (var key in UniqueCarrierLookup) {

            if (key !== 'all') {
                // Create a graph layer that draws lines from the location in the fromField to the location in the toField.
                // In this case, we'll use a custom locationMode and implement the getLocation function to lookup the airport
                // location from the airport data we have available.
                var airportOptions = L.extend(options, {
                    includeLayer: function (record) {
                        return record.UniqueCarrier === key;
                    }
                })

                var flightLayer = new L.Graph(flight_delays, airportOptions);

                layerControl.addOverlay(flightLayer, key);

                if (count === 0) {
                    // Add the layers we want to display to the legend
                    // Since all group lines use the same weight and color scales, just add the first layer to the legend
                    legendControl.addLayer(flightLayer);

                    // Add each layer to the map
                    //map.addLayer(flightLayer);
                }
                count++;
            }
        }

	}
}
