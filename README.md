#nclient-micro-front-pure
nclient-micro-front的纯净版去除了大部分依赖于window的功能
保留功能:
convertTree,
validator,
DataHandle,
Handle,
keyFrame,
register,
displayHandle,
displayData,
rgData,
rgHandle,
EventBus,
websocketFrame,
httpFrame

###install
npm install --save nclient-microfront-pure

##usage
import {validator,...} from 'nclient-microfront-pure'

##frame(dataFrame, stateFrame, controlFrame, commonFrame) 增加片段监听
1. push(keys, obj, logStr) 推送事件
2. addHandler(handlerName, keys, callback) 增加监听
3. removeHandler(handlerName, key) 删除监听
4. getHandler(handlerName, key, obj) 获取监听
5. before(key, callback) 在监听前回调  
6. after(key, callback) 在监听后回调  

## convertTree 树状图转化  
convertTree(data, isChildFn, contentFn, idFun, getChildrenFun)
data: 数据
isChildFn: 是否是子节点的方法
contentFn: 内容的生成方法
idFun: id的生成方法
getChildrenFun: 获取子节点的生成方法
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
## register(displayHandle, displayData) 请不要单独使用
对象注册机制,实现在DataHandle, Handle中
1. install 注册对象
2. display 展示对象
3. displayAll 展示所有对象
4. displayHandle 展示事件类型对象
5. displayData 展示数据类型对象
