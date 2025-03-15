if (!$('#monkeywashere').length) {
  $("body").append(`
    <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Atma:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <div id="monkeywashere" style="position:fixed;width:100vw;top:0;left:0;height:100vh;margin:0;z-index:2000;padding:0;font-family: 'Atma', sans-serif;display:flex;flex-direction;align-items:center;justify-content:center;background-color:rgba(123, 123, 123, 0.33)">
  <div style="width:80vw;height:60vh;margin:0;padding:0;background-color:#ffe8be;display:flex;flex-direction:row;max-width:700px;">
  <img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcP9ZDCANwGXipdf4ia3ZKzr57Xi9vdaxWZ0V8RrYAJ8bpDbID9Qm6P0Nl5unZRpgNV3xebxhulWWjMaOeWkP3mOg8BKqUQtkkBVcxlWB6Fb50gkNCxRHrG6ZAhVjgDSYGhQHxTzg?key=m2WPvhov4Kv5X2JoqWB2LrMO" style="width:400px;object-fit:cover"/>
    <div style="background-color:white;padding:9px;width:auto;height:auto;border-radius:20px;border-bottom-left-radius:0px;margin-left:-150px;width:300px;height:320px;margin-top:100px;border:solid 1px black;">
    <p style="font-size:35px;line-height:38px;margin-bottom:3px;margin-top:5px;">PANIC MONSTER AWAKENS</p>
    <p style="font-size:25px;line-height:28px;margin-bottom:3px;margin-top:2px">PROCRASTINATION TIME HAS EXPIRED</p>
    <p style="font-size:25px;line-height:28px;margin-bottom:15px;margin-top:2px">That assignemnt you "totally had time for"? DUE IN 3 HOURS</p>
    <a style="margin-top:20px;background-color: #e4c386;outline:none;padding:8px 13px;border-radius:4px;border:none;font-size:20px;color:black; " href="https://classroom.google.com">Time to Work</a>
    <div>
  </div>
  </div>
  `)
}
