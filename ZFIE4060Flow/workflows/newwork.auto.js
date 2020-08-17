
// ----------------------------------------------------------------
//   Test menu for scenario 自动批量过账 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', '自动批量过账', 'Test 自动批量过账', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
			GLOBAL.scenarios.自动批量过账.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario 自动批量过账 Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: 自动批量过账
// ----------------------------------------------------------------
GLOBAL.scenario({ 自动批量过账: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(60000000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(60000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	// Initialize Loop counters
	sc.localData.Startloop = 0;
	
	sc.step(GLOBAL.steps.Kill_saplogon_exe_P, GLOBAL.steps.Kill_excel_exe_Proc);
	sc.step(GLOBAL.steps.Kill_excel_exe_Proc, GLOBAL.steps.Delay_5000_ms_Proce);
	sc.step(GLOBAL.steps.Delay_5000_ms_Proce, GLOBAL.steps.Initialize_Excel);
	sc.step(GLOBAL.steps.Initialize_Excel, GLOBAL.steps.Open_existing_Excel_f);
	sc.step(GLOBAL.steps.Open_existing_Excel_f, GLOBAL.steps.Activate_worksheet);
	sc.step(GLOBAL.steps.Activate_worksheet, GLOBAL.steps.Get_one_value);
	sc.step(GLOBAL.steps.Get_one_value, GLOBAL.steps.Get_one_value_1);
	sc.step(GLOBAL.steps.Get_one_value_1, GLOBAL.steps.Get_one_value_2);
	sc.step(GLOBAL.steps.Get_one_value_2, GLOBAL.steps.Get_one_value_3);
	sc.step(GLOBAL.steps.Get_one_value_3, GLOBAL.steps.Get_one_value_4);
	sc.step(GLOBAL.steps.Get_one_value_4, GLOBAL.steps.Start_SAPLogon760_P);
	sc.step(GLOBAL.steps.Start_SAPLogon760_P, GLOBAL.steps.Delay_3000_ms_Proce);
	sc.step(GLOBAL.steps.Delay_3000_ms_Proce, GLOBAL.steps.pSAPTCode_management);
	sc.step(GLOBAL.steps.pSAPTCode_management, GLOBAL.steps.Activate_worksheet_1);
	sc.step(GLOBAL.steps.Activate_worksheet_1, GLOBAL.steps.Start_loop);
	sc.step(GLOBAL.steps.Start_loop, GLOBAL.steps.Exit_loop);
	sc.step(GLOBAL.steps.Exit_loop, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Exit_loop, GLOBAL.steps.Get_one_value_5);
	sc.step(GLOBAL.steps.Get_one_value_5, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Get_one_value_5, GLOBAL.steps.Get_one_value_6);
	sc.step(GLOBAL.steps.Get_one_value_6, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Get_one_value_6, GLOBAL.steps.Get_one_value_7);
	sc.step(GLOBAL.steps.Get_one_value_7, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Get_one_value_7, GLOBAL.steps.Get_one_value_8);
	sc.step(GLOBAL.steps.Get_one_value_8, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Get_one_value_8, GLOBAL.steps.pFirst_management);
	sc.step(GLOBAL.steps.pFirst_management, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.pFirst_management, GLOBAL.steps.pSecond_management);
	sc.step(GLOBAL.steps.pSecond_management, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.pSecond_management, GLOBAL.steps.Delay_5000_ms);
	sc.step(GLOBAL.steps.Delay_5000_ms, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Delay_5000_ms, GLOBAL.steps.pThird_management, 'Default');
	sc.step(GLOBAL.steps.Delay_5000_ms, GLOBAL.steps.Delay_1000_ms);
	sc.step(GLOBAL.steps.pThird_management, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.pThird_management, GLOBAL.steps.Set_one_value);
	sc.step(GLOBAL.steps.Set_one_value, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Set_one_value, GLOBAL.steps.Loops_to_the_start_bl);
	sc.step(GLOBAL.steps.Loops_to_the_start_bl, GLOBAL.steps.Start_loop, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Loops_to_the_start_bl, GLOBAL.steps.Save_Excel_file);
	sc.step(GLOBAL.steps.Save_Excel_file, GLOBAL.steps.End_Excel);
	sc.step(GLOBAL.steps.End_Excel, GLOBAL.steps.Display_msgbox_endMe);
	sc.step(GLOBAL.steps.Display_msgbox_endMe, GLOBAL.steps.End_scenario);
	sc.step(GLOBAL.steps.End_scenario, null);
	sc.step(GLOBAL.steps.Delay_1000_ms, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Delay_1000_ms, GLOBAL.steps.pSecond_management_1);
	sc.step(GLOBAL.steps.pSecond_management_1, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.pSecond_management_1, GLOBAL.steps.Set_one_value_1);
	sc.step(GLOBAL.steps.Set_one_value_1, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Set_one_value_1, GLOBAL.steps.Loops_to_the_start_bl);
}}, ctx.dataManagers.rootData).setId('76930333-47f8-4d2d-a650-e2bf153e292d') ;

// ----------------------------------------------------------------
//   Step: Kill_saplogon_exe_P
// ----------------------------------------------------------------
GLOBAL.step({ Kill_saplogon_exe_P: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWork', '42c21016-ec7b-4dad-9aed-6874cb3ec597') ;
	// Forces a running program to close. All instances of the running process are killed. The process to kill is found through the program filename. If possible, use the close command for Applications and Pages, because it allows the program to shut down gracefully. "Kill process" will shut down the program without saving any changes or data. To use this Activity, you must include the WMI library in the project._Process
	var __result = ctx.wmi.query('Win32_Process', [ 'ProcessId', 'Name', 'ExecutionState' ], "Name='saplogon.exe'");
	if(__result.length > 0) {
	  for(var __counter = 0; __counter<__result.length; __counter++) {
	    var __result2 = ctx.wmi.query('Win32_Process', [ 'ProcessId', 'Name', 'ExecutionState' ], "ProcessId="+__result[__counter].ProcessId);
	    if(__result2.length > 0) {
	      ctx.wmi.killProcess(__result2[0].ProcessId);
	    }
	  }
	  ctx.log("All running instances of process 'saplogon.exe' have been killed.", e.logIconType.Info);
	}
	else {
	  ctx.log("No found running instance of process 'saplogon.exe'.", e.logIconType.Warning);
	}
	sc.endStep(); // Kill_excel_exe_Proc
	return;
}});

