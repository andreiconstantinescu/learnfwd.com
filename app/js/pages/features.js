'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');

module.exports = View.extend({
  pageTitle: 'Learn Forward | About Us',
  template: templates.pages.features,
  render: function () {
    this.$el.html(this.template());
    return this;
  },
  customDocumentClasses: function () {
    return ['features-page'];
  },
});
