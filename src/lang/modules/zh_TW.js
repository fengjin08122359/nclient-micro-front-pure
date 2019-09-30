export default {
  title: "UCC訪客端介面",
  profile: '簡介',
  screenCapturing: "截屏中",
  screenCaptureDownload: "請下載安裝。",
  offlineMessage: "已斷開連接，請刷新重試",
  downloadImg: "下載",
  closeChat: "您確定要結束對話嗎？",
  closeWindow: "您確定要關閉對話框嗎？",
  problem: '常見問題',
  recored: "對話記錄",
  upload: {
    searchFile: "流覽",
    sendFile: "發送",
    sendedFile: "訪客發送了一個檔：",
    downloadFile: "下載",
    uploadFileError_1: "僅支持上傳.gif\.jpg\.jpeg\.bmp\.png\.doc\.docx\.xls\.xlsx\.pdf\.txt格式的檔",
    uploadFileError_2: "僅支持上傳10M以內的檔",
    uploadFileError_3: "上傳檔錯誤",
    uploadFileError_4: "僅支持上傳.png\.jpeg\.bmp\.jpg格式的圖片",
    uploadFileError_5: "僅支持上傳5M以內的圖片",
    uploadFileMsg: "請選擇檔",
    openUploadFile: '客服已經為您打開發送檔功能，要使用請點擊面板上的按鈕',
    closeUploadFile: '客服已經關閉發送檔功能',
  },
  newMessage: "新消息",
  openNewWindow: /^(下載|轉人工)/,
  downloadAudio: "下載",
  errorNetWork: "網路異常，請確保網路正常後再重新連接！",
  leaveMessageStr: "留言",
  continueQueueStr: '繼續排隊',
  businessList: {
    online: "線上",
    offline: "離線",
    backTo: "返回上級",
    list: "<br>請<span class='spans'>輸入數字</span>或者<span class='spans'>點擊</span>選擇相應的業務類型:<br>",
    select: "請輸入業務類型前的數字或點擊業務類型接入對話或留言。"
  },
  operator: "客服",
  reminder: "對方正在輸入...",
  histroyRecords: "消息記錄",
  history: {
    btnStr: "點擊查看歷史記錄",
    leavePre: "離線消息:",
  },
  satisfaction: {
    chooseSatisfaction: "請選擇滿意度評價！",
    chooseReason: "請選擇原因！",
    msg: "為了提高我們的服務品質,   請點擊",
    btn: "填寫滿意度",
    complete: "完善客戶資訊",
    title: "滿意度調查",
    top: "您對本次服務滿意嗎？",
    cancel: "訪客取消了滿意度評價",
    momePlaceholder: '請輸入詳情',
    reason: "，原因為：",
    repley: "訪客給您的滿意度評價是：",
    to: "您給客服",
    answer: "的評價："
  },
  dialogue: {
    revoke: "已撤回一條消息",
    reconnectSuc: "重連伺服器成功！",
    reconnectFail: "網路異常，系統正嘗試重連伺服器！",
    closeChat: {
      0: "對話出現異常，對話結束.",
      1: "對話結束，客服離開對話.",
      2: "對話超時，對話結束。",
      3: "您好，為了保證服務品質，我們已經結束了對話，期待再次為您服務。",
      4: "回應超時，對話結束。",
      5: "您結束了對話。",
      6: "網路中斷，如需繼續對話，請<a class='reconnectID'>點擊此處</a>重新發起對話",
      7: "客服網路中斷，當前對話結束，如需繼續對話，請<a  class='reconnectID'>點擊此處</a>重新接入。",
      8: "網路異常，當前對話結束，如需繼續對話，<a  class='reconnectID'>請重新接入</a>。"
    },
    operator: "客服",
    visitor: "訪客",
    robot: "機器人",
    maxLength: "最大長度為1000個字元",
  },
  visitorInformation: {
    male: "男",
    female: "女",
    unknow: "保密",
    choose: "性別選擇",
    submit: "資訊提交成功！",
    cancel: "訪客取消了訪客資訊收集",
    title: "請填寫以下資訊",
    msg: "為了提高我們的服務品質,   請點擊<span class='v_info' >完善客戶資訊</span><br>",
    validate: {
      nickEmpty: "昵稱不能為空",
      nickMaxLength: "昵稱最大長度為20字元",
      nickError: "請輸入中文、英文和數字！",
      realNameMaxLength: "姓名最大長度為20字元",
      phoneError: "請填寫正確的手機號碼",
      qqMaxLength: "QQ最大長度為20字元",
      emailError: "請填寫正確的郵箱",
      emailMaxLength: "郵箱最大長度為50字元",
      addressMaxLength: "地址最大長度為50字元",
      companyMaxLength: "公司名稱最大長度為50字元"
    },
    visitorName: {
      name: '昵稱',
      placeholder: '請輸入昵稱'
    },
    sex: {
      name: '性別'
    },
    realName: {
      name: '姓名',
      placeholder: '請輸入姓名'
    },
    phone: {
      name: '手機',
      placeholder: '請輸入手機號碼'
    },
    QQ: {
      name: 'QQ',
      placeholder: '請輸入QQ號碼'
    },
    email: {
      name: '郵箱',
      placeholder: '請輸入郵箱地址'
    },
    address: {
      name: '地址',
      placeholder: '請輸入地址'
    },
    company: {
      name: '公司',
      placeholder: '請輸入公司名稱'
    }
  },
  leaveMessage: {
    choose: "請選擇",
    type: "留言分類選擇",
    boxTitle: "請留言",
    selectMessageType: "請選擇留言分類",
    validate: {
      companyEmpty: "公司名稱不能為空",
      companyMaxLength: "公司名稱最大長度為30字元",
      nameEmpty: "姓名不能為空",
      nameMaxLength: "姓名最大長度為20字元",
      phoneEmpty: "電話不能為空",
      phoneError: "請填寫正確的電話",
      emailEmpty: "電子郵件不能為空",
      emailError: "請填寫正確的電子郵件",
      emailMaxLength: "電子郵件最大長度為50字元",
      titleEmpty: "主題不能為空",
      titleMaxLength: "主題最大長度為50字元",
      contentEmpty: "內容不能為空",
      contentMaxLength: "內容最大長度為1000字元"
    },
    messageTypePk: {
      name: "留言分類"
    },
    company: {
      name: "公司名稱",
      markedWords: "請輸入公司名稱"
    },
    name: {
      name: "姓名",
      markedWords: "輸入您的昵稱，1-20個字元"
    },
    telephone: {
      name: "電話",
      markedWords: "請留下正確的電話號碼"
    },
    email: {
      name: "電子郵件",
      markedWords: "請留下有效的郵件地址"
    },
    title: {
      name: "主題",
      markedWords: "留言主題最多可輸入50個字元"
    },
    content: {
      name: "內容",
      markedWords: "留言內容最多為1000個字元"
    }
  },
  websocketInterrupt: "點擊此處繼續對話",
  boshInterrupt: "已斷開連接，請刷新重試",
  workTime: {
    server: "溫馨提示：尊敬的客戶，我們的服務時間是",
    clickNotice: "如果有重要的事情，請點擊",
    btn: "線上留言",
    notice: "給您帶來的不便，敬請諒解.",
    holiday: "溫馨提示：尊敬的客戶，我們的節假日時間是",
    sunday: "星期日",
    monday: "星期一",
    tuesday: "星期二",
    wednesday: "星期三",
    thursday: "星期四",
    friday: "星期五",
    saturday: "星期六",
  },
  userDatas: {
    visitorPre: "visitor"
  },
  queue: {
    netError: '網路問題,您已離開',
  },
  submit: "確定",
  cancel: "取消",
  robot: {
    answer: "非常抱歉，不能回答你的問題。如需進一步諮詢，請點擊這裏，轉接人工客服。",
    questions: ["投訴"],
    clientJump: '請點擊這裏',
    clientJumpReplace: '請點擊<a class="robotResp">這裏</a>',
    jumpToNormal: "不能查找到答案，是否需要轉人工服務?"
  },
  front: {
    toolsLabel: {
      problem: "右側常見問題",
      font: "字體",
      face: "表情",
      screenCapture: "螢幕截圖",
      sendFile: "發送檔",
      satisfaction: "滿意度評價",
      audio: "語音通話",
      saveRecord: "保存對話記錄",
      sendImg: "發送圖片"
    },
    histroyRecords: "消息記錄",
    fonts: ["微軟雅黑", "宋體", "楷體", "華文魏碑"],
    screenCapture: "截圖時隱藏當前窗口",
    closeBtn: "結束對話",
    sendBtn: "發送",
    enterBtn: "按Enter鍵發送消息",
    crtlEnterBtn: "按Ctrl+Enter鍵發送消息",
    mcontentplaceholder: '請輸入您想諮詢的問題...'
  },
  changeTitle: {
    pre: '[提醒]',
    timeout: '對話超時',
    rest: '休息超時',
    screenCapture: '截屏中',
    newMsgPre: '[新消息]',
    msgPre: ''
  },
  overLoad: '訪客您好，您的刷新次數過於頻繁，請您關閉頁面重新進入。',
  contextMenu: {
    download: '下載圖片'
  },
  mobileInputError: '輸入框顯示問題,建議更換流覽器',
  emptyText: '暫無數據',
  language: 'zh_TW',
  guide: {
    jumpToChat: '線上客服',
    des: '求助智能機器人獲取快速解答',
    questions: '大家都在問',
    plugins: '自助服務'
  }
}