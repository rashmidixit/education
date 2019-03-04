// ** COOKIE CONSENT BANNER **
//
// 25/10/2018 : V2.5 : NJH - ADDED "donner.unhcr.org"
// 14/08/2018 : v2.4 : NJH - FIXED A CSS FONT SIZE ISSUE
// 28/06/2018 : v2.3 : NJH - INCREASED THE Z-INDEX TO 100001
// 28/06/2018 : v2.2 : NJH - INCREASED THE Z-INDEX TO 10000 AND ADDED TRAD.CHINESE DONATION PAGES
// 20/06/2018 : v2.1 : NJH - FIXED THE ERROR INTRODUCED IN VERSION 2.0
// 19/06/2018 : v2.0 : NJH - ADDED SWEDISH, DANISH, JAPANESE, FIXED FRENCH FOR SWITZERLAND
// 18/06/2018 : v1.9 : NJH - ADDED CSS FIX FOR RTL, GERMAN, AND "doar.acnur.org" SUPPORT
// 12/06/2018 : v1.8 : NJH - ADDED TRAD.CHINESE, PORTUGUESE, INDONESIAN, ROMANIAN
// 05/06/2018 : v1.7 : NJH - ADDED RETURN FALSE TO THE ACCEPT BTN SO AS NOT TO TRIGGER A HREF
// 04/06/2018 : v1.6 : NJH - ADDED DONATE/GIVING PLATFORMS IN ENGLISH, FRENCH & SPANISH
// 04/06/2018 : v1.5 : NJH - ADDED ARABIC TRANSLATION, AND WITHREFUGEES / IBELONG RULES


// ** ENGLISH **
function setup_EN() {
    var consent_str = "We use cookies and other identifiers to help ";
    consent_str += "improve your online experience. By using our ";
    consent_str += "website you are agreeing to this. Read our ";
    consent_str += "<a href='http://www.unhcr.org/privacy-policy";
    consent_str += ".html#cookie' style='color: #faeb00;'>privacy ";
    consent_str += "policy</a> to find out what cookies are used ";
    consent_str += "for and how to change your settings.";
    var consent_btn = "Accept";
    var consent_rtl = false;
    return [ consent_str, consent_btn, consent_rtl ];
}

// ** FRENCH **
function setup_FR() {
    var consent_str = "Nous utilisons des cookies et d'autres ";
    consent_str += "outils d’identification pour améliorer ";
    consent_str += "votre navigation sur notre site. En ";
    consent_str += "consultant notre site Web, vous acceptez ";
    consent_str += "ces fonctionnalités. Consultez notre ";
    consent_str += "<a href='http://www.unhcr.org/fr/";
    consent_str += "politique-de-confidentialite.html#cookie' ";
    consent_str += "style='color: #faeb00;'>politique de ";
    consent_str += "confidentialité</a> pour comprendre à ";
    consent_str += "quoi servent les cookies et comment ";
    consent_str += "modifier vos paramètres.";
    var consent_btn = "Accepter";
    var consent_rtl = false;
    return [ consent_str, consent_btn, consent_rtl ];
}

// ** SPANISH **
function setup_ES() {
    var consent_str = "Empleamos cookies y otros identificadores para ";
    consent_str += "mejorar su experiencia online. Accediendo a ";
    consent_str += "nuestro sitio web, usted da su consentimiento ";
    consent_str += "para ello. Consulte nuestra <a href='http://acnur";
    consent_str += ".org/es/politica-de-privacidad.html#cookie' ";
    consent_str += "style='color: #faeb00;'>política de privacidad";
    consent_str += "</a> para obtener más información sobre las ";
    consent_str += "cookies y cómo cambiar su configuración.";
    var consent_btn = "Aceptar";
    var consent_rtl = false;
    return [ consent_str, consent_btn, consent_rtl ];
}

// ** PORTUGUESE **
function setup_PT() {
    var consent_str = "Utilizamos cookies e outros identificadores ";
    consent_str += "para ajudar a melhorar a sua experiência de ";
    consent_str += "navegação. Ao utilizar o nosso site, você ";
    consent_str += "concorda com isto. Leia a nossa ";
    consent_str += "<a href='http://acnur.org/es/politica-de-";
    consent_str += "privacidad.html#cookie' style='color: #faeb00;'>";
    consent_str += "política de privacidade</a> ";
    consent_str += "para descobrir quais cookies são usados e ";
    consent_str += "como alterar suas configurações. ";
    var consent_btn = "Aceitar";
    var consent_rtl = false;
    return [ consent_str, consent_btn, consent_rtl ];
}

