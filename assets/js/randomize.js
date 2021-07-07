function isvisible(obj) {
  return obj.offsetWidth > 0 && obj.offsetHeight > 0;
}
var shuffle = function() {
      elements = document.querySelectorAll('.randomize');
      Array.prototype.forEach.call(elements, function(parentel, i){
        var children = parentel.children;
        children = Array.prototype.slice.call(children, 0);
        children = Array.prototype.sort.call(children, function(a, b) {
            return Math.random() - 0.5;
        });
        for(var i = 0, l = children.length; i < l; i++) parentel.append(children[i]);
      });
};
shuffle();

elements = document.querySelectorAll('.randomize');
Array.prototype.forEach.call(elements, function(parentel, i){
    children = parentel.children;
    Array.prototype.forEach.call(children, function(el, j){
        if(isvisible(el)) {
            if(el.getAttribute('data-src')) el.setAttribute('src',el.getAttribute('data-src'));
            if(el.querySelector('img')) {
                Array.prototype.forEach.call(el.querySelectorAll('img'), function(imgel, j){
                    imgel.setAttribute('src',imgel.getAttribute('data-src'));
                });
            }
            if(el.querySelector('*')) {
                Array.prototype.forEach.call(el.querySelectorAll('*'), function(subel, j){
                    subel.setAttribute('style',imgel.getAttribute('data-style'));
                });
            }
        }
    });
});

