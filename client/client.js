if (Meteor.isClient) {
    $(document).ready(function() {
        $('#fullpage').fullpage({
            anchors: ['landing', 'slide1', 'slide2', 'slide3'],
            css3: true,
            sectionsColor: ['000', '000', '#4BBFC3']
        });
        //$('#myVideo').get(0).play();
    });
    Template.header.helpers({
        greeting: function() {
            greetings = ["Welcome!", "Bienvenue!", "Willkommen!", "Bienvenida!", "Welkom!", "Benvenuto!"]
            var greeting = greetings[Math.floor(Math.random() * greetings.length)];
            return greeting;
        } //comma here
    });
    UI.registerHelper("isMobile", function() {
        var index = navigator.appVersion.indexOf("Mobile");
        return (index > -1);
    })
    // Template.landing.events({
    //     'click #video-container': function () {
    //         if($("#myVideo").get(0).paused){
    //             $('#myVideo').get(0).play();
    //         }
    //         else{
    //             $("#myVideo").get(0).pause();
    //         }
    //     }
    // });
    isMobile = function(){
        var index = navigator.appVersion.indexOf("Mobile");
        return (index > -1);
    }
}