/*eslint-disable no-console, no-alert */
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast"
], function(Controller, History,MessageToast) {
	"use strict";

	return Controller.extend("EHSM-Portal.controller.ViewTo", {

		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("TargetViewToParameter").attachPatternMatched(this._onRouteMatched, this);
		},
		_onRouteMatched: function (oEvent) {
			
			alert(oEvent.getParameter("arguments").parameter.split(';'));

		},
		
		onNavBack: function (oEvent) {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("TargetViewFrom", true);
			}
		},
		
		onPress: function(oEvent){
			
			var id = this.getView().byId("user");
			var pwd = this.getView().byId("pass");
			var x = "/sap/opu/odata/sap/ZDS_MP_SRV/";
			
			var mod = new sap.ui.model.odata.ODataModel(x, true);
			var url = "WfPasswrd='"+pwd.getValue()+"',Id='"+id.getValue()+"'";
			
			mod.read("/ZOD_MP_LOGIN_DSSet(" + url + ")", {
				success: function(oData, oResponse) {
					if (oData.Return === "ok") {
						// this.showBusyIndicator(800, 0);
						// MessageBox.success("Login successfully!");
						var obj = sap.ui.core.UIComponent.getRouterFor(this);
						obj.navTo("TargetViewRes");
						MessageToast.show("Login sucessfull.");

					} else {
						// MessageToast.error("Invalied login credentials.");
					}
				}.bind(this)
			});
			
			
			
		}
		

	});

});