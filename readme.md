npm install create-react-app -g
create-react-app react-app

TODOListOne:
Link Ref: https://viblo.asia/p/hoc-reactjs-thong-qua-vi-du-phan-1-yMnKMnGaZ7P

Redux:
Link ref: https://viblo.asia/p/tim-hieu-ve-redux-trong-reactjs-GrLZDe7Olk0

Define:
DOM: Js thao tác với HTML thông qua cơ chế Document Object Model
Components:
Function Component: chủ yếu thay đổi UI
Class base component: nhận thức trạng thái(người dùng click,..) ==> trả về JSX
constructor
render(\*)
componentDidMount
JSX:
Component => JSX => HTML
State:
Là đối tượng js ghi lại và phản ứng với user event
1 class-base-component có 1 state riêng và bất cứ khi nào state thay đổi => component & phần tử con sẽ đc hiển thị lại
initial state chỉ có thể đặt trong constructor
Khó nhất:
quyết định component nào có state??
đánh giá component nào phụ thuộc vào giá trị thay đổi theo thời gian => component có state nên là parent của các component này
=> vì component con sẽ có quyền truy cập vào
Props:
Là 1 obj được cung cấp cho component bởi parent của nó
Git hub: https://github.com/ensallee/PhotoFinder/blob/master/src/components/App.js
