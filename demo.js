let target = null,
  container = null

// 寻找拖拽元素的容器类
function findParentContainer(node) {
  if(!node || node === document) {
    return null
  }

  if(node.classList.contains('container')) {
    return node
  }

  return findParentContainer(node.parentNode)
}

// 元素开始被拖拽时, 标记元素原生的容器类
function onDragStart(event) {
  target = event.target
  container = findParentContainer(target)
}

// 元素进入目的容器时, 如果不是原来的容器, 则可以放置
// 此时更改样式, 以更好向用户展示
function onDragEnter(event) {
  event.preventDefault()
  if(event.target !== container) {
    event.target.classList.add('active')
  }
}

// 元素在目的容器内时触发
function onDragOver(event) {
  event.preventDefault()
}

// 元素离开目的容器, 需要移除相关样式
function onDragLeave(event) {
  event.preventDefault()
  event.target.classList.remove('active')
}

// 元素被放置在目的容器, 添加DOM节点, 移除相关样式
function onDrop(event) {
  event.preventDefault()
  event.target.appendChild(target)
  event.target.classList.remove('active')
  target = null
  container = null
}