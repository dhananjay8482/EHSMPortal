sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("EHSM-Portal.controller.ViewFrom", {
		
		onPress:function(oEvent){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("TargetViewTo", {} );
		}
		,
		onPressWithParameter:function(oEvent){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("TargetViewToParameter", { parameter: "test"} );
		}
		
		
		
	});
});