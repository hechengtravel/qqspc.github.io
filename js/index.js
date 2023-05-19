const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
	event.preventDefault(); // 阻止表单默认提交行为

	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	if (username === '2279997829' && password === '4444zzzz') {
		// 登录成功，跳转到成功页面
		window.location.href = 'home.html';
	} else {
		// 登录失败，显示错误信息
		alert('请输入正确的账号密码');
	}
});
