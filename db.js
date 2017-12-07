const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1/qm")
mongoose.connection.on("connected", function(){
	console.log("数据库连接成功...")
})

var Note = mongoose.model("notes", {
	text: String,
	createTime: String
})

exports.Note = Note
