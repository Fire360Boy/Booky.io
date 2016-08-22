(function() {
  var elementToObject;

  elementToObject = function(element, o) {
    var child, children, e, el, j, k, len, ref, v;
    el = $(element);
    o = {
      tagName: el.tagName
    };
    ref = el.attributes;
    for (j = 0, len = ref.length; j < len; j++) {
      e = ref[j];
      o[e.name] = e.value;
      children = el.childElements();
      if (children.length) {
        o.children = [];
      }
      for (v in children) {
        k = children[v];
        child = $(children[v]);
        o.children[i] = elementToObject(child, o.children);
      }
    }
    return o;
  };

}).call(this);
