$.get("https://api.github.com/repos/mynameisfiber/thefreedomfoundation/issues",'',function(issues){
	var trend = _.max(issues,function(issue){ return new Date(issue.updated_at).getTime(); });
	$('#trendpane').append('<div id="issue_'+trend.number+'"><h2>Recently updated: <a href="http://github.com/mynameisfiber/thefreedomfoundation/issues/'+trend.number+'">'+trend.title+'</a></h2><h5><span id="trendtext">'+trend.body+'</span></h5></div>');
	$.get(trend.comments_url,'',function(comments) {
    		var trendComment = _.max(comments,function(comment){ return new Date(comment.updated_at).getTime(); });
    		$('#issue_'+trend.number).append('<h4 style="padding-top:10px;">'+trendComment.user.login+' said:</h4><h4 style="border-left: 4px solid #DDD; padding: 0 15px; color: #777;">'+trendComment.body+'</h4>');
    		sectionHeight();
	});
});

$.get("https://api.github.com/repos/mynameisfiber/thefreedomfoundation/collaborators",'',function(collabs){
	$.each(collabs, function(collabkey, collab){
    	$('#projectmembers').append('<li><a href="http://github.com/'+collab.login+'">'+collab.login+'</a></li>')
	});
});
