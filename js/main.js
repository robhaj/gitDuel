$(document).ready(function(){
  audioEvents();
});

$(function(){
  $('#ghsubmitbtn').on('click', function(e){
    e.preventDefault();
    loadingGif('#ghapidata');
    loadingGif('#ghapidata2');
    var player1 = {};
    var player2 = {};
    var userUrl = 'https://api.github.com/users/';
    player1.username = $('#ghusername1').val();
    player2.username = $('#ghusername2').val();
    player1.requri = userUrl+username1;
    player2.requri = userUrl+username2;
    player1.repouri = requri1+'/repos';
    player2.repouri = requri2+'/repos';

    //make first ajax req
    requestJSON(player1.requri, function(json) {

      //validation for if invalid/no username
      if(json.message === "Not Found" || player1.username === '') {
        $('#ghapidata').html("<h2>One or more of the users were not found!</h2>");

        // else we have a user and we display their info
      } else {
        var user1 = {
          fullname: json.name,
          username: json.login,
          aviurl: json.avatar_url,
          profileurl: json.html_url,
          location: json.location,
          followersnum: json.followers,
          followingnum: json.following,
          reposnum: json.public_repos,
          start: json.created_at,
          splitstamp: start.split('T')[0]
        }

        if(user1.location === '' || user1.location === 'undefined' || user1.location === null) {
          location = "Unknown";
        }

        if(user1.fullname === undefined || user1.fullname === null) {
          user1.fullname = user1.username;
        }

        var outhtml = `<table class="table"><thead><tr><th><h2>${fullname}
        <span class="smallname">(@<a href="${profileurl}" target="_blank">
        ${username1}</a>)</span></h2></th></tr></thead>
        <tbody><tr><td><a href="${profileurl}" target="_blank">
        <img src="${aviurl}" width="80" height="80" alt="${username1}"></a>
        <p>Location:${location}</p></td></tr>
        <tr><td>Followers:</td><td>${followersnum}</td><td id="followers"></td></tr>
        <tr><td>Following:</td><td>${followingnum}</td><td id="following"></td></tr>
        <tr><td>Repos:</td><td>${reposnum}</td><td id="repos"></td></tr>
        <tr><td>Account created:</td><td>${splitStamp}</td><td id="start"></td></tr>`

        // var fullname = json.name;
        // var username1 = json.login;
        // var aviurl = json.avatar_url;
        // var profileurl = json.html_url;
        // var location = json.location;
        // var followersnum = json.followers;
        // var followingnum = json.following;
        // var reposnum = json.public_repos;
        // var start = json.created_at;

        //format timestamp
        // var splitStamp = start.split('T')[0];
        // var timeCompare = setCharAt(splitStamp, 4, '');
        //     timeCompare = setCharAt(timeCompare, 6, '');

        //name/location validation



        //structure output

        //outputs content1
        function outputPageContent() {

          if(user1.repos.length === 0) { outhtml += '<p>No repos!</p>'; }
          else {
            var rand = Math.floor(Math.random() * (user1.repositories.length));
            user1.randRepo = user1.repositories[rand];
            var url = user1.randRepo.html_url;
            var rname = randRepo.name;
            var descrip = randRepo.description;
            var language = randRepo.language;
            var stargazers = randRepo.stargazers_count;

            //add random repo header to table
            outhtml += `<tr><td><strong>Random Repo:</strong></td>
                      <td id="randRepo"><a href=${url}>${rname}</a></td></tr>
                      <tr><td>Stargazers:</td>
                      <td id="starGazers1">${stargazers}</td></tr>`

            //no repo description conditional
            if (descrip === '') {
              descrip = "No description";
            }

            //add randRepo description to table
            outhtml += `<tr><td>Description:</td><td id="description">${descrip}</td></tr>
            <tr><td>Language:</td><td id="language">${language}</td></tr>`

          //append player 1
          $('#ghapidata').html(outhtml);
        }
}
        var repositories;

        //repolist1 json
        $.getJSON(repouri1, function(json){
          repositories = json;
          outputPageContent();
        });

        //make ajax request 2
        requestJSON(requri2, function(json) {

          //validation for if invalid/no username
          if(json.message == "Not Found" || username2 === '') {
            $('#ghapidata').html("<h2>One or more of the users were not found!</h2>");

          } else {

            // else we have a user and we display their info
            var fullname   = json.name;
            var username2   = json.login;
            var aviurl     = json.avatar_url;
            var profileurl = json.html_url;
            var location2   = json.location;
            var followersnum2 = json.followers;
            var followingnum2 = json.following;
            var reposnum2     = json.public_repos;
            var start2 = json.created_at;

            //format timestamp
            var splitStamp2 = start2.split('T')[0];
            var timeCompare2 = setCharAt(splitStamp2,4,"");
                timeCompare2 = setCharAt(timeCompare2, 6, "");

            //location and username validation
            if(location2 === '' || location2 === 'undefined' || location2 === null) {
              location2 = "Unknown";
            }
            if(fullname === undefined || fullname === null) {
              fullname = username2;
            }

              //styling player 2 output
              var outhtml2 = `<table class="table"><thead><tr><th><h2>${fullname}
              <span class="smallname">(@<a href="${profileurl}" target="_blank">
              ${username2}</a>)</span></h2></th></tr></thead>
              <tbody><tr><td><a href="${profileurl}" target="_blank">
              <img src="${aviurl}" width="80" height="80" alt="${username2}"></a>
              <p>Location:${location2}</p></td></tr>
              <tr><td>Followers:</td><td>${followersnum2}</td><td id="followers2"></td></tr>
              <tr><td>Following:</td><td>${followingnum2}</td><td id="following2"></td></tr>
              <tr><td>Repos:</td><td>${reposnum2}</td><td id="repos2"></td></tr>
              <tr><td>Account created:</td><td>${splitStamp2}</td><td id="start2"></td></tr>`

              //outputs content 2
              function outputPageContent2() {

                if (repositories2.length === 0) {
                  outhtml2+='<p>No repos!</p></div>';
                } else {

                  var rand2 = Math.floor(Math.random() * (repositories2.length));
                  var randRepo2 = repositories2[rand2];
                  var url2 = randRepo2.html_url;
                  var rname2 = randRepo2.name;
                  var descrip2 = randRepo2.description;
                  var language2 = randRepo2.language;
                  var stargazers2 = randRepo2.stargazers_count;

                  if (descrip2 === '') {descrip2 = "No description";}

                  outhtml2 += `<tr><td><strong>Random Repo:</strong></td>
                              <td id="randRepo2"><a href=${url2}>${rname2}</a></td></tr>
                              <tr><td>Stargazers:</td><td>${stargazers2}</td>
                              <td id="starGazers2"></td></tr><tr><td>Description:</td>
                              <td id="descrip2">${descrip2}</td><tr><td>Language:</td>
                              <td id="language2">${language2}</td></tr>`

                //append player 2
                $('#ghapidata2').html(outhtml2);
              }

                //set starting score
                var player1score = 0;
                var player2score = 0;
                //compare and append bullet img

                setTimeout(function(){
                  compareBullets(followersnum, followersnum2, '#followers', '#followers2');
                  player1score = adjustScore(followersnum, followersnum2);
                  $(".shot")[0].play();
                }, 1500);

                setTimeout(function(){
                  compareBullets(followingnum, followingnum2, '#following', '#following2');
                  adjustScore(followingnum, followingnum2);
                  console.log(player1score);
                  $(".shot")[0].play();
                }, 3000);

                setTimeout(function(){
                  compareBullets(reposnum, reposnum2, '#repos', '#repos2');
                  adjustScore(reposnum, reposnum2);
                  console.log(player1score);
                  $(".shot")[0].play();
                }, 4500);

                setTimeout(function(){
                  compareBullets(timeCompare2, timeCompare, '#start', '#start2');
                  // adjustScore(timeCompare2, timeCompare);
                  console.log(player1score);
                  $(".shot")[0].play();
                }, 6000);

          } //end outputPageContent2

              $.getJSON(repouri2, function(json){
                repositories2 = json;
                outputPageContent2();
              });

            } // end else statement
          }); // end requestJSON Ajax call
        }//else end
      });//end ajax call
    });//end event handler
  });//end main function
