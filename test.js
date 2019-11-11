(function(){
    "use strict";
    kintone.events.on('app.record.index.show', function(event) {
        let textDiv = document.createElement('div');
        textDiv.id  = "text_div";
        textDiv.innerHTML = "一覧画面です。";

        kintone.app.getHeaderMenuSpaceElement().appendChild(textDiv);
    });
})();
