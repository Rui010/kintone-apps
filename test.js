(function(){
    "use strict";
    kintone.events.on('app.record.index.show', function(event) {
        let textDiv = document.createElement('div');
        textDiv.id  = "text_div";
        textDiv.innerHTML = "一覧画面です。";
        textDiv.style = "color: red;";

        kintone.app.getHeaderMenuSpaceElement().appendChild(textDiv);
    });
})();
