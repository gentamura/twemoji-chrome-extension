console.log('twitter 5 now!');

//要素の作成
var div = document.createElement('div');
div.textContent = 'hoge';

/*
//最後の子要素として追加
element.appendChild(div);

//最初の子要素として追加
element.insertBefore(div, element.firstChild);

//要素の直前に追加
element.parentNode.insertBefore(div, element);

//要素の直後に追加
element.parentNode.insertBefore(div, element.nextSibling);
*/

var doms = document.getElementsByClassName('PollCreator');
console.log('doms', doms);
/*
for (var p in doms) {
  console.log('doms[p]', doms[p]);
  if (doms[p].parentNode) {
    // doms[p].parentNode.insertBefore(div, doms[p].nextSibling);
    doms[p].parentNode.appendChild(div);
    console.log('div', div);
    console.log('doms[p].parentNode', doms[p].parentNode);
    console.log('doms[p].parentNode.insertBefore', doms[p].parentNode.insertBefore);
  }
}
*/