// ----------------------------------------------------------------
//   Step: Kill_excel_exe_Proc
// ----------------------------------------------------------------
GLOBAL.step({ Kill_excel_exe_Proc: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWork', '8794ca5d-5b91-48fc-98d7-d043b8f02e1b') ;
	// Forces a running program to close. All instances of the running process are killed. The process to kill is found through the program filename. If possible, use the close command for Applications and Pages, because it allows the program to shut down gracefully. "Kill process" will shut down the program without saving any changes or data. To use this Activity, you must include the WMI library in the project._Process
	var __result = ctx.wmi.query('Win32_Process', [ 'ProcessId', 'Name', 'ExecutionState' ], "Name='EXCEL.EXE'");
	if(__result.length > 0) {
	  for(var __counter = 0; __counter<__result.length; __counter++) {
	    var __result2 = ctx.wmi.query('Win32_Process', [ 'ProcessId', 'Name', 'ExecutionState' ], "ProcessId="+__result[__counter].ProcessId);
	    if(__result2.length > 0) {
	      ctx.wmi.killProcess(__result2[0].ProcessId);
	    }
	  }
	  ctx.log("All running instances of process 'EXCEL.EXE' have been killed.", e.logIconType.Info);
	}
	else {
	  ctx.log("No found running instance of process 'EXCEL.EXE'.", e.logIconType.Warning);
	}
	sc.endStep(); // Delay_5000_ms_Proce
	return;
}});

// ----------------------------------------------------------------
//   Step: Delay_5000_ms_Proce
// ----------------------------------------------------------------
GLOBAL.step({ Delay_5000_ms_Proce: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWork', 'ee9d72db-2c11-45b8-9165-fa54c011c2a4') ;
	// Delays execution for some milliseconds.
	// This is the standard pause that should be used in normal situations. It simply pauses the execution of the script for the indicated period.
	// It allows user interaction with Desktop Agent and other programs during the pause.
	// This can be useful to wait for a process to complete, to avoid going too fast for the operating system, or to give the user time to react._Process
	ctx.wait(function(ev) {
		sc.endStep(); // Initialize_Excel
		return;
	}, 5000);
}});

