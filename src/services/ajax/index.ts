import $ from 'jquery'

var Ajax = {
  loadAjax(settings: object) {
    let options = $.extend(
      {
        method: 'get',
        data: {},
        url: '',
      },
      settings,
    )

    $.ajax({
      url: 'http://localhost:8080/' + options.url,
      method: options.method,
      data: JSON.stringify(options.data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
}

export default Ajax
