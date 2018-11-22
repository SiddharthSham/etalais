
class Cursor {

constructor() {
 this._dom = {};
 this._cursors = ["cursor_1", "cursor_2"];
 this.initHtml();
 this.initCss();
 this.initEvent();
}

initHtml() {
 let _cursor;
 const _this = this;
 this._dom["body"] = document.getElementsByTagName('body')[0];
 this._cursors.forEach(function (value) {
     _cursor = document.createElement('div');
     _cursor.className = value;
     _cursor.id = value;
     _this._dom.body.appendChild(_cursor)
     _this._dom[value] = _cursor
 });

}

initCss() {
 const style_cursor = { position: 'fixed', borderRadius: '50%', transform: 'translateX(-50%) translateY(-50%)', pointerEvents: 'none', left: '100px', top: '50%' }
 const style_cursor_1 = { backgroundColor: '#000', height: '5px', width: '5px', zIndex: 99999 }
 const style_cursor_2 = { mixBlendMode: 'overlay', border: '1px solid #16264c', height: ' 30px', width: '30px', zIndex: 99998, webkitTransition: 'all 0.3s ease-out', mozTransition: 'all 0.3s ease-out', oTransition: 'all 0.3s ease-out', msTransition: 'all 0.3s ease-out', transition: 'all 0.3s ease-out' }
 this.setStylesOnElement(Object.assign({}, style_cursor, style_cursor_1), this._dom.cursor_1)
 this.setStylesOnElement(Object.assign({}, style_cursor, style_cursor_2), this._dom.cursor_2)
}

initEvent() {
 const _this = this;
 this._dom.body.addEventListener("mousemove", function (e) {
     let _clientX = e.clientX;
     let _clientY = e.clientY;
     let _position = { top: _clientY + "px", left: _clientX + "px" };
     _this.setStylesOnElement(_position, _this._dom.cursor_1)
     _this.setStylesOnElement(_position, _this._dom.cursor_2)
 })
}

setStylesOnElement(styles, element) {
 Object.assign(element.style, styles);
}

}
function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}

if(!detectmob()){
    const _cursor = new Cursor()
}
