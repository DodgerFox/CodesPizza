'use strict'

window.onload = () => {
  codes.init()
  panel.init()
  add.init()
}

const codes = {
  async init () {
    await this.catcheDOM()
    await this.bindEvents()
  },
  catcheDOM () {
    this.app = document.querySelector('.codes');
  },
  bindEvents () {
    this.app.addEventListener('click', () => this.clickHandler(event))
  },
  async clickHandler (event) {
    const element = event.target;
    element.classList.toggle('used')
    console.log(element);
    // this.copyToBuffer()
  },
  copyToBuffer () {
    const value = element.innerHTML;
    // let range = new Range();
    // let range = document.body.createTextRange();
    var range;
    if (document.selection) {
      range = document.body.createTextRange();
      range.moveToElementText(element);
      range.select().createTextRange();
      console.log('!!');
      
    } else if (window.getSelection) {
      range = document.createRange();
      range.selectNode(element);
      range.toString(element)
      console.log(range.toString(element));
      window.getSelection().addRange(range);
      
    } else return;
    try {  
      // Теперь, когда мы выбрали текст ссылки, выполним команду копирования
      var successful = document.execCommand('copy');  
      var msg = successful ? 'successful' : 'unsuccessful';  
      console.log('Copy command was ' + msg);  
    } catch(err) {  
      console.log('Oops, unable to copy');  
    }  
  }
}

const panel = {
  async init () {
    await this.catcheDOM()
    await this.bindEvents()
  },
  catcheDOM () {
    this.app = document.querySelector('.header');
  },
  bindEvents () {
    this.app.addEventListener('click', () => this.clickHandler(event))
  },
  async clickHandler (event) {
    const element = event.target;
    console.log(element);
    
    switch (element.classList[0]) {
      case ('panel-add') :
        add.switchState()
        break;
      case ('user') :
        this.switchUser(element)
        break;
    }
  },
  switchUser (element) {
    element.classList.toggle('open')
  }
}

const add = {
  async init () {
    await this.catcheDOM()
    await this.bindEvents()
  },
  catcheDOM () {
    this.app = document.querySelector('.add');
  },
  bindEvents () {
    this.app.addEventListener('click', () => this.clickHandler(event))
  },
  async clickHandler (event) {
    const element = event.target;
    switch (element.classList[0]) {
      case ('add-close') :
        this.switchState()
        break;
    }
  },
  switchState () {
    this.app.classList.toggle('open')
  }
}