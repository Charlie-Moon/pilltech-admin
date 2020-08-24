export default ({ app }, inject) => {
    inject('getPaginateIndex', (e) => console.log('paginate ', e))
  }