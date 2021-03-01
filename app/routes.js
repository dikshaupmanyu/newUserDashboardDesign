module.exports = function(app) {

   app.get('/', function(req, res) {
    res.render('index.ejs');
  });

   app.get('/chat', function(req, res) {

    res.render('chat.ejs');
  });

  app.get('/dashboard', function(req, res) {

    // var request = require("request");

    // let users = [];


    // var options = { method: 'POST',
    //   url: 'https://apis.tradetipsapp.com/api/stockDetail/getAllStockOfUserByUserName',
    //   headers: 
    //    { 'postman-token': '1ac0c8ab-24ca-0fe0-5e43-9a97bb2f184c',
    //      'cache-control': 'no-cache',
    //      authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJlbWFpbCI6InBhbmthanRlamF3YXRAZ21haWwuY29tIiwic3ViIjoiZDlhY2VkMjMtN2I4OS00YWJjLWJkNzEtNTUyM2FiODNhOThhIiwiaWF0IjoxNjEyNzg3MTgzLCJleHAiOjE2MTMzOTE5ODN9.RMvzoOwyfRcV5hQ60ImZ_H55-aY0Wc_RVPHgYbO1jJ9rdBoSrn69R7LUbWtjOymklcizjeKCJMye4rG3p_gWrQ',
    //      'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
    //   formData: { userName: 'pankaj' } };

    // request(options, function (error, response, body) {
    //   if (error) throw new Error(error);

            // console.log(response);

             // console.log(body);

              // for(var i= response.length - 1; i >= 0 ; i--){

              //       users.push(response[i].stockSymbol);
              //   }

              //   let resultSet = [];
              //   for (i=0; i < users.length; i++){
              //     var symbol = users[i];
                  // console.log(symbol);

                  // var options1 = { method: 'POST',
                  //   url: 'https://apis.tradetipsapp.com/api/sectorNewsSentiment/getSentimentandSMAByStockSymbolResultSet',
                  //   headers: 
                  //    { 'postman-token': 'c5300459-c48a-4a3e-04c0-2cffbd2bbb05',
                  //      'cache-control': 'no-cache',
                  //      authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJlbWFpbCI6InBhbmthanRlamF3YXRAZ21haWwuY29tIiwic3ViIjoiZDlhY2VkMjMtN2I4OS00YWJjLWJkNzEtNTUyM2FiODNhOThhIiwiaWF0IjoxNjEyNzg3MTgzLCJleHAiOjE2MTMzOTE5ODN9.RMvzoOwyfRcV5hQ60ImZ_H55-aY0Wc_RVPHgYbO1jJ9rdBoSrn69R7LUbWtjOymklcizjeKCJMye4rG3p_gWrQ',
                  //      'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
                  //   formData: { stockSymbol: symbol } };

                  // request(options1, function (error, response, body1) {
                  //   if (error) throw new Error(error);

                  //   console.log(body1);
                  // });


                // }
      // var options1 = { method: 'POST',
      //   url: 'https://apis.tradetipsapp.com/api/sectorNewsSentiment/getSentimentandSMAByStockSymbolResultSet',
      //   headers: 
      //    { 'postman-token': 'c5300459-c48a-4a3e-04c0-2cffbd2bbb05',
      //      'cache-control': 'no-cache',
      //      authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJlbWFpbCI6InBhbmthanRlamF3YXRAZ21haWwuY29tIiwic3ViIjoiZDlhY2VkMjMtN2I4OS00YWJjLWJkNzEtNTUyM2FiODNhOThhIiwiaWF0IjoxNjEyNzg3MTgzLCJleHAiOjE2MTMzOTE5ODN9.RMvzoOwyfRcV5hQ60ImZ_H55-aY0Wc_RVPHgYbO1jJ9rdBoSrn69R7LUbWtjOymklcizjeKCJMye4rG3p_gWrQ',
      //      'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
      //   formData: { stockSymbol: 'FB' } };

      // request(options1, function (error, response, body1) {
      //   if (error) throw new Error(error);

      //   console.log(body1);

        res.render('dashboard.ejs');

      // });

    // });

  });

  app.get('/chatCodee', function(req, res) {

    res.render('chatCodee.ejs');
  });

   app.get('/mentorDetails', function(req, res) {

    var mentorids = req.query.id;

    res.render('mentorDetails.ejs' , {tipsIds : mentorids});
  });

     app.get('/aiDetails', function(req, res) {

    var mentorids = req.query.id;

    res.render('aiDetails.ejs' , {tipsIds : mentorids});
  });


  app.get('/Newsletter', function(req, res) {

    res.render('newsletterServices.ejs');
  });

  app.get('/LiveChat', function(req, res) {

    res.render('chatRoomServices.ejs');
  });

  app.get('/1-1Chat', function(req, res) {

    res.render('chatVideoServices.ejs');
  });
  

  app.get('/Webinar', function(req, res) {

    res.render('webinarServices.ejs');
  });

   app.get('/MentorPhoneGroup', function(req, res) {

    res.render('mentorPhoneServices.ejs');
  });

    app.get('/Books', function(req, res) {

    res.render('bookServices.ejs');
  });

    app.get('/Class', function(req, res) {

    res.render('classServices.ejs');
  });


  app.get('/VideoSubscription', function(req, res) {

    res.render('videoServices.ejs');
  });

  app.get('/services', function(req, res) {

    res.render('services.ejs');
  });

   app.get('/editService', function(req, res) {

    var serviceIddd = req.query.id;

    var servicePlanIddd = req.query.ids2;

    var servicesubscriptionname = req.query.sname;


    res.render('editService.ejs' , {subscriptionServiceId : serviceIddd , servicesMainId : servicePlanIddd , serviceName : servicesubscriptionname});



  });


    app.get('/forgetPassword', function(req, res) {

    
    res.render('forgetPassword.ejs');



  });


  app.get('/firebase', function(req, res) {

    const admin = require('firebase-admin');
  
    const db = admin.firestore();



    // db.collection("/openGroups/demoOpenGroup1/messages").get().then((querySnapshot) => {

    //     var sub_array = [];
     
    // querySnapshot.forEach((doc) => {
    //     // console.log(doc);
    //      // console.log(`${doc.id} => ${doc.data()}`);
    //      sub_array.push(doc.data());
          
    // });
        // console.log(sub_array);

     res.render('firebase.ejs');

       
    // });




  });

  app.post('/firebasejs', function(req, res) {

     // console.log(req.body);

    const admin = require('firebase-admin');
  
    // const serviceAccount = require('./../serviceAccountKey.json');
    // //initialize admin SDK using serciceAcountKey
    // admin.initializeApp({
    //   credential: admin.credential.cert(serviceAccount)
    // });
    const db = admin.firestore();

    // console.log(req.body)

    db.collection("/openGroups/demoOpenGroup1/messages").add({
    createdDate : req.body.createdDate,
    message: req.body.message,
    messageId: req.body.userId + "_"+ req.body.createdDate,
    messageType : "text",
    profileImageUrl : "https://apis.tradetipsapp.com/api/appUser/getImageByAppUserId?appUserId=" + req.body.userId,
    userId : req.body.userId,
    userName : req.body.userName

    })
    .then(function(docRef) {
        // console.log(docRef);
        // console.log("Document written with ID: ", docRef.id);
        return res.redirect('firebase.ejs');

    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

  });

    app.get('/home', function(req, res) {

      // var fdata = [];

      // var request = require("request");

      // // var sData = window.localStorage.getItem('allTokenData');
      
      // // var storageData= JSON.parse(sData);
 
      // // var tokens = storageData.tokendata;

      // // console.log(tokens);

      // var dattt = {  offset: 0, limit: 1000000};

  
      
      // var options = { method: 'POST',
      //   url: 'https://apis.tradetipsapp.com/api/tip/getAllTipFeaturePaginationForUser',
      //   headers: {
      //     Authorization: 'Bearer '+ 'eyJhbGciOiJIUzUxMiJ9.eyJlbWFpbCI6Im1haGVzaHdhcmkwNmdvdmluZEBnbWFpbC5jb20iLCJzdWIiOiJmMTQ4NmIzMy03YTM0LTQ1MDYtYWFhMS1kM2Y0YmYzOGQzNjYiLCJpYXQiOjE2MDk3NTAxOTcsImV4cCI6MTYxMDM1NDk5N30.sjeJgyz4Sq9P1jEDWr3IsovutZlPrYKvwHispVN2qtyh0g6SNL2-LdkD6XzMWLrUuYHnuFDEss5N0dxRGanNOw',
      //      },
      //   formData: dattt };

      // request(options, function (error, response, body) {
      //   if (error) throw new Error(error);

      //   console.log(body);
      //    // fdata.push(body);

      //     res.render('home.ejs',{data : body});
      // });
       
      //  // console.log(fdata);

    res.render('home.ejs');

  });

    app.get('/room', function(req, res) {

    res.render('room.ejs');
  });

/*     app.get('/tip', function(req, res) {

    res.render('tip.ejs');
  });
*/


};