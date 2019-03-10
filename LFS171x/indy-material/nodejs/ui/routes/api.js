const express = require('express');
const router = express.Router();
const indy = require('../../indy/index');
const auth = require('../authentication');
//const qrgenFun=require("./qrGenerator");

function getQrCode(did){
    // var did="This_Is_Sample_Text";

    var url="https://api.qrserver.com/v1/create-qr-code/?data="+did;//+"&amp;size=100x100"

//console.log(url);
//document.getElementById("qrimg").setAttribute("src",url);
//url=url.substring(0,url.length-1);
return url;
};

function redirect(res, path) {
 // console.log("redirectFn"+process.env["PORT"]);
  if (process.env["PORT"] === 3000 || process.env["PORT"] === '3000') {
    res.redirect('/rahaf'+path);
  } else {
    res.redirect(path);
  }
}

router.get('/did', async function(req,res,next){
var did = await indy.did.getEndpointDid();

var svg_string=await getQrCode(did);

//res.send(svg_string);

//res.send('<div align="center" style="background-color : gray;"><h4><center>Scan QR Code</center> </h4>'+"<img  src=" + svg_string +"></div>");
res.send('<body  style="background-color : gray;"><div align="center"><h4><center style="color : white;">Scan QR Code</center> </h4>'+"<img  src=" + svg_string +"></div></body>");

//res.send("<h1> Hello -In </h1>"+"<img src="+svg_string +">");
//res.send(did);
});








router.post('/send_message', auth.isLoggedIn, async function (req, res) {
    let message = JSON.parse(req.body.message);
    message.did = req.body.did;

    await indy.crypto.sendAnonCryptedMessage(req.body.did, message);
    redirect(res, '/#messages');
});

router.post('/send_connection_request', auth.isLoggedIn, async function (req, res) {
    let theirEndpointDid = req.body.did;
    let connectionRequest = await indy.connections.prepareRequest(theirEndpointDid);

    await indy.crypto.sendAnonCryptedMessage(theirEndpointDid, connectionRequest);
   // console.log("Shashi" + process.env["PORT"])
    redirect(res, '/#relationships');
});

router.post('/issuer/create_schema', auth.isLoggedIn, async function (req, res) {
    await indy.issuer.createSchema(req.body.name_of_schema, req.body.version, req.body.attributes);
    redirect(res, '/#issuing');
});

router.post('/issuer/create_cred_def', auth.isLoggedIn, async function (req, res) {
   // await indy.issuer.createCredDef(req.body.schema_id, req.body.tag);
   // console.log("Trying ###  " + JSON.stringify(req.body));

   // console.log("*******Trying ");
    await indy.issuer.createSchema('Transcript', '1.3', '[ "name","countryOfOrigin", "dateOfBirth"]');
   // console.log("Trying 2");
    await indy.issuer.createCredDef(req.body.schema_id, req.body.tag);
  //  console.log("Trying 3");
    res.redirect('/#issuing');
    await indy.credentials.sendOffer(req.body.their_relationship_did, req.body.val);
   // console.log("Trying 4");
    res.redirect('/#issuing');



});


router.post('/issuer/send_credential_offer', auth.isLoggedIn, async function (req, res) { 
	
    await indy.issuer.createSchema('Transcript', '1.3', '[ "name","countryOfOrigin", "dateOfBirth"]');	

   // console.log("Trying 2 Req Body " + JSON.stringify(req.body));

    var enpt = await indy.did.getEndpointDid();
   // console.log("Trying 2 endpoint " + JSON.stringify(enpt));

    var schemas22 = await indy.issuer.getSchemas();
   // console.log("Trying 3  Schemas " + JSON.stringify(schemas22));

    await indy.issuer.createCredDef(schemas22[0].id, 'MyTranscript');
   // console.log("Trying 4");

    var credentialDefinitions22 = await indy.did.getEndpointDidAttribute('credential_definitions');
   // console.log("Trying 3  CredsDef " + JSON.stringify(credentialDefinitions22));

    var relationships22 = await indy.pairwise.getAll();
    //console.log("req.body.their_relationship_did " + relationships22[0].their_did);

     await indy.credentials.sendOffer(relationships22[0].their_did, credentialDefinitions22[0].id);
    // console.log("Trying 5");
     res.redirect('/#issuing');
});



