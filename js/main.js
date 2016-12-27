  AFRAME.registerComponent('hightlight', {
    schema: {
      color: {default: 'red'}
    },
    init: function () {
      var data = this.data;
      this.el.addEventListener('mouseenter', function () {
        this.setAttribute('color', data.color);
      });
      this.el.addEventListener('mouseleave', function () {
        this.setAttribute('color', 'green');
      });
    }
  });