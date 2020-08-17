<?xml version="1.0" encoding="utf-8"?>
<ConteXtorStudio Version="Desktop Studio 2.0.2.131" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" noNamespaceSchemaLocation="XsdStudio.xsd">
	<UpdatePackages />
	<Evolutions>
		<Evolution Version="1.0" Date="2020/8/10"><![CDATA[Project creation]]></Evolution>
		<Evolution Version="2.0" Date="2020/8/12"><![CDATA[project creation]]></Evolution>
		<Evolution Version="3.0" Date="2020/8/13"><![CDATA[project creation]]></Evolution>
		<Evolution Version="3.1" Date="2020/8/14"><![CDATA[project creation]]></Evolution>
		<Evolution Version="3.2" Date="2020/8/14"><![CDATA[project creation]]></Evolution>
	</Evolutions>
	<PROCESSUS>
		<PROCESS Name="GLOBAL" Key="NoKey" Comment="Global Processus" CtxtId="c799270e-62ac-4a37-8029-b0a40b0ac657">
			<_DECLAREVAR>
				<STRUCTUREDON Name="GLOBAL">
					<OBJDON Name="PrjVersion">3.2</OBJDON>
					<OBJDON Name="PrjClient"><![CDATA[SAP]]></OBJDON>
					<OBJDON Name="PrjName">ZFIE4060Flow</OBJDON>
					<OBJDON Name="PrjDate">14/08/2020</OBJDON>
					<OBJDON Name="PrjLabel"><![CDATA[ZFIE4060 Flow]]></OBJDON>
					<OBJDON Name="PrjComment"><![CDATA[]]></OBJDON>
					<OBJDON Name="LicenceURL" />
					<STRUCTUREDON Name="Xc_MessBoxHtml">
						<OBJDON Name="Style">style="font-size:12pt;font-family:'Arial'"</OBJDON>
						<OBJDON Name="ErrColor">white</OBJDON>
						<OBJDON Name="InfoColor">white</OBJDON>
						<OBJDON Name="ChoiceColor">white</OBJDON>
						<OBJDON Name="WarningColor">white</OBJDON>
						<OBJDON Name="ErrIcon">Critical.gif</OBJDON>
						<OBJDON Name="InfoIcon">Info.gif</OBJDON>
						<OBJDON Name="ChoiceIcon">Pencil.gif</OBJDON>
						<OBJDON Name="WarningIcon">Warning.gif</OBJDON>
						<OBJDON Name="StyleButton">style="font-size:12px;font-family:'Arial';width:80px"</OBJDON>
						<OBJDON Name="StyleText">style="font-size=11pt;font-family='Arial'"</OBJDON>
						<OBJDON Name="IconSize">32</OBJDON>
					</STRUCTUREDON>
				</STRUCTUREDON>
			</_DECLAREVAR>
			<SCRIPTS>
				<SCRIPT Name="Constants" Src="lib\common\ctx.enum.js" Folder="Framework" />
				<SCRIPT Name="Ctx Core" Src="lib\ctx\ctx.core.js" Folder="Framework" />
				<SCRIPT Name="Ctx XML" Src="lib\ctx\ctx.xml.js" Folder="Framework" />
				<SCRIPT Name="Ctx Scenario" Src="lib\ctx\ctx.scenario.js" Folder="Framework" />
				<SCRIPT Name="Ctx Request" Src="lib\ctx\ctx.request.js" Folder="Framework" />
				<SCRIPT Name="Ctx Language" Src="lib\ctx\ctx.language.js" Folder="Framework" />
				<SCRIPT Name="Ctx Item" Src="lib\ctx\ctx.item.js" Folder="Framework" />
				<SCRIPT Name="Ctx Page" Src="lib\ctx\ctx.page.js" Folder="Framework" />
				<SCRIPT Name="Ctx Application" Src="lib\ctx\ctx.application.js" Folder="Framework" />
				<SCRIPT Name="Ctx Systray" Src="lib\ctx\ctx.systray.js" Folder="Framework" />
				<SCRIPT Name="Ctx Popup" Src="lib\ctx\ctx.popup.js" Folder="Framework" />
				<SCRIPT Name="Ctx Popup Bootstrap" Src="lib\ctx\ctx.popup.bootbox.js" Folder="Framework" />
				<SCRIPT Name="FSO library" Src="lib\utils\fso.js" Folder="Framework" />
				<SCRIPT Name="WMI library" Src="lib\utils\wmi.js" Folder="Framework" />
				<SCRIPT Name="WScript library" Src="lib\utils\wscript.js" Folder="Framework" />
				<SCRIPT Name="Ctx Diagnostic" Src="lib\ctx\ctx.diagnostic.js" Folder="Framework" />
				<SCRIPT Name="Ctx Galaxy" Src="lib\galaxy\galaxy.m2m.js" Folder="Framework" />
				<SCRIPT Name="Excel" Comment="Microsoft Excel 集成" Folder="Microsoft Office" Src="lib\office\excel.js" />
				<SCRIPT Name="SAP" Comment="SAP GUI Scripting" Folder="CRM 应用程序" Src="lib\sap\sapscripting.js" />
				<SCRIPT Name="SAP UI5" Src="lib\sapui5\sapui5.js" Folder="Framework" />
				<SCRIPT Name="Entities" Src="entities.js" IsWorkflowGenerated="Y" />
				<SCRIPT Name="Declarations" Src="zfie4060flow.resources.js" ReadOnly="Y" />
				<SCRIPT Name="Labels" Src="labels.js" />
				<SCRIPT Name="Global" Src="global.js" />
				<SCRIPT Src="newwork.js" IsWorkflowGenerated="Y" Name="newwork" />
			</SCRIPTS>
			<RESOURCES>
				<RESOURCE Name="popup" Src="%sdk%\templates\resources\popup\" Dest="popup" />
				<RESOURCE Name="agent16px" Src="%sdk%\templates\resources\bmp\agent.png" Dest="bmp" />
				<RESOURCE Name="accept16px" Src="%sdk%\templates\resources\bmp\accept.png" Dest="bmp" />
				<RESOURCE Name="cancel16px" Src="%sdk%\templates\resources\bmp\cancel.png" Dest="bmp" />
				<RESOURCE Name="help16px" Src="%sdk%\templates\resources\bmp\help.png" Dest="bmp" />
				<RESOURCE Name="information16px" Src="%sdk%\templates\resources\bmp\information.png" Dest="bmp" />
				<RESOURCE Name="repeat16px" Src="%sdk%\templates\resources\bmp\repeat.png" Dest="bmp" />
				<RESOURCE Name="stop16px" Src="%sdk%\templates\resources\bmp\stop.png" Dest="bmp" />
				<RESOURCE Name="warning16px" Src="%sdk%\templates\resources\bmp\warning.png" Dest="bmp" />
				<RESOURCE Name="record16px" Src="%sdk%\templates\resources\bmp\record.png" Dest="bmp" />
				<RESOURCE Name="agent32px" Src="%sdk%\templates\resources\bmp32\agent.png" Dest="bmp32" />
				<RESOURCE Name="accept32px" Src="%sdk%\templates\resources\bmp32\accept.png" Dest="bmp32" />
				<RESOURCE Name="cancel32px" Src="%sdk%\templates\resources\bmp32\cancel.png" Dest="bmp32" />
				<RESOURCE Name="help32px" Src="%sdk%\templates\resources\bmp32\help.png" Dest="bmp32" />
				<RESOURCE Name="information32px" Src="%sdk%\templates\resources\bmp32\information.png" Dest="bmp32" />
				<RESOURCE Name="user32px" Src="%sdk%\templates\resources\bmp32\user.png" Dest="bmp32" />
				<RESOURCE Name="warning32px" Src="%sdk%\templates\resources\bmp32\warning.png" Dest="bmp32" />
				<RESOURCE Name="agent64px" Src="%sdk%\templates\resources\bmp64\agent.png" Dest="bmp64" />
				<RESOURCE Name="hello64px" Src="%sdk%\templates\resources\bmp64\hello.png" Dest="bmp64" />
				<RESOURCE Name="hello128px" Src="%sdk%\templates\resources\bmp64\hello128.png" Dest="bmp64" />
				<RESOURCE Name="gif" Src="%sdk%\templates\resources\gif\" Dest="gif" />
			</RESOURCES>
			<_ECRANS />
			<WORKFLOWS>
				<WORKFLOW Name="newWork" Src="%workflows%\newwork.xaml" CtxtId="76930333-47f8-4d2d-a650-e2bf153e292d" DisplayName="自动批量过账" StepTimeout="60" ScenarioTimeout="60000" GeneratedScenarioName="自动批量过账" />
			</WORKFLOWS>
			<ACTIONS />
			<EVENTS />
			<SCENARII>
				<Steps />
			</SCENARII>
		</PROCESS>
		<PROCESS Name="POPUPS" CtxtId="fe6f84b6-a897-4b30-97c2-2d281a26bd5a" Nature="POPUP">
			<SCRIPTS />
			<SCENARII>
				<Steps />
			</SCENARII>
			<ACTIONS />
			<EVENTS />
			<_DECLAREVAR>
				<STRUCTUREDON Name="POPUPS" />
			</_DECLAREVAR>
			<_ECRANS />
		</PROCESS>
	</PROCESSUS>
	<APPLICATIONS>
		<APPLI Name="SAPLogon760" CtxtId="cb163dca-2909-41ac-af0a-6b8fbd152a8c" Nature="UIAUTOMATION" TechnoSDK="V3" Sync="0" PendingDelay="0">
			<SCRIPTS />
			<CRITERE>
				<EXE Scan="Full"><![CDATA[SAPLOGON.EXE]]></EXE>
			</CRITERE>
			<_DECLAREVAR>
				<STRUCTUREDON Name="SAPLogon760" />
			</_DECLAREVAR>
			<_ECRANS>
				<PAGE Name="pWindowSAPLogon76" Comment="Window - SAP Logon 760" CtxtId="6a91dcec-8e07-48b1-b334-aee99303c57a" SubpagesType="Multiple" RefreshMode="Window">
					<CRITERE>
						<Name Scan="Full"><![CDATA[SAP Logon 760]]></Name>
						<ClassName Scan="Full"><![CDATA[#32770]]></ClassName>
					</CRITERE>
					<TRACK_EVENTS>
						<TRACK_EVENT Name="REFRESH(WINDOWOPENED(DESCENDANTS))" />
					</TRACK_EVENTS>
					<OBJETS>
						<OBJET Name="stS4QAS" CtxtId="861d0bb6-d8e5-470b-aba1-f0cda02f626a">
							<CRITERE>
								<TAG Name="Text" Scope="All" CapturedPos="16.R0R14R0R1R0R0R6R0">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[S4 QAS]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pSAP" Comment="GuiMainWindow - SAP" CtxtId="d07c1b27-1aca-4add-9676-e9b23bd38bb2" CustomType="GuiMainWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Type Scan="Full"><![CDATA[GuiMainWindow]]></Type>
					</CRITERE>
					<OBJETS>
						<OBJET Name="edClient" CtxtId="d83f5c57-9bc5-4a8f-91eb-0ec9a9130e20" CustomType="GuiTextField" SpecIndex="1">
							<CRITERE>
								<TAG Name="GuiTextField" Scope="All" CapturedPos="9.R0R4R1">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[RSYST-MANDT]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="edUser" CtxtId="725e9f4e-251d-4fdb-92f4-785cc74f9cfe" CustomType="GuiTextField" SpecIndex="2">
							<CRITERE>
								<TAG Name="GuiTextField" Scope="All" CapturedPos="9.R0R4R5">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[RSYST-BNAME]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="oPassword" CtxtId="311f09ac-d759-4cb8-a195-0646940cca92" CustomType="GuiPasswordField" SpecIndex="3">
							<CRITERE>
								<TAG Name="GuiPasswordField" Scope="All" CapturedPos="9.R0R4R7">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[RSYST-BCODE]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btGuiButton" CtxtId="3a9ef0f1-faa9-4da0-aa9f-4c5d67a277cc" CustomType="GuiButton" SpecIndex="4">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="9.R0R1R0">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[0]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btNewPassword" CtxtId="d3f6aad6-3f24-460c-9815-00c7a89a0295" CustomType="GuiButton" MustExist="Y">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="9.R0R3R0">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[5]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pSAPTCode" Comment="GuiMainWindow - SAP" CtxtId="af9c74cf-1479-4bc0-b2f1-f21eca922b61" CustomType="GuiMainWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Type Scan="Full"><![CDATA[GuiMainWindow]]></Type>
					</CRITERE>
					<OBJETS>
						<OBJET Name="oGuiOkCodeField" CtxtId="148c6887-c8f4-42d0-af21-fd2c8641cee0" CustomType="GuiOkCodeField" SpecIndex="1">
							<CRITERE>
								<TAG Name="GuiOkCodeField" Scope="All" CapturedPos="10.R0R1R17">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[okcd]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btGuiButton" CtxtId="2b147123-1c83-41dd-a0af-a00be193df8e" CustomType="GuiButton" SpecIndex="2">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="10.R0R1R0">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[0]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btCreate" CtxtId="f5c1c899-fc48-4951-81b3-4f827695274e" CustomType="GuiButton" MustExist="Y">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="10.R0R3R9">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[48]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="oSAPGUIImageCtrl1" CtxtId="f6744f87-1114-471b-9669-5fd56d8eea23" CustomType="GuiCtrlPicture" MustExist="Y">
							<CRITERE>
								<TAG Name="GuiCtrlPicture" Scope="All" CapturedPos="10.R0R4R0R0R0R1R0">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[shell]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pFirst" Comment="GuiMainWindow" CtxtId="dfc1286f-3560-4be6-9b75-0914418bbd02" CustomType="GuiMainWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Type Scan="Full"><![CDATA[GuiMainWindow]]></Type>
					</CRITERE>
					<OBJETS>
						<OBJET Name="edVoucherNo" CtxtId="eb8222c3-72b9-43cc-94a7-9e8c9f4fd250" CustomType="GuiTextField" MustExist="Y" SpecIndex="1">
							<CRITERE>
								<TAG Name="GuiTextField" Scope="All" CapturedPos="11.R0R4R2">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[S_ZPBLNR-LOW]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="edCompanyCode" CtxtId="9910251f-399c-4579-9ae8-f361168419a7" CustomType="GuiCTextField" SpecIndex="2">
							<CRITERE>
								<TAG Name="GuiCTextField" Scope="All" CapturedPos="11.R0R4R7">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[P_BUKRS]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="edCertificateYear" CtxtId="8d749086-87e0-4746-80f5-ced9f1bedd94" CustomType="GuiTextField" SpecIndex="3">
							<CRITERE>
								<TAG Name="GuiTextField" Scope="All" CapturedPos="11.R0R4R14">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[S_GJAHR-LOW]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="edHigh" CtxtId="0951bfcc-dbb9-44c6-98f6-0944c1e52274" CustomType="GuiCTextField" SpecIndex="4">
							<CRITERE>
								<TAG Name="GuiCTextField" Scope="All" CapturedPos="11.R0R4R34">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[S_ERDAT-LOW]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="edLow" CtxtId="377c510b-ec88-4230-8c95-aef3d01d52f4" CustomType="GuiCTextField" SpecIndex="5">
							<CRITERE>
								<TAG Name="GuiCTextField" Scope="All" CapturedPos="11.R0R4R36">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[S_ERDAT-HIGH]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btGuiButton" CtxtId="a6a9ece1-981a-4ef4-bb14-f489263a7851" CustomType="GuiButton" SpecIndex="6">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="11.R0R3R0">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[8]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btTo" CtxtId="ec4ab92e-5d25-438b-bd67-8b3666485927" CustomType="GuiButton" MustExist="Y">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="11.R0R4R5">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[%_S_ZPBLNR_%_APP_%-VALU_PUSH]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pSecond" Comment="GuiMainWindow " CtxtId="8acb330c-bb70-49fb-aa80-238df03c48be" CustomType="GuiMainWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Type Scan="Full"><![CDATA[GuiMainWindow]]></Type>
					</CRITERE>
					<OBJETS>
						<OBJET Name="btPass" CtxtId="a6a19d4a-b88f-48df-9934-d0a2fc74a5a9" CustomType="GuiButton" MustExist="Y" SpecIndex="1">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="12.R0R3R3">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[17]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btAdd" CtxtId="e42b7d7a-c608-4d77-8429-f5fe0145404b" CustomType="GuiButton" MustExist="Y">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="12.R0R3R0">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[13]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="oGuiOkCodeField" CtxtId="58a52d2c-19a1-4b10-8ad1-1a2dd1ebe44e" CustomType="GuiOkCodeField" SpecIndex="3">
							<CRITERE>
								<TAG Name="GuiOkCodeField" Scope="All" CapturedPos="12.R0R1R17">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[okcd]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btGuiButton" CtxtId="7d5ec60a-183e-4646-bbf1-764ba133c7d5" CustomType="GuiButton" SpecIndex="4">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="12.R0R1R0">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[0]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="back" CtxtId="d7012438-523e-4504-a405-22126aa4b516" CustomType="GuiButton" SpecIndex="5">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="12.R0R1R3">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[3]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pThird" Comment="GuiMainWindow" CtxtId="f76ceada-0f82-4270-ad7e-55c4e2ff1c9a" CustomType="GuiMainWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Type Scan="Full"><![CDATA[GuiMainWindow]]></Type>
					</CRITERE>
					<OBJETS>
						<OBJET Name="edPassDate" CtxtId="fb82a28b-1043-4326-98e4-72a7a2eeb7d0" CustomType="GuiCTextField" MustExist="Y" SpecIndex="1">
							<CRITERE>
								<TAG Name="GuiCTextField" Scope="All" CapturedPos="13.R0R4R23">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[ZSEXP_PAY_HDR-BUDAT]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btFinish" CtxtId="d0af11da-18be-45cf-8e79-a57e767b080f" CustomType="GuiButton" MustExist="Y" SpecIndex="2">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="13.R0R3R0">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[18]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="oGuiOkCodeField" CtxtId="c2198d58-d61b-4397-b568-50d05e941af8" CustomType="GuiOkCodeField" SpecIndex="3">
							<CRITERE>
								<TAG Name="GuiOkCodeField" Scope="All" CapturedPos="13.R0R1R17">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[okcd]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btGuiButton" CtxtId="12956230-0d8a-4653-9958-9abb27ae56d8" CustomType="GuiButton" SpecIndex="4">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="13.R0R1R0">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[0]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btback" CtxtId="ecd0bdba-d82d-4b73-b6c1-dda0ab450339" CustomType="GuiButton">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="13.R0R1R3">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[3]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
			</_ECRANS>
			<ACTIONS />
			<EVENTS />
			<SCENARII>
				<Steps />
			</SCENARII>
		</APPLI>
	</APPLICATIONS>
	<CONTEXT Id="153df286-49d1-4579-a60c-1b22c35024b4" />
</ConteXtorStudio>