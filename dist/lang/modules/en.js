"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: "UCC Visitor Interface",
  profile: 'brief introduction',
  screenCapturing: "Screenshots",
  screenCaptureDownload: "Please download and install.",
  offlineMessage: "Disconnected, please refresh and retry",
  downloadImg: "download",
  closeChat: "Are you sure you want to end the conversation?",
  closeWindow: "Are you sure you want to close the dialog?",
  problem: 'Common problem',
  recored: "Dialogues",
  upload: {
    searchFile: "browse",
    sendFile: "Send out",
    sendedFile: "Visitors sent a file:",
    downloadFile: "download",
    uploadFileError_1: "Only upload files in. gif jpg jpeg bmp png doc docx docx xls xlsx pdf TXT format is supported.",
    uploadFileError_2: "Supports uploading files within 10M only",
    uploadFileError_3: "Error uploading file",
    uploadFileError_4: "Only uploading pictures in. png jpeg bmp JPG format is supported",
    uploadFileError_5: "Supports uploading only pictures within 5M",
    uploadFileMsg: "Please select the file",
    openUploadFile: 'Customer service has opened the sending file function for you. To use it, please click the button on the panel.',
    closeUploadFile: 'Customer service has turned off sending files'
  },
  newMessage: "New news",
  openNewWindow: /^(下载|转人工)/,
  downloadAudio: "download",
  errorNetWork: "Network abnormalities, please ensure that the network is normal and then reconnect!",
  leaveMessageStr: "Leaving a message.",
  businessList: {
    online: "On-line",
    offline: "Off-line",
    backTo: "Return to superiors",
    list: "<br>请<span class='spans'>输入数字</span>或者<span class='spans'>点击</span>选择相应的业务类型:<br>",
    select: "Please enter the number before the business type or click on the business type to access the dialogue or message."
  },
  operator: "Customer service",
  reminder: "The other is typing...",
  histroyRecords: "Message record",
  history: {
    btnStr: "Click to view the history",
    leavePre: "Offline message:"
  },
  satisfaction: {
    chooseSatisfaction: "Please choose satisfaction evaluation!",
    chooseReason: "Please choose the reason!",
    msg: "To improve our service quality, please click",
    btn: "Satisfaction",
    complete: "Improving customer information",
    title: "Satisfaction Survey",
    top: "Are you satisfied with this service?",
    cancel: "Visitors cancelled satisfaction evaluation",
    momePlaceholder: 'Please enter details',
    reason: "The reasons are as follows:",
    repley: "Visitors give you satisfaction evaluation:",
    to: "You give customer service.",
    answer: "Evaluation:"
  },
  dialogue: {
    revoke: "A message has been withdrawn",
    reconnectSuc: "The reconnection server was successful!",
    reconnectFail: "Network exception, the system is trying to reconnect the server!",
    closeChat: {
      0: "Dialogue abnormal, the end of the dialogue.",
      1: "At the end of the conversation, the customer service leaves the conversation.",
      2: "Dialogue timed out and ended.",
      3: "Hello, in order to ensure the quality of service, we have concluded the dialogue and look forward to serving you again.",
      4: "The response timed out and the conversation ended.",
      5: "You have concluded the dialogue.",
      6: "网络中断，如需继续对话，请<a class='reconnectID'>点击此处</a>重新发起对话",
      7: "客服网络中断，当前对话结束，如需继续对话，请<a  class='reconnectID'>点击此处</a>重新接入。",
      8: "网络异常，当前对话结束，如需继续对话，<a class='reconnectID'> Please re-connect</a>。"
    },
    operator: "Customer service",
    visitor: "Visitor",
    robot: "Robot",
    maxLength: "Maximum length is 1000 characters"
  },
  visitorInformation: {
    male: "male",
    female: "female",
    unknow: "secrecy",
    choose: "Sex selection",
    submit: "Successful submission of information!",
    cancel: "Visitors cancelled visitor information collection",
    title: "Please fill in the following information",
    msg: "To improve our service quality, please click <span class='v_info' >improving customer information</span><br>",
    validate: {
      nickEmpty: "A nickname cannot be empty",
      nickMaxLength: "The maximum length of a nickname is 20 characters",
      nickError: "Please enter Chinese, English and numbers!",
      realNameMaxLength: "The maximum length of a name is 20 characters",
      phoneError: "Please fill in the correct cell phone number.",
      qqMaxLength: "The maximum length of QQ is 20 characters",
      emailError: "Please fill in the correct email address.",
      emailMaxLength: "Maximum length of mailbox is 50 characters",
      addressMaxLength: "Maximum address length is 50 characters",
      companyMaxLength: "Maximum length of company name is 50 characters"
    },
    visitorName: {
      name: 'Nickname?',
      placeholder: 'Please enter a nickname'
    },
    sex: {
      name: 'Gender'
    },
    realName: {
      name: 'Full name',
      placeholder: 'Please enter your name.'
    },
    phone: {
      name: 'Mobile phone',
      placeholder: 'Please enter your cell phone number.'
    },
    QQ: {
      name: 'QQ',
      placeholder: 'Please enter the QQ number.'
    },
    email: {
      name: 'mailbox',
      placeholder: 'Please enter your email address'
    },
    address: {
      name: 'address',
      placeholder: 'Please enter your address'
    },
    company: {
      name: 'company',
      placeholder: 'Please enter the name of the company.'
    }
  },
  leaveMessage: {
    choose: "Please choose",
    type: "Classification and Selection of Messages",
    boxTitle: "Please leave a message.",
    selectMessageType: "Please choose the categories of messages.",
    validate: {
      companyEmpty: "Company name cannot be empty",
      companyMaxLength: "Maximum length of company name is 30 characters",
      nameEmpty: "Name cannot be empty",
      nameMaxLength: "The maximum length of a name is 20 characters",
      phoneEmpty: "Telephone can't be empty",
      phoneError: "Please fill in the correct telephone number.",
      emailEmpty: "E-mail cannot be empty",
      emailError: "Please fill in the correct email",
      emailMaxLength: "Maximum length of e-mail is 50 characters",
      titleEmpty: "Theme cannot be empty",
      titleMaxLength: "Topic maximum length is 50 characters",
      contentEmpty: "Content cannot be empty",
      contentMaxLength: "Maximum length of content is 1000 characters"
    },
    messageTypePk: {
      name: "Message classification"
    },
    company: {
      name: "Corporate name",
      markedWords: "Please enter the name of the company."
    },
    name: {
      name: "Full name",
      markedWords: "Enter your nickname, 1-20 characters"
    },
    telephone: {
      name: "Telephone",
      markedWords: "Please leave the correct telephone number."
    },
    email: {
      name: "E-mail",
      markedWords: "Please leave a valid email address."
    },
    title: {
      name: "theme",
      markedWords: "Message topics can be entered up to 50 characters"
    },
    content: {
      name: "content",
      markedWords: "Message content is up to 1000 characters"
    }
  },
  websocketInterrupt: "Click here to continue the conversation.",
  boshInterrupt: "Disconnected, please refresh and retry",
  workTime: {
    server: "Warm Tip: Dear Customers, Our Service Time is",
    clickNotice: "If there is something important, please click",
    btn: "Online Message",
    notice: "Sorry for the inconvenience.",
    holiday: "Warm Tip: Dear Customers, Our Holiday Time is",
    sunday: "Sunday",
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday"
  },
  userDatas: {
    visitorPre: "visitor"
  },
  queue: {
    netError: 'Network problem, you have left'
  },
  submit: "Determine",
  cancel: "cancel",
  robot: {
    answer: "I'm sorry I can't answer your question. For further consultation, please click here to transfer to manual customer service.",
    questions: ["Complaint"],
    clientJump: 'please click here ',
    clientJumpReplace: 'please click <a class = "robotResp" >here</a> ',
    jumpToNormal: "Can't find the answer, do you need to transfer to human service?"
  },
  front: {
    toolsLabel: {
      problem: "Common problems on the right",
      font: "Typeface",
      face: "Expression",
      screenCapture: "Screenshots",
      sendFile: "send files",
      satisfaction: "Satisfaction Evaluation",
      audio: "voice call",
      saveRecord: "Keep a record of the conversation",
      sendImg: "Send pictures"
    },
    histroyRecords: "Message record",
    fonts: ["Microsoft YaHei", "Song style", "Regular script", "Chinese Wei Bei"],
    screenCapture: "Hide the current window in screenshots",
    closeBtn: "Closing the conversation",
    sendBtn: "Send out",
    enterBtn: "*25353;Enter38190; 21457;36865; 28040;24687;",
    crtlEnterBtn: ".25353;- Ctrl +Enter38190;- 21457;- 36865;- 28040;- 24687;",
    mcontentplaceholder: 'Please enter the questions you want to consult.'
  },
  changeTitle: {
    pre: '[reminder]',
    timeout: 'Dialogue timeout',
    rest: 'Rest timeout',
    screenCapture: 'Screenshots',
    newMsgPre: '[new news]',
    msgPre: ''
  },
  overLoad: 'Hello visitors, your refresh times are too frequent, please close the page and re-enter.',
  contextMenu: {
    download: 'Download pictures'
  },
  mobileInputError: 'Input box display problem, recommend replacing browser',
  emptyText: 'Empty data',
  language: 'en',
  guide: {
    jumpToChat: '在线客服',
    des: '求助智能机器人获取快速解答',
    questions: '大家都在问',
    plugins: '自助服务'
  }
};