; (function (window) {

    var dismissibleItem = function (el, type, value) {

        var html = '<span>' + value + ' <button type="button" class="close">X</button></span>';

        el.removeAttribute('data-component');
        el.removeAttribute('data-value');
        el.removeAttribute('data-type');

        el.classList.add('dismissible', 'dismissible-' + type);

        el.innerHTML = html;

        el.querySelector('.close').addEventListener('click', function (event) {
            var height = el.offsetHeight,
                opacity = 1,
                timeout = null;
            function reduceHeight() {
                height -= 2;
                el.setAttribute('style', 'height: ' + height + 'px; opacity: ' + opacity);
                if (height <= 0) {
                    window.clearInterval(timeout);
                    timeout = null;
                    el.remove();
                }
            }
            function fade() {
                opacity -= .1;
                el.setAttribute('style', 'opacity: ' + opacity);
                if (opacity <= 0) {
                    window.clearInterval(timeout);
                    timeout = window.setInterval(reduceHeight, 1);
                }
            }
            timeout = window.setInterval(fade, 25);
        });

    };

    var dismissibles = Array.prototype.slice.call(document.querySelectorAll('[data-component="dismissible-item"]'));
    if (dismissibles.length) {
        for (var i = 0; i < dismissibles.length; i++) {
            var type = dismissibles[i].getAttribute('data-type'),
                value = dismissibles[i].getAttribute('data-value');
            new dismissibleItem(dismissibles[i], type, value)
        }
    }

})(window);