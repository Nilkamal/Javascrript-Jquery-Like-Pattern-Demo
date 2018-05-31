(function (global, $) {

    //New up new object. So it do not need to called using new operator
    var Greetr = function (firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    var supportedLanguages = ['en', 'gj'];

    var informalGreeting = {
        en: 'Hello',
        gj: 'Hallo'
    };

    var formalGreeting = {
        en: 'Hey, how you are today?',
        gj: 'Hallo, Kem cho tame aaje?'
    };

    //Set up empty prototype object to add various methods to object. 
    Greetr.prototype = {
        validateLanguage: function () {
            if (supportedLanguages.indexOf(this.language) === -1) {
                throw 'Invalid language supplied';
            }
        },
        fullName: function () {
            return this.firstName + ' ' + this.lastName;
        },
        setLang: function (language) {
            this.language = language;
            this.validateLanguage();
            return this;
        },
        
        greet: function(formal) {
            var msg;
            
            if(formal) {
                msg = formalGreeting[this.language] + ' ' + this.fullName();
            }
            else {
                msg = informalGreeting[this.language] + ', ' + this.lastName;
            }

            if(console){
                console.log(msg);
            }
            else{
                throw 'Console is not available at this moment in time..';
            }

            return this;
        },
        HTMLGreeting: function(selector, formal) {
            if(!$){
                throw 'jQuery is not loaded';
            }

            if(!selector){
                throw 'Selector not available'
            }
            var msg;

            if(formal) {
                msg = formalGreeting[this.language] + ' ' + this.fullName();
            }
            else {
                msg = informalGreeting[this.language] + ', ' + this.lastName;
            }

            $(selector).html(msg);

            return this;
        }
    };

    //Initialize object using function constructor same as jquery
    Greetr.init = function (firstName, lastName, language) {
        this.firstName = firstName || '';
        this.lastName = lastName || '';
        this.language = language || 'en';
        this.validateLanguage();
    }

    Greetr.init.prototype = Greetr.prototype;

    //Expose Greetr object and as shorthand
    window.Greetr = G$ = Greetr;
} (window, jQuery));