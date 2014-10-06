'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');

module.exports = View.extend({
  pageTitle: 'Read Forward | About Us',
  template: templates.pages.pricing,
  render: function () {
    this.$el.html(this.template());
    return this;
  }, 
  customDocumentClasses: function () {
    return ['pricing-page'];
  },

});
