if (Meteor.isClient) {

    $(document).ready(function() {
        $('#fullpage').fullpage({
            anchors:['landing', 'slide1', 'slide2', 'slide3'],
            css3: true,
            sectionsColor: ['000', '000', '#4BBFC3']
        });
    });

    Template.header.helpers({
    	greeting:function(){
    		greetings = ["Welcome!", "Bienvenue!", "Willkommen!", "Bienvenida!", "Welkom!", "Benvenuto!"]
    		var greeting = greetings[Math.floor(Math.random()*greetings.length)];
    		return greeting;
    	}//comma here
    });

    UI.registerHelper("isMobile", function(){
	    var index = navigator.appVersion.indexOf("Mobile");
	    return (index > -1);
	})
}