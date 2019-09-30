'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _microUtil = require('@mikefeng110808/micro-util');

var _ = require('../');

var _os = require('./os');

var _os2 = _interopRequireDefault(_os);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var screenCapture = {
  outTime: 1000 * 60,
  startTime: 0,
  using: false,
  failOp: 0,
  scinterval: null,
  os: null,
  title: '',
  type: 1,
  http: 'http://local.any800.com:20201/',
  https: 'https://local.any800.com:20202/',
  url: '',
  onClick: false,
  init: function init() {
    var ishttps = document.location.protocol == 'https:';
    if (ishttps) {
      this.url = this.https;
    } else {
      this.url = this.http;
    }
    this.getBrowserName();
  },
  use: function use() {
    if (this.onClick) return;
    this.onClick = true;
    var isshown = Number(!this.type);
    _microUtil.changeTitle.change("screen");
    if (document.getElementById('screenCapture')) {
      document.getElementById('screenCapture').remove();
    }
    var browserName = _os2.default.browserName;
    var iframe = document.createElement('iframe');
    iframe.src = 'hfxyz:\\\\' + (isshown ? 'show' : 'hidden?pn=' + browserName + '&title=' + encodeURIComponent(document.title));
    iframe.id = 'screenCapture';
    iframe.style.position = 'absolute';
    iframe.style.visibility = 'hidden';
    iframe.style.top = 0;
    iframe.style.left = 0;
    document.body.appendChild(iframe);
    this.startTime = new Date().getTime();
    this.using = false;
    this.failOp = 0;
    this.startCheck();
  },
  getBrowserName: function getBrowserName() {
    var browserName = _os2.default.browserName;
    switch (browserName) {
      case 'msie':
        browserName = 'iexplore';
        break;
      case 'metasr':
        browserName = 'SogouExplorer';
        break;
      case 'qqbrowser':
        browserName = 'QQBrowser';
        break;
      case 'firefox':
        browserName = 'firefox';
        break;
      case 'chrome':
        browserName = 'chrome';
        break;
    }
    if (browserName == 'chrome') {
      var desc = navigator.mimeTypes['application/vnd.chromium.remoting-viewer'];
      if (desc) {
        browserName = '360se';
      }
    }
    this.browserName = browserName;
  },
  startCheck: function startCheck() {
    var sc = this;
    if (this.scinterval) {
      clearInterval(this.scinterval);
    }
    if (new Date().getTime() - this.startTime > this.outTime) {
      return;
    }
    this.scinterval = setInterval(function () {
      window.success_jsonpCallback = function (e) {
        sc.failOp = 0;
        if (e.test == true && !!e.data) {
          sc.using = true;
          sc.draw(e.data);
          sc.close();
        } else if (e.test == false) {
          sc.close();
        }
      };
      var script = document.createElement('script');
      script.setAttribute('src', sc.url + 'index.html?callback=success_jsonpCallback');
      script.id = 'success_jsonpCallback';
      // 把script标签加入head，此时调用开始
      if (document.getElementById('success_jsonpCallback')) {
        document.getElementById('success_jsonpCallback').remove();
      }
      document.body.appendChild(script);
      if (sc.failOp > 10) {
        sc.download();
      }
      sc.failOp++;
    }, 500);
  },
  close: function close() {
    if (this.scinterval) {
      clearInterval(this.scinterval);
    }
    this.onClick = false;
    _microUtil.changeTitle.reset("screen");
    if (document.getElementById('screenCapture')) {
      document.getElementById('screenCapture').remove();
    }
    var iframe = document.createElement('iframe');
    iframe.src = this.url + "close.html";
    iframe.id = 'screenCapture';
    iframe.style.position = 'absolute';
    iframe.style.visibility = 'hidden';
    iframe.style.top = 0;
    iframe.style.left = 0;
    document.body.appendChild(iframe);
  },
  download: function download() {
    if (this.scinterval) {
      clearInterval(this.scinterval);
    }
    this.onClick = false;
    if (window.ScreenCapture) {
      return;
    }
    if (this.hasDownload) {
      return;
    }
    this.hasDownload = true;
    _.commonFrame.push('screenCapture-download-alert');
    window.open(_microUtil.config.httpUrl + 'Any800Capture.jsp', 'Any800Capture');
  },
  draw: function draw(data) {
    _.commonFrame.push('screenCapture-draw', 'data:image\/.png;base64,' + data);
  }
};
screenCapture.init();
exports.default = screenCapture;