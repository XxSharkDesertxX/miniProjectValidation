export default ({ app }, inject) => {
    inject('hello', msg => {
        return (`Hello ${msg} :)`);
    })
  };