define({

	initialize:function()
	{
			$(window).resize(function(){
			$('#smoothmenu1').css('top','0px');
			$('#smoothmenu1').css('left','0px');
			$('#toolbar').css('top',$('#smoothmenu1').height());
			//$('#toolbar').css('height','35px');
			$('#toolbar').css('left','0px');
			$('#statusbar').css('left','0px');
			if($('#sidepanel').offset().left + 5 < window.innerWidth)
				$('#index-vwf').css('width',window.innerWidth - $('#sidepanel').width() + 'px');
			else
				$('#index-vwf').css('width',window.innerWidth + 'px');
			
			$('#ScriptEditor').css('top',$(window).height() - $('#ScriptEditor').height()-$('#statusbar').height());
			//$('#ScriptEditor').css('height',	$(window).height() - $('#ScriptEditor').offset().top - $('#statusbar').height() + 'px');
			
			$('#ScriptEditor').css('width',$('#index-vwf').width());	
			if($('#ScriptEditor').attr('maximized'))
			{
				$('#ScriptEditor').css('top',$('#toolbar').offset().top + $('#toolbar').height() +'px');
				$('#ScriptEditor').css('height',$(window).height() - $('#toolbar').height()- $('#smoothmenu1').height()- $('#statusbar').height()+'px');
			}
			else
			{
				
				//$('#ScriptEditor').css('top',$('#ScriptEditor').attr('originaltop')+'px');
				//$('#ScriptEditor').css('height',$(window).height() - $('#ScriptEditor').offset().top- $('#statusbar').height()+'px');
				
			}
			_ScriptEditor.resize();
			
			
			$('#index-vwf').css('height',window.innerHeight + 'px' - $('#ScriptEditor').offset().top);
			
			$('#index-vwf').css('top',$('#toolbar').offset().top+$('#toolbar').height());
			$('#index-vwf').css('position','absolute');
			$('#vwf-root').css('overflow','visible');
			$('#vwf-root').css('left','0px');
			$('#vwf-root').css('top','0px');
			var scripteditorheight = $('#ScriptEditor').offset().top;
			if(scripteditorheight != 0)
			   scripteditorheight = $(window).height() - scripteditorheight;
			$('#index-vwf').css('height',window.innerHeight - $('#smoothmenu1').height() - $('#statusbar').height() - $('#toolbar').height() - (scripteditorheight-25) + 'px');
			
			$('#sidepanel').css('left',$('#index-vwf').width() + $('#index-vwf').offset().left);
			//$('#sidepanel').css('width',320);
			$('#sidepanel').css('top',$('#toolbar').offset().top+$('#toolbar').height());
			$('#sidepanel').css('height',$(window).height());
			$('#statusbar').css('top',($(window).height() - 25) + 'px');
			
			
			$('#sidepanel').css('height',$(window).height() - ($('#statusbar').height() + $('#toolbar').height()+$('#smoothmenu1').height()) + 'px');
			_Editor.findcamera().aspect = ($('#index-vwf').width()/$('#index-vwf').height());
			_Editor.findcamera().updateProjectionMatrix();
		});
		$(window).resize();
		window.setTimeout(function(){$(window).resize();hideSidePanel();},500);
		
	}
});