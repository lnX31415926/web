$(document).ready(function () {
  // $(document).ready() 方法允许我们在文档完全加载完后执行函数。
  $("#tuijian-modle-click").click(function () {
    if (!($("#3").attr("class") == "item")) {
      // alert(!($("#1").attr("class")=="item"));  1
      $("#modle").text("影视模块");
    }
    if (!($("#1").attr("class") == "item")) {
      // ($("#2").attr("class")=="item")&($("#3").attr("class")=="item")    2  后加载
      $("#modle").text("学习模块");
    }
    if (!($("#2").attr("class") == "item")) {
      // ($("#1").attr("class")=="item")&($("#3").attr("class")=="item")    3
      $("#modle").text("游戏模块");
    }
  });

  // $("#modle-click").click(function(){
  // 	// 100   010     001
  // 			// active--1
  // 			alert(!($("#1").attr("class")=="item"));

  // 			// active--2
  // 			alert(!($("#2").attr("class")=="item"));

  // 			// active--3
  // 			alert(!($("#3").attr("class")=="item"));

  // });
});
