jQuery(function(){
  var doms = document.getElementsByClassName('PollCreator');
  var div;
  for (var p in doms) {
    div = createNode();
    if (doms[p].parentNode) {
      doms[p].parentNode.insertBefore(div, doms[p].nextSibling);
    }
  }

  function createNode() {
    var div = document.createElement('div');
    var smile = twemoji.parse('\u263a', { size: 36 });
    var node =
      '<button class="btn icon-btn PollCreator-btn js-tooltip js-twemoji" type="button" title="絵文字を追加" data-delay="150" tabindex="0">' +
        '<span class="Icon Icon--poll">' + smile + '</span>' +
        '<span class="text">絵文字</span>' +
      '</button>'
    ;
    div.classList.add('TwemojiCreater')
    div.innerHTML = node;
    return div;
  }

  console.log('Twemoji Extension for Twitter loaded!');
});
