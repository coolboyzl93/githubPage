const express = require('express')
const bodyParser = require('body-parser')
// const db = require('./db.js')
const app = express()

// app.use(express.static('docs'))
app.use(express.static('docs'))
// app.use(express.static('server-data'));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// 获取所有的数据
// app.get('/getNotes', function(req,res){
//   db.Note.find().exec(function(err, models){
//     if(err){
//       code(res, 'error', '服务器内部错误！')
//       return
//     }
//     code(res, 'success', '请求成功！', models)
//   })
// })

// //保存数据
// app.post('/saveNote',function(req,res){

//   var data = new db.Note(req.body)
//   data.save(function(err, model, count){
//     if(err){
//       code(res, 'error', '服务器内部错误！')
//       return
//     }
//     code(res, 'success', '保存成功！')
//   })
// })
// app.post('/update',function(req,res){
//   db.Note.update(req.body.id,req.body.updateData,false,function(err,model){
//     if(err){
//       code(res,'error','server insane!')
//       return
//     }
//     code(res,'successes','更新成功',model);
//   })
// })

// //获取指定的ID的数据
// app.get('/getNoteById', function(req,res){
//   console.log(req.query)
//   db.Note.find(req.query).exec(function(err,models){
//     if(err){
//       code(res, 'error', '服务器内部错误！')
//       return
//     }
//     code(res, 'success', '请求成功！', models)
//   })
// })

// //删除指定ID的数据
// app.delete('/delete',function(req,res){
//   db.Note.remove(req.body).then(function(){
//     code(res, 'success', '删除成功！')
//   }).catch(function(err){
//     code(res, 'error', '服务器内部错误！')
//   })
// })

app.listen(9393, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('server is running...')
})

// function code (res, code, msg, data) {
//   res.json({code: code, msg: msg, data: data})
// }
