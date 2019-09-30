"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: "UCC访客端界面",
  profile: '简介',
  screenCapturing: "截屏中",
  screenCaptureDownload: "请下载安装。",
  offlineMessage: "已断开连接，请刷新重试",
  downloadImg: "下载",
  closeChat: "您确定要结束对话吗？",
  closeWindow: "您确定要关闭对话框吗？",
  problem: '常见问题',
  recored: "对话记录",
  upload: {
    searchFile: "浏览",
    sendFile: "发送",
    sendedFile: "访客发送了一个文件：",
    downloadFile: "下载",
    uploadFileError_1: "仅支持上传.gif\.jpg\.jpeg\.bmp\.png\.doc\.docx\.xls\.xlsx\.pdf\.txt格式的文件",
    uploadFileError_2: "仅支持上传10M以内的文件",
    uploadFileError_3: "上传文件错误",
    uploadFileError_4: "仅支持上传.png\.jpeg\.bmp\.jpg格式的图片",
    uploadFileError_5: "仅支持上传5M以内的图片",
    uploadFileMsg: "请选择文件",
    openUploadFile: '客服已经为您打开发送文件功能，要使用请点击面板上的按钮',
    closeUploadFile: '客服已经关闭发送文件功能'
  },
  newMessage: "新消息",
  openNewWindow: /^(下载|转人工)/,
  downloadAudio: "下载",
  errorNetWork: "网络异常，请确保网络正常后再重新连接！",
  leaveMessageStr: "留言",
  continueQueueStr: '继续排队',
  businessList: {
    online: "在线",
    offline: "离线",
    backTo: "返回上级",
    list: "<br>请<span class='spans'>输入数字</span>或者<span class='spans'>点击</span>选择相应的业务类型:<br>",
    select: "请输入业务类型前的数字或点击业务类型接入对话或留言。"
  },
  operator: "客服",
  reminder: "对方正在输入...",
  histroyRecords: "消息记录",
  history: {
    btnStr: "点击查看历史记录",
    leavePre: "离线消息:"
  },
  satisfaction: {
    chooseSatisfaction: "请选择满意度评价！",
    chooseReason: "请选择原因！",
    msg: "为了提高我们的服务质量,   请点击",
    btn: "填写满意度",
    complete: "完善客户信息",
    title: "满意度调查",
    top: "您对本次服务满意吗？",
    cancel: "访客取消了满意度评价",
    momePlaceholder: '请输入详情',
    reason: "，原因为：",
    repley: "访客给您的满意度评价是：",
    to: "您给客服",
    answer: "的评价："
  },
  dialogue: {
    revoke: "已撤回一条消息",
    reconnectSuc: "重连服务器成功！",
    reconnectFail: "网络异常，系统正尝试重连服务器！",
    closeChat: {
      0: "对话出现异常，对话结束.",
      1: "对话结束，客服离开对话.",
      2: "对话超时，对话结束。",
      3: "您好，为了保证服务质量，我们已经结束了对话，期待再次为您服务。",
      4: "响应超时，对话结束。",
      5: "您结束了对话。",
      6: "网络中断，如需继续对话，请<a class='reconnectID'>点击此处</a>重新发起对话",
      7: "客服网络中断，当前对话结束，如需继续对话，请<a  class='reconnectID'>点击此处</a>重新接入。",
      8: "网络异常，当前对话结束，如需继续对话，<a  class='reconnectID'>请重新接入</a>。"
    },
    operator: "客服",
    visitor: "访客",
    robot: "机器人",
    maxLength: "最大长度为1000个字符"
  },
  visitorInformation: {
    male: "男",
    female: "女",
    unknow: "保密",
    choose: "性别选择",
    submit: "信息提交成功！",
    cancel: "访客取消了访客信息收集",
    title: "请填写以下信息",
    msg: "为了提高我们的服务质量,   请点击<span class='v_info' >完善客户信息</span><br>",
    validate: {
      nickEmpty: "昵称不能为空",
      nickMaxLength: "昵称最大长度为20字符",
      nickError: "请输入中文、英文和数字！",
      realNameMaxLength: "姓名最大长度为20字符",
      phoneError: "请填写正确的手机号码",
      qqMaxLength: "QQ最大长度为20字符",
      emailError: "请填写正确的邮箱",
      emailMaxLength: "邮箱最大长度为50字符",
      addressMaxLength: "地址最大长度为50字符",
      companyMaxLength: "公司名称最大长度为50字符"
    },
    visitorName: {
      name: '昵称',
      placeholder: '请输入昵称'
    },
    sex: {
      name: '性别'
    },
    realName: {
      name: '姓名',
      placeholder: '请输入姓名'
    },
    phone: {
      name: '手机',
      placeholder: '请输入手机号码'
    },
    QQ: {
      name: 'QQ',
      placeholder: '请输入QQ号码'
    },
    email: {
      name: '邮箱',
      placeholder: '请输入邮箱地址'
    },
    address: {
      name: '地址',
      placeholder: '请输入地址'
    },
    company: {
      name: '公司',
      placeholder: '请输入公司名称'
    }
  },
  leaveMessage: {
    choose: "请选择",
    type: "留言分类选择",
    boxTitle: "请留言",
    selectMessageType: "请选择留言分类",
    validate: {
      companyEmpty: "公司名称不能为空",
      companyMaxLength: "公司名称最大长度为30字符",
      nameEmpty: "姓名不能为空",
      nameMaxLength: "姓名最大长度为20字符",
      phoneEmpty: "电话不能为空",
      phoneError: "请填写正确的电话",
      emailEmpty: "电子邮件不能为空",
      emailError: "请填写正确的电子邮件",
      emailMaxLength: "电子邮件最大长度为50字符",
      titleEmpty: "主题不能为空",
      titleMaxLength: "主题最大长度为50字符",
      contentEmpty: "内容不能为空",
      contentMaxLength: "内容最大长度为1000字符"
    },
    messageTypePk: {
      name: "留言分类"
    },
    company: {
      name: "公司名称",
      markedWords: "请输入公司名称"
    },
    name: {
      name: "姓名",
      markedWords: "输入您的昵称，1-20个字符"
    },
    telephone: {
      name: "电话",
      markedWords: "请留下正确的电话号码"
    },
    email: {
      name: "电子邮件",
      markedWords: "请留下有效的邮件地址"
    },
    title: {
      name: "主题",
      markedWords: "留言主题最多可输入50个字符"
    },
    content: {
      name: "内容",
      markedWords: "留言内容最多为1000个字符"
    }
  },
  websocketInterrupt: "点击此处继续对话",
  boshInterrupt: "已断开连接，请刷新重试",
  workTime: {
    server: "温馨提示：尊敬的客户，我们的服务时间是",
    clickNotice: "如果有重要的事情，请点击",
    btn: "在线留言",
    notice: "给您带来的不便，敬请谅解.",
    holiday: "温馨提示：尊敬的客户，我们的节假日时间是",
    sunday: "星期日",
    monday: "星期一",
    tuesday: "星期二",
    wednesday: "星期三",
    thursday: "星期四",
    friday: "星期五",
    saturday: "星期六"
  },
  userDatas: {
    visitorPre: "visitor"
  },
  queue: {
    netError: '网络问题,您已离开'
  },
  submit: "确定",
  cancel: "取消",
  robot: {
    answer: "非常抱歉，不能回答你的问题。如需进一步咨询，请点击这里，转接人工客服。",
    questions: ["投诉"],
    clientJump: '请点击这里',
    clientJumpReplace: '请点击<a class="robotResp">这里</a>',
    jumpToNormal: "不能查找到答案，是否需要转人工服务?"
  },
  front: {
    toolsLabel: {
      problem: "右侧常见问题",
      font: "字体",
      face: "表情",
      screenCapture: "屏幕截图",
      sendFile: "发送文件",
      satisfaction: "满意度评价",
      audio: "语音通话",
      saveRecord: "保存对话记录",
      sendImg: "发送图片"
    },
    histroyRecords: "消息记录",
    fonts: ["微软雅黑", "宋体", "楷体", "华文魏碑"],
    screenCapture: "截图时隐藏当前窗口",
    closeBtn: "结束对话",
    sendBtn: "发送",
    enterBtn: "按Enter键发送消息",
    crtlEnterBtn: "按Ctrl+Enter键发送消息",
    mcontentplaceholder: '请输入您想咨询的问题...'
  },
  changeTitle: {
    pre: '[提醒]',
    timeout: '对话超时',
    rest: '休息超时',
    screenCapture: '截屏中',
    newMsgPre: '[新消息]',
    msgPre: ''
  },
  overLoad: '访客您好，您的刷新次数过于频繁，请您关闭页面重新进入。',
  contextMenu: {
    download: '下载图片'
  },
  mobileInputError: '输入框显示问题,建议更换浏览器',
  emptyText: '暂无数据',
  language: 'zh_CN',
  guide: {
    jumpToChat: '在线客服',
    des: '求助智能机器人获取快速解答',
    questions: '大家都在问',
    plugins: '自助服务'
  }
};