function triggerEventOnElement(element, eventName, memo) {
  var event;
  event = document.createEvent("Event");
  event.initEvent(eventName, true, true);
  event.memo = memo || { };

  element.dispatchEvent(event);
}
