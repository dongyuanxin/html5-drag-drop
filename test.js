const div1 = document.querySelector('#div1')
const div2 = document.querySelector('#div2')

let target = null

div1.addEventListener('dragstart', (e) => {
  console.log('拖拽开始')
  target = e.target
})

div1.addEventListener('drag', (e) => {
  // console.log('拖拽进行')
})

div1.addEventListener('dragend', (e) => {
  console.log('拖拽结束')
})

// 

// div2.addEventListener('dragenter', (e) => {
//   e.preventDefault()
//   console.log('元素进入目的地时触发')
// })

div2.addEventListener('dragover', (e) => {
  e.preventDefault()
  // console.log('元素在目的地范围内移动时触发')
})

// div2.addEventListener('dragleave', (e) => {
//   e.preventDefault()
//   console.log('元素没有被放开就离开目的地元素触发')
// })

div2.addEventListener('drop', (e) => {
  e.preventDefault()
  e.target.appendChild(target)
  target = null
  console.log('drop')
})