// ----------------------------------------------------------------
//   Step: Initialize_Excel
// ----------------------------------------------------------------
GLOBAL.step({ Initialize_Excel: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWork', '2b308633-070a-4a13-8c32-eddb211ebd64') ;
	// Initializes Excel Library with different modes.
	ctx.options.excel.newXlsInstance = false;
	ctx.options.excel.visible = true;
	ctx.options.excel.displayAlerts = false;
	ctx.excel.initialize();
	sc.endStep(); // Open_existing_Excel_f
	return;
}});

// ----------------------------------------------------------------
//   Step: Open_existing_Excel_f
// ----------------------------------------------------------------
GLOBAL.step({ Open_existing_Excel_f: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWork', 'a1aa74aa-f9e1-4453-bf8f-5a69d736d95c') ;
	// Open existing Excel file.
	ctx.excel.file.open('D:\\RPA\\WorkSpace\\ZFIE4060_LIST.xlsx');
	sc.endStep(); // Activate_worksheet
	return;
}});

// ----------------------------------------------------------------
//   Step: Activate_worksheet
// ----------------------------------------------------------------
GLOBAL.step({ Activate_worksheet: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWork', 'f752e0cd-ffa4-4fd0-a581-f69d6ba80e7b') ;
	// Activate an Excel worksheet from the active workbook.
	ctx.excel.sheet.activate('Sheet1');
	sc.endStep(); // Get_one_value
	return;
}});

// ----------------------------------------------------------------
//   Step: Get_one_value
// ----------------------------------------------------------------
GLOBAL.step({ Get_one_value: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWork', '4a51e01a-2679-4682-b602-3e6e24b1c886') ;
	// Get one value from a cell
	rootData.SAPLogon760Data.pSAPData.edClient = ctx.excel.sheet.getCell(2, 'C');
	sc.endStep(); // Get_one_value_1
	return;
}});

// ----------------------------------------------------------------
//   Step: Get_one_value_1
// ----------------------------------------------------------------
GLOBAL.step({ Get_one_value_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWork', '4fe74ce7-5579-4c5f-8185-5e99f9d672c5') ;
	// Get one value from a cell
	rootData.SAPLogon760Data.pSAPData.edUser = ctx.excel.sheet.getCell(2, 'A');
	sc.endStep(); // Get_one_value_2
	return;
}});

// ----------------------------------------------------------------
//   Step: Get_one_value_2
// ----------------------------------------------------------------
GLOBAL.step({ Get_one_value_2: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWork', '6bcb26fe-b505-4523-b568-0fdd06c12d00') ;
	// Get one value from a cell
	rootData.SAPLogon760Data.pSAPData.oPassword = ctx.excel.sheet.getCell(2, 'B');
	sc.endStep(); // Get_one_value_3
	return;
}});

// ----------------------------------------------------------------
//   Step: Get_one_value_3
// ----------------------------------------------------------------
GLOBAL.step({ Get_one_value_3: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWork', 'b0045693-5278-415f-9f95-75ad526cb277') ;
	// Get one value from a cell
	rootData.SAPLogon760Data.pSAPData.IP = ctx.excel.sheet.getCell(2, 'D');
	sc.endStep(); // Get_one_value_4
	return;
}});

// ----------------------------------------------------------------
//   Step: Get_one_value_4
// ----------------------------------------------------------------
GLOBAL.step({ Get_one_value_4: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWork', 'a4628128-be00-4308-a9ce-e3a313e8925a') ;
	// Get one value from a cell
	rootData.SAPLogon760Data.pSAPData.SID = ctx.excel.sheet.getCell(2, 'E');
	sc.endStep(); // Start_SAPLogon760_P
	return;
}});

// ----------------------------------------------------------------
//   Step: Start_SAPLogon760_P
// ----------------------------------------------------------------
GLOBAL.step({ Start_SAPLogon760_P: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWork', '25f9fd5d-24b1-4640-8570-f8efbfca0035') ;
	// Starts an Application._Process
	SAPLogon760.start();
	sc.endStep(); // Delay_3000_ms_Proce
	return;
}});

