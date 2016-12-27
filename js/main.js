AFRAME.registerComponent('highlight', {
    init: function () {
        var color = this.el.attributes.color.value;
        var scale = this.el.attributes.scale.value;
        var highlightColor = this.data.color;
        var highlightScale = this.data.scale;
        
        this.el.addEventListener('mouseenter', function () {
            this.setAttribute('color', highlightColor);
            this.setAttribute('scale', highlightScale);
        });
        this.el.addEventListener('mouseleave', function () {
            this.setAttribute('color', color);
            this.setAttribute('scale', scale);
        });
    }
});