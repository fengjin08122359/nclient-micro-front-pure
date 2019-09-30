
 var mobile_type_arr = ['ipad', 'ipod', 'iphone', 'ios', 'ios', 'android', 'backerry', 'webos', 'symbian', 'windows phone', 'phone', 'blackberry'],
 mobile_pc_browser_json = {
   micromessenger: '微信浏览器',
   ucbrowser: 'UC浏览器',
   qqbrowser: 'QQ浏览器',
   opera: 'Opera浏览器',
   baidubrowser: '百度浏览器',
   firefox: '火狐浏览器',
   maxthon: '傲游浏览器',
   xiaomi: '小米手机浏览器',
   chrome: 'Chrome浏览器',
   android: 'android内置浏览器',
   iphone: 'iphone内置浏览器',
   ipod: 'opod内置浏览器',
   ipad: 'ipad内置浏览器'
 },
 pc_browser_json = {
   qqbrowser: 'QQ浏览器',
   opera: 'Opera浏览器',
   maxthon: '傲游浏览器',
   tencenttraveler: 'TT浏览器',
   theworld: '天天浏览器',
   lbbrowser: '猎豹浏览器',
   chrome: 'Chrome浏览器',
   firefox: 'Firefox浏览器',
   msie: 'IE浏览器',
   safari: 'Safari浏览器',
   metasr: '搜狗浏览器'
 }
 var osConfig = {
  getUserAgent: function () {
    var userAgent_Data = {}
    var userAgent = navigator.userAgent.toLowerCase()
    var reg_Exp = /(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone|BlackBerry)/i
    if (userAgent.match(reg_Exp) != null) {
      userAgent_Data['terminal_Type'] = '移动终端'
      for (var i = 0; i < mobile_type_arr.length; i++) {
        if (userAgent.indexOf(mobile_type_arr[i]) > -1) {
          userAgent_Data['terminal_system'] = mobile_type_arr[i]
          break
        }
      }
      if (userAgent_Data['terminal_system'] == null || userAgent_Data['terminal_system'] == '') {
        userAgent_Data['terminal_system'] = '未知'
      }
      for (var i in mobile_pc_browser_json) {
        if (userAgent.indexOf(i) > -1) {
          userAgent_Data['browser_type'] = mobile_pc_browser_json[i]
          userAgent_Data['browser_name'] = i
          break
        }
      }
      if (userAgent_Data['browser_type'] == null || userAgent_Data['browser_type'] == '') {
        userAgent_Data['browser_type'] = '未知'
      }
    } else {
      userAgent_Data['terminal_Type'] = 'PC终端'
      var terminal_system = '未知'
      var isWin = (navigator.platform == 'Win32') || (navigator.platform == 'Windows')
      var isMac = (navigator.platform == 'Mac68K') || (navigator.platform == 'MacPPC') || (navigator.platform == 'Macintosh') || (navigator.platform == 'MacIntel')
      if (isMac) terminal_system = 'Mac'
      var isUnix = (navigator.platform == 'X11') && !isWin && !isMac
      if (isUnix) terminal_system = 'Unix'
      var isLinux = (String(navigator.platform).indexOf('Linux') > -1)
      if (isLinux) terminal_system = 'Linux'
      if (isWin) {
        var isWin2K = userAgent.indexOf('windows nt 5.0') > -1 || userAgent.indexOf('windows 2000') > -1
        if (isWin2K) terminal_system = 'Win2000'
        var isWinXP = userAgent.indexOf('windows nt 5.1') > -1 || userAgent.indexOf('windows xp') > -1
        if (isWinXP) terminal_system = 'WinXP'
        var isWin2003 = userAgent.indexOf('windows nt 5.2') > -1 || userAgent.indexOf('windows 2003') > -1
        if (isWin2003) terminal_system = 'Win2003'
        var isWinVista = userAgent.indexOf('windows nt 6.0') > -1 || userAgent.indexOf('windows vista') > -1
        if (isWinVista) terminal_system = 'WinVista'
        var isWin7 = userAgent.indexOf('windows nt 6.1') > -1 || userAgent.indexOf('windows 7') > -1
        if (isWin7) terminal_system = 'Win7'
        var isWin8 = userAgent.indexOf('windows nt 6.2') > -1 || userAgent.indexOf('windows 7') > -1
        if (isWin8) terminal_system = 'Win8'
        var isWin10 = userAgent.indexOf('windows nt 10.0') > -1 || userAgent.indexOf('windows 10') > -1
        if (isWin10) terminal_system = 'Win10'
        var isEdge = userAgent.indexOf('Edge') > -1
        if (isEdge) terminal_system = 'WinEdge'
      }
      userAgent_Data['terminal_system'] = terminal_system
      for (var i in pc_browser_json) {
        if (userAgent.indexOf(i) > -1) {
          userAgent_Data['browser_type'] = pc_browser_json[i]
          userAgent_Data['browser_name'] = i
          break
        }
      }
      if (userAgent_Data['browser_type'] == null || userAgent_Data['browser_type'] == '') {
        var isIE11 = terminal_system == 'Win10'
        var isEdge = terminal_system == 'WinEdge'
        if (isIE11 || isEdge) {
          userAgent_Data['browser_type'] = pc_browser_json['msie']
          userAgent_Data['browser_name'] = 'msie'
        } else {
          userAgent_Data['browser_type'] = '未知'
          userAgent_Data['browser_name'] = '未知'
        }
      }
    }
    return userAgent_Data
  }
}
var os = {}
os.browserName = osConfig.getUserAgent().browser_name
export default os