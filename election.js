document.addEventListener("DOMContentLoaded", function() {

  // Imagination!
  var candidateList = document.querySelector('.candidate-list')

  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    dataType: 'json'
  }).done(function(responseData){
    console.log(responseData);
    responseData.candidates.forEach(function(candidate){
      console.log(candidate.name);
      console.log(candidate.votes);
      var listEle = document.createElement('li');
      listEle.innerHTML = ('Name: ' + candidate.name + ' Votes: ' + candidate.votes);
      candidateList.append(listEle);
    })
  })

});
