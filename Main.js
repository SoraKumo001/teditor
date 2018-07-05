(function(){

//エディタカスタマイズ用
function createEditor(node){
	var editor = createTextEditor();	//テキストエディタの作成
	editor.setSize(1200,800);			//サイズの指定
	editor.setPos();					//位置を中央に設定
	editor.setHtml(node.innerHTML);		//nodeの内容をエディタに設定

	//コントロールパネル作成(エディタのカスタマイズ)
	var panel = editor.addPanel();
	panel.getClient().innerHTML = "<button>保存</button>";
	panel.setSortZ(1);					//パネルを一番上に
	//保存ボタンを押したらノードに内容を書き込む
	panel.getClient().querySelector("button").addEventListener("click",function(){
		node.innerHTML = editor.getHtml();
	});
}

//ページが読み込まれたらonLoadを実行
document.addEventListener("DOMContentLoaded",onLoad);
function onLoad(){
	//DIVタグをクリックしたらテキストエディタを作成する
	var nodes = document.querySelectorAll("div.target");
	for(var i in nodes){
		nodes[i].addEventListener("click",function(){
			createEditor(this);
		});
	}
}

})();