import './todo.scss'
export default {
  render(createElement) {
    return createElement('div', this.todoList.map(element => {
      /* return (
        <div class="item-box">
          if(element.type === 'complete') {
            <svg-icon iconClass='finish' className="gou-icon"></svg-icon>
          } else {
            <svg-icon iconClass='unfinish' className="gou-icon"></svg-icon>
          }
          {element.content}
        </div>
      ) */
      return createElement('div', {
        'class': 'item-box',
        on: {
          click() {
            element.type = element.type === 'complete' ? 'uncomplete' : 'complete'
          }
        }
      }, [
        createElement('svg-icon', {
          props: {
            iconClass: element.type === 'complete' ? 'finish' : 'unfinish',
            className: 'gou-icon'
          }
        }),
        element.content
      ])
      /* return createElement('div', {
        'class': 'item-box',
        on: {
          click() {
            element.type = element.type === 'complete' ? 'uncomplete' : 'complete'
          }
        }
      }, (function() {
        if(element.type === 'complete') {
          return [<svg-icon iconClass='finish' className="gou-icon"></svg-icon>, element.content]
        } else {
          return [<svg-icon iconClass='unfinish' className="gou-icon"></svg-icon>, element.content]
        }
      })()) */
    }))
  },
  props: {
    todoList: Array
  }
}