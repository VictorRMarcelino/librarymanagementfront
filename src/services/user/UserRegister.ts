import Ajax from '@/services/ajax'

export var UserRegister = {
  submitRegister: function (username: string, password: string) {
    Ajax.loadAjax({
      url: 'user/store',
      method: 'post',
      data: {
        name: username,
        password: password,
      },
    })
  },
}
