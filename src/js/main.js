import Test from './modules/test'
import '../style/scss/main.scss'
window.console.log('Hello world');

let tester = new Test('Peter');

window.console.log(tester.name);