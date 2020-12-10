- cho phep thuc hien side effect trong function component
- side effect: fetching data, thiết lập các subscription, và việc thay đổi DOM
- useEffect Hook như sự kết hợp của componentDidMount, componentDidUpdate, và componentWillUnmount.

*** 2 loai use effect: cleaup and dont cleanup
*** Chay khi render lan dau tien

- use effect chay sau moi lan render component

- cleanup: (with subscription)

````useEffect(() => {
function handleStatusChange(status) {
setIsOnline(status.isOnline);
}
ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
// Chỉ định clean up sau khi gọi effect:
return function cleanup() {
ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
};
});```

- React thực hiện cleanup khi component unmount. (moi lan re-render)

* Hook cho phép tách code dựa trên cái nó đang làm chứ không đi theo phương thức lifecycle.
  React sẽ apply từng effect được sử dụng trong component,
  theo thứ tự đã khai báo.

* Giải thích: Tại sao Effect chạy trên mỗi update??

* Tối ưu Performance bằng cách bỏ qua Effect
  useEffect(() => {
  document.title = `You clicked ${count} times`;
  }, [count]); // Chỉ re-run effect nếu giá trị count thay đổi
````
Nếu có nhiều giá trị bên trong array, React sẽ re-run effect nếu một trong các giá trị đó khác với lần trước.

Nếu muốn chạy 1 effect và clean nó 1 lần duy nhất (lúc mount và unmount), bạn có thể truyền vào array rỗng ([]). Đồng nghĩa với việc bạn báo với React, effect này không phụ thuộc bất kỳ giá trị nào của prop hoặc state, do đó không bao giờ cần re-run. 