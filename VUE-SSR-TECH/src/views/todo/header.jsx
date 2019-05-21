export default {
  render(creaaElement) {
    return creaaElement('div', {
      style: {
        textAlign: 'center',
        fontSize: '50px',
        marginTop: '85px',
        marginBottom: '15px'
      },
      domProps: {
        innerHTML: 'JUST TODO'
      }
    })
  }
}