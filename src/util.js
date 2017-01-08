function waitMillisecondsAsync (ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms)
  })
}

export {
  waitMillisecondsAsync
}