// ----------------------------------------------------------------
//   Step: Delay_3000_ms_Proce
// ----------------------------------------------------------------
GLOBAL.step({ Delay_3000_ms_Proce: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWork', 'beb3e7f4-c5d0-4235-a873-c52d809e8a84') ;
	// Delays execution for some milliseconds.
	// This is the standard pause that should be used in normal situations. It simply pauses the execution of the script for the indicated period.
	// It allows user interaction with Desktop Agent and other programs during the pause.
	// This can be useful to wait for a process to complete, to avoid going too fast for the operating system, or to give the user time to react._Process
	ctx.wait(function(ev) {
		sc.endStep(); // pSAPTCode_management
		return;
	}, 3000);
}});

// ----------------------------------------------------------------
//   Step: pSAPTCode_management
// ----------------------------------------------------------------
GLOBAL.step({ pSAPTCode_management: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWork', '734aba73-4ebe-4b62-a682-5cfdfa705681') ;
	// Wait until the Page loads
	SAPLogon760.pSAPTCode.wait(function(ev) {
		SAPLogon760.pSAPTCode.oGuiOkCodeField.set('zfie4060');
		SAPLogon760.pSAPTCode.btGuiButton.click();
		sc.endStep(); // Activate_worksheet_1
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: Activate_worksheet_1
// ----------------------------------------------------------------
GLOBAL.step({ Activate_worksheet_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWork', '709e3771-495c-4fb9-a2f4-b3fe00d4de28') ;
	// Activate an Excel worksheet from the active workbook.
	ctx.excel.sheet.activate('Sheet2');
	sc.endStep(); // Start_loop
	return;
}});

// ----------------------------------------------------------------
//   Step: Start_loop
// ----------------------------------------------------------------
GLOBAL.step({ Start_loop: function(ev, sc, st) {
	var rootData = sc.data;
	
	ctx.workflow('newWork', '371f6690-b7ee-406c-9e59-f5ef227332e3') ;
	// Starting instruction for a loop.
	if (sc.localData.Startloop < 0) sc.localData.Startloop = 0;
	sc.endStep(); // Exit_loop
	return;
}});

// ----------------------------------------------------------------
//   Step: Exit_loop
// ----------------------------------------------------------------
GLOBAL.step({ Exit_loop: function(ev, sc, st) {
	var rootData = sc.data;
	
	ctx.workflow('newWork', '09d12b2e-8dc2-46a8-be50-15ea1955c478') ;
	// Test block to exit from a loop.
	if (sc.localData.Startloop == ctx.excel.sheet.getLastRow('A2')-2)
	{
		sc.localData.Startloop = -1 ;
		sc.endStep('NEXT_LOOP');
		return ;
	}
	sc.endStep(); // Get_one_value_5
	return;
}});

// ----------------------------------------------------------------
//   Step: Get_one_value_5
// ----------------------------------------------------------------
GLOBAL.step({ Get_one_value_5: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWork', '9c8febaa-c745-4db1-b0ae-5ad7cf9852b7') ;
	// Get one value from a cell
	rootData.SAPLogon760Data.pFirstData.edCompanyCode = ctx.excel.sheet.getCell(sc.localData.Startloop + 2, 'A');
	sc.endStep(); // Get_one_value_6
	return;
}});

// ----------------------------------------------------------------
//   Step: Get_one_value_6
// ----------------------------------------------------------------
GLOBAL.step({ Get_one_value_6: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWork', '0dc3eb6e-3fb0-4e14-becd-97649642b357') ;
	// Get one value from a cell
	rootData.SAPLogon760Data.pFirstData.edCertificateYear = ctx.excel.sheet.getCell(sc.localData.Startloop + 2, 'B');
	sc.endStep(); // Get_one_value_7
	return;
}});

// ----------------------------------------------------------------
//   Step: Get_one_value_7
// ----------------------------------------------------------------
GLOBAL.step({ Get_one_value_7: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWork', 'b26d24c8-88aa-4ea1-8fe9-bfec11ddd98c') ;
	// Get one value from a cell
	rootData.SAPLogon760Data.pFirstData.edVoucherNo = ctx.excel.sheet.getCell(sc.localData.Startloop + 2, 'C');
	sc.endStep(); // Get_one_value_8
	return;
}});

