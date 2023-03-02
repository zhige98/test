import './test.css'
// import './test.less'
import two from './22.png'
import {sum as sum1,a} from './math'
const div = document.createElement('div')
div.textContent = 'asd'
div.classList.add('class')
div.classList.add('classLess')

document.body.appendChild(div)


const img1 = document.createElement('img')
img1.src = two
document.body.appendChild(img1)


const message = 'hello'
const fn = ()=>{
    const name = 'hqz'
    console.log(name+message);
}

const sum =()=>{
   const a =  fn()
   console.log(a+'1321dasdasasdasdd2233');
}

fn()
sum()
console.log(hqz,'asdasd');

console.log(process.env.NODE_ENV);
console.log(sum1(),a);
if(module.hot){
    module.hot.accept('./math.js',()=>{
        console.log('改变了');
    })
}