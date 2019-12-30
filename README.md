#nclient-micro-front
集成了@mikefeng110808/micro-util,可以直接调用相关类

###install
npm install --save nclient-microfront

##usage
import {config,...} from 'nclient-microfront'

##langPackage
1. load(modCode = 'visitorSdk') 加载需要调用的数据
2. forceUpdate(type) 强制更新语言
3. getAllMulLangs() 获取所有的语言类型
4. setDefaultLang(lang) 设置默认语言 zh_CN, zh_TW, en
##screenCapture
1. init() 初始化  
2. use() 调用截图
3. commonFrame新增监听screenCapture-download-alert 需要下载截图插件
4.  commonFrame新增监听screenCapture-draw 截图后获取截图数据
##frame(dataFrame, stateFrame, controlFrame, commonFrame) 增加片段监听
1. push(keys, obj, logStr) 推送事件
2. addHandler(handlerName, keys, callback) 增加监听
3. removeHandler(handlerName, key) 删除监听
4. getHandler(handlerName, key, obj) 获取监听
5. before(key, callback) 在监听前回调  
6. after(key, callback) 在监听后回调  
   
# micro-util
前端接口分离工具类

## config 配置项  
1. init() 初始化  
2. set({pre, httpUrl}) 设置ws前缀(pre),http地址  
3. setWebsocketUrl(pk) 设置ws的后缀地址  
4. setSWFLocation(location)) 设置swf文件地址  
## convertTree 树状图转化  
convertTree(data, isChildFn, contentFn, idFun, getChildrenFun)
data: 数据
isChildFn: 是否是子节点的方法
contentFn: 内容的生成方法
idFun: id的生成方法
getChildrenFun: 获取子节点的生成方法
## faceIco 微信图标转换  
1. imgIco 图标对象
2. replaceOut(str) 图标转换为图片
3. replaceIn(str) 图片转换为图标
4. repalceToAlert(str, ico) 图标转换为标签
##  mobileInput 手机输入框拉伸
1. init({fail, success}) 初始化 设置调用成功或失败后的返回
2. startCheck() 开始检测
3. end() 结束检测
6. focusAfterInsert() 在插入后重新聚焦
##  storeImg 保存已展示的图片
storeImg.store({imgs, callback}) 
imgs: 图片地址数组
callback: 存储成功后回调方法
##  httplink 访问http地址
httplink(name, url, data, type='get', async=true)
name: 方法名,每个项目唯一
url: 访问地址
data: 访问数据
type: 类型, get post postJson postForm
async: 是否异步
##  jsonplink 访问jsonp地址
jsonplink(name, url, data, type='jsonp', async=true, jsonpCallback='jsonpCallback', jsonpName = 'jsonpCallback')
name: 方法名,每个项目唯一
url: 访问地址
data: 访问数据
type: 类型, get post postJson postForm
async: 是否异步
jsonpCallback: 回调
jsonpName: jsonp名称
##  DataHandle 数据类型的父类
1. before(key, callback) 在数据处理事件前回调 
2. after(key, callback) 在数据处理事件后回调  
样例:
class Class extends DataHandle{
  constructor(name)
}
##  Handle 事件类型的父类
1. before(key, callback) 在事件前回调 
2. after(key, callback) 在事件后回调  
样例:
new Handle({name:''})
##  EventBus(keyFrame, websocketFrame, httpFrame) 事件监听
1. push(keys, obj, logStr) 推送事件
2. addHandler(handlerName, keys, callback) 增加监听
3. removeHandler(handlerName, key) 删除监听
4. getHandler(handlerName, key, obj) 获取监听
5. before(key, callback) 在监听前回调  
6. after(key, callback) 在监听后回调  
## storage 缓存localstorage
1. get(key) 获取
2. set(key, value) 设置
3. clear(key) 清理单一
4. clearAll() 清理所有
##  logger 日志系统
1. init() 初始化
2. saveAsFile() 将日志保存为文件
3. setLevel(level) 设置日志转换的层级 高到底 0 不使用日志系统, 6 使用地址但不显示在控制台中, 1 log, 2 info, 3 debug, 4 error, 5 warn
4. setOnly(boolean) 设置是否只访问当前层级的日志
5. saveTextAs(content, name, encode='utf-8') 保存为文件
6. saveAs(blob,name) 保存
## websocket 
1. init(data) 先测试后初始化
2. closeManager() 关闭
3. sendMsg(msg) 发送消息
4. isClose() 检测是否关闭
5. initSingle(data) 开启单个初始化
## register(displayHandle, displayData) 请不要单独使用
对象注册机制,实现在DataHandle, Handle中
1. install 注册对象
2. display 展示对象
3. displayAll 展示所有对象
4. displayHandle 展示事件类型对象
5. displayData 展示数据类型对象