// ** ARABIC **
function setup_AR() {
    var consent_str = "نستخدم الكوكيز والمحدّدات الأخرى للمساعدة في تحسين تجربتك في استخدام";
    consent_str += " الإنترنت. من خلال استخدامك لموقعنا، فأنت توافق على ذلك. اقرأ";
    consent_str += " <a href='http://www.unhcr.org/ar/";
    consent_str += "4be7cc2716.html' ";
    consent_str += "style='color: #faeb00;'>";        
    consent_str += "سياسة الخصوصية";
    consent_str += "</a> ";
    consent_str += " بنا للتعرف على سبب استخدام الكوكيز وكيفية تغيير ضوابطك";
    var consent_btn = "موافق";
    var consent_rtl = true;
    return [ consent_str, consent_btn, consent_rtl ];
}

// ** GERMAN **
function setup_DE() {
    var consent_str = "Wir nutzen Cookies und andere Mechanismen, ";
    consent_str += "um unser Angebot für Sie zu verbessern. Durch ";
    consent_str += "die Nutzung unserer Website erklären Sie sich ";
    consent_str += "mit der Verwendung von Cookies einverstanden. ";
    consent_str += "Lesen Sie unsere ";
    consent_str += "<a href='http://www.unhcr.org/privacy-policy";
    consent_str += ".html#cookie' style='color: #faeb00;'>";
    consent_str += "Datenschutzbestimmungen</a> um mehr über die ";
    consent_str += "Verwendung von Cookies zu erfahren und Ihre ";
    consent_str += "Einstellungen zu ändern.";
    var consent_btn = "Akzeptieren";
    var consent_rtl = false;
    return [ consent_str, consent_btn, consent_rtl ];
}

// ** TRADITIONAL CHINESE (HONG KONG) **
function setup_HK() {
    var consent_str = "閣下瀏覽本網站時，我們會透過";
    consent_str += '"Cookies"';
    consent_str += "和其他標識符來優化個人網上體驗。";
    consent_str += "詳情請閱讀我們的";
    consent_str += "<a href='http://www.unhcr.org/hk/privacy";
    consent_str += "' style='color: #faeb00;'>";
    consent_str += "私隱政策</a>，了解";
    consent_str += '"Cookies"';
    consent_str += "的使用以及有關更改瀏覽器的設定。";
    var consent_btn = "接受";
    var consent_rtl = false;
    return [ consent_str, consent_btn, consent_rtl ];
}

// ** INDONESIAN **
function setup_ID() {
    var consent_str = "Kami menggunakan cookies dan pengaturan ";
    consent_str += "lainnya untuk membantu meningkatkan aktivitas ";
    consent_str += "online Anda. Dengan menggunakan situs kami, ";
    consent_str += "Anda berarti menyetujui hal ini. Silakan baca ";
    consent_str += "<a href='http://www.unhcr.org/privacy-policy";
    consent_str += ".html#cookie' style='color: #faeb00;'>";   
    consent_str += "kebijakan privasi</a> ";
    consent_str += "kami untuk mengetahui fungsi cookies dan ";
    consent_str += "bagaimana mengubah pengaturan Anda. ";
    var consent_btn = "Setuju";
    var consent_rtl = false;
    return [ consent_str, consent_btn, consent_rtl ];
}

// ** ROMANIAN **
function setup_RO() {
    var consent_str = "Utilizăm cookie-uri și alte elemente de ";
    consent_str += "identificare pentru a vă îmbunătăți experiența ";
    consent_str += "online. Prin utilizarea site-ului nostru ";
    consent_str += "sunteți de acord cu acesta politică de ";
    consent_str += "utilizare a datelor dvs. Citiți ";
    consent_str += "<a href='http://www.unhcr.org/privacy-policy";
    consent_str += ".html#cookie' style='color: #faeb00;'>"; 
    consent_str += "politica de Confidențialitate</a> ";
    consent_str += "pentru a afla ce cookie-uri sunt utilizate ";
    consent_str += "și cum puteți schimba setările. ";
    var consent_btn = "Acceptați";
    var consent_rtl = false;
    return [ consent_str, consent_btn, consent_rtl ];
}

