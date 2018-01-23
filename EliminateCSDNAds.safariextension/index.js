//这个监听表示页面已经加载完毕
document.addEventListener("DOMContentLoaded", function(event) {
    removeiFrames();
});

//监听网页滚动事件，每次滚动都要监听，并移除，因为广告就是一边滑动一边显示的
document.addEventListener("mousewheel", function(event) {
                          removeiFrames();
});

function removeiFrames() {
    //可以断定，基本所有的广告都是在iframe中显示的
    var iframes = document.getElementsByTagName("iframe");
    for (var i = 0; i < iframes.length; i++) {
        removeElementByTagNameObject(iframes[i]);
    }
    
    //移除广告的JS
    removeElementById("popuLayer_js_q");
    
    //移除广告位的父级别
    removeElementById("layerd");
}

//根据id名称移除元素
function removeElementById(_idname) {
    var element = document.getElementById(_idname);
    element.parentNode.removeChild(element);
}

//根据js元素对象移除
function removeElementByTagNameObject(_tagNameObject) {
    _tagNameObject.parentNode.removeChild(_tagNameObject);
}

