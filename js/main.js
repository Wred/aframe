AFRAME.registerComponent('highlight', {
    init: function () {
        var color = this.el.attributes.color.value;
        var highlight = this.data.color;
        
        this.el.addEventListener('mouseenter', function () {
            this.setAttribute('color', highlight);
        });
        this.el.addEventListener('mouseleave', function () {
            this.setAttribute('color', color);
        });
    }
});