// ** SWEDISH **
function setup_SE() {
    var consent_str = "Vi använder cookies, egna och tredjeparts, ";
    consent_str += "för att förbättra din upplevelse av vår ";
    consent_str += "webbsida samt effektivisera och anpassa ";
    consent_str += "kommunikation och insamling. ";
    consent_str += "<a href='https://sverigeforunhcr.se/om-oss/";
    consent_str += "kontakt/allmanna-villkor' style='color: ";
    consent_str += "#faeb00;'>Läs våra villkor</a> och ";
    consent_str += "hur du kan stänga av cookies.";
    var consent_btn = "Jag förstår";
    var consent_rtl = false;
    return [ consent_str, consent_btn, consent_rtl ];
}

// ** DANISH **
function setup_DK() {
    var consent_str = "Vi bruger cookies og andre ";
    consent_str += "identifikatorer til at forbedre din ";
    consent_str += "oplevelse på vores hjemmeside. Når du ";
    consent_str += "bruger vores hjemmeside, accepterer du ";
    consent_str += "disse betingelser. Læs vores ";
    consent_str += "<a href='http://www.unhcr.org/privacy-policy";
    consent_str += ".html#cookie' style='color: #faeb00;'>";
    consent_str += "privatlivspolitik</a> for at finde ud ";
    consent_str += "af hvad cookies bruges til, og hvordan ";
    consent_str += "du kan ændre dine indstillinger.";
    var consent_btn = "Godkend";
    var consent_rtl = false;
    return [ consent_str, consent_btn, consent_rtl ];
}

// ** JAPANESE **
function setup_JP() {
    var consent_str = "当ウェブサイトでは、より快適なオ";
    consent_str += "ンライン環境を実現するため、クッキー";
    consent_str += "（Cookie）を使用しています。";
    consent_str += "<a href='http://www.unhcr.org/privacy-policy";
    consent_str += ".html#cookie' style='color: #faeb00;'>";   
    consent_str += "プライバシーポリシー</a>";
    consent_str += "をご確認のうえ、ご覧ください。";
    var consent_btn = "承諾";
    var consent_rtl = false;
    return [ consent_str, consent_btn, consent_rtl ];
}

// ** TO SET THE COOKIE, CALL setCookie(); **
function setCookie() {
    var cookieName = "cookie_consent"; // Name of your cookie
    var cookieValue = "true"; // Value of your cookie
    var expirationTime = 2592000 * 1000; // One month in milliseconds
    var date = new Date(); 
    var dateTimeNow = date.getTime(); 
    date.setTime( dateTimeNow + expirationTime ); // Time now + one month
    var expiration = date.toUTCString(); // Converts to UTC
    var host_domain = window.location.hostname.replace(/^www\./i, ""); // Include all subdomains
    window.document.cookie = cookieName+"="+cookieValue+"; expires="+expiration+"; path=/; domain=." + host_domain; // Sets cookie

    // FIRE AGREED EVENT
    window.dataLayer.push({"event":"cookie_consent_agreed"});

    // REMOVE CONSENT BANNER
    window.document.getElementById("cookiecontainer").outerHTML = "";
}

// ** TO CHECK THE COOKIE, CALL checkCookie(); **
function checkCookie() {
    var cookieName = "cookie_consent"; // Name of your cookie
    var dc = window.document.cookie;
    var prefix = cookieName + "=";
    var begin = dc.indexOf("; " + prefix);
	var end = window.document.cookie.indexOf(";", begin);
    if (begin === -1) {
        begin = dc.indexOf(prefix);
        if (begin !== 0) {
            return null;
        }
    } else {
        begin += 2;
        if (end === -1) {
            end = dc.length;
        }
    }
    return decodeURI(dc.substring(begin + prefix.length, end));
}

