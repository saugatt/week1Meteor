console.log("I am a client");
var img_data =[ {
  img_src: "saugat.jpg",
  img_alt: "Saugats Head Shot"
},
{
  img_src: "saugat.jpg",
  img_alt: "Saugats Head Shot"
},
{
  img_src: "saugat.jpg",
  img_alt: "Saugats Head Shot"
}
];

Template.images.helpers({images:img_data});

Template.images.events({
  'click .js-image':function(event) {
    $(event.target).css("width", "50px");
  }
});
/*

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
*/
