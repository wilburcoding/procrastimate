function toggleFullscreen(element) {
  if (!document.fullscreenElement) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) { /* Safari */
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { /* IE11 */
      element.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  }
}
if (!$('#monkeylock').length) {
  $("body").append(`
    <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Atma:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <div id="monkeylock" style="border-radius:0px 10px 0px 0px;position:fixed;width:260px;bottom:0;left:0;height:150px;margin:0;z-index:2400;padding:0;font-family: 'Atma', sans-serif;display:flex;flex-direction:row;background-color:#ffe8be;">
    <img src="https://i.ibb.co/60xvS9j1/p2-removebg-preview.png" style="width:200px;object-fit:cover"/>
        <div style="background-color:white;padding:9px;width:auto;height:auto;border-radius:20px;border-bottom-left-radius:0px;margin-left:-120px;width:160px;height:100px;margin-top:20px;border:solid 1px black;">
    <p style="font-size:20px;line-height:20px;margin-bottom:5px;color:black;">Time to lock in?</p>
    <button id="monkeyfull" style="background-color: #e4c386;outline:none;padding:4px 7px;border-radius:4px;border:none;font-family: 'Atma', sans-serif;font-size:15px;color:black;">Lock In</button>
    <div>
  </div>
  
  `)
}

document.getElementById('monkeyfull').addEventListener('click', () => {
  toggleFullscreen(document.body);
  $('#monkeylock').css('display',"none")
});