// ** MAIN FUNCTION **
function do_consent_verification() {

  var hostName = window.location.hostname;
  var pathName = window.location.pathname;
  var pathArray = pathName.split( '/' );

  var cookie_consent;
  cookie_consent = checkCookie();

  if ( cookie_consent === null ) {

    // COOKIE DOESN'T EXIST : EXCLUSIONS FIRST

    if ( hostName === "giving.unhcr.org" ) {

      // DO NOTHING!

    } else {

      var consent_str = "";
      var consent_btn = "";
      var consent_rtl = false;
      var ret = "";

      if ( hostName === "www.acnur.org" || hostName === "acnur.org" || hostName === "doar.acnur.org" ) {

          if ( pathArray[1] === "portugues" || hostName === "doar.acnur.org" ) {

            // PORTUGUESE
            ret = setup_PT();
            consent_str = ret[0];
            consent_btn = ret[1];
            consent_rtl = ret[2];

          } else {

            // SPANISH
            ret = setup_ES();
            consent_str = ret[0];
            consent_btn = ret[1];
            consent_rtl = ret[2];
          }

      } else if ( hostName === "www.unhcr.org" || hostName === "unhcr.org" ) {

          if ( pathArray[1] === "fr" || pathArray[1] === "fr-fr" ) {
			
            // FRENCH
            ret = setup_FR();
            consent_str = ret[0];
            consent_btn = ret[1];
            consent_rtl = ret[2];

          } else if ( pathArray[1] === "ar" || pathArray[1] === "ar-ar" ) {

            // ARABIC
            ret = setup_AR();
            consent_str = ret[0];
            consent_btn = ret[1];
            consent_rtl = ret[2];

          } else if ( pathArray[1] === "dach" ) {

            if ( pathArray[2] === "ch-fr" ) {

              // FRENCH
              ret = setup_FR();
              consent_str = ret[0];
              consent_btn = ret[1];
              consent_rtl = ret[2];

            } else {

              // GERMAN
              ret = setup_DE();
              consent_str = ret[0];
              consent_btn = ret[1];
              consent_rtl = ret[2];

            }

          } else if ( pathArray[1] === "neu" ) {

            if ( pathArray[2] === "dk" ) {

              // DANISH
              ret = setup_DK();
              consent_str = ret[0];
              consent_btn = ret[1];
              consent_rtl = ret[2];

            }

          } else if ( pathArray[1] === "hk" && pathArray[2] !== "en" ) {

            // TRANDITIONAL CHINESE (HONG KONG)
            ret = setup_HK();
            consent_str = ret[0];
            consent_btn = ret[1];
            consent_rtl = ret[2];

          } else if ( pathArray[1] === "id" && pathArray[2] !== "en" ) {

            // INDONESIAN 
            ret = setup_ID();
            consent_str = ret[0];
            consent_btn = ret[1];
            consent_rtl = ret[2];

          } else if ( pathArray[1] === "ro" ) {

            // ROMANIAN 
            ret = setup_RO();
            consent_str = ret[0];
            consent_btn = ret[1];
            consent_rtl = ret[2];

          } else if ( pathArray[1] === "jp" ) {

            // JAPANESE 
            ret = setup_JP();
            consent_str = ret[0];
            consent_btn = ret[1];
            consent_rtl = ret[2];
				
          } else if ( pathArray[1] === "withrefugees" ) {

            if ( pathArray[2] === "fr" ) {
				
              // FRENCH
              ret = setup_FR();
              consent_str = ret[0];
              consent_btn = ret[1];
              consent_rtl = ret[2];
				
            } else if ( pathArray[2] === "es" ) {
				
              // SPANISH
              ret = setup_ES();
              consent_str = ret[0];
              consent_btn = ret[1];
              consent_rtl = ret[2];
				
            } else if ( pathArray[2] === "ar" ) {
				
              // ARABIC
              ret = setup_AR();
              consent_str = ret[0];
              consent_btn = ret[1];
              consent_rtl = ret[2];

            } else if ( pathArray[2] === "de" ) {
				
              // GERMAN
              ret = setup_DE();
              consent_str = ret[0];
              consent_btn = ret[1];
              consent_rtl = ret[2];

            }
				
          } else if ( pathArray[1] === "ibelong" ) {

            if ( pathArray[2] === "fr" ) {
				
              // FRENCH
              ret = setup_FR();
              consent_str = ret[0];
              consent_btn = ret[1];
              consent_rtl = ret[2];
				
            } else if ( pathArray[2] === "es" ) {
				
              // SPANISH
              ret = setup_ES();
              consent_str = ret[0];
              consent_btn = ret[1];
              consent_rtl = ret[2];

            } else if ( pathArray[2] === "carta-aberta" ) {

              // PORTUGUESE
              ret = setup_PT();
              consent_str = ret[0];
              consent_btn = ret[1];
              consent_rtl = ret[2];

            }
          }

      } else if ( hostName === "donate.unhcr.org" ) {
		
          if ( pathArray[1] === "fr-fr" ) {

              // FRENCH
              ret = setup_FR();
              consent_str = ret[0];
              consent_btn = ret[1];
              consent_rtl = ret[2];

          } else if ( pathArray[1] === "la-es" ) {

              // SPANISH
              ret = setup_ES();
              consent_str = ret[0];
              consent_btn = ret[1];
              consent_rtl = ret[2];

          } else if ( pathArray[1] === "dk-da" ) {

              // DANISH
              ret = setup_DK();
              consent_str = ret[0];
              consent_btn = ret[1];
              consent_rtl = ret[2];

          } else if ( pathArray[1] === "hk-zh" ) {

            // TRANDITIONAL CHINESE (HONG KONG)
            ret = setup_HK();
            consent_str = ret[0];
            consent_btn = ret[1];
            consent_rtl = ret[2];

          }

      } else if ( hostName === "donner.unhcr.org" ) {

        // FRENCH
        ret = setup_FR();
        consent_str = ret[0];
        consent_btn = ret[1];
        consent_rtl = ret[2];

      } else if ( hostName === "sverigeforunhcr.se" ) {

        // SWEDISH
        ret = setup_SE();
        consent_str = ret[0];
        consent_btn = ret[1];
        consent_rtl = ret[2];

      }

      if ( consent_str === "" || consent_btn === "" ) {

        // FOR EVERYTHING ELSE, ENGLISH
        ret = setup_EN();
        consent_str = ret[0];
        consent_btn = ret[1];
        consent_rtl = ret[2];

      }

      // BUILD CONSENT BANNER INNER HTML
      var cookiePop = "<style>@media only screen and (max-width: 600px){";
      cookiePop += "#acceptbutton{display: block !important; position: ";
      cookiePop += "relative !important; text-align: center; margin-bottom: ";
      cookiePop += "20px; right: 0 !important; top: 0 !important;}";
      cookiePop += ".cookiecopy{display: block !important; max-width: 100% ";
      cookiePop += "!important; padding: 20px; margin: 0 auto; font-size: ";
      cookiePop += "13px;}}</style>\n<div class='cookiecopy' style='display: ";
      cookiePop += "inline-block; max-width: 60%; font-family: Proxima Nova, ";
      cookiePop += "Lato, Arial; color: #ffffff; font-size: 14px; line-height: ";
      cookiePop += "1.4em; padding: 15px;";
      if ( consent_rtl === true ) {
        cookiePop += " text-align: right;";
      }
      cookiePop += "'>";
      cookiePop += consent_str;
      cookiePop += "</div>\n<a href='#' id='acceptbutton' style='display: ";
      cookiePop += "inline-block; background-color: #faeb00; color: #000; ";
      cookiePop += "padding: 8px 30px; text-decoration: none; margin-left: ";
      cookiePop += "20px; margin-right: 20px; font-family: Proxima Nova, ";
      cookiePop += "Lato, Arial; top: 15px; position: absolute; ";
      cookiePop += "font-size: 16px; font-weight: bold;";
      if ( consent_rtl === true ) {
        cookiePop += " left: 0px;";
      } else {
        cookiePop += " right: 0px;";  
      }
      cookiePop += "' onclick='setCookie();return false;'>";
      cookiePop += consent_btn;	
      cookiePop += "</a>\n";

      // CREATE NEW ELEMENT IN DOM AND OUTPUT
      var elem = document.createElement('div');
      elem.setAttribute("id", "cookiecontainer");
      elem.style.cssText = "display: block;width: 100%; position:fixed;";
      elem.style.cssText += "bottom: 0px;background-color: #000000;padding:0;";
      elem.style.cssText += "z-index: 100001 !important; margin: 0;";
      if ( consent_rtl === true ) {
        elem.style.cssText += "text-align: right;";
      }
      elem.innerHTML = cookiePop;
      window.document.body.appendChild( elem );
    }

  } else {

    // COOKIE ALREADY EXISTS : FIRE AGREED EVENT
    window.dataLayer.push({"event":"cookie_consent_agreed"});

  }
}
