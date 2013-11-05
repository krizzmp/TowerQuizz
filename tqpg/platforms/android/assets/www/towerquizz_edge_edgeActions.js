
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Rectangle}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){sym.stop();sym.setVariable("drop","false");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_eventyr_loon}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5000,function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6000,function(sym,e){var drop=sym.getVariable("drop");if(drop=="false"){sym.playReverse();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_knap_3}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_knap_placeholderCopy}","click",function(sym,e){sym.setVariable("drop","true");sym.$("knap_placeholderCopy").hide();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7750,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9750,function(sym,e){sym.play("introside");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RectangleCopy}","click",function(sym,e){sym.play("highscore");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text}","click",function(sym,e){sym.play("backup");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text7}","click",function(sym,e){sym.play("spg");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",12000,function(sym,e){sym.stop();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-9028381");