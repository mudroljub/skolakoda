const loadDeferredStyles = function() {
  const addStylesNode = document.getElementById('deferred-styles')
  const replacement = document.createElement('div')
  replacement.innerHTML = addStylesNode.textContent
  document.body.appendChild(replacement)
  addStylesNode.parentElement.removeChild(addStylesNode)
}
if (requestAnimationFrame) requestAnimationFrame(function() {
  window.setTimeout(loadDeferredStyles, 0)
})
else window.addEventListener('load', loadDeferredStyles)