router.get('/issuer/send_credential_offer_to_acme', auth.isLoggedIn, async function (req, res) { 
	
    try{
    await intdy.issuer.createSchema('Transcript', '1.3', '[ "name","countryOfOrigin", "dateOfBirth"]');	
    //console.log("ACMETrying 2 Req Body " + JSON.stringify(req.body));
     }catch(ex){ console.log('will not execute');}


    var enpt = await indy.did.getEndpointDid();
   // console.log("ACMETrying 2 endpoint " + JSON.stringify(enpt));
	
  
    var schemas22 = await indy.issuer.getSchemas();
    //console.log("ACMETrying 3  Schemas " + JSON.stringify(schemas22));
    
    let transcriptCredDef = await indy.issuer.getCredDefByTag('MyTranscript');
    let proofRequests = {};
    proofRequests = {
                name: 'Transcript-Data',
                version: '0.1',
                requested_attributes: {
                    'attr1_referent': {
                        'name': 'countryOfOrigin',
                        'restrictions': [{'cred_def_id': transcriptCredDef.id}]
                    },
                    'attr2_referent': {
                        'name': 'status',
                        'restrictions': [{'cred_def_id': transcriptCredDef.id}]
                    },
                    'attr3_referent': {
                        'name': 'year',
                        'restrictions': [{'cred_def_id': transcriptCredDef.id}]
                    }
                },
                requested_predicates: {}
            }

/*try{
    await indy.issuer.createCredDef(schemas22[0].id, 'MyTranscript');
    console.log("ACMETrying 4");}catch(ex){console.log('will not execute');}

    var credentialDefinitions22 = await indy.did.getEndpointDidAttribute('credential_definitions');
    console.log("ACMETrying 3  CredsDef " + JSON.stringify(credentialDefinitions22));

    var relationships22 = await indy.pairwise.getAll();
    console.log("req.body.their_relationship_did " + relationships22[0].their_did);*/

    /*var transcript = {
	"name": "Transcript-Data",
  	"version": "0.1",
  	"requested_attributes": {
	},
	"requested_predicates": {}
    };

    for(i=0;i<schemas22.length;i++) {
	var key = "attr"+(i+1)+"_referent";
    	transcript.requested_attributes[key] = {
      		"name": "abc",
      		"restrictions": [
        		{"cred_def_id": transcriptCredDef.id}
      		]
    	    }	
	}*/

     //await indy.credentials.sendOffer(relationships22[0].their_did, credentialDefinitions22[0].id);
     //console.log("TACMErying 5");
     //res.redirect('/#proofs');
    res.send(JSON.stringify(proofRequests));
});

router.post('/credentials/accept_offer', auth.isLoggedIn, async function(req, res) {
    let message = indy.store.messages.getMessage(req.body.messageId);
    indy.store.messages.deleteMessage(req.body.messageId);
    await indy.credentials.sendRequest(message.message.origin, message.message.message);
    redirect(res, '/#messages');
});

router.post('/credentials/reject_offer', auth.isLoggedIn, async function(req, res) {
    indy.store.messages.deleteMessage(req.body.messageId);
    redirect(res, '/');
});

router.put('/connections/request', auth.isLoggedIn, async function (req, res) {
    let name = req.body.name;
    let messageId = req.body.messageId;
    let message = indy.store.messages.getMessage(messageId);
    indy.store.messages.deleteMessage(messageId);
    await indy.connections.acceptRequest(name, message.message.message.endpointDid, message.message.message.did, message.message.message.nonce);
  //  console.log("Shashi " + THEME);
  //  console.log(process.env["PORT"])
    redirect(res, '/#relationships');
});

router.delete('/connections/request', auth.isLoggedIn, async function (req, res) {
    // FIXME: Are we actually passing in the messageId yet?
    if (req.body.messageId) {
        indy.store.messages.deleteMessage(req.body.messageId);
    }
   // console.log("Shashi " + THEME);
   // console.log(process.env["PORT"])
    redirect(res, '/#relationships');
});

router.post('/messages/delete', auth.isLoggedIn, function(req, res) {
    indy.store.messages.deleteMessage(req.body.messageId);
    redirect(res, '/#messages');
});

router.post('/proofs/accept', auth.isLoggedIn, async function(req, res) {
        await indy.proofs.acceptRequest(req.body.messageId);
        redirect(res, '/#messages');
});

router.post('/proofs/send_request', auth.isLoggedIn, async function(req, res) {
    let myDid = await indy.pairwise.getMyDid(req.body.their_relationship_did);
   // console.log("Manual entry ******* " + req.body.manual_entry);
   // console.log("myDid " + myDid); 
   // console.log("REQUEST " + req);

    await indy.proofs.sendRequest(myDid, req.body.their_relationship_did, req.body.proof_request_id, req.body.manual_entry);

    redirect(res, '/#proofs');

});

router.post('/proofs/validate', auth.isLoggedIn, async function(req, res) {
    try {
        let proof = req.body;
        if (await indy.proofs.validate(proof)) {
            res.status(200).send();
        } else {
            res.status(400).send();
        }
    } catch(err) {
        res.status(500).send();
    }
});

module.exports = router;
