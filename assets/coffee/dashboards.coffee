elementToObject = (element, o)->
  el = $(element);
  o = tagName: el.tagName
  for e in el.attributes
    o[e.name] = e.value
    children = el.childElements()
    if children.length then o.children = []
    for v,k of children
      child = $(children[v]);
      o.children[i] = elementToObject(child, o.children);
  o