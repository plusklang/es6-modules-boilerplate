
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
(function () {
    'use strict';

    class Test {
        constructor(name) {
            this._name = name;
        }

        get name(){
            return this._name;
        }
    }

    window.console.log('Hello world');

    let tester = new Test('Peter');

    window.console.log(tester.name);

}());
//# sourceMappingURL=main.js.map
