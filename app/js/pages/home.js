'use strict';

/* global app */
var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
// var QuoteBoxView = require('../views/quote-box');

module.exports = View.extend({
  pageTitle: 'Learn Forward | Home',
  template: templates.pages.home,
  render: function () {
    this.$el.html(this.template());
    this.$el.removeClass('page').addClass('home');
    return this;
  },

  customDocumentClasses: function () {
    return ['home-page'];
  },
});
