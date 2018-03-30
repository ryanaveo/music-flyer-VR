AFRAME.registerComponent('href', {
  schema: {default: ''},

  init: function () {
    var url = this.data;
    this.el.addEventListener('click', function () {
      window.location.href = url;
    });
  }
});
