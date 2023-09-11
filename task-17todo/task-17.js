// Необходимо реализовать простое поле ввода адреса с функцией геокодинга:
// пользователь вводит данные в поле с помощью одного из геоинформационных
// сервисов (Яндекс.Карты, ДаДата, GraphHopper), подбирается адрес. Найденные
// данные должны отображаться в выпадающем списке, из которого можно
// выбрать подходящее значение.
// Реализовать дебоунсинг и защиту от троттлинга с помощью замыканий.

const searchForm = document.getElementById("search")
const searchInput = searchForm.querySelector('.geo');
const searchResults = document.querySelector('.search-results');

const cities = []

/**
 * function, проверяющая содержится ли пользовательский запрос в базе данных
 * @param {string} query, вводимые символы
 * @returns {string}
 */
// В функции contains мы будем проверять,
// содержится ли пользовательский запрос
// в каком-либо из названий:
function contains(query) {
    return cities.filter((title) =>
        title.toLowerCase().includes(query.toLowerCase())
    )
}

/**
 * object
 * method search, ответ сервера с промисом (с задержкой)
 */
// Мок-объект сервера будет содержать метод search:
const server = {}
// let url = "https://suggest-maps.yandex.ru/v1/suggest?apikey=3694998d-3fed-4adc-82a7-1eee2ce42b0a&text="

fetch(url, {
    method: "GET",
    headers: {
        'Content-Type': 'application/json'
    }
}).then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data)
}).catch(function(error) {
    console.error('Something went wrong');
    console.log(error)
})
  
/**
 * обработчик события input, получает подходящий список от сервера и согласно сопадающим вариантам вставляет в html строчки с возможными адресами
 */


 // "Получаем" список названий городов от сервера:
function handleInput(e) {
    console.log(e.target)
    const { list } = response

    // Проходим по каждому из элементов списка,
    // и составляем строчку с несколькими <li> элементами...
    const html = list.reduce((markup, item) => {
    return `${markup}<option value=${item}>${item}</option>`
    }, ``)

    // ...которую потом используем как содержимое списка:
    searchResults.innerHTML = html

}

const debounceHandle = debounce(handleInput, 250)

searchInput.addEventListener('input', debounceHandle)


/**
 * функция, откладывающая запрос на сервер
 * @param {*} callee, функция, которую нужно отложить
 * @param {*} timeoutMs, интервал времени, спустя которое нужно вызвать функцию calee
 * @returns {function}
 */
// Аргументами функции будут:
// - функция, которую надо «откладывать»;
// - интервал времени, спустя которое функцию следует вызывать.
function debounce(callee, timeoutMs) {
    // Как результат возвращаем другую функцию.
    // Это нужно, чтобы мы могли не менять другие части кода,
    // чуть позже мы увидим, как это помогает.
    return function perform(...args) {
      // В переменной previousCall мы будем хранить
      // временную метку предыдущего вызова...
      let previousCall = this.lastCall
  
      // ...а в переменной текущего вызова —
      // временную метку нынешнего момента.
      this.lastCall = Date.now()
  
      // Нам это будет нужно, чтобы потом сравнить,
      // когда была функция вызвана в этот раз и в предыдущий.
      // Если разница между вызовами меньше, чем указанный интервал,
      // то мы очищаем таймаут...
      if (previousCall && this.lastCall - previousCall <= timeoutMs) {
        clearTimeout(this.lastCallTimer)
      }
  
      // ...который отвечает за непосредственно вызов функции-аргумента.
      // Обратите внимание, что мы передаём все аргументы ...args,
      // который получаем в функции perform —
      // это тоже нужно, чтобы нам не приходилось менять другие части кода.
      this.lastCallTimer = setTimeout(() => callee(...args), timeoutMs)
  
      // Если таймаут был очищен, вызова не произойдёт
      // если он очищен не был, то callee вызовется.
      // Таким образом мы как бы «отодвигаем» вызов callee
      // до тех пор, пока «снаружи всё не подуспокоится».
    }
}
