$(function(){
    const ref = firebase.database().ref('chat');
　　console.log('読み込み');

 ref.on('child_added', function(childSnapshot){
     var chatmsg=$('<div></div>').text(childSnapshot.val().content);
     $('#send').append(chatmsg);
     console.log('通過');
 });

 $('#post').click(function(){
  var text = $('#chat').val();
     // $.ajax({
     //     url: 'http://localhost:4000/comments', // 通信先のURL
     //     type: 'POST',		// 使用するHTTPメソッド (GET/ POST)
     //     data: { comment: { message: text } }, // 送信するデータ
     //     dataType: 'json', // 応答のデータの種類
     //     // (xml/html/script/json/jsonp/text)
     //     timeout: 1000,
     // })

     ref.push({content:text});

  console.log(text);
  $('#chat').val('');
 });
});


