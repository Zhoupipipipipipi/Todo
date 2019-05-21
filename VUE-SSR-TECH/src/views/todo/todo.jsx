import './todo.scss'
import ItemList from './item.jsx'
export default {
  data() {
    return {
      todoList: []
    }
  },
  render(createElement) {
    const that = this
    let id = 0
    return createElement('div', {
      'class': 'todo'
    },[
      createElement('input', {
        domProps: {
          value: that.name,
          placeholder: '接下来要去做什么'
        },
        on: {
          'keyup': function(event) {
            if(event.keyCode === 13) {
              that.todoList.unshift({
                id: id++, type: 'uncomplete', content: event.target.value
              })
            }
          }
        }
      }),
      createElement('itemList', {
        props: {
          todoList: that.todoList
        }
      })
    ])
  },
  components: {
    ItemList
  }
}