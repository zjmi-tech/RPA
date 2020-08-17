// Desktop Studio
// Auto-generated declaration file : do not modify !



var POPUPS = POPUPS || ctx.addApplication('POPUPS');



var SAPLogon760 = ctx.addApplication('SAPLogon760', {"nature":"UIAUTOMATION","path":"C:\\Program Files (x86)\\SAP\\FrontEnd\\SAPgui\\saplogon.exe"});

SAPLogon760.pWindowSAPLogon76 = SAPLogon760.addPage('pWindowSAPLogon76', {"comment":"Window - SAP Logon 760"});
SAPLogon760.pWindowSAPLogon76.stS4QAS = SAPLogon760.pWindowSAPLogon76.addItem('stS4QAS');

SAPLogon760.pSAP = SAPLogon760.addPage('pSAP', {"comment":"GuiMainWindow - SAP","nature":"SAPGUI","customType":"GuiMainWindow"});
SAPLogon760.pSAP.edClient = SAPLogon760.pSAP.addItem('edClient', {"customType":"GuiTextField"});
SAPLogon760.pSAP.edUser = SAPLogon760.pSAP.addItem('edUser', {"customType":"GuiTextField"});
SAPLogon760.pSAP.oPassword = SAPLogon760.pSAP.addItem('oPassword', {"customType":"GuiPasswordField"});
SAPLogon760.pSAP.btGuiButton = SAPLogon760.pSAP.addItem('btGuiButton', {"customType":"GuiButton"});
SAPLogon760.pSAP.btNewPassword = SAPLogon760.pSAP.addItem('btNewPassword', {"mustExist":true,"customType":"GuiButton"});

SAPLogon760.pSAPTCode = SAPLogon760.addPage('pSAPTCode', {"comment":"GuiMainWindow - SAP","nature":"SAPGUI","customType":"GuiMainWindow"});
SAPLogon760.pSAPTCode.oGuiOkCodeField = SAPLogon760.pSAPTCode.addItem('oGuiOkCodeField', {"customType":"GuiOkCodeField"});
SAPLogon760.pSAPTCode.btGuiButton = SAPLogon760.pSAPTCode.addItem('btGuiButton', {"customType":"GuiButton"});
SAPLogon760.pSAPTCode.btCreate = SAPLogon760.pSAPTCode.addItem('btCreate', {"mustExist":true,"customType":"GuiButton"});
SAPLogon760.pSAPTCode.oSAPGUIImageCtrl1 = SAPLogon760.pSAPTCode.addItem('oSAPGUIImageCtrl1', {"mustExist":true,"customType":"GuiCtrlPicture"});

SAPLogon760.pFirst = SAPLogon760.addPage('pFirst', {"comment":"GuiMainWindow","nature":"SAPGUI","customType":"GuiMainWindow"});
SAPLogon760.pFirst.edVoucherNo = SAPLogon760.pFirst.addItem('edVoucherNo', {"mustExist":true,"customType":"GuiTextField"});
SAPLogon760.pFirst.edCompanyCode = SAPLogon760.pFirst.addItem('edCompanyCode', {"customType":"GuiCTextField"});
SAPLogon760.pFirst.edCertificateYear = SAPLogon760.pFirst.addItem('edCertificateYear', {"customType":"GuiTextField"});
SAPLogon760.pFirst.edHigh = SAPLogon760.pFirst.addItem('edHigh', {"customType":"GuiCTextField"});
SAPLogon760.pFirst.edLow = SAPLogon760.pFirst.addItem('edLow', {"customType":"GuiCTextField"});
SAPLogon760.pFirst.btGuiButton = SAPLogon760.pFirst.addItem('btGuiButton', {"customType":"GuiButton"});
SAPLogon760.pFirst.btTo = SAPLogon760.pFirst.addItem('btTo', {"mustExist":true,"customType":"GuiButton"});

SAPLogon760.pSecond = SAPLogon760.addPage('pSecond', {"comment":"GuiMainWindow ","nature":"SAPGUI","customType":"GuiMainWindow"});
SAPLogon760.pSecond.btPass = SAPLogon760.pSecond.addItem('btPass', {"mustExist":true,"customType":"GuiButton"});
SAPLogon760.pSecond.btAdd = SAPLogon760.pSecond.addItem('btAdd', {"mustExist":true,"customType":"GuiButton"});
SAPLogon760.pSecond.oGuiOkCodeField = SAPLogon760.pSecond.addItem('oGuiOkCodeField', {"customType":"GuiOkCodeField"});
SAPLogon760.pSecond.btGuiButton = SAPLogon760.pSecond.addItem('btGuiButton', {"customType":"GuiButton"});
SAPLogon760.pSecond.back = SAPLogon760.pSecond.addItem('back', {"customType":"GuiButton"});

SAPLogon760.pThird = SAPLogon760.addPage('pThird', {"comment":"GuiMainWindow","nature":"SAPGUI","customType":"GuiMainWindow"});
SAPLogon760.pThird.edPassDate = SAPLogon760.pThird.addItem('edPassDate', {"mustExist":true,"customType":"GuiCTextField"});
SAPLogon760.pThird.btFinish = SAPLogon760.pThird.addItem('btFinish', {"mustExist":true,"customType":"GuiButton"});
SAPLogon760.pThird.oGuiOkCodeField = SAPLogon760.pThird.addItem('oGuiOkCodeField', {"customType":"GuiOkCodeField"});
SAPLogon760.pThird.btGuiButton = SAPLogon760.pThird.addItem('btGuiButton', {"customType":"GuiButton"});
SAPLogon760.pThird.btback = SAPLogon760.pThird.addItem('btback', {"customType":"GuiButton"});

GLOBAL.events.START.on(function(ev) { 
    GLOBAL.createExtendedConnector(e.extendedConnector.UIAutomation, '', '', '');
});
