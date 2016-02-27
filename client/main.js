Meteor.startup(function () {
  GoogleMaps.load();
});

Template.body.helpers({
  studyMapOptions: function () {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(39.952048, -75.193718),
        zoom: 16
      };
    }
  }
});

Template.roomlist.helpers({
  rooms: function () {
    return Rooms.find({});
  }
});