// ----------------------------------------------------------------
//   Step: Get_one_value_8
// ----------------------------------------------------------------
GLOBAL.step({ Get_one_value_8: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWork', '8e66b55a-1f6b-49e7-be94-e16c564019d3') ;
	// Get one value from a cell
	rootData.SAPLogon760Data.pThirdData.edPassDate = ctx.excel.sheet.getCell(sc.localData.Startloop + 2, 'D');
	sc.endStep(); // pFirst_management
	return;
}});

// ----------------------------------------------------------------
//   Step: pFirst_management
// ----------------------------------------------------------------
GLOBAL.step({ pFirst_management: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWork', 'a5740bae-d9b3-4cbc-8e79-ce74fc46b10a') ;
	// Wait until the Page loads
	SAPLogon760.pFirst.wait(function(ev) {
		SAPLogon760.pFirst.edVoucherNo.set(rootData.SAPLogon760Data.pFirstData.edVoucherNo);
		SAPLogon760.pFirst.edCompanyCode.set(rootData.SAPLogon760Data.pFirstData.edCompanyCode);
		SAPLogon760.pFirst.edCertificateYear.set(rootData.SAPLogon760Data.pFirstData.edCertificateYear);
		SAPLogon760.pFirst.edHigh.set('');
		SAPLogon760.pFirst.edLow.set('');
		SAPLogon760.pFirst.btGuiButton.click();
		sc.endStep(); // pSecond_management
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pSecond_management
// ----------------------------------------------------------------
GLOBAL.step({ pSecond_management: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWork', '3870af86-c747-46bc-89b1-7537a985a4fd') ;
	// Wait until the Page loads
	SAPLogon760.pSecond.wait(function(ev) {
		SAPLogon760.pSecond.btPass.click();
		sc.endStep(); // Delay_5000_ms
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: Delay_5000_ms
// ----------------------------------------------------------------
GLOBAL.step({ Delay_5000_ms: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWork', 'f40377e4-643f-455d-adad-e0702e820bfa') ;
	// Delays execution for some milliseconds.
	// This is the standard pause that should be used in normal situations. It simply pauses the execution of the script for the indicated period.
	// It allows user interaction with Desktop Agent and other programs during the pause.
	// This can be useful to wait for a process to complete, to avoid going too fast for the operating system, or to give the user time to react.
	ctx.wait(function(ev) {
		// Wait until the Page loads
		SAPLogon760.pThird.wait(function(ev) {
			sc.endStep('Default'); // pThird management
			return;
		});
		ctx.workflow('newWork', '132f389f-d298-4e2f-a341-b3a4c026b745') ;
		// Delays execution for some milliseconds.
		// This is the standard pause that should be used in normal situations. It simply pauses the execution of the script for the indicated period.
		// It allows user interaction with Desktop Agent and other programs during the pause.
		// This can be useful to wait for a process to complete, to avoid going too fast for the operating system, or to give the user time to react.
		ctx.wait(function(ev) {
			// Wait until the Page loads
			SAPLogon760.pSecond.wait(function(ev) {
				sc.endStep(); // pSecond management
				return;
			});
		}, 1000);
	}, 5000);
}});

// ----------------------------------------------------------------
//   Step: pThird_management
// ----------------------------------------------------------------
GLOBAL.step({ pThird_management: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWork', '30db59ae-dfc1-46ad-8780-522778da8367') ;
	// Wait until the Page loads
	SAPLogon760.pThird.wait(function(ev) {
		SAPLogon760.pThird.edPassDate.set(rootData.SAPLogon760Data.pThirdData.edPassDate);
		SAPLogon760.pThird.btFinish.click();
		SAPLogon760.pThird.oGuiOkCodeField.wait(function(ev) {
			SAPLogon760.pThird.oGuiOkCodeField.set('/nzfie4060');
			SAPLogon760.pThird.btGuiButton.click();
			sc.endStep(); // Set_one_value
			return;
		}, 0, 10000);
	});
}});

// ----------------------------------------------------------------
//   Step: Set_one_value
// ----------------------------------------------------------------
GLOBAL.step({ Set_one_value: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWork', '1f98a22c-351c-4df2-9db7-ea522366691e') ;
	// Set one value in a cell
	ctx.excel.sheet.setCell(sc.localData.Startloop + 2, 5, 'Success');
	sc.endStep(); // Loops_to_the_start_bl
	return;
}});

// ----------------------------------------------------------------
//   Step: Loops_to_the_start_bl
// ----------------------------------------------------------------
GLOBAL.step({ Loops_to_the_start_bl: function(ev, sc, st) {
	var rootData = sc.data;
	
	ctx.workflow('newWork', '1c7d0889-af18-414e-bef4-63fe0473e1d5') ;
	// Loops to the start block.
	if (sc.localData.Startloop != -1)
	{
		sc.localData.Startloop++ ;
		sc.endStep('NEXT_LOOP');
		return ;
	}
	sc.endStep(); // Save_Excel_file
	return;
}});

// ----------------------------------------------------------------
//   Step: Save_Excel_file
// ----------------------------------------------------------------
GLOBAL.step({ Save_Excel_file: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWork', '0b189dfb-51f4-4922-93da-fdb8f7147d67') ;
	// Save Excel file.
	ctx.excel.file.save();
	sc.endStep(); // End_Excel
	return;
}});

// ----------------------------------------------------------------
//   Step: End_Excel
// ----------------------------------------------------------------
GLOBAL.step({ End_Excel: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWork', '0f66041a-ddc8-4077-ae55-ed4212419875') ;
	// End Excel.
	ctx.excel.end();
	sc.endStep(); // Display_msgbox_endMe
	return;
}});

// ----------------------------------------------------------------
//   Step: Display_msgbox_endMe
// ----------------------------------------------------------------
GLOBAL.step({ Display_msgbox_endMe: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWork', '94d0b86b-4300-4985-bc1e-1b9b57978ea9') ;
	// Displays a message box. If the "Wait closing" option is selected, waits until the end user closes it.
	// Creates the popup according to selected template, sets title and message and displays it.
	var endMessage = ctx.popup('endMessage', e.popup.template.Ok);
	endMessage.open({ title: '结束', message: '运行结束！'});
	// Wait until the end user closes the popup.
	endMessage.waitResult(function(res) {
	// End user has closed the popup, continue monitoring.
		sc.endStep(); // End_scenario
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: End_scenario
// ----------------------------------------------------------------
GLOBAL.step({ End_scenario: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWork', 'a1867699-f5aa-49df-9285-f72a1ababf37') ;
	// Ends the current scenario.
	sc.endScenario();
	sc.endStep(); // end Scenario
	return;
}});

// ----------------------------------------------------------------
//   Step: Delay_1000_ms
// ----------------------------------------------------------------
GLOBAL.step({ Delay_1000_ms: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWork', '132f389f-d298-4e2f-a341-b3a4c026b745') ;
	// Delays execution for some milliseconds.
	// This is the standard pause that should be used in normal situations. It simply pauses the execution of the script for the indicated period.
	// It allows user interaction with Desktop Agent and other programs during the pause.
	// This can be useful to wait for a process to complete, to avoid going too fast for the operating system, or to give the user time to react.
	ctx.wait(function(ev) {
		sc.endStep(); // pSecond_management_1
		return;
	}, 1000);
}});

// ----------------------------------------------------------------
//   Step: pSecond_management_1
// ----------------------------------------------------------------
GLOBAL.step({ pSecond_management_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWork', 'ea8893f1-4c78-4ba2-ba4e-7b6d5cb59b2d') ;
	// Wait until the Page loads
	SAPLogon760.pSecond.wait(function(ev) {
		SAPLogon760.pSecond.back.click();
		sc.endStep(); // Set_one_value_1
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: Set_one_value_1
// ----------------------------------------------------------------
GLOBAL.step({ Set_one_value_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('newWork', 'aa984feb-1c12-4773-b7e5-fd91dcaa0297') ;
	// Set one value in a cell
	ctx.excel.sheet.setCell(sc.localData.Startloop + 2, 5, 'False');
	sc.endStep(); // Loops_to_the_start_bl
	return;
}});
